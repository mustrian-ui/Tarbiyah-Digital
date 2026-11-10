import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Search, Play, Pause, ChevronLeft, BookOpen, Bookmark, Check, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useSearchParams, Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { getLastRead, saveLastRead, LastReadItem } from "../lib/lastRead";

export default function Quran() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [surahs, setSurahs] = useState<any[]>([]);
  const [selectedSurah, setSelectedSurah] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const [lastRead, setLastRead] = useState<LastReadItem | null>(() => getLastRead());
  const [savedNotification, setSavedNotification] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    fetchSurahs();
  }, []);

  // Listen for last read updates from other components (e.g. bottom nav)
  useEffect(() => {
    const handleUpdate = () => {
      setLastRead(getLastRead());
    };
    window.addEventListener('tarbiyah_last_read_updated', handleUpdate);
    return () => window.removeEventListener('tarbiyah_last_read_updated', handleUpdate);
  }, []);

  // Check URL query parameters (e.g. ?surah=18&ayah=10)
  useEffect(() => {
    const surahParam = searchParams.get('surah');
    const ayahParam = searchParams.get('ayah');

    if (surahParam) {
      const num = parseInt(surahParam, 10);
      if (!isNaN(num) && num >= 1 && num <= 114) {
        fetchSurahDetail(num, ayahParam ? parseInt(ayahParam, 10) : undefined);
      }
    }
  }, [searchParams]);

  const fetchSurahs = async () => {
    try {
      const res = await axios.get("https://equran.id/api/v2/surat");
      setSurahs(res.data.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching surahs", err);
      setLoading(false);
    }
  };

  const fetchSurahDetail = async (number: number, targetAyah?: number) => {
    setLoading(true);
    try {
      const res = await axios.get(`https://equran.id/api/v2/surat/${number}`);
      setSelectedSurah(res.data.data);
      setLoading(false);

      if (targetAyah) {
        setTimeout(() => {
          const el = document.getElementById(`ayah-${targetAyah}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.classList.add('ring-2', 'ring-amber-400');
            setTimeout(() => el.classList.remove('ring-2', 'ring-amber-400'), 3000);
          }
        }, 400);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (err) {
      console.error("Error fetching surah detail", err);
      setLoading(false);
    }
  };

  const handleBookmark = (ayahNumber: number = 1) => {
    if (!selectedSurah) return;

    const item: LastReadItem = {
      surahNumber: selectedSurah.nomor,
      surahName: selectedSurah.namaLatin,
      surahArabic: selectedSurah.nama,
      ayahNumber,
      totalAyah: selectedSurah.jumlahAyat,
      translation: selectedSurah.arti,
      updatedAt: new Date().toISOString()
    };

    saveLastRead(item);
    setLastRead(item);
    setSavedNotification(`Tersimpan: Surah ${item.surahName} Ayat ${ayahNumber}`);
    setTimeout(() => setSavedNotification(null), 3000);
  };

  const toggleAudio = (url: string) => {
    if (playingAudio === url) {
      audioRef.current?.pause();
      setPlayingAudio(null);
    } else {
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.play();
        setPlayingAudio(url);
      }
    }
  };

  const filteredSurahs = surahs.filter(s => 
    s.namaLatin.toLowerCase().includes(search.toLowerCase()) ||
    s.arti.toLowerCase().includes(search.toLowerCase())
  );

  if (loading && surahs.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-700"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <audio ref={audioRef} onEnded={() => setPlayingAudio(null)} />

      {/* Floating Toast Notification when bookmark is saved */}
      <AnimatePresence>
        {savedNotification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-6 z-50 flex items-center gap-2 bg-emerald-800 text-amber-300 px-4 py-2.5 rounded-2xl shadow-xl border border-amber-400/40 text-sm font-semibold"
          >
            <Check size={18} className="text-amber-400" />
            <span>{savedNotification}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!selectedSurah ? (
          <motion.div 
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Header Title & Search */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-emerald-900 flex items-center gap-2.5">
                  <BookOpen className="text-amber-500" /> Mushaf Al-Qur'an
                </h2>
                <p className="text-xs md:text-sm text-gray-500 mt-1">114 Surah lengkap dengan teks Arab, latin, terjemahan & murottal</p>
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Cari Surah atau arti..."
                  className="pl-10 pr-4 py-2.5 rounded-2xl border border-emerald-100 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full md:w-64 text-sm shadow-sm"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Terakhir Dibaca Banner Card */}
            {lastRead && !search && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 p-6 text-white shadow-lg border border-emerald-700/60"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-emerald-950 shadow-md">
                      <Bookmark size={24} className="fill-emerald-950" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded">
                          Terakhir Dibaca
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mt-1">
                        Surah {lastRead.surahName} <span className="font-arabic text-amber-300 font-normal ml-1">({lastRead.surahArabic})</span>
                      </h3>
                      <p className="text-xs text-emerald-100 mt-0.5">
                        Ayat ke-{lastRead.ayahNumber} • {lastRead.translation}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => fetchSurahDetail(lastRead.surahNumber, lastRead.ayahNumber)}
                    className="shrink-0 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-sm shadow-md transition-all active:scale-95"
                  >
                    <BookOpen size={16} />
                    <span>Lanjut Membaca</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Surah Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSurahs.map((surah) => {
                const isLastReadSurah = lastRead?.surahNumber === surah.nomor;
                return (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    key={surah.nomor}
                    onClick={() => fetchSurahDetail(surah.nomor)}
                    className={cn(
                      "flex items-center gap-4 p-4 bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all text-left relative",
                      isLastReadSurah 
                        ? "border-amber-400/80 bg-amber-50/20 ring-1 ring-amber-400/40" 
                        : "border-emerald-50"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0",
                      isLastReadSurah 
                        ? "bg-amber-400 text-emerald-950 shadow-sm" 
                        : "bg-emerald-100 text-emerald-800"
                    )}>
                      {surah.nomor}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-emerald-950 truncate">{surah.namaLatin}</h4>
                        {isLastReadSurah && (
                          <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.2 rounded shrink-0">
                            Terakhir
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 truncate">{surah.arti} • {surah.jumlahAyat} Ayat</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-arabic text-xl text-emerald-700">{surah.nama}</p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {/* Back Button */}
            <button 
              onClick={() => {
                setSelectedSurah(null);
                setSearchParams({});
              }}
              className="flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800 transition"
            >
              <ChevronLeft size={20} /> Kembali ke Daftar Surah
            </button>

            {/* Surah Detail Header Banner */}
            <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 rounded-3xl p-8 text-white text-center relative overflow-hidden shadow-xl border border-emerald-600/40">
              <div className="relative z-10 max-w-xl mx-auto">
                <span className="font-arabic text-4xl block text-amber-300 mb-2">
                  {selectedSurah.nama}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-1 text-white">
                  {selectedSurah.namaLatin}
                </h2>
                <p className="text-emerald-100 text-base">
                  {selectedSurah.arti} • {selectedSurah.tempatTurun} • {selectedSurah.jumlahAyat} Ayat
                </p>

                {/* Actions: Play Murottal & Tandai Terakhir Dibaca */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <button 
                    onClick={() => toggleAudio(selectedSurah.audioFull["05"])}
                    className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 active:scale-95 text-emerald-950 px-5 py-2.5 rounded-full font-bold transition-all shadow-md text-sm"
                  >
                    {playingAudio === selectedSurah.audioFull["05"] ? <Pause size={18} /> : <Play size={18} />}
                    {playingAudio === selectedSurah.audioFull["05"] ? "Pause Murottal" : "Putar Murottal"}
                  </button>

                  <button
                    onClick={() => handleBookmark(1)}
                    className={cn(
                      "flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all text-sm border shadow-sm active:scale-95",
                      lastRead?.surahNumber === selectedSurah.nomor 
                        ? "bg-amber-400 text-emerald-950 border-amber-300 font-bold" 
                        : "bg-white/10 hover:bg-white/20 text-white border-white/20"
                    )}
                  >
                    <Bookmark size={17} className={lastRead?.surahNumber === selectedSurah.nomor ? "fill-emerald-950" : ""} />
                    <span>
                      {lastRead?.surahNumber === selectedSurah.nomor ? "Tersimpan Terakhir Dibaca" : "Simpan Bacaan"}
                    </span>
                  </button>
                </div>
              </div>

              <div className="absolute top-0 right-0 -mr-12 -mt-12 opacity-10 pointer-events-none">
                <BookOpen size={200} />
              </div>
            </div>

            {/* Ayah List */}
            <div className="space-y-4">
              {selectedSurah.ayat.map((a: any) => {
                const isSavedAyah = lastRead?.surahNumber === selectedSurah.nomor && lastRead?.ayahNumber === a.nomorAyat;
                return (
                  <div 
                    id={`ayah-${a.nomorAyat}`}
                    key={a.nomorAyat} 
                    className={cn(
                      "bg-white rounded-3xl p-6 shadow-sm border transition-all duration-300 space-y-4",
                      isSavedAyah 
                        ? "border-amber-400 bg-amber-50/15 ring-2 ring-amber-400/50 shadow-md" 
                        : "border-emerald-50 hover:border-emerald-100"
                    )}
                  >
                    {/* Top Bar for each Ayah: Number, Audio, and Bookmark */}
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 text-xs font-bold">
                          {a.nomorAyat}
                        </span>

                        <button 
                          onClick={() => toggleAudio(a.audio["05"])}
                          className={cn(
                            "p-2 rounded-xl transition-colors",
                            playingAudio === a.audio["05"] 
                              ? "bg-amber-100 text-amber-700" 
                              : "bg-gray-50 text-gray-500 hover:bg-emerald-50 hover:text-emerald-700"
                          )}
                          title="Dengarkan ayat"
                        >
                          {playingAudio === a.audio["05"] ? <Pause size={15} /> : <Play size={15} />}
                        </button>
                      </div>

                      {/* Action buttons: Tafsir As-Sa'di and Bookmark */}
                      <div className="flex items-center gap-1.5">
                        <Link
                          to={`/tafsir?surah=${selectedSurah.nomor}&ayah=${a.nomorAyat}`}
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition"
                          title="Buka Tafsir As-Sa'di untuk ayat ini"
                        >
                          <BookOpen size={13} />
                          <span>Tafsir</span>
                        </Link>

                        {/* Bookmark button for this Ayah */}
                        <button
                          onClick={() => handleBookmark(a.nomorAyat)}
                          className={cn(
                            "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all",
                            isSavedAyah
                              ? "bg-amber-400 text-emerald-950 font-bold shadow-sm"
                              : "text-gray-500 hover:text-emerald-800 hover:bg-emerald-50"
                          )}
                          title="Simpan sebagai bacaan terakhir"
                        >
                          <Bookmark size={14} className={isSavedAyah ? "fill-emerald-950" : ""} />
                          <span>{isSavedAyah ? "Terakhir Dibaca" : "Tandai"}</span>
                        </button>
                      </div>
                    </div>

                    {/* Arabic Text */}
                    <p className="text-right font-arabic text-2xl md:text-3xl leading-loose text-emerald-950 py-2">
                      {a.teksArab}
                    </p>

                    {/* Transliteration & Indonesian Translation */}
                    <div className="space-y-1.5 pt-2 border-t border-gray-100/70">
                      <p className="text-emerald-800 font-medium italic text-xs md:text-sm">
                        {a.teksLatin}
                      </p>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                        {a.teksIndonesia}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
