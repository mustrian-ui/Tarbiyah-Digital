import { KhutbahItem } from "../types/khutbah";
import initialData from "../data/initialKhutbahs.json";

const STORAGE_KEY_POSTS = "tarbiyah_khutbah_posts";
const STORAGE_KEY_BOOKMARKS = "tarbiyah_khutbah_bookmarks";

function cleanHtmlEntities(raw: string): string {
  if (!raw) return "";
  return raw
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .trim();
}

export function cleanContentHtml(html: string): string {
  if (!html) return "";
  const cutMarkers = [
    '<div class="wp-block-jetpack-related-posts"',
    'Download PDF',
    'Anda ingin mendapat kiriman update materi khutbah',
    'class="sharedaddy'
  ];
  let minIndex = html.length;
  for (const marker of cutMarkers) {
    const idx = html.indexOf(marker);
    if (idx !== -1 && idx < minIndex) {
      const prevBlock = html.lastIndexOf('<div', idx);
      const prevP = html.lastIndexOf('<p', idx);
      const chosen = prevBlock !== -1 && prevBlock > (idx - 300)
        ? prevBlock
        : (prevP !== -1 && prevP > (idx - 150) ? prevP : idx);
      minIndex = Math.min(minIndex, chosen);
    }
  }
  let trimmed = html.slice(0, minIndex);
  // Remove all 'Baca artikel terkait' paragraphs and related recommendation prompts
  trimmed = trimmed.replace(/<p[^>]*>\s*(?:<strong>)?\s*(?:Baca artikel terkait|Baca juga|Artikel terkait):?[\s\S]*?<\/p>/gi, "");
  // Remove all <a> hyperlinks to eliminate external links while preserving text
  trimmed = trimmed.replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi, "$1");
  trimmed = trimmed.replace(/<\/?a\b[^>]*>/gi, "");
  return trimmed;
}

function extractPemateri(html: string): string {
  const m = html.match(/Pemateri:\s*([^<]+)/i) || html.match(/<em>\s*Pemateri:\s*([^<]+)<\/em>/i);
  return m ? m[1].replace(/<\/?[^>]+(>|$)/g, "").trim() : "Ustadz Dakwah.id";
}

function extractExcerpt(html: string): string {
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const idx = text.indexOf("Khutbah Pertama");
  if (idx !== -1) {
    return text.slice(idx, idx + 200).replace("Khutbah Pertama", "").trim() + "...";
  }
  return text.slice(0, 180) + "...";
}

export function getBookmarkedIds(): number[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function toggleKhutbahBookmark(id: number): boolean {
  try {
    const ids = getBookmarkedIds();
    const index = ids.indexOf(id);
    let next: number[];
    let isNowBookmarked = false;
    if (index === -1) {
      next = [...ids, id];
      isNowBookmarked = true;
    } else {
      next = ids.filter((item) => item !== id);
      isNowBookmarked = false;
    }
    localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(next));
    window.dispatchEvent(new CustomEvent("tarbiyah_khutbah_bookmark_changed", { detail: { id, isBookmarked: isNowBookmarked } }));
    return isNowBookmarked;
  } catch {
    return false;
  }
}

export function isKhutbahBookmarked(id: number): boolean {
  const ids = getBookmarkedIds();
  return ids.includes(id);
}

// Memory & LocalStorage Cache
let cachedKhutbahs: KhutbahItem[] = [...(initialData as KhutbahItem[])];

// Load any extra cached items from localStorage
try {
  const stored = localStorage.getItem(STORAGE_KEY_POSTS);
  if (stored) {
    const parsed: KhutbahItem[] = JSON.parse(stored);
    const existingIds = new Set(cachedKhutbahs.map(k => k.id));
    for (const item of parsed) {
      if (!existingIds.has(item.id)) {
        cachedKhutbahs.push(item);
      }
    }
  }
} catch {
  // ignore
}

export async function fetchKhutbahPosts(page: number = 1, search: string = ""): Promise<{ items: KhutbahItem[]; totalPages: number; totalCount: number }> {
  // If user is offline or we don't have internet, fallback to local data
  if (!navigator.onLine && page === 1 && !search) {
    return {
      items: cachedKhutbahs.slice(0, 20),
      totalPages: 1,
      totalCount: cachedKhutbahs.length
    };
  }

  try {
    const url = new URL("https://www.dakwah.id/wp-json/wp/v2/posts");
    url.searchParams.set("tags", "120"); // tag: materi-khutbah-jumat
    url.searchParams.set("per_page", "12");
    url.searchParams.set("page", String(page));
    url.searchParams.set("_embed", "true");
    if (search.trim()) {
      url.searchParams.set("search", search.trim());
    }

    const res = await fetch(url.toString(), {
      headers: { Accept: "application/json" }
    });

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const totalCount = Number(res.headers.get("X-WP-Total")) || cachedKhutbahs.length;
    const totalPages = Number(res.headers.get("X-WP-TotalPages")) || 1;
    const rawData = await res.json();

    const items: KhutbahItem[] = rawData.map((p: any) => {
      const featuredMedia = p._embedded && p._embedded["wp:featuredmedia"] && p._embedded["wp:featuredmedia"][0]
        ? p._embedded["wp:featuredmedia"][0].source_url
        : null;
      const content = cleanContentHtml(p.content?.rendered || "");
      const pemateri = extractPemateri(p.content?.rendered || "");
      const excerpt = p.excerpt?.rendered
        ? cleanHtmlEntities(p.excerpt.rendered.replace(/<[^>]+>/g, " ").trim())
        : extractExcerpt(content);

      return {
        id: p.id,
        slug: p.slug,
        title: cleanHtmlEntities(p.title?.rendered || "Khutbah Tanpa Judul"),
        date: p.date,
        link: "",
        featuredImage: featuredMedia,
        pemateri,
        excerpt,
        contentHtml: content
      };
    });

    // Update local cache
    const existingIds = new Set(cachedKhutbahs.map(k => k.id));
    items.forEach(it => {
      if (!existingIds.has(it.id)) {
        cachedKhutbahs.push(it);
      }
    });

    try {
      localStorage.setItem(STORAGE_KEY_POSTS, JSON.stringify(cachedKhutbahs.slice(0, 60)));
    } catch {
      // localStorage may be full, ignore
    }

    return { items, totalPages, totalCount };
  } catch (err) {
    console.warn("Direct fetch from dakwah.id failed, falling back to local dataset:", err);
    
    // Filter local cache
    let filtered = [...cachedKhutbahs];
    if (search.trim()) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        k => k.title.toLowerCase().includes(q) ||
             k.pemateri.toLowerCase().includes(q) ||
             k.excerpt.toLowerCase().includes(q)
      );
    }

    const pageSize = 12;
    const start = (page - 1) * pageSize;
    const items = filtered.slice(start, start + pageSize);

    return {
      items,
      totalPages: Math.max(1, Math.ceil(filtered.length / pageSize)),
      totalCount: filtered.length
    };
  }
}

export function getCachedKhutbahById(id: number): KhutbahItem | undefined {
  return cachedKhutbahs.find(k => k.id === id);
}

export function getCachedKhutbahBySlug(slug: string): KhutbahItem | undefined {
  return cachedKhutbahs.find(k => k.slug === slug);
}
