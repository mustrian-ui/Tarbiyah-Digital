import React, { useState } from "react";
import { Microscope, Search, ChevronRight, Book, Award, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const scientists = [
  {
    id: "ibnu-sina",
    name: "Ibnu Sina (Avicenna)",
    title: "Bapak Kedokteran Modern",
    bio: "Lahir di Afshana dekat Bukhara. Beliau adalah seorang polimatik yang menulis hampir 450 buku tentang berbagai subjek.",
    contributions: "Menulis Al-Qanun fi al-Tibb (The Canon of Medicine) yang menjadi standar medis di Eropa selama berabad-abad.",
    works: ["Al-Qanun fi al-Tibb", "Kitab al-Shifa"]
  },
  {
    id: "al-khwarizmi",
    name: "Al-Khwarizmi",
    title: "Bapak Aljabar",
    bio: "Ilmuwan Persia yang memberikan kontribusi besar dalam matematika, astronomi, dan geografi.",
    contributions: "Memperkenalkan konsep Aljabar dan angka nol ke dunia Barat.",
    works: ["Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala"]
  },
  {
    id: "al-farabi",
    name: "Al-Farabi",
    title: "Guru Kedua (Al-Mu'allim al-Thani)",
    bio: "Seorang filsuf dan ilmuwan yang menjembatani filsafat Yunani dengan pemikiran Islam.",
    contributions: "Kontribusi besar dalam logika, metafisika, etika, dan musik.",
    works: ["Al-Madina al-Fadila"]
  },
  {
    id: "ibnu-khaldun",
    name: "Ibnu Khaldun",
    title: "Bapak Sosiologi & Historiografi",
    bio: "Sejarawan dan sosiolog Muslim yang merumuskan teori-teori awal tentang kemajuan dan keruntuhan peradaban.",
    contributions: "Menemukan ilmu sosiologi dan sejarah modern.",
    works: ["Muqaddimah"]
  },
  {
    id: "al-biruni",
    name: "Al-Biruni",
    title: "Bapak Antropologi & Indologi",
    bio: "Seorang polimatik yang menguasai matematika, astronomi, sejarah, dan geografi.",
    contributions: "Menghitung keliling bumi dengan akurasi luar biasa pada masanya.",
    works: ["Kitab al-Hind"]
  },
  {
    id: "ibnu-al-haytham",
    name: "Ibnu Al-Haytham",
    title: "Bapak Optik Modern",
    bio: "Ilmuwan yang membuktikan bahwa cahaya masuk ke mata, bukan keluar dari mata.",
    contributions: "Menemukan prinsip dasar kamera obscura dan metode ilmiah.",
    works: ["Kitab al-Manazir"]
  },
  {
    id: "jabir-ibn-hayyan",
    name: "Jabir Ibn Hayyan",
    title: "Bapak Kimia",
    bio: "Ilmuwan yang memperkenalkan eksperimen laboratorium ke dalam ilmu kimia.",
    contributions: "Menemukan proses distilasi, kristalisasi, dan sublimasi.",
    works: ["Kitab al-Kimya"]
  },
  {
    id: "al-razi",
    name: "Al-Razi (Rhazes)",
    title: "Dokter Terbesar Zaman Keemasan",
    bio: "Seorang dokter, filsuf, dan kimiawan yang sangat produktif.",
    contributions: "Orang pertama yang membedakan antara cacar dan campak.",
    works: ["Al-Hawi"]
  },
  {
    id: "al-battani",
    name: "Al-Battani",
    title: "Ahli Astronomi & Trigonometri",
    bio: "Ilmuwan yang menghitung panjang tahun matahari dengan sangat akurat.",
    contributions: "Memperkenalkan fungsi trigonometri seperti sinus dan tangen.",
    works: ["Kitab az-Zij"]
  },
  {
    id: "al-zahrawi",
    name: "Al-Zahrawi (Albucasis)",
    title: "Bapak Bedah Modern",
    bio: "Seorang ahli bedah yang menemukan banyak instrumen bedah yang masih digunakan hingga kini.",
    contributions: "Menulis ensiklopedia medis bergambar pertama tentang bedah.",
    works: ["Al-Tasrif"]
  },
  {
    id: "nasir-al-din-al-tusi",
    name: "Nasir Al-Din Al-Tusi",
    title: "Polimatik & Astronom",
    bio: "Ilmuwan yang membangun observatorium Maragha.",
    contributions: "Mengembangkan model planet yang lebih akurat sebelum Copernicus.",
    works: ["Zij-i Ilkhani"]
  },
  {
    id: "al-kindi",
    name: "Al-Kindi",
    title: "Filsuf Arab Pertama",
    bio: "Seorang polimatik yang menerjemahkan karya-karya Yunani ke dalam bahasa Arab.",
    contributions: "Kontribusi dalam kriptografi, musik, dan kedokteran.",
    works: ["Risala fi al-Hila"]
  },
  {
    id: "al-idrisi",
    name: "Al-Idrisi",
    title: "Ahli Geografi & Kartografi",
    bio: "Ilmuwan yang membuat peta dunia paling akurat pada abad ke-12.",
    contributions: "Membuat Tabula Rogeriana, peta dunia yang sangat detail.",
    works: ["Nuzhat al-Mushtaq"]
  },
  {
    id: "umar-khayyam",
    name: "Umar Khayyam",
    title: "Penyair & Matematikawan",
    bio: "Terkenal dengan puisinya (Rubaiyat) dan kontribusinya dalam aljabar.",
    contributions: "Menemukan metode geometris untuk memecahkan persamaan kubik.",
    works: ["Rubaiyat"]
  }
];

export default function Ilmuwan() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredScientists = scientists.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-emerald-800">Ilmuwan Muslim Terkemuka</h2>
          <p className="text-gray-500">Mengenal tokoh-tokoh besar yang mengubah dunia melalui ilmu pengetahuan.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Cari Ilmuwan..."
            className="pl-10 pr-4 py-2 rounded-xl border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full md:w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScientists.map((s, index) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-3xl border border-emerald-50 shadow-sm overflow-hidden hover:shadow-md transition-all group"
          >
            <div className="p-6">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                <User size={24} />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-1">{s.name}</h3>
              <p className="text-sm font-bold text-amber-600 mb-4">{s.title}</p>
              <p className="text-gray-600 text-sm line-clamp-3 mb-6 leading-relaxed">
                {s.bio}
              </p>
              <button 
                onClick={() => setSelectedId(s.id)}
                className="w-full py-3 bg-emerald-50 text-emerald-700 rounded-xl font-bold hover:bg-emerald-700 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                Lihat Detail <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-900/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {(() => {
                const s = scientists.find(sci => sci.id === selectedId);
                if (!s) return null;
                return (
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-emerald-900">{s.name}</h3>
                        <p className="text-lg font-bold text-amber-600">{s.title}</p>
                      </div>
                      <button 
                        onClick={() => setSelectedId(null)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <ChevronRight className="rotate-90" />
                      </button>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h4 className="font-bold text-emerald-800 flex items-center gap-2">
                          <User size={18} /> Biografi
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{s.bio}</p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-bold text-emerald-800 flex items-center gap-2">
                          <Award size={18} /> Kontribusi Utama
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{s.contributions}</p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-bold text-emerald-800 flex items-center gap-2">
                          <Book size={18} /> Karya Terkenal
                        </h4>
                        <ul className="list-disc list-inside text-gray-700">
                          {s.works.map((work, i) => (
                            <li key={i}>{work}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button 
                      onClick={() => setSelectedId(null)}
                      className="mt-8 w-full py-4 bg-emerald-800 text-white rounded-2xl font-bold hover:bg-emerald-900 transition-colors"
                    >
                      Tutup
                    </button>
                  </div>
                );
              })()}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
