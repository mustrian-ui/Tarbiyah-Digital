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

  // Cut bottom widget wrappers, sharedaddy, and download buttons
  const cutMarkers = [
    '<div class="wp-block-jetpack-related-posts"',
    'class="sharedaddy',
    'id="jp-relatedposts"',
    'Download PDF',
    'Anda ingin mendapat kiriman update'
  ];
  let minIndex = html.length;
  for (const marker of cutMarkers) {
    const idx = html.indexOf(marker);
    if (idx !== -1 && idx < minIndex) {
      minIndex = idx;
    }
  }
  let trimmed = html.slice(0, minIndex);

  // 1. Remove widget lists of recent/latest posts
  trimmed = trimmed.replace(/<ul[^>]*class="[^"]*wp-block-latest-posts[^"]*"[\s\S]*?<\/ul>/gi, "");

  // 2. Remove bottom headings for promotional widgets (must NOT span across multiple tags!)
  trimmed = trimmed.replace(/<h[2-6]\b[^>]*>(?:(?!<\/h[2-6]>)[\s\S])*?(?:Artikel\s+terkait|Baca\s+juga|Materi\s+Khutbah|Artikel\s+Sejarah|Artikel\s+Fikih)(?:(?!<\/h[2-6]>)[\s\S])*?<\/h[2-6]>/gi, "");

  // 3. Remove bottom paragraphs that are pure cross-promo announcements
  trimmed = trimmed.replace(/<p\b[^>]*>(?:(?!<\/p>|<p\b)[\s\S])*?(?:Baca\s+artikel\s+terkait|Baca\s+juga:|Artikel\s+Sejarah\s+terbaru:|Artikel\s+terkait:)(?:(?!<\/p>|<p\b)[\s\S])*?<\/p>/gi, "");

  // 4. Handle links: convert internal dakwah.id post links to internal /sejarah?slug= links
  // And strip external links to plain text
  trimmed = trimmed.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (_match, attrs, text) => {
    const hrefMatch = attrs.match(/href=["']([^"']+)["']/i);
    if (!hrefMatch) return text;
    const href = hrefMatch[1];
    
    // Check if it's a dakwah.id post link
    const dakwahMatch = href.match(/https?:\/\/(?:www\.)?dakwah\.id\/([a-zA-Z0-9\-_]+)\/?(?:$|[?#])/i);
    if (dakwahMatch) {
      const slug = dakwahMatch[1];
      if (!/^(category|tag|author|page|tentang|redaksi|pedoman|kebijakan|kontak|donasi|hubungi)$/i.test(slug)) {
        return `<a href="/sejarah?slug=${slug}" data-slug="${slug}" class="sejarah-internal-link inline-flex items-center font-bold text-amber-800 hover:text-amber-950 underline underline-offset-4 decoration-amber-400 hover:decoration-amber-700 transition cursor-pointer">${text}</a>`;
      }
    }
    // Any other external link: return text only (no link to outside)
    return text;
  });

  // 5. Clean empty paragraphs
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

export async function fetchSejarahArticleBySlug(slug: string): Promise<SejarahArticleItem | null> {
  const local = getCachedSejarahBySlug(slug);
  if (local && local.contentHtml && local.contentHtml.length > 200) {
    return local;
  }

  try {
    const url = new URL("https://www.dakwah.id/wp-json/wp/v2/posts");
    url.searchParams.set("slug", slug);
    url.searchParams.set("_embed", "true");

    const res = await fetch(url.toString(), {
      headers: { Accept: "application/json" }
    });

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const posts = await res.json();
    if (!posts || posts.length === 0) {
      return local || null;
    }

    const p = posts[0];
    const featuredMedia = p._embedded && p._embedded["wp:featuredmedia"] && p._embedded["wp:featuredmedia"][0]
      ? p._embedded["wp:featuredmedia"][0].source_url
      : null;
    const content = cleanSejarahContentHtml(p.content?.rendered || "");
    const excerpt = p.excerpt?.rendered
      ? cleanHtmlEntities(p.excerpt.rendered.replace(/<[^>]+>/g, " ").trim())
      : "";

    const articleItem: SejarahArticleItem = {
      id: p.id,
      slug: p.slug,
      title: cleanHtmlEntities(p.title?.rendered || "Artikel Sejarah"),
      date: p.date,
      link: "",
      featuredImage: featuredMedia,
      excerpt,
      contentHtml: content
    };

    // Update memory & localStorage cache
    const existingIndex = cachedSejarah.findIndex(s => s.slug === slug);
    if (existingIndex !== -1) {
      cachedSejarah[existingIndex] = articleItem;
    } else {
      cachedSejarah.unshift(articleItem);
    }

    try {
      localStorage.setItem(STORAGE_KEY_SEJARAH_POSTS, JSON.stringify(cachedSejarah.slice(0, 60)));
    } catch {
      // ignore
    }

    return articleItem;
  } catch (err) {
    console.warn("Failed to fetch sejarah article by slug:", slug, err);
    return local || null;
  }
}

