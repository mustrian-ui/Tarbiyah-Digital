import React, { useState, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { 
  Scale, BookOpen, Search, Bookmark, Copy, Printer, 
  Share2, ArrowLeft, CheckCircle2, RefreshCw, ScrollText, 
  Sparkles, Filter, Check, ShieldCheck, ChevronRight, Layers, Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { 
  fetchFikihArticles, 
  getCachedFikihBySlug, 
  getFikihBookmarkedIds, 
  toggleFikihBookmark,
  cleanFikihContentHtml,
  fetchFikihArticleBySlug,
  extractFikihSeries
} from "../services/fikihService";
import { FikihArticleItem, FikihCategory, FikihSeriesItem } from "../types/fikih";

const fikihCategories: FikihCategory[] = [
  "Semua",
  "Ibadah & Shalat",
  "Muamalah & Finansial",
  "Thaharah & Bersuci",
  "Keluarga & Pernikahan",
  "Puasa & Qurban"
];

export default function Fikih() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSlug = searchParams.get("slug");

  const [articles, setArticles] = useState<FikihArticleItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<FikihCategory>("Semua");
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>(() => getFikihBookmarkedIds());
  const [showOnlyBookmarks, setShowOnlyBookmarks] = useState<boolean>(false);

  // Active reading article
  const [activeArticle, setActiveArticle] = useState<FikihArticleItem | null>(null);
  const [loadingArticle, setLoadingArticle] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<"normal" | "large">("normal");
  const [copyToast, setCopyToast] = useState<boolean>(false);

  const readerTopRef = useRef<HTMLDivElement>(null);

  // Sync bookmarks
  useEffect(() => {
    const handleBookmarkChange = () => {
      setBookmarkedIds(getFikihBookmarkedIds());
    };
    window.addEventListener("tarbiyah_fikih_bookmark_changed", handleBookmarkChange);
    return () => window.removeEventListener("tarbiyah_fikih_bookmark_changed", handleBookmarkChange);
  }, []);

  // Fetch articles
  useEffect(() => {
    loadArticles(1, searchQuery);
  }, [searchQuery]);

  // Handle URL slug parameter & series navigation
  useEffect(() => {
    if (selectedSlug) {
      handleNavigateSlug(selectedSlug, false);
    } else {
      setActiveArticle(null);
    }
  }, [selectedSlug]);

  const handleNavigateSlug = async (slug: string, updateUrl: boolean = true) => {
    if (updateUrl) {
      setSearchParams({ slug });
    }

    // 1. Check in already loaded articles
    const found = articles.find(a => a.slug === slug);
    if (found && found.contentHtml && found.contentHtml.length > 200) {
      setActiveArticle(found);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 2. Check in cached dataset
    const cached = getCachedFikihBySlug(slug);
    if (cached && cached.contentHtml && cached.contentHtml.length > 200) {
      setActiveArticle(cached);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 3. Fetch from API with loading indicator
    setLoadingArticle(true);
    try {
      const fetched = await fetchFikihArticleBySlug(slug);
      if (fetched) {
        setActiveArticle(fetched);
        setArticles(prev => {
          if (!prev.some(a => a.slug === slug)) {
            return [fetched, ...prev];
          }
          return prev.map(a => a.slug === slug ? fetched : a);
        });
      }
    } catch (err) {
      console.error("Error fetching fikih article by slug:", slug, err);
    } finally {
      setLoadingArticle(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const loadArticles = async (page: number, query: string = "") => {
    if (page === 1) setLoading(true);
    else setLoadingMore(true);

    try {
      const data = await fetchFikihArticles(page, query);
      if (page === 1) {
        setArticles(data.items);
      } else {
        setArticles(prev => {
          const ids = new Set(prev.map(a => a.id));
          const unique = data.items.filter(a => !ids.has(a.id));
          return [...prev, ...unique];
        });
      }
      setTotalPages(data.totalPages);
      setTotalCount(data.totalCount);
      setCurrentPage(page);
    } catch (err) {
      console.error("Error loading fikih articles:", err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const handleOpenArticle = (item: FikihArticleItem) => {
    setSearchParams({ slug: item.slug });
    // If the article has empty or short content, trigger dynamic fetch
    if (!item.contentHtml || item.contentHtml.length < 200) {
      handleNavigateSlug(item.slug, false);
    } else {
      setActiveArticle(item);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBackToList = () => {
    setActiveArticle(null);
    setSearchParams({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Intercept click on series or internal links in article content
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest("a");
    if (!target) return;

    // Check data-slug attribute or /fikih?slug= URL
    const slug = target.getAttribute("data-slug") || 
      (target.getAttribute("href")?.includes("slug=") 
        ? new URL(target.href, window.location.origin).searchParams.get("slug") 
        : null);

    if (slug) {
      e.preventDefault();
      handleNavigateSlug(slug, true);
    }
  };

  // Extract series information if current article is part of a series
  const activeSeries = useMemo<FikihSeriesItem[]>(() => {
    if (!activeArticle) return [];
    return extractFikihSeries(activeArticle.contentHtml, activeArticle.slug);
  }, [activeArticle]);

  const currentSeriesIndex = activeSeries.findIndex(s => s.isCurrent);
  const prevSeriesItem = currentSeriesIndex > 0 ? activeSeries[currentSeriesIndex - 1] : null;
  const nextSeriesItem = currentSeriesIndex !== -1 && currentSeriesIndex < activeSeries.length - 1 ? activeSeries[currentSeriesIndex + 1] : null;


  const handleToggleBookmark = (id: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    toggleFikihBookmark(id);
    setBookmarkedIds(getFikihBookmarkedIds());
  };

  const handleCopyText = () => {
    if (!activeArticle) return;
    const parser = new DOMParser();
    const doc = parser.parseFromString(activeArticle.contentHtml, "text/html");
    const text = doc.body.textContent || doc.body.innerText || "";
    const formatted = `${activeArticle.title}\n\n${text}`;
    navigator.clipboard.writeText(formatted);
    setCopyToast(true);
    setTimeout(() => setCopyToast(false), 2500);
  };

  const handleShare = async () => {
    if (!activeArticle) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: activeArticle.title,
          text: `Artikel Fikih: ${activeArticle.title}`,
          url: window.location.href
        });
      } catch {
        // cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopyToast(true);
      setTimeout(() => setCopyToast(false), 2500);
    }
  };

  // Filter by category and bookmark
  const filteredArticles = useMemo(() => {
    return articles.filter(item => {
      if (showOnlyBookmarks && !bookmarkedIds.includes(item.id)) {
        return false;
      }
      if (selectedCategory !== "Semua") {
        const titleLower = item.title.toLowerCase();
        const excerptLower = item.excerpt.toLowerCase();
        if (selectedCategory === "Ibadah & Shalat") {
          return titleLower.includes("shalat") || titleLower.includes("sholat") || titleLower.includes("subuh") || titleLower.includes("masjid") || titleLower.includes("khutbah") || titleLower.includes("mimbar") || excerptLower.includes("shalat");
        }
        if (selectedCategory === "Muamalah & Finansial") {
          return titleLower.includes("paylater") || titleLower.includes("riba") || titleLower.includes("commerce") || titleLower.includes("uang") || titleLower.includes("waris") || titleLower.includes("jual") || excerptLower.includes("muamalah");
        }
        if (selectedCategory === "Thaharah & Bersuci") {
          return titleLower.includes("istinja") || titleLower.includes("wudhu") || titleLower.includes("tayamum") || titleLower.includes("najis") || titleLower.includes("kentut") || excerptLower.includes("thaharah");
        }
        if (selectedCategory === "Keluarga & Pernikahan") {
          return titleLower.includes("pernikahan") || titleLower.includes("nikah") || titleLower.includes("warisan") || titleLower.includes("ahli waris") || titleLower.includes("anak perempuan") || excerptLower.includes("nikah");
        }
        if (selectedCategory === "Puasa & Qurban") {
          return titleLower.includes("puasa") || titleLower.includes("qurban") || titleLower.includes("ramadhan") || titleLower.includes("kambing") || titleLower.includes("qadha") || excerptLower.includes("puasa");
        }
      }
      return true;
    });
  }, [articles, selectedCategory, showOnlyBookmarks, bookmarkedIds]);

  return (
    <div className="space-y-6 w-full max-w-full min-w-0 overflow-x-hidden">
      {/* 1. Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 text-white p-4 sm:p-6 md:p-8 shadow-xl relative overflow-hidden w-full max-w-full min-w-0">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-semibold mb-3">
            <Scale size={14} />
            <span>Koleksi Hukum & Fatwa Syariah</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            Fikih Islam
          </h1>

          <p className="text-emerald-100/90 text-sm md:text-base mt-2 leading-relaxed">
            Kumpulan panduan hukum Islam terpercaya, fikih ibadah sehari-hari, muamalah kontemporer, 
            thaharah, puasa, qurban, hingga hukum keluarga berdasarkan Al-Qur'an dan Sunnah.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-emerald-200">
            <span className="bg-emerald-900/60 px-3 py-1.5 rounded-xl border border-emerald-700/50">
              Materi Edukasi Dakwah Fikih
            </span>
            {totalCount > 0 && (
              <span className="bg-amber-400/20 text-amber-300 font-bold px-3 py-1.5 rounded-xl border border-amber-400/30">
                {totalCount} Pembahasan Tersedia
              </span>
            )}
          </div>
        </div>

        <div className="absolute -right-8 -bottom-10 opacity-10 pointer-events-none text-white">
          <Scale size={240} />
        </div>
      </div>

      {/* 2. Reader Mode (if an article is selected) */}
      {activeArticle ? (
        <div ref={readerTopRef} className="space-y-4 w-full max-w-full min-w-0">
          {/* Reader Top Controls */}
          <div className="sticky top-16 lg:top-4 z-30 bg-white/95 backdrop-blur-md border border-emerald-100 rounded-2xl p-2.5 sm:p-3 shadow-md flex items-center justify-between gap-2 no-print w-full max-w-full min-w-0">
            <button
              onClick={handleBackToList}
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 px-3 py-2 rounded-xl transition"
            >
              <ArrowLeft size={16} />
              <span>Daftar Pembahasan Fikih</span>
            </button>

            {/* Font & Actions */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl text-xs">
                <button
                  onClick={() => setFontSize("normal")}
                  className={cn(
                    "px-2.5 py-1 rounded-lg font-bold transition",
                    fontSize === "normal" ? "bg-white text-emerald-800 shadow-xs" : "text-gray-600 hover:text-gray-900"
                  )}
                  title="Ukuran Normal"
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize("large")}
                  className={cn(
                    "px-2.5 py-1 rounded-lg font-bold transition",
                    fontSize === "large" ? "bg-white text-emerald-800 shadow-xs" : "text-gray-600 hover:text-gray-900"
                  )}
                  title="Ukuran Besar"
                >
                  A+
                </button>
              </div>

              <button
                onClick={() => handleToggleBookmark(activeArticle.id)}
                className={cn(
                  "p-2 rounded-xl transition border",
                  bookmarkedIds.includes(activeArticle.id)
                    ? "bg-amber-50 text-amber-600 border-amber-300"
                    : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                )}
                title="Simpan Pembahasan"
              >
                <Bookmark size={18} className={bookmarkedIds.includes(activeArticle.id) ? "fill-amber-500" : ""} />
              </button>

              <button
                onClick={handleCopyText}
                className="p-2 rounded-xl bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 border border-gray-200 transition"
                title="Salin Teks"
              >
                <Copy size={18} />
              </button>

              <button
                onClick={() => window.print()}
                className="p-2 rounded-xl bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 border border-gray-200 transition"
                title="Cetak Artikel"
              >
                <Printer size={18} />
              </button>

              <button
                onClick={handleShare}
                className="p-2 rounded-xl bg-emerald-700 text-white hover:bg-emerald-800 transition shadow-xs"
                title="Bagikan"
              >
                <Share2 size={18} />
              </button>
            </div>
          </div>

          {/* Toast Notification */}
          {copyToast && (
            <div className="fixed bottom-24 right-6 z-50 bg-emerald-950 text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-semibold animate-bounce">
              <CheckCircle2 size={16} className="text-amber-400" />
              <span>Teks pembahasan berhasil disalin!</span>
            </div>
          )}

          {/* Article Container */}
          <article className="bg-white rounded-3xl border border-emerald-100 shadow-lg p-4 sm:p-6 md:p-10 khutbah-print-card w-full max-w-full min-w-0 overflow-hidden break-words">
            <header className="border-b border-emerald-100 pb-6 mb-8 text-center max-w-2xl mx-auto w-full min-w-0">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-3">
                <Scale size={14} />
                <span>Hukum & Fatwa Fikih</span>
              </div>

              <h1 className={cn(
                "font-extrabold text-emerald-950 leading-tight break-words min-w-0",
                fontSize === "normal" ? "text-xl md:text-3xl" : "text-2xl md:text-4xl"
              )}>
                {activeArticle.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500">
                <span>{new Date(activeArticle.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
                <span>•</span>
                <span className="text-gray-500 font-medium">Dakwah.id</span>
              </div>
            </header>

            {/* Featured Image */}
            {activeArticle.featuredImage && (
              <div className="max-w-2xl mx-auto mb-8 rounded-2xl overflow-hidden shadow-sm no-print w-full min-w-0">
                <img
                  src={activeArticle.featuredImage}
                  alt={activeArticle.title}
                  className="w-full h-auto object-cover max-h-96"
                  loading="lazy"
                />
              </div>
            )}

            {/* Loading Indicator for Series / Dynamic Article Switch */}
            {loadingArticle && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex items-center justify-center gap-3 animate-pulse no-print">
                <Loader2 size={18} className="animate-spin text-emerald-700" />
                <span className="text-xs font-semibold text-emerald-900">Memuat materi fikih lengkap...</span>
              </div>
            )}

            {/* Rangkaian Seri Pembahasan Banner (Jika artikel memuat seri) */}
            {activeSeries.length > 0 && (
              <div className="mb-8 p-4 md:p-5 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50/40 to-white border border-emerald-200 shadow-xs no-print">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-2.5 border-b border-emerald-100">
                  <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
                    <div className="p-1 rounded-lg bg-emerald-700 text-amber-300">
                      <Layers size={16} />
                    </div>
                    <span>Daftar Rangkaian Seri Pembahasan ({activeSeries.length} Seri)</span>
                  </div>
                  <span className="text-[11px] font-medium text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                    Ketuk seri di bawah untuk membaca
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeSeries.map((item) => (
                    <button
                      key={item.slug}
                      onClick={() => handleNavigateSlug(item.slug)}
                      disabled={item.isCurrent}
                      className={cn(
                        "p-2.5 rounded-xl text-left transition flex items-center justify-between gap-2 border text-xs",
                        item.isCurrent
                          ? "bg-emerald-800 text-white font-bold border-emerald-800 shadow-xs cursor-default"
                          : "bg-white text-emerald-950 font-medium border-emerald-100/90 hover:border-emerald-300 hover:bg-emerald-50/70"
                      )}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className={cn(
                          "px-2 py-0.5 rounded-md text-[10px] font-bold shrink-0",
                          item.isCurrent ? "bg-amber-400 text-emerald-950" : "bg-emerald-100 text-emerald-800"
                        )}>
                          {item.label}
                        </span>
                        <span className="truncate">{item.title}</span>
                      </div>
                      {item.isCurrent ? (
                        <span className="text-[9px] text-amber-300 font-bold uppercase tracking-wider shrink-0 bg-emerald-950/40 px-1.5 py-0.5 rounded">
                          Sedang Dibaca
                        </span>
                      ) : (
                        <ChevronRight size={14} className="text-emerald-600 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Article Content with In-App Series Click Interception */}
            <div 
              onClick={handleContentClick}
              className={cn(
                "khutbah-content prose max-w-none text-slate-800",
                fontSize === "normal" ? "text-base" : "text-lg md:text-xl font-medium leading-relaxed"
              )}
              dangerouslySetInnerHTML={{ __html: activeArticle.contentHtml }}
            />

            {/* Series Navigation (Prev / Next) at the bottom */}
            {(prevSeriesItem || nextSeriesItem) && (
              <div className="mt-10 pt-6 border-t border-emerald-100 grid grid-cols-1 sm:grid-cols-2 gap-3 no-print">
                {prevSeriesItem ? (
                  <button
                    onClick={() => handleNavigateSlug(prevSeriesItem.slug)}
                    className="p-3.5 rounded-2xl bg-emerald-50/80 hover:bg-emerald-100/80 border border-emerald-200/80 text-left transition flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white text-emerald-800 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      <ArrowLeft size={16} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider block">
                        {prevSeriesItem.label} (Sebelumnya)
                      </span>
                      <p className="text-xs font-bold text-emerald-950 truncate">
                        {prevSeriesItem.title}
                      </p>
                    </div>
                  </button>
                ) : <div />}

                {nextSeriesItem ? (
                  <button
                    onClick={() => handleNavigateSlug(nextSeriesItem.slug)}
                    className="p-3.5 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white text-right transition flex items-center justify-end gap-3 group shadow-xs"
                  >
                    <div className="min-w-0">
                      <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">
                        {nextSeriesItem.label} (Selanjutnya)
                      </span>
                      <p className="text-xs font-bold text-white truncate">
                        {nextSeriesItem.title}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-amber-400 text-emerald-950 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      <ChevronRight size={18} />
                    </div>
                  </button>
                ) : <div />}
              </div>
            )}

            <footer className="mt-12 pt-6 border-t border-emerald-100 flex items-center justify-between text-xs text-gray-500">
              <span>Materi disadur dari <strong>Dakwah.id (Kategori Fikih)</strong> untuk rujukan ilmu syariat.</span>
              <span className="text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                Tarbiyah Digital
              </span>
            </footer>
          </article>
        </div>
      ) : (
        /* 3. List of Fikih Articles */
        <div className="space-y-6 w-full max-w-full min-w-0">
          {/* Search & Filter Bar */}
          <div className="bg-white rounded-2xl border border-emerald-100 p-3 sm:p-4 shadow-sm space-y-3 w-full max-w-full min-w-0 overflow-hidden">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full min-w-0">
              <div className="relative flex-1 min-w-0">
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari hukum fikih (paylater, qurban, istinja, shalat, puasa)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-14 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-xs sm:text-sm min-w-0"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full"
                  >
                    Hapus
                  </button>
                )}
              </div>

              <button
                onClick={() => setShowOnlyBookmarks(!showOnlyBookmarks)}
                className={cn(
                  "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition shrink-0",
                  showOnlyBookmarks
                    ? "bg-amber-400 text-emerald-950 border-amber-400 font-bold shadow-xs"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-emerald-50"
                )}
              >
                <Bookmark size={15} className={showOnlyBookmarks ? "fill-emerald-950" : ""} />
                <span>Tersimpan ({bookmarkedIds.length})</span>
              </button>
            </div>

            {/* Category Filter Chips */}
            <div className="w-full max-w-full min-w-0 flex items-center gap-1.5 overflow-x-auto pb-2 pt-1 scrollbar-none touch-pan-x">
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
                <Filter size={13} />
                <span>Kategori:</span>
              </span>
              {fikihCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition shrink-0",
                    selectedCategory === cat
                      ? "bg-emerald-800 text-amber-300 font-bold shadow-xs"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Status Header */}
          <div className="flex items-center justify-between text-xs text-gray-500 px-1">
            <span>
              Menampilkan <strong>{filteredArticles.length}</strong> pembahasan fikih
              {totalCount > 0 ? ` (dari total ~${totalCount} artikel)` : ""}
            </span>
            {searchQuery && (
              <span className="text-emerald-700 font-medium">
                Hasil untuk: "{searchQuery}"
              </span>
            )}
          </div>

          {/* Cards Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 w-full max-w-full min-w-0">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 sm:p-5 border border-emerald-100 animate-pulse space-y-3 w-full min-w-0">
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                </div>
              ))}
            </div>
          ) : filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 w-full max-w-full min-w-0">
              {filteredArticles.map((article) => {
                const isBookmarked = bookmarkedIds.includes(article.id);
                return (
                  <div
                    key={article.id}
                    onClick={() => handleOpenArticle(article)}
                    className="bg-white rounded-2xl border border-emerald-100 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer hover:border-emerald-300 w-full max-w-full min-w-0 overflow-hidden break-words"
                  >
                    <div className="w-full min-w-0">
                      {article.featuredImage && (
                        <div className="w-full h-36 rounded-xl overflow-hidden mb-3 bg-emerald-50">
                          <img
                            src={article.featuredImage}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      )}

                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                          Hukum Syariah
                        </span>
                        <button
                          onClick={(e) => handleToggleBookmark(article.id, e)}
                          className={cn(
                            "p-1.5 rounded-lg transition",
                            isBookmarked
                              ? "text-amber-500 bg-amber-50"
                              : "text-gray-300 hover:text-amber-400"
                          )}
                          title="Simpan Artikel"
                        >
                          <Bookmark size={18} className={isBookmarked ? "fill-amber-400" : ""} />
                        </button>
                      </div>

                      <h3 className="font-bold text-base md:text-lg text-emerald-950 group-hover:text-emerald-700 leading-snug line-clamp-2 transition-colors break-words min-w-0">
                        {article.title}
                      </h3>

                      {article.excerpt && (
                        <p className="text-xs text-gray-600 mt-2 line-clamp-3 leading-relaxed break-words min-w-0">
                          {article.excerpt}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                      <span>
                        {new Date(article.date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric"
                        })}
                      </span>

                      <div className="flex items-center gap-1 font-bold text-emerald-700 group-hover:text-emerald-900 group-hover:translate-x-0.5 transition-all">
                        <span>Baca Pembahasan</span>
                        <ChevronRight size={15} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-emerald-100 p-12 text-center shadow-xs">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <Scale size={32} />
              </div>
              <h3 className="font-bold text-lg text-gray-900">Pembahasan Fikih Tidak Ditemukan</h3>
              <p className="text-sm text-gray-500 max-w-md mx-auto mt-1">
                {showOnlyBookmarks 
                  ? "Belum ada artikel fikih yang tersimpan di favorit Anda." 
                  : "Coba gunakan kata kunci pencarian yang lain atau pilih kategori yang berbeda."}
              </p>
              {(searchQuery || showOnlyBookmarks || selectedCategory !== "Semua") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("Semua");
                    setShowOnlyBookmarks(false);
                  }}
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-semibold shadow hover:bg-emerald-800 transition"
                >
                  <RefreshCw size={14} />
                  <span>Reset Filter</span>
                </button>
              )}
            </div>
          )}

          {/* Load More Pagination */}
          {!loading && currentPage < totalPages && !showOnlyBookmarks && (
            <div className="text-center pt-4">
              <button
                onClick={() => loadArticles(currentPage + 1, searchQuery)}
                disabled={loadingMore}
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs md:text-sm px-6 py-3 rounded-2xl shadow-sm transition disabled:opacity-50"
              >
                {loadingMore ? (
                  <>
                    <RefreshCw size={16} className="animate-spin" />
                    <span>Memuat Artikel Fikih...</span>
                  </>
                ) : (
                  <>
                    <RefreshCw size={16} />
                    <span>Muat Artikel Berikutnya (Halaman {currentPage + 1} dari {totalPages})</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
