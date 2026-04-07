import React, { useState, useEffect } from "react";
import axios from "axios";
import { Search, Play, Pause, ChevronLeft, BookOpen, Music } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

export default function Quran() {
  const [surahs, setSurahs] = useState<any[]>([]);
  const [selectedSurah, setSelectedSurah] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    fetchSurahs();
  }, []);

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

  const fetchSurahDetail = async (number: number) => {
    setLoading(true);
    try {
      const res = await axios.get(`https://equran.id/api/v2/surat/${number}`);
      setSelectedSurah(res.data.data);
      setLoading(false);
      window.scrollTo(0, 0);
    } catch (err) {
      console.error("Error fetching surah detail", err);
      setLoading(false);
    }
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

      <AnimatePresence mode="wait">
        {!selectedSurah ? (
          <motion.div 
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h2 className="text-3xl font-bold text-emerald-800">Mushaf Al-Qur'an</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Cari Surah..."
                  className="pl-10 pr-4 py-2 rounded-xl border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full md:w-64"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSurahs.map((surah) => (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  key={surah.nomor}
                  onClick={() => fetchSurahDetail(surah.nomor)}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-emerald-50 shadow-sm hover:shadow-md transition-all text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                    {surah.nomor}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-emerald-900">{surah.namaLatin}</h4>
                    <p className="text-xs text-gray-500">{surah.arti} • {surah.jumlahAyat} Ayat</p>
                  </div>
                  <div className="text-right">
                    <p className="font-arabic text-xl text-emerald-700">{surah.nama}</p>
                  </div>
                </motion.button>
              ))}
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
            <button 
              onClick={() => setSelectedSurah(null)}
              className="flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800"
            >
              <ChevronLeft size={20} /> Kembali ke Daftar Surah
            </button>

            <div className="bg-emerald-800 rounded-3xl p-8 text-white text-center relative overflow-hidden shadow-xl">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-2">{selectedSurah.namaLatin}</h2>
                <p className="text-emerald-100 text-lg">{selectedSurah.arti} • {selectedSurah.tempatTurun} • {selectedSurah.jumlahAyat} Ayat</p>
                <div className="mt-6 flex justify-center">
                  <button 
                    onClick={() => toggleAudio(selectedSurah.audioFull["05"])}
                    className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-bold transition-colors shadow-lg"
                  >
                    {playingAudio === selectedSurah.audioFull["05"] ? <Pause size={20} /> : <Play size={20} />}
                    {playingAudio === selectedSurah.audioFull["05"] ? "Pause Murottal" : "Putar Murottal"}
                  </button>
                </div>
              </div>
              <div className="absolute top-0 right-0 -mr-12 -mt-12 opacity-10">
                <BookOpen size={200} />
              </div>
            </div>

            <div className="space-y-6">
              {selectedSurah.ayat.map((a: any) => (
                <div key={a.nomorAyat} className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-50 space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 text-xs font-bold">
                        {a.nomorAyat}
                      </div>
                      <button 
                        onClick={() => toggleAudio(a.audio["05"])}
                        className={cn(
                          "p-2 rounded-full transition-colors",
                          playingAudio === a.audio["05"] ? "bg-amber-100 text-amber-600" : "bg-gray-50 text-gray-400 hover:bg-emerald-50 hover:text-emerald-600"
                        )}
                      >
                        {playingAudio === a.audio["05"] ? <Pause size={16} /> : <Play size={16} />}
                      </button>
                    </div>
                    <p className="flex-1 text-right font-arabic text-3xl leading-loose text-emerald-900">
                      {a.teksArab}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-emerald-700 font-medium italic">{a.teksLatin}</p>
                    <p className="text-gray-600">{a.teksIndonesia}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
