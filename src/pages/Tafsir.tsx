import React, { useState, useEffect, useMemo, useRef } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { 
  BookOpen, Search, Bookmark, Copy, Share2, 
  ArrowLeft, ChevronRight, ChevronLeft, CheckCircle2, 
  ExternalLink, Sparkles, RefreshCw, Book, Layers,
  Compass, Info, SlidersHorizontal, Eye
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { 
  SURAH_LIST, 
  getSurahMeta, 
  fetchTafsir, 
  getTafsirBookmarks, 
  toggleTafsirBookmark, 
  isTafsirBookmarked,
  INITIAL_TAFSIR_73_2 
} from "../services/tafsirService";
import { TafsirData, TafsirBookmark } from "../types/tafsir";

const POPULAR_AYAHS = [
  { surah: 73, ayah: 2, label: "Al-Muzzammil 73:2 (Rujukan)", desc: "Qiyamul Lail" },
  { surah: 1, ayah: 1, label: "Al-Fatihah 1:1", desc: "Ummul Kitab" },
  { surah: 2, ayah: 255, label: "Al-Baqarah 2:255", desc: "Ayat Kursi" },
  { surah: 18, ayah: 1, label: "Al-Kahf 18:1", desc: "Sunnah Jum'at" },
  { surah: 36, ayah: 1, label: "Ya-Sin 36:1", desc: "Jantung Al-Qur'an" },
  { surah: 67, ayah: 1, label: "Al-Mulk 67:1", desc: "Pelindung Siksa Kubur" },
  { surah: 112, ayah: 1, label: "Al-Ikhlas 112:1", desc: "Tauhid Murni" },
];

export default function Tafsir() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Read initial from query params, defaulting to 73:2 as requested by user
  const initialSurah = parseInt(searchParams.get("surah") || "73", 10);
  const initialAyah = parseInt(searchParams.get("ayah") || "2", 10);

  const [selectedSurahNum, setSelectedSurahNum] = useState<number>(initialSurah || 73);
  const [selectedAyahNum, setSelectedAyahNum] = useState<number>(initialAyah || 2);
  const [surahSearch, setSurahSearch] = useState<string>("");

  const [tafsirData, setTafsirData] = useState<TafsirData>(() => {
    if (initialSurah === 73 && initialAyah === 2) {
      return INITIAL_TAFSIR_73_2;
    }
    return INITIAL_TAFSIR_73_2;
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<"normal" | "large" | "xlarge">("large");
  const [copyToast, setCopyToast] = useState<boolean>(false);
  const [showBookmarksModal, setShowBookmarksModal] = useState<boolean>(false);
  const [bookmarks, setBookmarks] = useState<TafsirBookmark[]>(() => getTafsirBookmarks());

  const currentSurahMeta = useMemo(() => {
    return getSurahMeta(selectedSurahNum) || SURAH_LIST[72]; // Al-Muzzammil
  }, [selectedSurahNum]);

  const isSaved = isTafsirBookmarked(selectedSurahNum, selectedAyahNum);

  // Sync bookmarks listener
  useEffect(() => {
    const handleBookmarkChange = () => {
      setBookmarks(getTafsirBookmarks());
    };
    window.addEventListener("tarbiyah_tafsir_bookmark_changed", handleBookmarkChange);
    return () => window.removeEventListener("tarbiyah_tafsir_bookmark_changed", handleBookmarkChange);
  }, []);

  // Update URL and fetch data whenever surah or ayah changes
  useEffect(() => {
    const urlSurah = searchParams.get("surah");
    const urlAyah = searchParams.get("ayah");
    
    const targetSurah = urlSurah ? parseInt(urlSurah, 10) : 73;
    const targetAyah = urlAyah ? parseInt(urlAyah, 10) : 2;

    if (targetSurah !== selectedSurahNum || targetAyah !== selectedAyahNum) {
      setSelectedSurahNum(targetSurah);
      setSelectedAyahNum(targetAyah);
    }

    loadTafsir(targetSurah, targetAyah);
  }, [searchParams]);

  const loadTafsir = async (surah: number, ayah: number) => {
    setLoading(true);
    try {
      const data = await fetchTafsir(surah, ayah);
      setTafsirData(data);
    } catch (err) {
      console.error("Error loading tafsir:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectSurahAndAyah = (surah: number, ayah: number) => {
    setSelectedSurahNum(surah);
    setSelectedAyahNum(ayah);
    setSearchParams({ surah: String(surah), ayah: String(ayah) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevAyah = () => {
    if (selectedAyahNum > 1) {
      handleSelectSurahAndAyah(selectedSurahNum, selectedAyahNum - 1);
    } else if (selectedSurahNum > 1) {
      const prevSurah = getSurahMeta(selectedSurahNum - 1);
      if (prevSurah) {
        handleSelectSurahAndAyah(selectedSurahNum - 1, prevSurah.jumlahAyat);
      }
    }
  };

  const handleNextAyah = () => {
    if (selectedAyahNum < currentSurahMeta.jumlahAyat) {
      handleSelectSurahAndAyah(selectedSurahNum, selectedAyahNum + 1);
    } else if (selectedSurahNum < 114) {
      handleSelectSurahAndAyah(selectedSurahNum + 1, 1);
    }
  };

  const handleToggleBookmark = () => {
    toggleTafsirBookmark(selectedSurahNum, selectedAyahNum, currentSurahMeta.namaLatin);
    setBookmarks(getTafsirBookmarks());
  };

  const handleCopy = () => {
    const formatted = `Tafsir As-Sa'di (QS. ${currentSurahMeta.namaLatin} [${selectedSurahNum}]: ${selectedAyahNum})\n\nAyat:\n${tafsirData.quranText}\n\nTerjemahan:\n${tafsirData.translation}\n\nPenjelasan Tafsir:\n${tafsirData.tafsirBlocks.join("\n\n")}\n\nTarbiyah Digital`;
    navigator.clipboard.writeText(formatted);
    setCopyToast(true);
    setTimeout(() => setCopyToast(false), 2500);
  };

  const handleShare = async () => {
    const shareText = `Tafsir As-Sa'di: QS. ${currentSurahMeta.namaLatin} Ayat ${selectedAyahNum}`;
    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareText,
          text: `${shareText}\n${tafsirData.translation.slice(0, 100)}...`,
          url: shareUrl
        });
      } catch {
        // cancelled
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      setCopyToast(true);
      setTimeout(() => setCopyToast(false), 2500);
    }
  };

  const filteredSurahs = useMemo(() => {
    if (!surahSearch.trim()) return SURAH_LIST;
    const q = surahSearch.toLowerCase();
    return SURAH_LIST.filter(s => 
      s.namaLatin.toLowerCase().includes(q) || 
      s.arti.toLowerCase().includes(q) ||
      String(s.nomor).includes(q)
    );
  }, [surahSearch]);

  return (
    <div className="space-y-6 w-full max-w-full min-w-0 overflow-x-hidden">
      {/* 1. Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 text-white p-4 sm:p-6 md:p-8 shadow-xl relative overflow-hidden w-full max-w-full min-w-0">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-semibold mb-3 max-w-full">
            <BookOpen size={14} className="shrink-0" />
            <span className="truncate">Tafsir As-Sa'di — Bahasa Indonesia</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight break-words">
            Tafsir Al-Qur'an As-Sa'di
          </h1>

          <p className="text-emerald-100/90 text-xs sm:text-sm md:text-base mt-2 leading-relaxed break-words">
            Kitab <em>Taisir al-Karim ar-Rahman fi Tafsir Kalam al-Mannan</em> karya Syaikh Abdurrahman bin Nashir as-Sa'di 
            dalam terjemahan Bahasa Indonesia lengkap untuk setiap surah dan ayat.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 font-semibold">
              <BookOpen size={13} />
              <span>QS. {currentSurahMeta.namaLatin} Ayat {selectedAyahNum}</span>
            </span>

            <button
              onClick={() => setShowBookmarksModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-900/60 border border-emerald-700/60 text-emerald-200 hover:text-white transition"
            >
              <Bookmark size={13} className={bookmarks.length > 0 ? "fill-amber-400 text-amber-400" : ""} />
              <span>Tersimpan ({bookmarks.length})</span>
            </button>
          </div>
        </div>

        {/* Decorative background mark */}
        <div className="absolute -right-8 -bottom-10 opacity-10 pointer-events-none text-white">
          <BookOpen size={240} />
        </div>
      </div>

      {/* 2. Quick Popular Ayah Shortcuts */}
      <div className="bg-white rounded-2xl border border-emerald-100 p-3 sm:p-4 shadow-sm w-full max-w-full min-w-0 overflow-hidden space-y-2">
        <div className="flex items-center justify-between text-xs text-gray-500 px-1">
          <span className="font-semibold text-emerald-900 flex items-center gap-1.5">
            <Sparkles size={14} className="text-amber-500 shrink-0" />
            <span>Pilihan Ayat Penuh Makna & Rujukan:</span>
          </span>
          <span className="text-[11px] text-gray-400 hidden sm:inline">Geser untuk melihat ayat lainnya</span>
        </div>

        <div className="w-full max-w-full min-w-0 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none touch-pan-x">
          {POPULAR_AYAHS.map((item) => {
            const isCurrent = selectedSurahNum === item.surah && selectedAyahNum === item.ayah;
            return (
              <button
                key={`${item.surah}:${item.ayah}`}
                onClick={() => handleSelectSurahAndAyah(item.surah, item.ayah)}
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition shrink-0 flex items-center gap-1.5 border",
                  isCurrent
                    ? "bg-emerald-800 text-amber-300 border-emerald-800 font-bold shadow-xs"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-emerald-50 hover:border-emerald-200"
                )}
              >
                <span>{item.label}</span>
                <span className={cn(
                  "text-[10px] px-1.5 py-0.2 rounded",
                  isCurrent ? "bg-amber-400 text-emerald-950 font-bold" : "bg-gray-200 text-gray-600"
                )}>
                  {item.desc}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Surah & Ayah Selector Bar */}
      <div className="bg-white rounded-2xl border border-emerald-100 p-3.5 sm:p-4 shadow-sm w-full max-w-full min-w-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Surah Dropdown Picker */}
          <div className="md:col-span-6 flex flex-col gap-1 min-w-0">
            <label className="text-xs font-semibold text-gray-600 flex items-center gap-1.5">
              <Book size={14} className="text-emerald-700" />
              <span>Pilih Surah (1 – 114):</span>
            </label>
            <div className="relative min-w-0">
              <select
                value={selectedSurahNum}
                onChange={(e) => {
                  const s = parseInt(e.target.value, 10);
                  handleSelectSurahAndAyah(s, 1);
                }}
                className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-600 min-w-0"
              >
                {SURAH_LIST.map((s) => (
                  <option key={s.nomor} value={s.nomor}>
                    {s.nomor}. {s.namaLatin} ({s.nama}) — {s.jumlahAyat} Ayat
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Ayah Dropdown Picker */}
          <div className="md:col-span-3 flex flex-col gap-1 min-w-0">
            <label className="text-xs font-semibold text-gray-600 flex items-center gap-1.5">
              <Layers size={14} className="text-emerald-700" />
              <span>Nomor Ayat:</span>
            </label>
            <select
              value={selectedAyahNum}
              onChange={(e) => {
                const a = parseInt(e.target.value, 10);
                handleSelectSurahAndAyah(selectedSurahNum, a);
              }}
              className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-600 min-w-0"
            >
              {[...Array(currentSurahMeta.jumlahAyat)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  Ayat ke-{i + 1} (dari {currentSurahMeta.jumlahAyat})
                </option>
              ))}
            </select>
          </div>

          {/* Prev & Next Stepper Buttons */}
          <div className="md:col-span-3 flex items-center gap-2 pt-1 md:pt-5">
            <button
              onClick={handlePrevAyah}
              disabled={selectedSurahNum === 1 && selectedAyahNum === 1}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-gray-200 hover:bg-emerald-50 text-emerald-800 text-xs font-bold transition disabled:opacity-40 disabled:hover:bg-transparent"
              title="Ayat Sebelumnya"
            >
              <ChevronLeft size={16} />
              <span>Sebelumnya</span>
            </button>

            <button
              onClick={handleNextAyah}
              disabled={selectedSurahNum === 114 && selectedAyahNum === currentSurahMeta.jumlahAyat}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition shadow-xs disabled:opacity-40"
              title="Ayat Selanjutnya"
            >
              <span>Selanjutnya</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* 4. Reader Controls Toolbar */}
      <div className="sticky top-16 lg:top-4 z-30 bg-white/95 backdrop-blur-md border border-emerald-100 rounded-2xl p-2.5 sm:p-3 shadow-md flex flex-wrap items-center justify-between gap-2 no-print w-full max-w-full min-w-0">
        {/* Current Surah Status */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-emerald-800 text-amber-300 flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
            {selectedSurahNum}:{selectedAyahNum}
          </div>
          <div className="min-w-0">
            <h2 className="text-xs sm:text-sm font-bold text-emerald-950 truncate">
              QS. {currentSurahMeta.namaLatin} Ayat {selectedAyahNum}
            </h2>
            <p className="text-[11px] text-gray-500 truncate">
              {currentSurahMeta.arti} • {tafsirData.classification}
            </p>
          </div>
        </div>

        {/* Font Size & Action Buttons */}
        <div className="flex items-center gap-1.5 ml-auto">
          {/* Font Controls */}
          <div className="flex items-center gap-0.5 bg-gray-100 p-1 rounded-xl text-xs">
            <button
              onClick={() => setFontSize("normal")}
              className={cn(
                "px-2 sm:px-2.5 py-1 rounded-lg font-bold transition",
                fontSize === "normal" ? "bg-white text-emerald-800 shadow-xs" : "text-gray-600 hover:text-gray-900"
              )}
              title="Ukuran Normal"
            >
              A
            </button>
            <button
              onClick={() => setFontSize("large")}
              className={cn(
                "px-2 sm:px-2.5 py-1 rounded-lg font-bold transition",
                fontSize === "large" ? "bg-white text-emerald-800 shadow-xs" : "text-gray-600 hover:text-gray-900"
              )}
              title="Ukuran Besar"
            >
              A+
            </button>
            <button
              onClick={() => setFontSize("xlarge")}
              className={cn(
                "px-2 sm:px-2.5 py-1 rounded-lg font-bold transition",
                fontSize === "xlarge" ? "bg-white text-emerald-800 shadow-xs" : "text-gray-600 hover:text-gray-900"
              )}
              title="Ukuran Sangat Besar"
            >
              A++
            </button>
          </div>

          {/* Bookmark */}
          <button
            onClick={handleToggleBookmark}
            className={cn(
              "p-2 rounded-xl transition border",
              isSaved
                ? "bg-amber-50 text-amber-600 border-amber-300"
                : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
            )}
            title="Simpan Penanda Tafsir"
          >
            <Bookmark size={17} className={isSaved ? "fill-amber-500" : ""} />
          </button>

          {/* Copy */}
          <button
            onClick={handleCopy}
            className="p-2 rounded-xl bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 border border-gray-200 transition"
            title="Salin Teks Tafsir"
          >
            <Copy size={17} />
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            className="p-2 rounded-xl bg-emerald-700 text-white hover:bg-emerald-800 transition shadow-xs"
            title="Bagikan"
          >
            <Share2 size={17} />
          </button>

          {/* Mushaf Al-Quran Link */}
          <Link
            to={`/quran?surah=${selectedSurahNum}&ayah=${selectedAyahNum}`}
            className="hidden sm:inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 text-xs font-semibold transition"
            title="Buka Ayat di Mushaf Al-Qur'an"
          >
            <Book size={14} />
            <span>Mushaf</span>
          </Link>
        </div>
      </div>

      {/* Copy Toast */}
      {copyToast && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 bg-emerald-950 text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-semibold animate-bounce max-w-[calc(100vw-2rem)]">
          <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
          <span>Teks Tafsir As-Sa'di berhasil disalin!</span>
        </div>
      )}

      {/* 5. Main Tafsir Content Card */}
      <article className="bg-white rounded-3xl border border-emerald-100 shadow-lg p-4 sm:p-6 md:p-10 w-full max-w-full min-w-0 overflow-hidden break-words">
        {/* Callout Ayat Range Banner */}
        {tafsirData.callout && (
          <div className="mb-6 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50 border border-emerald-200/80 flex items-start gap-3">
            <div className="p-1.5 rounded-xl bg-emerald-800 text-amber-300 shrink-0 mt-0.5 shadow-2xs">
              <Layers size={16} />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                Cakupan Pembahasan Tafsir
              </span>
              <p className="text-xs sm:text-sm font-semibold text-emerald-950 mt-0.5">
                {tafsirData.callout}
              </p>
            </div>
          </div>
        )}

        {/* Header Title */}
        <header className="border-b border-emerald-100 pb-5 mb-6 text-center max-w-2xl mx-auto w-full min-w-0">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-3">
            <BookOpen size={14} />
            <span>Tafsir As-Sa'di (Indonesian)</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-emerald-950 leading-tight break-words min-w-0">
            Surah {currentSurahMeta.namaLatin} — Ayat {selectedAyahNum}
          </h1>

          <p className="font-arabic text-2xl text-emerald-800 mt-2">
            سُورَةُ {currentSurahMeta.nama}
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-500">
            <span className="bg-emerald-100/70 text-emerald-800 font-bold px-2.5 py-0.5 rounded-md">
              {tafsirData.classification}
            </span>
            <span>•</span>
            <span>Surah ke-{selectedSurahNum} dari 114</span>
            <span>•</span>
            <span>{currentSurahMeta.jumlahAyat} Total Ayat</span>
          </div>
        </header>

        {/* Loading Spinner */}
        {loading && (
          <div className="my-10 p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-center flex flex-col items-center justify-center gap-3">
            <RefreshCw size={24} className="animate-spin text-emerald-700" />
            <p className="text-xs sm:text-sm font-semibold text-emerald-900">
              Memuat penjelasan Tafsir As-Sa'di dari QUL Tarteel AI...
            </p>
          </div>
        )}

        {/* Quran Arabic Text Box */}
        {tafsirData.quranText && (
          <div className="mb-6 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/30 border border-emerald-200 shadow-xs w-full min-w-0">
            <div className="flex items-center justify-between text-xs font-semibold text-emerald-800 mb-3 pb-2 border-b border-emerald-100">
              <span className="flex items-center gap-1.5">
                <Book size={14} />
                <span>Teks Al-Qur'an (Rasm Utsmani)</span>
              </span>
              <span className="text-[11px] text-gray-500 font-normal">
                {currentSurahMeta.namaLatin}
              </span>
            </div>

            <p className="font-arabic text-right text-2xl sm:text-3xl md:text-4xl leading-loose sm:leading-loose text-emerald-950 break-words py-2">
              {tafsirData.quranText}
            </p>
          </div>
        )}

        {/* Translation Box */}
        {tafsirData.translation && (
          <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-amber-50/50 border border-amber-200/80 w-full min-w-0">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider mb-2">
              <Info size={14} className="text-amber-600 shrink-0" />
              <span>Terjemahan Ayat:</span>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-amber-950 italic leading-relaxed break-words">
              {tafsirData.translation}
            </p>
          </div>
        )}

        {/* Tafsir Body Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-emerald-100 text-emerald-950 font-bold text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <span>Penjelasan Tafsir As-Sa'di</span>
            </div>
            <span className="text-xs font-normal text-gray-500">
              Syaikh Abdurrahman as-Sa'di رحمه الله
            </span>
          </div>

          <div 
            className={cn(
              "tafsir-content prose max-w-none text-slate-800 break-words space-y-4",
              fontSize === "normal" ? "text-sm sm:text-base" : fontSize === "large" ? "text-base sm:text-lg leading-relaxed" : "text-lg sm:text-xl leading-loose font-medium"
            )}
          >
            {tafsirData.tafsirBlocks.length > 0 ? (
              tafsirData.tafsirBlocks.map((block, idx) => (
                <div 
                  key={idx} 
                  className="p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-100 hover:border-emerald-200 transition shadow-2xs"
                >
                  <p className="leading-relaxed text-gray-800">
                    {block}
                  </p>
                </div>
              ))
            ) : (
              <div 
                dangerouslySetInnerHTML={{ __html: tafsirData.tafsirHtml }} 
              />
            )}
          </div>
        </div>

        {/* Navigation Steppers at the bottom */}
        <div className="mt-10 pt-6 border-t border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-3 no-print w-full min-w-0">
          <button
            onClick={handlePrevAyah}
            disabled={selectedSurahNum === 1 && selectedAyahNum === 1}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 font-bold text-xs sm:text-sm transition disabled:opacity-40"
          >
            <ChevronLeft size={16} />
            <span>Ayat Sebelumnya</span>
          </button>

          <Link
            to={`/quran?surah=${selectedSurahNum}&ayah=${selectedAyahNum}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-xs transition"
          >
            <Book size={16} />
            <span>Buka di Mushaf Al-Qur'an</span>
          </Link>

          <button
            onClick={handleNextAyah}
            disabled={selectedSurahNum === 114 && selectedAyahNum === currentSurahMeta.jumlahAyat}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 font-bold text-xs sm:text-sm transition disabled:opacity-40"
          >
            <span>Ayat Selanjutnya</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Article Footer */}
        <footer className="mt-8 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 w-full min-w-0">
          <div className="flex items-center gap-2">
            <Info size={16} className="text-emerald-700 shrink-0" />
            <span>
              Kitab <strong>Taisir al-Karim ar-Rahman fi Tafsir Kalam al-Mannan</strong> — Syaikh Abdurrahman bin Nashir as-Sa'di.
            </span>
          </div>

          <span className="text-emerald-800 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Tarbiyah Digital
          </span>
        </footer>
      </article>

      {/* 6. Bookmarks Drawer / Modal */}
      <AnimatePresence>
        {showBookmarksModal && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl p-6 border border-emerald-100 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-400 text-emerald-950 flex items-center justify-center shadow-xs">
                    <Bookmark size={18} className="fill-emerald-950" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-emerald-950">Penanda Tafsir Tersimpan</h3>
                    <p className="text-xs text-gray-500">{bookmarks.length} Ayat tersimpan</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowBookmarksModal(false)}
                  className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 space-y-2">
                {bookmarks.length > 0 ? (
                  bookmarks.map((b) => (
                    <div
                      key={b.id}
                      onClick={() => {
                        handleSelectSurahAndAyah(b.surah, b.ayah);
                        setShowBookmarksModal(false);
                      }}
                      className="p-3 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-gray-100 flex items-center justify-between cursor-pointer transition group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-800 text-amber-300 flex items-center justify-center font-bold text-xs shrink-0">
                          {b.surah}:{b.ayah}
                        </div>
                        <div>
                          <p className="font-bold text-xs sm:text-sm text-emerald-950 group-hover:text-emerald-700">
                            Surah {b.surahName} : Ayat {b.ayah}
                          </p>
                          <p className="text-[11px] text-gray-400">
                            Disimpan pada {new Date(b.date).toLocaleDateString("id-ID")}
                          </p>
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-gray-400 group-hover:text-emerald-700 transition" />
                    </div>
                  ))
                ) : (
                  <div className="py-8 text-center text-gray-500">
                    <Bookmark size={32} className="mx-auto text-gray-300 mb-2" />
                    <p className="text-xs font-semibold">Belum ada penanda tafsir yang tersimpan.</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      Ketuk tombol bookmark pada ayat yang ingin Anda simpan.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
