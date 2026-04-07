import React, { useState, useEffect } from "react";
import axios from "axios";
import { Clock, MapPin, Quote, BookOpen, Star } from "lucide-react";
import { motion } from "motion/react";
import { format } from "date-fns";
import { id } from "date-fns/locale";

export default function Home() {
  const [prayerTimes, setPrayerTimes] = useState<any>(null);
  const [location, setLocation] = useState({ city: "Jakarta", country: "Indonesia" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const res = await axios.get(
          `https://api.aladhan.com/v1/timingsByCity?city=${location.city}&country=${location.country}&method=2`
        );
        setPrayerTimes(res.data.data.timings);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching prayer times", err);
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, [location]);

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Prayer Times */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-emerald-800 flex items-center gap-2">
              <Clock className="text-amber-500" /> Jadwal Sholat
            </h3>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <MapPin size={14} />
              <span>{location.city}</span>
            </div>
          </div>

          {loading ? (
            <div className="space-y-4 animate-pulse">
              {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-10 bg-gray-100 rounded-lg"></div>)}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3">
              {prayerTimes && Object.entries(prayerTimes)
                .filter(([key]) => ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].includes(key))
                .map(([name, time]: any) => (
                  <div key={name} className="flex justify-between items-center p-3 rounded-xl bg-emerald-50/50 hover:bg-emerald-50 transition-colors">
                    <span className="font-medium text-emerald-900">{name === "Fajr" ? "Subuh" : name === "Dhuhr" ? "Dzuhur" : name === "Asr" ? "Ashar" : name}</span>
                    <span className="font-bold text-emerald-700">{time}</span>
                  </div>
                ))}
            </div>
          )}
        </motion.div>

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
