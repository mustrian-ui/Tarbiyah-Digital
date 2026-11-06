import React from "react";
import { Clock, Quote, BookOpen, Star } from "lucide-react";
import { motion } from "motion/react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { PWAInstallBanner } from "../components/PWAInstallBanner";
import { PrayerTimesCard } from "../components/PrayerTimesCard";

export default function Home() {

  const dailyQuote = {
    ayah: "Maka sesungguhnya bersama kesulitan ada kemudahan.",
    surah: "QS. Al-Insyirah: 5",
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا"
  };

  const dailyHadith = {
    text: "Sebaik-baik manusia adalah yang paling bermanfaat bagi orang lain.",
    narrator: "HR. Ahmad"
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-emerald-800 p-8 text-white shadow-2xl"
      >
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Assalamu'alaikum</h2>
          <p className="text-emerald-100 text-lg">Selamat datang di Tarbiyah Digital teman ibadah harianmu.</p>
          <div className="mt-6 flex items-center gap-2 text-amber-400 font-medium">
            <Clock size={20} />
            <span>{format(new Date(), "EEEE, d MMMM yyyy", { locale: id })}</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 -mr-16 -mt-16 opacity-10">
          <Star size={300} className="fill-white" />
        </div>
      </motion.section>

      {/* PWA Install Banner */}
      <PWAInstallBanner />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Prayer Times with Indonesian City Selection and GPS */}
        <PrayerTimesCard />

        {/* Daily Quote & Hadith */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-amber-50 rounded-2xl p-6 border border-amber-100"
          >
            <Quote className="text-amber-500 mb-4" size={32} />
            <p className="text-2xl font-arabic text-right mb-4 leading-loose text-emerald-900">{dailyQuote.arabic}</p>
            <p className="text-lg italic text-emerald-800 mb-2">"{dailyQuote.ayah}"</p>
            <p className="text-sm font-bold text-amber-600">— {dailyQuote.surah}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100"
          >
            <div className="flex items-center gap-2 mb-4 text-emerald-800 font-bold">
              <BookOpen size={20} className="text-emerald-600" />
              <span>Hadits Pilihan</span>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">"{dailyHadith.text}"</p>
            <p className="text-sm font-bold text-emerald-600">— {dailyHadith.narrator}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
