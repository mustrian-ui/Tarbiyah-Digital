import React, { useState, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { 
  ScrollText, Search, Star, Share2, Copy, Printer, 
  ChevronRight, ArrowLeft, BookOpen, 
  CheckCircle2, Info, Sparkles, Filter, RefreshCw, 
  Eye, Check, Bookmark, BookCheck, ShieldAlert
} from "lucide-react";
import { 
  fetchKhutbahPosts, 
  getCachedKhutbahBySlug, 
  getBookmarkedIds, 
  toggleKhutbahBookmark,
  cleanContentHtml
} from "../services/khutbahService";
import { KhutbahItem } from "../types/khutbah";
import { cn } from "../lib/utils";

export default function Khutbah() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSlug = searchParams.get("slug");

  const [posts, setPosts] = useState<KhutbahItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<string>("Semua");
  const [showOnlyBookmarked, setShowOnlyBookmarked] = useState<boolean>(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>(() => getBookmarkedIds());
  
  // Active reading post
  const [activePost, setActivePost] = useState<KhutbahItem | null>(null);
  const [fontSize, setFontSize] = useState<"normal" | "large" | "mimbar">("large");
  const [copyToast, setCopyToast] = useState<boolean>(false);
  const [showRukunGuide, setShowRukunGuide] = useState<boolean>(false);

  const readerTopRef = useRef<HTMLDivElement>(null);

  // Sync bookmarks
  useEffect(() => {
    const handleBookmarkChange = () => {
      setBookmarkedIds(getBookmarkedIds());
    };
    window.addEventListener("tarbiyah_khutbah_bookmark_changed", handleBookmarkChange);
    return () => window.removeEventListener("tarbiyah_khutbah_bookmark_changed", handleBookmarkChange);
  }, []);

  // Initial fetch
  useEffect(() => {
    loadPosts(1, searchQuery);
  }, [searchQuery]);

  // Check URL parameter for specific post
  useEffect(() => {
    if (selectedSlug) {
      const foundInCurrent = posts.find(p => p.slug === selectedSlug);
      if (foundInCurrent) {
        setActivePost(foundInCurrent);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const cached = getCachedKhutbahBySlug(selectedSlug);
        if (cached) {
          setActivePost(cached);
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          // fetch single post
          fetch(`https://www.dakwah.id/wp-json/wp/v2/posts?slug=${selectedSlug}&_embed=true`)
            .then(res => res.json())
            .then(data => {
              if (Array.isArray(data) && data[0]) {
                const p = data[0];
                const content = cleanContentHtml(p.content?.rendered || "");
                const item: KhutbahItem = {
                  id: p.id,
                  slug: p.slug,
                  title: p.title.rendered.replace(/&#8217;/g, "'").replace(/&amp;/g, "&"),
                  date: p.date,
                  link: "",
                  featuredImage: p._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
                  pemateri: "Ustadz Dakwah.id",
                  excerpt: p.excerpt.rendered.replace(/<[^>]+>/g, " ").trim(),
                  contentHtml: content
                };
                setActivePost(item);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            })
            .catch(err => console.error(err));
        }
      }
    } else {
      setActivePost(null);
    }
  }, [selectedSlug, posts]);

  const loadPosts = async (page: number, query: string = "") => {
    if (page === 1) setLoading(true);
    else setLoadingMore(true);

    try {
      const data = await fetchKhutbahPosts(page, query);
      if (page === 1) {
        setPosts(data.items);
      } else {
        setPosts(prev => {
          const ids = new Set(prev.map(p => p.id));
          const newUnique = data.items.filter(p => !ids.has(p.id));
          return [...prev, ...newUnique];
        });
      }
      setTotalPages(data.totalPages);
      setTotalCount(data.totalCount);
      setCurrentPage(page);
    } catch (err) {
      console.error("Error loading khutbah posts:", err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const handleOpenPost = (post: KhutbahItem) => {
    setActivePost(post);
    setSearchParams({ slug: post.slug });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToList = () => {
    setActivePost(null);
    setSearchParams({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToggleBookmark = (id: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const isSaved = toggleKhutbahBookmark(id);
    setBookmarkedIds(getBookmarkedIds());
  };

  const handleCopyText = () => {
    if (!activePost) return;
    const parser = new DOMParser();
    const doc = parser.parseFromString(activePost.contentHtml, "text/html");
    const text = doc.body.textContent || doc.body.innerText || "";
    
    const formatted = `${activePost.title}\n${activePost.pemateri}\n\n${text}`;
    navigator.clipboard.writeText(formatted);
    setCopyToast(true);
    setTimeout(() => setCopyToast(false), 2500);
  };

  const handleShare = async () => {
    if (!activePost) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: activePost.title,
          text: `Materi Khutbah Jum'at: ${activePost.title} (${activePost.pemateri})`,
          url: window.location.href
        });
      } catch {
        // Share cancelled or failed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopyToast(true);
      setTimeout(() => setCopyToast(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Filtered by Topic & Bookmark
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      if (showOnlyBookmarked && !bookmarkedIds.includes(post.id)) {
        return false;
      }
      if (selectedTopic !== "Semua") {
        const titleLower = post.title.toLowerCase();
        const excerptLower = post.excerpt.toLowerCase();
        if (selectedTopic === "Akhlak") {
          return titleLower.includes("akhlak") || titleLower.includes("hati") || titleLower.includes("jiwa") || excerptLower.includes("akhlak");
        }
        if (selectedTopic === "Aqidah & Iman") {
          return titleLower.includes("iman") || titleLower.includes("tauhid") || titleLower.includes("taqwa") || excerptLower.includes("iman");
        }
        if (selectedTopic === "Sosial & Keadilan") {
          return titleLower.includes("zalim") || titleLower.includes("tertindas") || titleLower.includes("masyarakat") || titleLower.includes("persaudaraan");
        }
        if (selectedTopic === "Lingkungan") {
          return titleLower.includes("alam") || titleLower.includes("lingkungan") || titleLower.includes("karhutla") || titleLower.includes("bumi");
        }
        if (selectedTopic === "Keluarga & Muamalah") {
          return titleLower.includes("rezeki") || titleLower.includes("keluarga") || titleLower.includes("harta") || titleLower.includes("gratifikasi") || titleLower.includes("korupsi");
        }
      }
      return true;
    });
  }, [posts, selectedTopic, showOnlyBookmarked, bookmarkedIds]);

  const topics = [
    "Semua",
    "Aqidah & Iman",
    "Akhlak",
    "Sosial & Keadilan",
    "Lingkungan",
    "Keluarga & Muamalah"
  ];

  return (
    <div className="space-y-6">
      {/* 1. Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 text-white p-6 md:p-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-semibold mb-3">
            <ScrollText size={14} />
            <span>Naskah Khutbah Pilihan Resmi Dakwah.id</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            Materi Khutbah Jum'at
          </h1>

          <p className="text-emerald-100/90 text-sm md:text-base mt-2 leading-relaxed">
            Kumpulan naskah khutbah Jum'at tematik lengkap dengan teks Arab berharakat, 
            terjemahan, dalil Al-Qur'an & Hadits, serta mode pembaca mimbar yang nyaman bagi para Khatib & Da'i.
          </p>

          {/* Quick Rukun Khutbah Guide toggle */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowRukunGuide(!showRukunGuide)}
              className="inline-flex items-center gap-2 bg-emerald-700/70 hover:bg-emerald-700 text-amber-300 text-xs font-semibold px-3.5 py-2 rounded-xl transition border border-emerald-600/40"
            >
              <BookCheck size={16} />
              <span>{showRukunGuide ? "Tutup Panduan Rukun Khutbah" : "Lihat 5 Rukun Khutbah Jum'at"}</span>
            </button>

            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-200 px-3 py-2 rounded-xl bg-emerald-900/50 border border-emerald-700/40">
              <ScrollText size={13} className="text-amber-300" />
              <span>Koleksi Naskah Khutbah Lengkap</span>
            </div>
          </div>
        </div>

        {/* Decorative background mark */}
        <div className="absolute -right-8 -bottom-10 opacity-10 pointer-events-none text-white">
          <ScrollText size={220} />
        </div>
      </div>

      {/* Rukun Khutbah Accordion Guide */}
      {showRukunGuide && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 shadow-sm text-amber-950 transition-all">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-400 text-emerald-950 shrink-0 mt-0.5">
              <BookCheck size={20} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base text-amber-950">5 Rukun Khutbah Jum'at (Mazhab Syafi'i)</h3>
              <p className="text-xs text-amber-800 mt-0.5 mb-3">
                Khatib wajib memenuhi kelima rukun ini agar khutbah sah menurut syariat:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white border border-amber-200/70 flex items-start gap-2">
                  <span className="font-bold text-emerald-800 bg-emerald-100 rounded-full w-5 h-5 flex items-center justify-center shrink-0">1</span>
                  <span><strong>Memuji Allah (Tahmid)</strong> pada khutbah pertama dan kedua (misal: <em>Alhamdulillah</em>).</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-amber-200/70 flex items-start gap-2">
                  <span className="font-bold text-emerald-800 bg-emerald-100 rounded-full w-5 h-5 flex items-center justify-center shrink-0">2</span>
                  <span><strong>Membaca Shalawat Nabi SAW</strong> pada khutbah pertama dan kedua.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-amber-200/70 flex items-start gap-2">
                  <span className="font-bold text-emerald-800 bg-emerald-100 rounded-full w-5 h-5 flex items-center justify-center shrink-0">3</span>
                  <span><strong>Berwasiat Taqwa (Ittaqullah)</strong> pada kedua khutbah.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-amber-200/70 flex items-start gap-2">
                  <span className="font-bold text-emerald-800 bg-emerald-100 rounded-full w-5 h-5 flex items-center justify-center shrink-0">4</span>
                  <span><strong>Membaca minimal satu ayat Al-Qur'an</strong> yang dapat dipahami maknanya di salah satu khutbah.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-amber-200/70 flex items-start gap-2 md:col-span-2">
                  <span className="font-bold text-emerald-800 bg-emerald-100 rounded-full w-5 h-5 flex items-center justify-center shrink-0">5</span>
                  <span><strong>Mendoakan kaum mukminin dan mukminat</strong> pada khutbah kedua (memohon ampunan & keselamatan).</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Reader View Mode (if an article is actively selected) */}
      {activePost ? (
        <div ref={readerTopRef} className="space-y-4">
          {/* Top Control Bar */}
          <div className="sticky top-16 lg:top-4 z-30 bg-white/95 backdrop-blur-md border border-emerald-100 rounded-2xl p-3 shadow-md flex flex-wrap items-center justify-between gap-3 no-print">
            <button
              onClick={handleBackToList}
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 px-3 py-2 rounded-xl transition"
            >
              <ArrowLeft size={16} />
              <span>Daftar Khutbah</span>
            </button>

            {/* Font Size & Mode Mimbar */}
            <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl text-xs">
              <span className="text-gray-500 px-2 font-medium hidden sm:inline">Ukuran Teks:</span>
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
              <button
                onClick={() => setFontSize("mimbar")}
                className={cn(
                  "px-3 py-1 rounded-lg font-extrabold transition flex items-center gap-1",
                  fontSize === "mimbar" ? "bg-emerald-700 text-amber-300 shadow-xs" : "text-gray-600 hover:text-gray-900"
                )}
                title="Mode Mimbar Khusus Khatib"
              >
                <span>Mimbar</span>
              </button>
            </div>

            {/* Actions: Bookmark, Copy, Print, Share */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handleToggleBookmark(activePost.id)}
                className={cn(
                  "p-2 rounded-xl transition border",
                  bookmarkedIds.includes(activePost.id)
                    ? "bg-amber-50 text-amber-600 border-amber-300"
                    : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                )}
                title="Simpan ke Favorit"
              >
                <Bookmark size={18} className={bookmarkedIds.includes(activePost.id) ? "fill-amber-500" : ""} />
              </button>

              <button
                onClick={handleCopyText}
                className="p-2 rounded-xl bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 border border-gray-200 transition"
                title="Salin Teks Khutbah"
              >
                <Copy size={18} />
              </button>

              <button
                onClick={handlePrint}
                className="p-2 rounded-xl bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 border border-gray-200 transition"
                title="Cetak Khutbah"
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

          {/* Toast Notification for Copy/Share */}
          {copyToast && (
            <div className="fixed bottom-24 right-6 z-50 bg-emerald-950 text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-semibold animate-bounce">
              <CheckCircle2 size={16} className="text-amber-400" />
              <span>Naskah berhasil disalin ke clipboard!</span>
            </div>
          )}

          {/* Main Article Container */}
          <article className={cn(
            "bg-white rounded-3xl border border-emerald-100 shadow-lg p-6 md:p-10 khutbah-print-card",
            fontSize === "mimbar" ? "bg-amber-50/20" : ""
          )}>
            {/* Post Header */}
            <header className="border-b border-emerald-100 pb-6 mb-8 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-3">
                <ScrollText size={14} />
                <span>Naskah Khutbah Jum'at</span>
              </div>

              <h1 className={cn(
                "font-extrabold text-emerald-950 leading-tight",
                fontSize === "normal" ? "text-xl md:text-2xl" : fontSize === "large" ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"
              )}>
                {activePost.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500">
                <span className="font-semibold text-emerald-800 bg-emerald-100/60 px-2.5 py-1 rounded-lg">
                  {activePost.pemateri}
                </span>
                <span>•</span>
                <span>{new Date(activePost.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
                <span>•</span>
                <span className="text-gray-500 font-medium">Dakwah.id</span>
              </div>
            </header>

            {/* Featured Image if available */}
            {activePost.featuredImage && (
              <div className="max-w-xl mx-auto mb-8 rounded-2xl overflow-hidden shadow-sm no-print">
                <img
                  src={activePost.featuredImage}
                  alt={activePost.title}
                  className="w-full h-auto object-cover max-h-80"
                  loading="lazy"
                />
              </div>
            )}

            {/* Content Body */}
            <div 
              className={cn(
                "khutbah-content prose max-w-none text-slate-800",
                fontSize === "normal" ? "text-base" : fontSize === "large" ? "text-lg md:text-xl" : "text-xl md:text-2xl font-medium leading-loose"
              )}
              dangerouslySetInnerHTML={{ __html: activePost.contentHtml }}
            />

            {/* Attribution and Footer */}
            <footer className="mt-12 pt-6 border-t border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <Info size={16} className="text-emerald-700 shrink-0" />
                <span>Materi resmi disadur dari <strong>dakwah.id</strong> untuk kepentingan dakwah & ibadah umat Islam.</span>
              </div>
              <span className="text-emerald-700 font-medium bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                Tarbiyah Digital
              </span>
            </footer>
          </article>
        </div>
      ) : (
        /* 3. List of Khutbah Cards */
        <div className="space-y-6">
          {/* Filter Bar & Search */}
          <div className="bg-white rounded-2xl border border-emerald-100 p-4 shadow-sm space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Search input */}
              <div className="relative flex-1">
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari tema khutbah (misal: Palestina, rezeki, taqwa, keluarga, zalim)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-sm"
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

              {/* Bookmark Filter Toggle */}
              <button
                onClick={() => setShowOnlyBookmarked(!showOnlyBookmarked)}
                className={cn(
                  "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition shrink-0",
                  showOnlyBookmarked
                    ? "bg-amber-400 text-emerald-950 border-amber-400 font-bold shadow-xs"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-emerald-50"
                )}
              >
                <Bookmark size={15} className={showOnlyBookmarked ? "fill-emerald-950" : ""} />
                <span>Tersimpan ({bookmarkedIds.length})</span>
              </button>
            </div>

            {/* Topic Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-none">
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
                <Filter size={13} />
                <span>Topik:</span>
              </span>
              {topics.map(t => (
                <button
                  key={t}
                  onClick={() => setSelectedTopic(t)}
                  className={cn(
                    "px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition",
                    selectedTopic === t
                      ? "bg-emerald-800 text-amber-300 font-bold shadow-xs"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Total Results indicator */}
          <div className="flex items-center justify-between text-xs text-gray-500 px-1">
            <span>
              Menampilkan <strong>{filteredPosts.length}</strong> naskah khutbah
              {totalCount > 0 ? ` (dari total ~${totalCount} koleksi dakwah.id)` : ""}
            </span>
            {searchQuery && (
              <span className="text-emerald-700 font-medium">
                Pencarian untuk: "{searchQuery}"
              </span>
            )}
          </div>

          {/* Cards Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-emerald-100 animate-pulse space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/2 pt-2"></div>
                </div>
              ))}
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPosts.map((post) => {
                const isBookmarked = bookmarkedIds.includes(post.id);
                return (
                  <div
                    key={post.id}
                    onClick={() => handleOpenPost(post)}
                    className="bg-white rounded-2xl border border-emerald-100 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer hover:border-emerald-300"
                  >
                    <div>
                      {/* Top metadata */}
                      <div className="flex items-start justify-between gap-2 mb-2.5">
                        <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100 truncate max-w-[200px]">
                          {post.pemateri}
                        </span>

                        <button
                          onClick={(e) => handleToggleBookmark(post.id, e)}
                          className={cn(
                            "p-1.5 rounded-lg transition",
                            isBookmarked
                              ? "text-amber-500 bg-amber-50"
                              : "text-gray-300 hover:text-amber-400"
                          )}
                          title="Simpan Khutbah"
                        >
                          <Bookmark size={18} className={isBookmarked ? "fill-amber-400" : ""} />
                        </button>
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-base md:text-lg text-emerald-950 group-hover:text-emerald-700 leading-snug line-clamp-2 transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-xs text-gray-600 mt-2 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Bottom CTA & Date */}
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                      <span>
                        {new Date(post.date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric"
                        })}
                      </span>

                      <div className="flex items-center gap-1 font-bold text-emerald-700 group-hover:text-emerald-900 group-hover:translate-x-0.5 transition-all">
                        <span>Baca Naskah</span>
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
                <ScrollText size={32} />
              </div>
              <h3 className="font-bold text-lg text-gray-900">Naskah Khutbah Tidak Ditemukan</h3>
              <p className="text-sm text-gray-500 max-w-md mx-auto mt-1">
                {showOnlyBookmarked 
                  ? "Anda belum menyimpan naskah khutbah ke daftar favorit. Ketuk ikon penanda/bookmark pada naskah untuk menyimpannya." 
                  : "Coba gunakan kata kunci pencarian lain atau pilih topik khutbah yang berbeda."}
              </p>
              {(searchQuery || showOnlyBookmarked || selectedTopic !== "Semua") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedTopic("Semua");
                    setShowOnlyBookmarked(false);
                  }}
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-semibold shadow hover:bg-emerald-800 transition"
                >
                  <RefreshCw size={14} />
                  <span>Reset Semua Filter</span>
                </button>
              )}
            </div>
          )}

          {/* Pagination / Load More button */}
          {!loading && currentPage < totalPages && !showOnlyBookmarked && (
            <div className="text-center pt-4">
              <button
                onClick={() => loadPosts(currentPage + 1, searchQuery)}
                disabled={loadingMore}
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs md:text-sm px-6 py-3 rounded-2xl shadow-sm transition disabled:opacity-50"
              >
                {loadingMore ? (
                  <>
                    <RefreshCw size={16} className="animate-spin" />
                    <span>Memuat Naskah dari Dakwah.id...</span>
                  </>
                ) : (
                  <>
                    <RefreshCw size={16} />
                    <span>Muat Naskah Khutbah Berikutnya (Halaman {currentPage + 1} dari {totalPages})</span>
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
