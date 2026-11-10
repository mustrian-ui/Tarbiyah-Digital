import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Clock, Quote, BookOpen, Star, Scroll, ChevronRight, 
  RotateCw, Sparkles, BookCheck, ArrowRight
} from "lucide-react";
import { motion } from "motion/react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { PWAInstallBanner } from "../components/PWAInstallBanner";
import { PrayerTimesCard } from "../components/PrayerTimesCard";
import { getDailyHadith, dailyHadithsList, DailyHadithItem } from "../lib/dailyHadith";

const dailyQuranQuotes = [
  {
    ayah: "Maka sesungguhnya bersama kesulitan ada kemudahan.",
    surah: "QS. Al-Insyirah: 5",
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا"
  },
  {
    ayah: "Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram.",
    surah: "QS. Ar-Ra'd: 28",
    arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ"
  },
  {
    ayah: "Dan barangsiapa bertakwa kepada Allah niscaya Dia akan mengadakan baginya jalan keluar.",
    surah: "QS. At-Talaq: 2",
    arabic: "وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا"
  },
  {
    ayah: "Dan Dia memberinya rezeki dari arah yang tiada disangka-sangkanya.",
    surah: "QS. At-Talaq: 3",
    arabic: "وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ"
  },
  {
    ayah: "Berdoalah kepada-Ku, niscaya akan Kuperkenankan bagimu.",
    surah: "QS. Ghafir: 60",
    arabic: "ادْعُونِي أَسْتَجِبْ لَكُمْ"
  },
  {
    ayah: "Dan bersabarlah! Sesungguhnya Allah beserta orang-orang yang sabar.",
    surah: "QS. Al-Anfal: 46",
    arabic: "وَاصْبِرُوا ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ"
  },
  {
    ayah: "Cukuplah Allah menjadi Penolong kami dan Allah adalah sebaik-baik Pelindung.",
    surah: "QS. Ali 'Imran: 173",
    arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ"
  },
  {
    ayah: "Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya.",
    surah: "QS. Al-Baqarah: 286",
    arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا"
  },
  {
    ayah: "Dan barangsiapa bertawakal kepada Allah, niscaya Allah akan mencukupkan (keperluan)nya.",
    surah: "QS. At-Talaq: 3",
    arabic: "وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ"
  },
  {
    ayah: "Sesungguhnya rahmat Allah amat dekat kepada orang-orang yang berbuat baik.",
    surah: "QS. Al-A'raf: 56",
    arabic: "إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِّنَ الْمُحْسِنِينَ"
  }
];

