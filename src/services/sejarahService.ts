import { SejarahArticleItem } from "../types/sejarah";
import initialSejarahData from "../data/initialSejarah.json";

const STORAGE_KEY_SEJARAH_POSTS = "tarbiyah_sejarah_posts";
const STORAGE_KEY_SEJARAH_BOOKMARKS = "tarbiyah_sejarah_bookmarks";

export function cleanHtmlEntities(raw: string): string {
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

export function cleanSejarahContentHtml(html: string): string {
  if (!html) return "";
  const cutMarkers = [
    '<div class="wp-block-jetpack-related-posts"',
    'Download PDF',
    'Anda ingin mendapat kiriman update',
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

  // 1. Remove widget lists of recent/latest posts
  trimmed = trimmed.replace(/<ul[^>]*class="[^"]*wp-block-latest-posts[^"]*"[\s\S]*?<\/ul>/gi, "");

  // 2. Remove headings containing cross promotions (Artikel Sejarah, Materi Khutbah, etc.)
  trimmed = trimmed.replace(/<h[2-6][^>]*>[\s\S]*?(?:Materi\s+Khutbah|Artikel\s+Sejarah|Baca juga|Artikel terkait|Selain)[\s\S]*?<\/h[2-6]>/gi, "");

  // 3. Remove paragraphs containing cross promotions
  trimmed = trimmed.replace(/<p[^>]*>[\s\S]*?(?:Materi\s+Khutbah|Artikel\s+Sejarah|Baca juga|Baca artikel terkait|Artikel terkait)[\s\S]*?<\/p>/gi, "");

  // 4. Remove list items containing cross promotions
  trimmed = trimmed.replace(/<li[^>]*>[\s\S]*?(?:Materi\s+Khutbah|Artikel\s+Sejarah)[\s\S]*?<\/li>/gi, "");

  // 5. Remove all <a> hyperlinks to prevent external links while keeping text
  trimmed = trimmed.replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi, "$1");
  trimmed = trimmed.replace(/<\/?a\b[^>]*>/gi, "");

  // 6. Clean empty paragraphs and lists
  trimmed = trimmed.replace(/<p[^>]*>\s*<\/p>/gi, "");
  trimmed = trimmed.replace(/<ul[^>]*>\s*<\/ul>/gi, "");

  return trimmed.trim();
}

export function getSejarahBookmarkedIds(): number[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_SEJARAH_BOOKMARKS);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function toggleSejarahBookmark(id: number): boolean {
  try {
    const ids = getSejarahBookmarkedIds();
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
    localStorage.setItem(STORAGE_KEY_SEJARAH_BOOKMARKS, JSON.stringify(next));
    window.dispatchEvent(new CustomEvent("tarbiyah_sejarah_bookmark_changed", { detail: { id, isBookmarked: isNowBookmarked } }));
    return isNowBookmarked;
  } catch {
    return false;
  }
}

export function isSejarahBookmarked(id: number): boolean {
  const ids = getSejarahBookmarkedIds();
  return ids.includes(id);
}

// Memory & LocalStorage Cache
let cachedSejarah: SejarahArticleItem[] = [...(initialSejarahData as SejarahArticleItem[])];

try {
  const stored = localStorage.getItem(STORAGE_KEY_SEJARAH_POSTS);
  if (stored) {
    const parsed: SejarahArticleItem[] = JSON.parse(stored);
    const existingIds = new Set(cachedSejarah.map(s => s.id));
    for (const item of parsed) {
      if (!existingIds.has(item.id)) {
        cachedSejarah.push(item);
      }
    }
  }
} catch {
  // ignore
}

export async function fetchSejarahArticles(
  page: number = 1, 
  search: string = ""
): Promise<{ items: SejarahArticleItem[]; totalPages: number; totalCount: number }> {
  // If user is offline or we don't have internet, fallback to local dataset
  if (!navigator.onLine && page === 1 && !search) {
    return {
      items: cachedSejarah.slice(0, 20),
      totalPages: Math.max(1, Math.ceil(cachedSejarah.length / 12)),
      totalCount: cachedSejarah.length
    };
  }

  try {
    const url = new URL("https://www.dakwah.id/wp-json/wp/v2/posts");
    url.searchParams.set("categories", "13"); // Category 13: Sejarah
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

    const totalCount = Number(res.headers.get("X-WP-Total")) || cachedSejarah.length;
    const totalPages = Number(res.headers.get("X-WP-TotalPages")) || 1;
    const rawData = await res.json();

    const items: SejarahArticleItem[] = rawData.map((p: any) => {
      const featuredMedia = p._embedded && p._embedded["wp:featuredmedia"] && p._embedded["wp:featuredmedia"][0]
        ? p._embedded["wp:featuredmedia"][0].source_url
        : null;
      const content = cleanSejarahContentHtml(p.content?.rendered || "");
      const excerpt = p.excerpt?.rendered
        ? cleanHtmlEntities(p.excerpt.rendered.replace(/<[^>]+>/g, " ").trim())
        : "";

      return {
        id: p.id,
        slug: p.slug,
        title: cleanHtmlEntities(p.title?.rendered || "Artikel Sejarah"),
        date: p.date,
        link: "", // no external link
        featuredImage: featuredMedia,
        excerpt,
        contentHtml: content
      };
    });

    // Update local cache
    const existingIds = new Set(cachedSejarah.map(s => s.id));
    items.forEach(it => {
      if (!existingIds.has(it.id)) {
        cachedSejarah.push(it);
      }
    });

    try {
      localStorage.setItem(STORAGE_KEY_SEJARAH_POSTS, JSON.stringify(cachedSejarah.slice(0, 60)));
    } catch {
      // ignore
    }

    return { items, totalPages, totalCount };
  } catch (err) {
    console.warn("Direct fetch from dakwah.id failed, falling back to local dataset:", err);
    
    let filtered = [...cachedSejarah];
    if (search.trim()) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        s => s.title.toLowerCase().includes(q) ||
             s.excerpt.toLowerCase().includes(q)
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

export function getCachedSejarahBySlug(slug: string): SejarahArticleItem | undefined {
  return cachedSejarah.find(s => s.slug === slug);
}
