import React, { useState, useMemo, useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { 
  Crown, Search, ChevronRight, ChevronLeft, ArrowLeft, 
  Copy, Share2, CheckCircle2, Bookmark, Clock, BookOpen, 
  Quote, Sparkles, X, RotateCcw
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { KISAH_25_NABI_DATA, ProphetStory } from "../data/kisahNabiCompleteData";

export default function KisahNabi() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const selectedNabiId = searchParams.get("nabi");

  const [searchQuery, setSearchQuery] = useState("");
  const [fontSize, setFontSize] = useState<"normal" | "large">("normal");
  const [copyToast, setCopyToast] = useState(false);

  const readerTopRef = useRef<HTMLDivElement>(null);

  // Active prophet data
  const activeProphet = useMemo(() => {
    if (!selectedNabiId) return null;
    return KISAH_25_NABI_DATA.find((p) => p.id === selectedNabiId) || null;
  }, [selectedNabiId]);

  const activeIndex = useMemo(() => {
    if (!activeProphet) return -1;
    return KISAH_25_NABI_DATA.findIndex((p) => p.id === activeProphet.id);
  }, [activeProphet]);

  // Filtered prophets for search
  const filteredProphets = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return KISAH_25_NABI_DATA;
    return KISAH_25_NABI_DATA.filter((p) => 
      p.name.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.period.toLowerCase().includes(q) ||
      p.content.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  useEffect(() => {
    if (activeProphet && readerTopRef.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeProphet]);

  const handleSelectNabi = (id: string) => {
    setSearchParams({ nabi: id });
  };

  const handleBackToList = () => {
    setSearchParams({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevNabi = () => {
    if (activeIndex > 0) {
      const prev = KISAH_25_NABI_DATA[activeIndex - 1];
      setSearchParams({ nabi: prev.id });
    }
  };

  const handleNextNabi = () => {
    if (activeIndex >= 0 && activeIndex < KISAH_25_NABI_DATA.length - 1) {
      const next = KISAH_25_NABI_DATA[activeIndex + 1];
      setSearchParams({ nabi: next.id });
    }
  };

  const handleCopyStory = () => {
    if (!activeProphet) return;
    const text = `${activeProphet.name} - ${activeProphet.subtitle}\n\nMasa: ${activeProphet.period}\n\n${activeProphet.content}\n\nDalil:\n"${activeProphet.dalil?.text || ''}" (${activeProphet.dalil?.source || ''})`;
    navigator.clipboard.writeText(text);
    setCopyToast(true);
    setTimeout(() => setCopyToast(false), 2500);
  };

  const handleShareStory = async () => {
    if (!activeProphet) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Kisah ${activeProphet.name}`,
          text: `Kisah lengkap ${activeProphet.name}: ${activeProphet.subtitle}`,
          url: window.location.href,
        });
      } catch {
        // cancelled
      }
    } else {
      handleCopyStory();
    }
  };

  // Split narrative content into clean readable paragraphs
  const paragraphs = useMemo(() => {
    if (!activeProphet) return [];
    return activeProphet.content
      .split(/\n\s*\n|\r\n\s*\r\n/)
      .map((p) => p.trim())
      .filter(Boolean);
  }, [activeProphet]);

  return (
    <div className="w-full max-w-full min-w-0 overflow-x-hidden pb-32 lg:pb-8">
      {/* 1. Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 text-white p-6 sm:p-8 md:p-10 shadow-xl border border-emerald-700/40">
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <Crown size={240} />
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-semibold uppercase tracking-wider mb-3">
            <Crown size={14} className="text-amber-400" />
            <span>Khazanah 25 Nabi & Rasul</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            Kisah 25 Nabi & Rasul
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed max-w-2xl">
            Menelusuri narasi lengkap, mukjizat agung, dan keteladanan perjuangan 25 Nabi dan Rasul yang wajib diimani dalam risalah Islam dari Nabi Adam A.S. hingga Nabi Muhammad SAW.
          </p>

          {/* Search bar in header (when in list view) */}
          {!activeProphet && (
            <div className="mt-6 sm:mt-8 relative max-w-xl">
              <div className="relative flex items-center">
                <Search className="absolute left-4 text-emerald-800 pointer-events-none" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari nabi (Adam, Musa, Yusuf, Muhammad)..."
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
                  Ditemukan <span className="font-bold text-amber-300">{filteredProphets.length}</span> nabi untuk pencarian "{searchQuery}"
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 2. Reader View (When a Prophet is Selected) */}
      {activeProphet ? (
        <div ref={readerTopRef} className="mt-6 space-y-6">
          {/* Reader Top Action Bar */}
          <div className="sticky top-16 lg:top-4 z-30 bg-white/95 backdrop-blur-md border border-emerald-100 rounded-2xl p-3 shadow-md flex items-center justify-between gap-2">
            <button
              onClick={handleBackToList}
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2 rounded-xl transition"
            >
              <ArrowLeft size={16} />
              <span>Daftar 25 Nabi</span>
            </button>

            {/* Quick Prev / Next in Bar */}
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-gray-600">
              <button
                onClick={handlePrevNabi}
                disabled={activeIndex <= 0}
                className="p-1.5 rounded-lg border border-gray-200 hover:bg-emerald-50 hover:text-emerald-800 disabled:opacity-40 disabled:pointer-events-none transition"
                title="Nabi Sebelumnya"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-emerald-900 font-bold">
                Nabi ke-{activeIndex + 1} dari 25
              </span>
              <button
                onClick={handleNextNabi}
                disabled={activeIndex >= KISAH_25_NABI_DATA.length - 1}
                className="p-1.5 rounded-lg border border-gray-200 hover:bg-emerald-50 hover:text-emerald-800 disabled:opacity-40 disabled:pointer-events-none transition"
                title="Nabi Selanjutnya"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Font size & actions */}
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
                onClick={handleCopyStory}
                className="p-2 rounded-xl bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 border border-gray-200 transition"
                title="Salin Kisah"
              >
                <Copy size={18} />
              </button>

              <button
                onClick={handleShareStory}
                className="p-2 rounded-xl bg-emerald-700 text-white hover:bg-emerald-800 transition shadow-xs"
                title="Bagikan"
              >
                <Share2 size={18} />
              </button>
            </div>
          </div>

          {/* Copy Toast */}
          {copyToast && (
            <div className="fixed bottom-24 right-6 z-50 bg-emerald-950 text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-semibold animate-bounce">
              <CheckCircle2 size={16} className="text-amber-400" />
              <span>Kisah lengkap {activeProphet.name} berhasil disalin!</span>
            </div>
          )}

          {/* Prophet Detail Article */}
          <article className="bg-white rounded-3xl border border-emerald-100 shadow-lg p-5 sm:p-8 md:p-12 overflow-hidden">
            {/* Header Box */}
            <div className="border-b border-emerald-100 pb-6 mb-8">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>Urutan ke-{activeIndex + 1} dari 25 Nabi</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold">
                  <Clock size={13} className="text-amber-600" />
                  <span>Masa: {activeProphet.period}</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight">
                {activeProphet.name}
              </h2>
              <p className="text-emerald-700 font-semibold text-sm sm:text-base mt-1.5">
                {activeProphet.subtitle}
              </p>
            </div>

            {/* Qur'an Dalil Callout Box */}
            {activeProphet.dalil && (
              <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50/40 border border-emerald-200/80 shadow-xs relative">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wider mb-2">
                  <Quote size={16} className="text-amber-500" />
                  <span>Dalil Al-Qur'an</span>
                </div>
                <p className="text-sm sm:text-base italic text-emerald-950 leading-relaxed font-serif">
                  "{activeProphet.dalil.text}"
                </p>
                <p className="text-xs font-bold text-amber-700 mt-2 text-right">
                  — {activeProphet.dalil.source}
                </p>
              </div>
            )}

            {/* Full Narrative Text */}
            <div className={cn(
              "space-y-5 text-gray-800 leading-relaxed font-sans",
              fontSize === "normal" ? "text-base sm:text-lg" : "text-lg sm:text-xl leading-loose"
            )}>
              {paragraphs.map((para, idx) => (
                <p key={idx} className="text-justify first-letter:text-3xl first-letter:font-bold first-letter:text-emerald-800 first-letter:mr-1">
                  {para}
                </p>
              ))}
            </div>

            {/* Bottom Prophet Pagination & Navigation */}
            <div className="mt-12 pt-6 border-t border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={handlePrevNabi}
                disabled={activeIndex <= 0}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-emerald-200 bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-xs sm:text-sm disabled:opacity-40 disabled:pointer-events-none transition shadow-xs"
              >
                <ChevronLeft size={18} />
                <span>Nabi Sebelumnya ({activeIndex > 0 ? KISAH_25_NABI_DATA[activeIndex - 1].name : ""})</span>
              </button>

              <button
                onClick={handleBackToList}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-900 px-4 py-2"
              >
                Kembali ke Daftar 25 Nabi
              </button>

              <button
                onClick={handleNextNabi}
                disabled={activeIndex >= KISAH_25_NABI_DATA.length - 1}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm disabled:opacity-40 disabled:pointer-events-none transition shadow-sm"
              >
                <span>Nabi Selanjutnya ({activeIndex < KISAH_25_NABI_DATA.length - 1 ? KISAH_25_NABI_DATA[activeIndex + 1].name : ""})</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </article>
        </div>
      ) : (
        /* 3. List Grid View (All 25 Prophets) */
        <div className="mt-8 space-y-6">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-sm sm:text-base font-bold text-emerald-950 flex items-center gap-2">
              <BookOpen size={18} className="text-emerald-700" />
              <span>Daftar 25 Nabi & Rasul yang Wajib Diimani</span>
            </h2>
            <span className="text-xs text-gray-500 font-medium">
              Menampilkan {filteredProphets.length} nabi
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProphets.map((prophet, idx) => {
              const originalIndex = KISAH_25_NABI_DATA.findIndex((p) => p.id === prophet.id);

              return (
                <div
                  key={prophet.id}
                  onClick={() => handleSelectNabi(prophet.id)}
                  className="bg-white rounded-2xl border border-gray-100 hover:border-emerald-300 p-5 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Big Number Watermark */}
                  <div className="absolute top-2 right-3 font-extrabold text-3xl sm:text-4xl text-emerald-950/5 group-hover:text-emerald-700/10 transition-colors pointer-events-none">
                    #{originalIndex + 1}
                  </div>

                  <div>
                    {/* Top Tag & Number */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xs group-hover:bg-emerald-800 group-hover:text-amber-300 transition-colors">
                        {originalIndex + 1}
                      </span>
                      <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
                        {prophet.period}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                      {prophet.name}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2 leading-relaxed">
                      {prophet.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-emerald-700 group-hover:text-emerald-900">
                    <span>Baca Kisah Lengkap</span>
                    <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
