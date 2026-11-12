import React, { useState, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { 
  History, BookOpen, Landmark, Map, ChevronRight, X, 
  Search, Bookmark, Copy, Printer, Share2, ArrowLeft, 
  CheckCircle2, RefreshCw, ScrollText, Sparkles, Filter, 
  Clock, Shield, Star, Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { 
  fetchSejarahArticles, 
  getCachedSejarahBySlug, 
  getSejarahBookmarkedIds, 
  toggleSejarahBookmark,
  cleanSejarahContentHtml,
  fetchSejarahArticleBySlug
} from "../services/sejarahService";
import { SejarahArticleItem, SejarahSubmenu } from "../types/sejarah";
import { SEJARAH_ISLAM_COMPLETE_DATA, SejarahTopic } from "../data/sejarahCompleteData";
import { Crown, Compass } from "lucide-react";

export default function Sejarah() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = (searchParams.get("tab") as SejarahSubmenu) || "artikel";
  const selectedSlug = searchParams.get("slug");

  // Articles state (from dakwah.id)
  const [articles, setArticles] = useState<SejarahArticleItem[]>([]);
  const [loadingArticles, setLoadingArticles] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>(() => getSejarahBookmarkedIds());
  const [showOnlyBookmarks, setShowOnlyBookmarks] = useState<boolean>(false);

  // Reader state for dakwah.id articles
  const [activeArticle, setActiveArticle] = useState<SejarahArticleItem | null>(null);
  const [loadingArticle, setLoadingArticle] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<"normal" | "large">("normal");
  const [copyToast, setCopyToast] = useState<boolean>(false);

  // Existing "Sejarah Islam" peradaban modal state
  const [activePeradabanId, setActivePeradabanId] = useState<string | null>(null);
  const [showFullPeradaban, setShowFullPeradaban] = useState<string | null>(null);

  const readerTopRef = useRef<HTMLDivElement>(null);

  // Sync bookmarks
  useEffect(() => {
    const handleBookmarkChange = () => {
      setBookmarkedIds(getSejarahBookmarkedIds());
    };
    window.addEventListener("tarbiyah_sejarah_bookmark_changed", handleBookmarkChange);
    return () => window.removeEventListener("tarbiyah_sejarah_bookmark_changed", handleBookmarkChange);
  }, []);

  // Fetch articles from dakwah.id
  useEffect(() => {
    loadArticles(1, searchQuery);
  }, [searchQuery]);

  // Handle URL slug parameter & internal navigation
  useEffect(() => {
    if (selectedSlug) {
      handleNavigateSlug(selectedSlug, false);
    } else {
      setActiveArticle(null);
    }
  }, [selectedSlug]);

  const handleNavigateSlug = async (slug: string, updateUrl: boolean = true) => {
    if (updateUrl) {
      setSearchParams({ tab: "artikel", slug });
    }

    // 1. Check in already loaded articles
    const found = articles.find(a => a.slug === slug);
    if (found && found.contentHtml && found.contentHtml.length > 200) {
      setActiveArticle(found);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 2. Check in cached dataset
    const cached = getCachedSejarahBySlug(slug);
    if (cached && cached.contentHtml && cached.contentHtml.length > 200) {
      setActiveArticle(cached);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 3. Fetch from API with loading indicator
    setLoadingArticle(true);
    try {
      const fetched = await fetchSejarahArticleBySlug(slug);
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
      console.error("Error fetching sejarah article by slug:", slug, err);
    } finally {
      setLoadingArticle(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const loadArticles = async (page: number, query: string = "") => {
    if (page === 1) setLoadingArticles(true);
    else setLoadingMore(true);

    try {
      const data = await fetchSejarahArticles(page, query);
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
      console.error("Error loading sejarah articles:", err);
    } finally {
      setLoadingArticles(false);
      setLoadingMore(false);
    }
  };

  const handleSwitchTab = (tab: SejarahSubmenu) => {
    setActiveArticle(null);
    setShowFullPeradaban(null);
    setSearchParams({ tab });
  };

  const handleOpenArticle = (item: SejarahArticleItem) => {
    setSearchParams({ tab: "artikel", slug: item.slug });
    if (!item.contentHtml || item.contentHtml.length < 200) {
      handleNavigateSlug(item.slug, false);
    } else {
      setActiveArticle(item);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBackToArticles = () => {
    setActiveArticle(null);
    setSearchParams({ tab: "artikel" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest("a");
    if (!target) return;
    const slug = target.getAttribute("data-slug") || 
      (target.getAttribute("href")?.includes("slug=") 
        ? new URL(target.href, window.location.origin).searchParams.get("slug") 
        : null);

    if (slug) {
      e.preventDefault();
      handleNavigateSlug(slug, true);
    }
  };

  const handleToggleBookmark = (id: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    toggleSejarahBookmark(id);
    setBookmarkedIds(getSejarahBookmarkedIds());
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
          text: `Artikel Sejarah: ${activeArticle.title}`,
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

  const filteredArticles = useMemo(() => {
    return articles.filter(a => {
      if (showOnlyBookmarks && !bookmarkedIds.includes(a.id)) {
        return false;
      }
      return true;
    });
  }, [articles, showOnlyBookmarks, bookmarkedIds]);

  const [peradabanSearchQuery, setPeradabanSearchQuery] = useState<string>("");

  const filteredPeradabanTopics = useMemo(() => {
    const q = peradabanSearchQuery.toLowerCase().trim();
    if (!q) return SEJARAH_ISLAM_COMPLETE_DATA;
    return SEJARAH_ISLAM_COMPLETE_DATA.filter(t => 
      t.title.toLowerCase().includes(q) ||
      t.subtitle.toLowerCase().includes(q) ||
      t.content.some(c => (c.title && c.title.toLowerCase().includes(q)) || c.text.toLowerCase().includes(q))
    );
  }, [peradabanSearchQuery]);

  const activePeradabanSection = SEJARAH_ISLAM_COMPLETE_DATA.find(s => s.id === showFullPeradaban);

  return (
    <div className="space-y-6 w-full max-w-full min-w-0 overflow-x-hidden">
      {/* 1. Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 text-white p-4 sm:p-6 md:p-8 shadow-xl relative overflow-hidden w-full max-w-full min-w-0">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-semibold mb-3">
            <History size={14} />
            <span>Khazanah Peradaban & Tarikh Islam</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            Sejarah
          </h1>

          <p className="text-emerald-100/90 text-sm md:text-base mt-2 leading-relaxed">
            Menelusuri jejak peradaban Islam dari masa kenabian, kepemimpinan para sahabat, 
            perkembangan dinasti ilmu pengetahuan, hingga artikel sejarah pilihan terpercaya.
          </p>

          {/* Submenu Navigation Tabs */}
          <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row gap-2 sm:gap-2.5 w-full max-w-full min-w-0">
            <button
              onClick={() => handleSwitchTab("artikel")}
              className={cn(
                "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl text-xs md:text-sm font-bold transition shadow-sm w-full sm:w-auto",
                currentTab === "artikel"
                  ? "bg-amber-400 text-emerald-950 shadow-md scale-102"
                  : "bg-emerald-900/60 hover:bg-emerald-800 text-emerald-100 hover:text-white border border-emerald-700/60"
              )}
            >
              <ScrollText size={16} />
              <span>Artikel Sejarah (Dakwah.id)</span>
              {totalCount > 0 && (
                <span className={cn(
                  "px-2 py-0.5 rounded-full text-[11px] font-extrabold",
                  currentTab === "artikel" ? "bg-emerald-900 text-amber-300" : "bg-emerald-800 text-emerald-200"
                )}>
                  {totalCount}
                </span>
              )}
            </button>

            <button
              onClick={() => handleSwitchTab("peradaban")}
              className={cn(
                "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl text-xs md:text-sm font-bold transition shadow-sm w-full sm:w-auto",
                currentTab === "peradaban"
                  ? "bg-amber-400 text-emerald-950 shadow-md scale-102"
                  : "bg-emerald-900/60 hover:bg-emerald-800 text-emerald-100 hover:text-white border border-emerald-700/60"
              )}
            >
              <Landmark size={16} />
              <span>Submenu: Sejarah Islam</span>
            </button>
          </div>
        </div>

        <div className="absolute -right-8 -bottom-10 opacity-10 pointer-events-none text-white">
          <History size={240} />
        </div>
      </div>

      {/* 2. SUBMENU 1: Artikel Sejarah dari dakwah.id */}
      {currentTab === "artikel" && (
        <div className="space-y-6 w-full max-w-full min-w-0">
          {/* Reader View Mode (if an article is selected) */}
          {activeArticle ? (
            <div ref={readerTopRef} className="space-y-4 w-full max-w-full min-w-0">
              {/* Reader Control Bar */}
              <div className="sticky top-16 lg:top-4 z-30 bg-white/95 backdrop-blur-md border border-emerald-100 rounded-2xl p-2.5 sm:p-3 shadow-md flex items-center justify-between gap-2 no-print w-full max-w-full min-w-0">

                <button
                  onClick={handleBackToArticles}
                  className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 px-3 py-2 rounded-xl transition"
                >
                  <ArrowLeft size={16} />
                  <span>Daftar Artikel Sejarah</span>
                </button>

                {/* Font Size & Actions */}
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
                    title="Simpan Artikel"
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
                  <span>Teks artikel berhasil disalin!</span>
                </div>
              )}

              {/* Article Content Container */}
              <article className="bg-white rounded-3xl border border-emerald-100 shadow-lg p-4 sm:p-6 md:p-10 khutbah-print-card w-full max-w-full min-w-0 overflow-hidden break-words">
                <header className="border-b border-emerald-100 pb-6 mb-8 text-center max-w-2xl mx-auto w-full min-w-0">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-3">
                    <History size={14} />
                    <span>Artikel Sejarah Islam</span>
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

                {/* Loading state if fetching article */}
                {loadingArticle && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex items-center justify-center gap-3 animate-pulse no-print">
                    <Loader2 size={18} className="animate-spin text-emerald-700" />
                    <span className="text-xs font-semibold text-emerald-900">Memuat materi sejarah lengkap...</span>
                  </div>
                )}

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

                <div 
                  onClick={handleContentClick}
                  className={cn(
                    "khutbah-content prose max-w-none text-slate-800 break-words w-full max-w-full min-w-0 overflow-hidden",
                    fontSize === "normal" ? "text-base" : "text-lg md:text-xl font-medium leading-relaxed"
                  )}
                  dangerouslySetInnerHTML={{ __html: activeArticle.contentHtml }}
                />

                <footer className="mt-12 pt-6 border-t border-emerald-100 flex items-center justify-between text-xs text-gray-500">
                  <span>Materi disadur dari <strong>Dakwah.id (Kategori Sejarah)</strong> untuk edukasi umat Islam.</span>
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    Tarbiyah Digital
                  </span>
                </footer>
              </article>
            </div>
          ) : (
            /* Articles Grid List */
            <div className="space-y-6 w-full max-w-full min-w-0">
              {/* Search & Filter Bar */}
              <div className="bg-white rounded-2xl border border-emerald-100 p-3 sm:p-4 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full max-w-full min-w-0 overflow-hidden">
                <div className="relative flex-1 min-w-0">
                  <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari peristiwa atau tokoh sejarah (Abu Bakar, Madinah, Tabuk)..."
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

              {/* Status Header */}
              <div className="flex items-center justify-between text-xs text-gray-500 px-1">
                <span>
                  Menampilkan <strong>{filteredArticles.length}</strong> artikel sejarah
                  {totalCount > 0 ? ` (dari total ~${totalCount} artikel)` : ""}
                </span>
                {searchQuery && (
                  <span className="text-emerald-700 font-medium">
                    Hasil untuk: "{searchQuery}"
                  </span>
                )}
              </div>

              {/* Cards Grid */}
              {loadingArticles ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-white rounded-2xl p-5 border border-emerald-100 animate-pulse space-y-3">
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
                              Kisah & Tarikh
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
                            <span>Baca Artikel</span>
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
                    <History size={32} />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">Artikel Tidak Ditemukan</h3>
                  <p className="text-sm text-gray-500 max-w-md mx-auto mt-1">
                    {showOnlyBookmarks 
                      ? "Belum ada artikel sejarah yang tersimpan di favorit Anda." 
                      : "Coba gunakan kata kunci pencarian yang lain."}
                  </p>
                  {(searchQuery || showOnlyBookmarks) && (
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setShowOnlyBookmarks(false);
                      }}
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-semibold shadow hover:bg-emerald-800 transition"
                    >
                      <RefreshCw size={14} />
                      <span>Reset Pencarian</span>
                    </button>
                  )}
                </div>
              )}

              {/* Load More Pagination */}
              {!loadingArticles && currentPage < totalPages && !showOnlyBookmarks && (
                <div className="text-center pt-4">
                  <button
                    onClick={() => loadArticles(currentPage + 1, searchQuery)}
                    disabled={loadingMore}
                    className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs md:text-sm px-6 py-3 rounded-2xl shadow-sm transition disabled:opacity-50"
                  >
                    {loadingMore ? (
                      <>
                        <RefreshCw size={16} className="animate-spin" />
                        <span>Memuat Artikel Sejarah...</span>
                      </>
                    ) : (
                      <>
                        <RefreshCw size={16} />
                        <span>Muat Artikel Sejarah Berikutnya (Halaman {currentPage + 1} dari {totalPages})</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 3. SUBMENU 2: Sejarah Islam (13 Topik Lengkap - In-Page Reader, Tidak Mengambang/Melayang) */}
      {currentTab === "peradaban" && (
        <div className="space-y-6">
          {showFullPeradaban && activePeradabanSection ? (
            /* In-Page Reader View (Directly in-page, no floating modal) */
            <div className="space-y-6 w-full max-w-full min-w-0">
              {/* In-Page Sticky Control Bar */}
              <div className="sticky top-16 lg:top-4 z-30 bg-white/95 backdrop-blur-md border border-emerald-100 rounded-2xl p-2.5 sm:p-3 shadow-md flex items-center justify-between gap-2 no-print w-full max-w-full min-w-0">
                <button
                  onClick={() => {
                    setShowFullPeradaban(null);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2 rounded-xl transition"
                >
                  <ArrowLeft size={16} />
                  <span>Daftar 13 Topik Sejarah</span>
                </button>

                {/* Font Size & Actions */}
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
                    onClick={() => {
                      const raw = `${activePeradabanSection.title}\n\n${activePeradabanSection.subtitle}\n\n${activePeradabanSection.content.map(c => `${c.title ? c.title + '\n' : ''}${c.text || ''}`).join('\n\n')}`;
                      navigator.clipboard.writeText(raw);
                      setCopyToast(true);
                      setTimeout(() => setCopyToast(false), 2500);
                    }}
                    className="p-2 rounded-xl bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 border border-gray-200 transition"
                    title="Salin Materi"
                  >
                    <Copy size={18} />
                  </button>

                  <button
                    onClick={() => window.print()}
                    className="p-2 rounded-xl bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 border border-gray-200 transition"
                    title="Cetak Materi"
                  >
                    <Printer size={18} />
                  </button>
                </div>
              </div>

              {/* In-Page Article Card */}
              <article className="bg-white rounded-3xl border border-emerald-100 shadow-lg p-5 sm:p-8 md:p-12 overflow-hidden w-full max-w-full min-w-0">
                <header className="border-b border-emerald-100 pb-6 mb-8 text-center max-w-2xl mx-auto w-full min-w-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100 text-xs font-semibold mb-3">
                    <History size={14} />
                    <span>Submenu: Sejarah Islam (Era Peradaban)</span>
                  </div>

                  <h1 className={cn(
                    "font-extrabold text-emerald-950 leading-tight break-words min-w-0",
                    fontSize === "normal" ? "text-2xl md:text-4xl" : "text-3xl md:text-5xl"
                  )}>
                    {activePeradabanSection.title}
                  </h1>

                  <p className="text-emerald-700 font-medium text-sm md:text-base mt-2">
                    {activePeradabanSection.subtitle}
                  </p>
                </header>

                {/* Dalil if available */}
                {activePeradabanSection.dalil && (
                  <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50/40 border border-emerald-200">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                      Dalil Terkait:
                    </p>
                    <p className="text-sm sm:text-base italic text-emerald-950 font-serif">
                      "{activePeradabanSection.dalil.text}"
                    </p>
                    <p className="text-xs font-bold text-amber-700 mt-1 text-right">
                      — {activePeradabanSection.dalil.source}
                    </p>
                  </div>
                )}

                {/* Narrative content sections */}
                <div className={cn(
                  "space-y-6 text-gray-800 leading-relaxed",
                  fontSize === "normal" ? "text-base sm:text-lg" : "text-lg sm:text-xl leading-loose"
                )}>
                  {activePeradabanSection.content.map((item, pIdx) => (
                    <div key={pIdx} className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100">
                      {item.title && (
                        <h4 className="font-bold text-lg sm:text-xl text-emerald-950 mb-3 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0" />
                          <span>{item.title}</span>
                        </h4>
                      )}
                      {item.text && (
                        <p className="text-gray-700 leading-relaxed text-justify">
                          {item.text}
                        </p>
                      )}
                      {item.items && item.items.length > 0 && (
                        <div className="space-y-3 mt-4">
                          {item.items.map((it, itIdx) => {
                            if (typeof it === "string") {
                              return (
                                <div key={itIdx} className="text-sm sm:text-base text-gray-700 flex items-start gap-2.5 leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                                  <span>{it}</span>
                                </div>
                              );
                            }
                            return (
                              <div key={itIdx} className="p-4 bg-white rounded-xl border border-gray-200/80 shadow-2xs">
                                {it.title && (
                                  <p className="font-bold text-sm sm:text-base text-emerald-950 mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                                    <span>{it.title}</span>
                                  </p>
                                )}
                                {it.points && it.points.length > 0 && (
                                  <ul className="space-y-2 pl-2">
                                    {it.points.map((pt, ptIdx) => (
                                      <li key={ptIdx} className="text-xs sm:text-sm text-gray-700 leading-relaxed flex items-start gap-2">
                                        <span className="text-emerald-600 font-bold">•</span>
                                        <span>{pt}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom prev/next and back navigation */}
                <footer className="mt-12 pt-6 border-t border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {(() => {
                    const curIdx = SEJARAH_ISLAM_COMPLETE_DATA.findIndex(s => s.id === activePeradabanSection.id);
                    return (
                      <>
                        <button
                          onClick={() => {
                            if (curIdx > 0) {
                              setShowFullPeradaban(SEJARAH_ISLAM_COMPLETE_DATA[curIdx - 1].id);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                          }}
                          disabled={curIdx <= 0}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-emerald-200 bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-xs sm:text-sm disabled:opacity-40 disabled:pointer-events-none transition shadow-xs"
                        >
                          <ArrowLeft size={16} />
                          <span>Topik Sebelumnya ({curIdx > 0 ? SEJARAH_ISLAM_COMPLETE_DATA[curIdx - 1].title : ""})</span>
                        </button>

                        <button
                          onClick={() => {
                            setShowFullPeradaban(null);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="text-xs font-bold text-emerald-700 hover:text-emerald-900 px-4 py-2"
                        >
                          Kembali ke Daftar 13 Topik
                        </button>

                        <button
                          onClick={() => {
                            if (curIdx < SEJARAH_ISLAM_COMPLETE_DATA.length - 1) {
                              setShowFullPeradaban(SEJARAH_ISLAM_COMPLETE_DATA[curIdx + 1].id);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                          }}
                          disabled={curIdx >= SEJARAH_ISLAM_COMPLETE_DATA.length - 1}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm disabled:opacity-40 disabled:pointer-events-none transition shadow-sm"
                        >
                          <span>Topik Selanjutnya ({curIdx < SEJARAH_ISLAM_COMPLETE_DATA.length - 1 ? SEJARAH_ISLAM_COMPLETE_DATA[curIdx + 1].title : ""})</span>
                          <ChevronRight size={16} />
                        </button>
                      </>
                    );
                  })()}
                </footer>
              </article>
            </div>
          ) : (
            /* List of 13 Sejarah Topics (When no topic is opened) */
            <div className="space-y-6">
              <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-700 text-amber-300 shrink-0">
                    <Landmark size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-emerald-950">Submenu: Sejarah Islam (13 Khazanah Peradaban)</h3>
                    <p className="text-xs text-emerald-800">
                      Dokumentasi komprehensif perkembangan peradaban Islam dari masa wahyu, Khulafaur Rasyidin, Dinasti Islam, Penaklukan Konstantinopel, hingga Nusantara.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-800 bg-white px-3 py-1 rounded-full border border-emerald-200 shrink-0">
                  {filteredPeradabanTopics.length} Topik
                </span>
              </div>

              {/* Search Box for Submenu Sejarah */}
              <div className="bg-white rounded-2xl border border-emerald-100 p-3 shadow-xs flex items-center gap-2">
                <Search size={18} className="text-gray-400 ml-2 shrink-0" />
                <input
                  type="text"
                  value={peradabanSearchQuery}
                  onChange={(e) => setPeradabanSearchQuery(e.target.value)}
                  placeholder="Cari topik sejarah (Al-Qur'an, Abbasiyah, Konstantinopel, Andalusia, Utsmaniyah)..."
                  className="w-full text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent"
                />
                {peradabanSearchQuery && (
                  <button
                    onClick={() => setPeradabanSearchQuery("")}
                    className="text-gray-400 hover:text-gray-600 p-1"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Grid of 13 Sejarah Topics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredPeradabanTopics.map((topic, idx) => (
                  <div
                    key={topic.id}
                    onClick={() => {
                      setShowFullPeradaban(topic.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="bg-white rounded-2xl border border-emerald-100 p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:border-emerald-300 relative overflow-hidden"
                  >
                    <div className="w-full min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 group-hover:bg-emerald-700 group-hover:text-amber-300 transition-colors shrink-0">
                          <History size={20} />
                        </div>
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                          Topik #{idx + 1}
                        </span>
                      </div>

                      <h3 className="font-bold text-base md:text-lg text-emerald-950 group-hover:text-emerald-700 leading-snug transition-colors">
                        {topic.title}
                      </h3>

                      <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                        {topic.subtitle}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                      <span className="text-[11px] text-emerald-700 font-medium">
                        {topic.content.length} Bagian Pembahasan
                      </span>
                      <div className="flex items-center gap-1 font-bold text-emerald-700 group-hover:text-emerald-900 group-hover:translate-x-0.5 transition-all">
                        <span>Baca Materi Lengkap</span>
                        <ChevronRight size={15} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
