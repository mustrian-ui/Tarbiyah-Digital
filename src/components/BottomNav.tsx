import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, BookOpen, Bookmark, Grid, Heart, History, 
  ScrollText, Calculator, X, ChevronRight, Sparkles, 
  Trash2, MessageSquare, BookCheck, Shield, CheckSquare, 
  Clock, Microscope, TrendingUp, Star, Scroll, Scale
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { getLastRead, clearLastRead, LastReadItem } from '../lib/lastRead';

export const BottomNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [lastRead, setLastRead] = useState<LastReadItem | null>(() => getLastRead());
  const [showSimpanModal, setShowSimpanModal] = useState(false);
  const [showLainnyaModal, setShowLainnyaModal] = useState(false);

  // Sync last read updates
  useEffect(() => {
    const updateHandler = () => {
      setLastRead(getLastRead());
    };
    window.addEventListener('tarbiyah_last_read_updated', updateHandler);
    return () => window.removeEventListener('tarbiyah_last_read_updated', updateHandler);
  }, []);

  const handleOpenSimpan = () => {
    setShowLainnyaModal(false);
    setShowSimpanModal(true);
  };

  const handleOpenLainnya = () => {
    setShowSimpanModal(false);
    setShowLainnyaModal(true);
  };

  const handleNavigateToLastRead = () => {
    if (lastRead) {
      setShowSimpanModal(false);
      navigate(`/quran?surah=${lastRead.surahNumber}&ayah=${lastRead.ayahNumber}`);
    } else {
      setShowSimpanModal(false);
      navigate('/quran');
    }
  };

  const handleClearLastRead = () => {
    clearLastRead();
    setLastRead(null);
  };

  const primaryMenuItems = [
    {
      title: "Doa Harian",
      desc: "Kumpulan doa mustajab sehari-hari",
      path: "/doa",
      icon: Heart,
      color: "bg-rose-50 text-rose-600 border-rose-100",
    },
    {
      title: "Sejarah",
      desc: "Artikel sejarah dakwah.id & peradaban Islam",
      path: "/sejarah",
      icon: History,
      color: "bg-amber-50 text-amber-700 border-amber-100",
    },
    {
      title: "Hadits Arba'in",
      desc: "42 Hadits pilihan Imam An-Nawawi",
      path: "/hadits",
      icon: ScrollText,
      color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    },
    {
      title: "Kalkulator & Bayar Zakat",
      desc: "Hitung zakat maal, fitrah & lembaga terpercaya",
      path: "/zakat",
      icon: Calculator,
      color: "bg-blue-50 text-blue-700 border-blue-100",
    },
  ];

  const secondaryMenuItems = [
    { title: "Tafsir As-Sa'di", path: "/tafsir", icon: BookOpen },
    { title: "Khutbah Jum'at", path: "/khutbah", icon: Scroll },
    { title: "Fikih", path: "/fikih", icon: Scale },
    { title: "Konsultasi AI", path: "/ai", icon: MessageSquare },
    { title: "Pedoman Ibadah", path: "/pedoman", icon: BookCheck },
    { title: "Peristiwa Agung", path: "/peristiwa", icon: Star },
    { title: "Tauhid", path: "/tauhid", icon: Shield },
    { title: "Ibadah Tracker", path: "/tracker", icon: CheckSquare },
    { title: "Ilmuwan Muslim", path: "/ilmuwan", icon: Microscope },
    { title: "Timeline Manusia", path: "/timeline", icon: Clock },
    { title: "Roadmap Diri", path: "/roadmap", icon: TrendingUp },
  ];

  return (
    <>
      {/* Mobile Bottom Navigation Bar (Hidden on desktop lg) */}
      <nav 
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-emerald-100 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-2 py-1.5"
        aria-label="Bottom Navigation"
      >
        <div className="max-w-md mx-auto grid grid-cols-4 items-center">
          {/* 1. Beranda */}
          <Link
            to="/"
            onClick={() => {
              setShowSimpanModal(false);
              setShowLainnyaModal(false);
            }}
            className={cn(
              "flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all",
              location.pathname === "/" && !showSimpanModal && !showLainnyaModal
                ? "text-emerald-800 font-bold"
                : "text-gray-500 hover:text-emerald-700"
            )}
          >
            <div className={cn(
              "p-1.5 rounded-xl transition-all",
              location.pathname === "/" && !showSimpanModal && !showLainnyaModal
                ? "bg-emerald-100 text-emerald-800"
                : "text-gray-500"
            )}>
              <Home size={20} />
            </div>
            <span className="text-[11px] mt-0.5">Beranda</span>
          </Link>

          {/* 2. Al-Qur'an */}
          <Link
            to="/quran"
            onClick={() => {
              setShowSimpanModal(false);
              setShowLainnyaModal(false);
            }}
            className={cn(
              "flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all",
              location.pathname === "/quran" && !showSimpanModal && !showLainnyaModal
                ? "text-emerald-800 font-bold"
                : "text-gray-500 hover:text-emerald-700"
            )}
          >
            <div className={cn(
              "p-1.5 rounded-xl transition-all",
              location.pathname === "/quran" && !showSimpanModal && !showLainnyaModal
                ? "bg-emerald-100 text-emerald-800"
                : "text-gray-500"
            )}>
              <BookOpen size={20} />
            </div>
            <span className="text-[11px] mt-0.5">Al-Qur'an</span>
          </Link>

          {/* 3. Simpan (Terakhir Dibaca) */}
          <button
            onClick={handleOpenSimpan}
            className={cn(
              "flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all relative",
              showSimpanModal
                ? "text-amber-600 font-bold"
                : "text-gray-500 hover:text-emerald-700"
            )}
          >
            <div className={cn(
              "p-1.5 rounded-xl transition-all relative",
              showSimpanModal
                ? "bg-amber-100 text-amber-700"
                : "text-gray-500"
            )}>
              <Bookmark size={20} className={lastRead ? "fill-amber-400 text-amber-500" : ""} />
              {lastRead && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-500" />
              )}
            </div>
            <span className="text-[11px] mt-0.5">Simpan</span>
          </button>

          {/* 4. Lainnya */}
          <button
            onClick={handleOpenLainnya}
            className={cn(
              "flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all",
              showLainnyaModal
                ? "text-emerald-800 font-bold"
                : "text-gray-500 hover:text-emerald-700"
            )}
          >
            <div className={cn(
              "p-1.5 rounded-xl transition-all",
              showLainnyaModal
                ? "bg-emerald-100 text-emerald-800"
                : "text-gray-500"
            )}>
              <Grid size={20} />
            </div>
            <span className="text-[11px] mt-0.5">Lainnya</span>
          </button>
        </div>
      </nav>

      {/* Modal / Bottom Sheet: SIMPAN (Bacaan Terakhir Dibaca) */}
      <AnimatePresence>
        {showSimpanModal && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl p-6 border border-emerald-100 max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center shadow-sm">
                    <Bookmark size={20} className="fill-emerald-950" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-emerald-950">Bacaan Al-Qur'an Tersimpan</h3>
                    <p className="text-xs text-gray-500">Penanda surah & ayat yang terakhir Anda baca</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowSimpanModal(false)}
                  className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                  aria-label="Tutup"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="mt-5 space-y-4">
                {lastRead ? (
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 text-white shadow-lg relative overflow-hidden">
                    <div className="flex items-start justify-between gap-3 relative z-10">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-full">
                          Terakhir Dibaca
                        </span>
                        <h4 className="text-2xl font-bold mt-2 text-white">
                          Surah {lastRead.surahName}
                        </h4>
                        <p className="text-xs text-emerald-100 mt-1">
                          Ayat ke-{lastRead.ayahNumber} dari {lastRead.totalAyah} Ayat ({lastRead.translation})
                        </p>
                      </div>

                      <span className="font-arabic text-3xl text-amber-300 shrink-0">
                        {lastRead.surahArabic}
                      </span>
                    </div>

                    <div className="mt-6 pt-4 border-t border-emerald-600/50 flex items-center justify-between gap-3 relative z-10">
                      <button
                        onClick={handleNavigateToLastRead}
                        className="flex-1 flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 active:scale-95 text-emerald-950 py-2.5 px-4 rounded-xl font-bold text-sm shadow transition"
                      >
                        <BookOpen size={16} />
                        <span>Lanjut Membaca Sekarang</span>
                      </button>

                      <button
                        onClick={handleClearLastRead}
                        className="p-2.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-900 text-emerald-200 hover:text-rose-300 transition"
                        title="Hapus Penanda"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                      <Bookmark size={150} />
                    </div>
                  </div>
                ) : (
                  <div className="p-8 text-center rounded-2xl bg-emerald-50/50 border border-emerald-100/80">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                      <Bookmark size={26} />
                    </div>
                    <h4 className="font-bold text-base text-emerald-900">Belum Ada Bacaan Tersimpan</h4>
                    <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto leading-relaxed">
                      Buka Mushaf Al-Qur'an, lalu ketuk tombol <strong>"Tandai Bacaan"</strong> pada ayat yang sedang Anda baca agar tersimpan di sini.
                    </p>
                    <button
                      onClick={() => {
                        setShowSimpanModal(false);
                        navigate('/quran');
                      }}
                      className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs shadow-sm transition"
                    >
                      <BookOpen size={15} />
                      <span>Buka Mushaf Al-Qur'an</span>
                    </button>
                  </div>
                )}

                {/* Quick Shortcut to Popular Surahs */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    Surah Pilihan Cepat:
                  </h5>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: "Al-Kahf", no: 18, desc: "Sunnah Hari Jum'at" },
                      { name: "Yasin", no: 36, desc: "Jantung Al-Qur'an" },
                      { name: "Al-Mulk", no: 67, desc: "Penyelamat Siksa Kubur" },
                      { name: "Al-Waqi'ah", no: 56, desc: "Pembuka Pintu Rezeki" }
                    ].map((s) => (
                      <button
                        key={s.no}
                        onClick={() => {
                          setShowSimpanModal(false);
                          navigate(`/quran?surah=${s.no}`);
                        }}
                        className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-emerald-50 text-left border border-gray-100 transition"
                      >
                        <div>
                          <p className="font-bold text-xs text-emerald-950">{s.name}</p>
                          <p className="text-[10px] text-gray-500">{s.desc}</p>
                        </div>
                        <ChevronRight size={14} className="text-emerald-700" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal / Bottom Sheet: LAINNYA (Doa, Sejarah, Hadits, Zakat, dll.) */}
      <AnimatePresence>
        {showLainnyaModal && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl p-6 border border-emerald-100 max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-700 text-amber-400 flex items-center justify-center shadow-sm">
                    <Grid size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-emerald-950">Menu & Fitur Lainnya</h3>
                    <p className="text-xs text-gray-500">Akses cepat seluruh layanan Tarbiyah Digital</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowLainnyaModal(false)}
                  className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                  aria-label="Tutup"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Requested Priority Menus: Doa Harian, Sejarah, Hadits, Zakat */}
              <div className="mt-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  Fitur Utama Pilihan Anda
                </span>
                <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {primaryMenuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setShowLainnyaModal(false)}
                      className={cn(
                        "flex items-start gap-3 p-3.5 rounded-2xl border transition shadow-xs hover:shadow-sm active:scale-98",
                        item.color
                      )}
                    >
                      <div className="p-2 rounded-xl bg-white shadow-xs shrink-0">
                        <item.icon size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm text-gray-900 flex items-center justify-between">
                          <span>{item.title}</span>
                          <ChevronRight size={14} className="text-gray-400" />
                        </h4>
                        <p className="text-[11px] text-gray-600 mt-0.5 leading-snug">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Additional Services Menu */}
              <div className="mt-5 pt-4 border-t border-gray-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-2.5">
                  Layanan Edukasi & Ibadah Lainnya
                </span>
                <div className="grid grid-cols-4 gap-2 text-center">
                  {secondaryMenuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setShowLainnyaModal(false)}
                      className="flex flex-col items-center p-2.5 rounded-xl hover:bg-emerald-50 transition active:scale-95 group"
                    >
                      <div className="w-10 h-10 rounded-2xl bg-emerald-100 group-hover:bg-emerald-700 text-emerald-800 group-hover:text-amber-300 flex items-center justify-center transition shadow-xs mb-1">
                        <item.icon size={19} />
                      </div>
                      <span className="text-[11px] font-medium text-gray-700 group-hover:text-emerald-900 leading-tight">
                        {item.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Footer info in sheet */}
              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                <span>Tarbiyah Digital © 2026</span>
                <button
                  onClick={() => setShowLainnyaModal(false)}
                  className="font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  Tutup Menu
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