export default function Home() {
  const today = useMemo(() => new Date(), []);
  
  // Rotating Daily Quran Verse (rotates every day)
  const dailyQuote = useMemo(() => {
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 1).getTime()) / (1000 * 60 * 60 * 24));
    const index = Math.abs(dayOfYear) % dailyQuranQuotes.length;
    return dailyQuranQuotes[index];
  }, [today]);

  // Rotating Daily Hadith (changes automatically each day based on calendar)
  const defaultHadith = useMemo(() => getDailyHadith(today), [today]);
  const [activeHadith, setActiveHadith] = useState<DailyHadithItem>(defaultHadith);
  const [hadithOffset, setHadithOffset] = useState<number>(0);

  const handleNextHadith = () => {
    const nextOffset = (hadithOffset + 1) % dailyHadithsList.length;
    setHadithOffset(nextOffset);
    // Find next hadith in list
    const currentIndex = dailyHadithsList.findIndex(h => h.id === activeHadith.id);
    const nextIndex = (currentIndex + 1) % dailyHadithsList.length;
    setActiveHadith(dailyHadithsList[nextIndex]);
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 p-6 md:p-8 text-white shadow-2xl border border-emerald-700/40"
      >
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3.5 mb-3.5">
              <img 
                src="/logo.png" 
                alt="Logo Tarbiyah Digital" 
                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover ring-2 ring-amber-400/90 shadow-lg bg-emerald-950 shrink-0" 
              />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-full inline-block">
                  Pendidikan Islam Era Digital
                </span>
                <h1 className="text-xl md:text-2xl font-bold text-white mt-0.5">Tarbiyah Digital</h1>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1.5 text-amber-300">Assalamu'alaikum Warahmatullah</h2>
            <p className="text-emerald-100 text-sm md:text-base max-w-xl leading-relaxed">
              Platform edukasi Islami terpadu untuk mendampingi ibadah dan pembelajaran harian Anda.
            </p>
            <div className="mt-4 flex items-center gap-2 text-amber-300 text-sm font-medium">
              <Clock size={18} />
              <span>{format(today, "EEEE, d MMMM yyyy", { locale: id })}</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -mr-16 -mt-16 opacity-10 pointer-events-none">
          <Star size={300} className="fill-white" />
        </div>
      </motion.section>

      {/* PWA Install Banner */}
      <PWAInstallBanner />

      {/* Main 2-Column Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Kolom Kiri: Jadwal Sholat & Kartu Sorotan Khutbah Jum'at Tepat di Bawahnya */}
        <div className="space-y-6">
          {/* 1. Jadwal Sholat Waktu Setempat */}
          <PrayerTimesCard />

          {/* 2. Kartu Sorotan Materi Khutbah Jum'at (Tepat Dibawah Jadwal Sholat) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="rounded-3xl bg-gradient-to-br from-emerald-800 via-emerald-850 to-teal-900 p-6 text-white shadow-lg relative overflow-hidden flex flex-col justify-between border border-emerald-700/50 group"
          >
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center mb-3.5 shadow-sm">
                <Scroll size={20} />
              </div>

              <h3 className="text-xl font-bold text-white">Materi Khutbah Jum'at</h3>
              <p className="text-emerald-100 text-xs md:text-sm mt-1.5 leading-relaxed">
                Akses ratusan naskah khutbah tematik pilihan lengkap dengan teks Arab berharakat, terjemahan, dan Mode Mimbar khusus Khatib.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-emerald-700/60 flex items-center justify-between gap-3 relative z-10">
              <span className="text-xs text-emerald-200 font-medium">
                Tersedia Mode Mimbar & Cetak
              </span>
              <Link
                to="/khutbah"
                className="inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 active:scale-95 text-emerald-950 font-bold px-4 py-2.5 rounded-xl text-xs shadow transition shrink-0"
              >
                <span>Buka Materi Khutbah</span>
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Decorative background mark */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-8 translate-y-8">
              <Scroll size={160} />
            </div>
          </motion.div>

          {/* 3. Kartu Sorotan Tafsir As-Sa'di (QUL Tarteel Resource 503) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-3xl bg-gradient-to-br from-teal-900 via-emerald-900 to-slate-900 p-6 text-white shadow-lg relative overflow-hidden flex flex-col justify-between border border-teal-700/50 group"
          >
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center mb-3.5 shadow-sm">
                <BookOpen size={20} />
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider mb-2">
                <span>Kitab Tafsir Bahasa Indonesia</span>
              </div>

              <h3 className="text-xl font-bold text-white">Tafsir As-Sa'di Lengkap</h3>
              <p className="text-emerald-100 text-xs md:text-sm mt-1 leading-relaxed">
                Kaji kalamullah dengan kitab tafsir Syaikh As-Sa'di (Bahasa Indonesia) untuk seluruh surah dan ayat Al-Qur'an.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-emerald-700/60 flex items-center justify-between gap-3 relative z-10">
              <span className="text-xs text-amber-300 font-medium">
                QS. Al-Muzzammil 73:2 & 114 Surah
              </span>
              <Link
                to="/tafsir?surah=73&ayah=2"
                className="inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 active:scale-95 text-emerald-950 font-bold px-4 py-2.5 rounded-xl text-xs shadow transition shrink-0"
              >
                <span>Buka Tafsir</span>
                <ChevronRight size={16} />
              </Link>
            </div>

            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-8 translate-y-8">
              <BookOpen size={160} />
            </div>
          </motion.div>
        </div>

        {/* Kolom Kanan: Ayat Al-Qur'an & Hadits Pilihan (Berubah Otomatis Setiap Hari) */}
        <div className="space-y-6">
          {/* Ayat Al-Qur'an Pilihan Hari Ini */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-amber-50 rounded-3xl p-6 border border-amber-200/70 shadow-sm relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider">
                <Quote size={18} className="text-amber-500" />
                <span>Ayat Pilihan Hari Ini</span>
              </div>
              <span className="text-[11px] font-semibold text-amber-700 bg-amber-100/80 px-2.5 py-0.5 rounded-full">
                {dailyQuote.surah}
              </span>
            </div>

            <p className="text-2xl font-arabic text-right my-4 leading-loose text-emerald-950 font-semibold">
              {dailyQuote.arabic}
            </p>
            <p className="text-base italic text-emerald-900 leading-relaxed">
              "{dailyQuote.ayah}"
            </p>
          </motion.div>

          {/* Hadits Pilihan Hari Ini (Berubah Otomatis Setiap Hari) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-100 flex flex-col justify-between"
          >
            <div>
              {/* Header: Title, Category & Shuffle Button */}
              <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700">
                    <BookOpen size={16} />
                  </div>
                  <div>
                    <h4 className="leading-tight">Hadits Pilihan Hari Ini</h4>
                    <span className="text-[10px] text-gray-500 font-normal">
                      Berubah otomatis setiap hari
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    {activeHadith.category}
                  </span>
                  <button
                    onClick={handleNextHadith}
                    className="p-1.5 text-gray-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition"
                    title="Ganti Hadits Lain"
                  >
                    <RotateCw size={14} />
                  </button>
                </div>
              </div>

              {/* Hadith Title */}
              <h5 className="font-bold text-sm text-emerald-950 mb-2">
                {activeHadith.title}
              </h5>

              {/* Arabic text */}
              <p className="text-xl font-arabic text-right my-3 leading-loose text-emerald-950 font-medium">
                {activeHadith.arabic}
              </p>

              {/* Indonesian text translation */}
              <p className="text-gray-700 text-sm leading-relaxed italic bg-slate-50/70 p-3.5 rounded-2xl border border-slate-100">
                "{activeHadith.text}"
              </p>

              {/* Wisdom / Hikmah if present */}
              {activeHadith.wisdom && (
                <p className="text-xs text-emerald-800 mt-2.5 flex items-start gap-1.5 bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-100/60">
                  <Sparkles size={14} className="shrink-0 text-amber-500 mt-0.5" />
                  <span><strong>Hikmah:</strong> {activeHadith.wisdom}</span>
                </p>
              )}
            </div>

            {/* Footer with Narrator & Link to Hadits Page */}
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="font-bold text-emerald-700">
                — {activeHadith.narrator}
              </span>

              <Link
                to="/hadits"
                className="text-gray-500 hover:text-emerald-700 font-semibold inline-flex items-center gap-1 transition"
              >
                <span>Hadits Arba'in</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
