import React, { useState, useMemo, useEffect } from "react";
import { 
  Heart, Search, Copy, Check, Bookmark, Share2, 
  Sparkles, Filter, X, ChevronRight, BookOpen, Quote
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { 
  DOA_CATEGORIES, 
  DOA_HARIAN_COMPLETE, 
  DoaItem, 
  DoaCategory 
} from "../data/doaHarianCompleteData";

const BOOKMARKS_STORAGE_KEY = "tarbiyah_doa_bookmarks";

export default function Doa() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showOnlyBookmarks, setShowOnlyBookmarks] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save bookmarks to localStorage
  const handleToggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setBookmarkedIds((prev) => {
      const updated = prev.includes(id) 
        ? prev.filter((item) => item !== id) 
        : [...prev, id];
      try {
        localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(updated));
      } catch (err) {
        console.error("Error saving bookmark:", err);
      }
      return updated;
    });
  };

  const copyToClipboard = (doa: DoaItem) => {
    const textToCopy = `${doa.title}\n\n${doa.arabic}\n\nArtinya:\n"${doa.translation}"\n\nSumber: ${doa.source}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(doa.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleShare = async (doa: DoaItem) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: doa.title,
          text: `${doa.title}\n\n${doa.arabic}\n\n"${doa.translation}"\n(${doa.source})`,
          url: window.location.href,
        });
      } catch {
        // cancelled
      }
    } else {
      copyToClipboard(doa);
    }
  };

  // Filter prayers
  const filteredDoa = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return DOA_HARIAN_COMPLETE.filter((doa) => {
      // Category filter
      const matchesCategory = selectedCategory === "semua" || doa.category === selectedCategory;
      
      // Bookmark filter
      const matchesBookmark = !showOnlyBookmarks || bookmarkedIds.includes(doa.id);

      // Search filter across title, translation, latin, and source
      const matchesSearch = !q || 
        doa.title.toLowerCase().includes(q) ||
        doa.translation.toLowerCase().includes(q) ||
        doa.latin.toLowerCase().includes(q) ||
        doa.source.toLowerCase().includes(q) ||
        doa.category.toLowerCase().includes(q);

      return matchesCategory && matchesBookmark && matchesSearch;
    });
  }, [searchQuery, selectedCategory, showOnlyBookmarks, bookmarkedIds]);

  return (
    <div className="w-full max-w-full min-w-0 overflow-x-hidden pb-32 lg:pb-8 space-y-6">
      {/* 1. Hero Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 text-white p-6 sm:p-8 md:p-10 shadow-xl border border-emerald-700/40">
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <Heart size={240} className="fill-white" />
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={14} className="text-amber-400" />
            <span>Kumpulan Doa & Dzikir Ma'tsur</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            Doa Harian Lengkap
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed max-w-2xl">
            Kumpulan doa sehari-hari, dzikir pagi petang, dan munajat mustajab bersumber dari Al-Qur'an dan As-Sunnah ash-Shahihah untuk mendampingi setiap hembusan aktivitas Anda.
          </p>

          {/* Search Box */}
          <div className="mt-6 sm:mt-8 relative max-w-xl">
            <div className="relative flex items-center">
              <Search className="absolute left-4 text-emerald-800 pointer-events-none" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari doa (tidur, makan, bepergian, pagi, orang tua)..."
                className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white text-gray-900 placeholder-gray-400 font-medium text-sm sm:text-base shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-400/40 transition border-0"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 text-gray-400 hover:text-gray-600 p-1"
                  aria-label="Bersihkan pencarian"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-xs text-emerald-200 mt-2 pl-2">
                Ditemukan <span className="font-bold text-amber-300">{filteredDoa.length}</span> doa untuk pencarian "{searchQuery}"
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 2. Category Filter Pills Bar */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-emerald-700" />
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-950">
              Kategori Doa & Dzikir
            </h2>
          </div>

          <button
            onClick={() => setShowOnlyBookmarks(!showOnlyBookmarks)}
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition border",
              showOnlyBookmarks
                ? "bg-amber-400 text-emerald-950 border-amber-400 shadow-xs"
                : "bg-white text-gray-600 border-gray-200 hover:bg-emerald-50 hover:text-emerald-800"
            )}
          >
            <Bookmark size={14} className={showOnlyBookmarks ? "fill-emerald-950" : ""} />
            <span>Tersimpan ({bookmarkedIds.length})</span>
          </button>
        </div>

        {/* Scrollable Categories Row */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar -mx-1 px-1">
          <button
            onClick={() => {
              setSelectedCategory("semua");
              setShowOnlyBookmarks(false);
            }}
            className={cn(
              "px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 shrink-0",
              selectedCategory === "semua" && !showOnlyBookmarks
                ? "bg-emerald-800 text-white shadow-md shadow-emerald-900/10 scale-102"
                : "bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 border border-gray-200/80"
            )}
          >
            <span>Semua Doa</span>
            <span className={cn(
              "text-[10px] px-2 py-0.5 rounded-full font-bold",
              selectedCategory === "semua" && !showOnlyBookmarks
                ? "bg-amber-400 text-emerald-950"
                : "bg-gray-100 text-gray-600"
            )}>
              {DOA_HARIAN_COMPLETE.length}
            </span>
          </button>

          {DOA_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.name && !showOnlyBookmarks;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.name);
                  setShowOnlyBookmarks(false);
                }}
                className={cn(
                  "px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 shrink-0",
                  isSelected
                    ? "bg-emerald-800 text-white shadow-md shadow-emerald-900/10 scale-102"
                    : "bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 border border-gray-200/80"
                )}
              >
                <span>{cat.name}</span>
                <span className={cn(
                  "text-[10px] px-2 py-0.5 rounded-full font-bold",
                  isSelected
                    ? "bg-amber-400 text-emerald-950"
                    : "bg-gray-100 text-gray-600"
                )}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Doa Cards Grid */}
      <div className="space-y-4">
        {filteredDoa.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:gap-5">
            {filteredDoa.map((doa, index) => {
              const isBookmarked = bookmarkedIds.includes(doa.id);
              const isCopied = copiedId === doa.id;

              return (
                <motion.div
                  key={doa.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.03, 0.3) }}
                  className="bg-white rounded-3xl p-5 sm:p-7 shadow-xs hover:shadow-md border border-emerald-100/90 transition-all group relative overflow-hidden"
                >
                  {/* Card Header Row */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-emerald-700 group-hover:text-amber-300 transition-colors">
                        <Heart size={16} className="fill-current" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                          {doa.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-emerald-950 mt-1 leading-snug">
                          {doa.title}
                        </h3>
                      </div>
                    </div>

                    {/* Quick Action Buttons */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={(e) => handleToggleBookmark(doa.id, e)}
                        className={cn(
                          "p-2 rounded-xl transition border",
                          isBookmarked
                            ? "bg-amber-50 text-amber-600 border-amber-300 shadow-2xs"
                            : "bg-gray-50 text-gray-400 hover:text-amber-500 border-gray-100 hover:bg-amber-50/50"
                        )}
                        title="Simpan ke Favorit"
                        aria-label="Simpan Doa"
                      >
                        <Bookmark size={17} className={isBookmarked ? "fill-amber-400" : ""} />
                      </button>

                      <button
                        onClick={() => copyToClipboard(doa)}
                        className={cn(
                          "p-2 rounded-xl transition border",
                          isCopied
                            ? "bg-emerald-600 text-white border-emerald-600 shadow-2xs"
                            : "bg-gray-50 text-gray-500 hover:text-emerald-700 border-gray-100 hover:bg-emerald-50"
                        )}
                        title="Salin Doa"
                        aria-label="Salin Teks Doa"
                      >
                        {isCopied ? <Check size={17} /> : <Copy size={17} />}
                      </button>

                      <button
                        onClick={() => handleShare(doa)}
                        className="p-2 rounded-xl bg-gray-50 text-gray-500 hover:text-emerald-700 border border-gray-100 hover:bg-emerald-50 transition"
                        title="Bagikan Doa"
                        aria-label="Bagikan Doa"
                      >
                        <Share2 size={17} />
                      </button>
                    </div>
                  </div>

                  {/* Arabic Text (Large, Harakat, High Contrast) */}
                  <div className="my-5 p-4 sm:p-5 rounded-2xl bg-emerald-50/40 border border-emerald-100/60">
                    <p className="font-arabic text-xl sm:text-2xl text-right leading-loose sm:leading-loose text-emerald-950 font-medium">
                      {doa.arabic}
                    </p>
                  </div>

                  {/* Transliteration (Latin) */}
                  {doa.latin && (
                    <div className="mb-3">
                      <p className="text-xs sm:text-sm text-emerald-800 italic font-medium leading-relaxed">
                        {doa.latin}
                      </p>
                    </div>
                  )}

                  {/* Indonesian Translation */}
                  <div className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans bg-slate-50/80 p-3 sm:p-4 rounded-xl border border-slate-100">
                    <p>
                      <strong>Artinya:</strong> "{doa.translation}"
                    </p>
                  </div>

                  {/* Card Footer: Source / Riwayat Hadits */}
                  {doa.source && (
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                      <span className="font-semibold text-emerald-700 bg-emerald-50/80 px-2.5 py-0.5 rounded-full border border-emerald-100/80">
                        Sumber: {doa.source}
                      </span>
                      {isCopied && (
                        <span className="text-emerald-600 font-bold flex items-center gap-1">
                          <Check size={13} />
                          <span>Tersalin ke clipboard</span>
                        </span>
                      )}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-emerald-100 p-12 text-center shadow-xs">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <Heart size={32} />
            </div>
            <h3 className="font-bold text-lg text-emerald-950">Doa Tidak Ditemukan</h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto mt-1">
              {showOnlyBookmarks 
                ? "Belum ada doa yang tersimpan di favorit Anda. Klik ikon bookmark pada doa untuk menyimpannya." 
                : `Tidak ada doa yang cocok dengan kata kunci "${searchQuery}". Silakan coba kata kunci lain.`}
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("semua");
                setShowOnlyBookmarks(false);
              }}
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 text-white text-xs font-semibold shadow hover:bg-emerald-800 transition"
            >
              Reset Filter Pencarian
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
