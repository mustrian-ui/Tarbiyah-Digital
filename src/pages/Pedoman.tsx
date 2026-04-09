import React, { useState } from "react";
import { BookOpen, ChevronRight, CheckCircle2, Info, X, Quote, FileText, Sparkles, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const guides = [
  {
    id: "shalat",
    title: "Pedoman Shalat",
    icon: CheckCircle2,
    steps: [
      "Niat dan Takbiratul Ihram",
      "Membaca Doa Iftitah",
      "Membaca Al-Fatihah dan Surat Pendek",
      "Ruku' dengan Thuma'ninah",
      "I'tidal",
      "Sujud Pertama",
      "Duduk di Antara Dua Sujud",
      "Sujud Kedua",
      "Tahiyat Akhir dan Salam"
    ],
    articles: [
      {
        title: "Syarat Sahnya Sholat",
        content: `
          <p>Agar shalat kita diterima oleh Allah SWT, ada beberapa syarat sah yang harus dipenuhi sebelum memulai shalat:</p>
          <ul>
            <li><strong>Suci dari hadats besar dan kecil:</strong> Melalui wudhu atau mandi wajib.</li>
            <li><strong>Suci badan, pakaian, dan tempat:</strong> Dari najis yang tidak dimaafkan.</li>
            <li><strong>Menutup aurat:</strong> Bagi laki-laki antara pusar dan lutut, bagi perempuan seluruh tubuh kecuali wajah dan telapak tangan.</li>
            <li><strong>Menghadap kiblat:</strong> Ke arah Ka'bah di Makkah.</li>
            <li><strong>Telah masuk waktu shalat:</strong> Berdasarkan jadwal yang ditentukan.</li>
            <li><strong>Mengetahui kefardhuan shalat:</strong> Paham mana yang rukun dan mana yang sunnah.</li>
          </ul>
        `,
        quran: {
          verse: "Wahai orang-orang yang beriman! Apabila kamu hendak melaksanakan shalat, maka basuhlah wajahmu dan tanganmu sampai ke siku, dan usaplah kepalamu dan (basuh) kedua kakimu sampai ke kedua mata kaki.",
          source: "QS. Al-Ma'idah: 6"
        }
      }
    ]
  },
  {
    id: "thaharah",
    title: "Pedoman Bersuci",
    icon: CheckCircle2,
    steps: [
      "Niat dalam hati",
      "Membasuh telapak tangan",
      "Berkumur-kumur",
      "Membasuh hidung (Istinsyaq)",
      "Membasuh muka",
      "Membasuh kedua tangan hingga siku",
      "Mengusap sebagian kepala",
      "Membasuh kedua telinga",
      "Membasuh kedua kaki hingga mata kaki",
      "Tertib dan membaca doa setelah wudhu"
    ],
    articles: [
      {
        title: "Tata Cara Tayamum",
        content: `
          <p>Tayamum adalah pengganti wudhu atau mandi wajib dalam kondisi darurat (tidak ada air atau sakit). Berikut tata caranya:</p>
          <ol>
            <li><strong>Niat:</strong> Berniat untuk diperbolehkan shalat.</li>
            <li><strong>Menyiapkan debu:</strong> Gunakan debu yang suci.</li>
            <li><strong>Menepuk debu:</strong> Tepukkan kedua telapak tangan ke debu, lalu tiup sedikit agar tidak terlalu tebal.</li>
            <li><strong>Mengusap wajah:</strong> Usapkan ke seluruh wajah dengan sekali usapan.</li>
            <li><strong>Mengusap tangan:</strong> Tepukkan tangan kembali ke tempat debu yang berbeda, lalu usapkan ke tangan kanan hingga siku, kemudian tangan kiri hingga siku.</li>
            <li><strong>Tertib:</strong> Dilakukan secara berurutan.</li>
          </ol>
        `,
        quran: {
          verse: "...dan jika kamu sakit atau dalam perjalanan atau kembali dari tempat buang air (kakus) atau menyentuh perempuan, lalu kamu tidak memperoleh air, maka bertayamumlah dengan tanah yang baik (suci); sapulah mukamu dan tanganmu dengan tanah itu.",
          source: "QS. Al-Ma'idah: 6"
        }
      }
    ]
  },
  {
    id: "dzikir",
    title: "Pedoman Dzikir Setelah Shalat",
    icon: Sparkles,
    steps: [
      "Istighfar 3x (Astaghfirullahal 'adzim)",
      "Membaca Allahumma Antas Salam...",
      "Membaca Tasbih (Subhanallah) 33x",
      "Membaca Tahmid (Alhamdulillah) 33x",
      "Membaca Takbir (Allahu Akbar) 33x",
      "Membaca Tahlil Sempurna",
      "Membaca Ayat Kursi",
      "Berdoa dengan khusyuk"
    ],
    articles: [
      {
        title: "Keutamaan Dzikir",
        content: `
          <p>Dzikir setelah shalat adalah waktu yang sangat mustajab untuk memohon ampunan dan keberkahan. Rasulullah SAW bersabda bahwa siapa yang membaca tasbih, tahmid, dan takbir masing-masing 33 kali lalu menggenapkannya menjadi 100 dengan tahlil, maka dosa-dosanya akan diampuni meskipun sebanyak buih di lautan.</p>
        `,
        quran: {
          verse: "(Yaitu) orang-orang yang beriman dan hati mereka menjadi tenteram dengan mengingat Allah. Ingatlah, hanya dengan mengingati Allah-lah hati menjadi tenteram.",
          source: "QS. Ar-Ra'd: 28"
        }
      }
    ]
  },
  {
    id: "tahlil",
    title: "Pedoman Tahlil Lengkap",
    icon: FileText,
    steps: [
      "Hadlarah (Tawasul kepada Nabi, Sahabat, Ulama, Ahli Kubur)",
      "Membaca Surat Al-Ikhlas, Al-Falaq, An-Nas",
      "Membaca Awal Surat Al-Baqarah",
      "Membaca Ayat Kursi",
      "Membaca Istighfar",
      "Membaca Tahlil (Laa ilaha illallah) secara berulang",
      "Membaca Sholawat",
      "Doa Penutup Tahlil"
    ],
    articles: [
      {
        title: "Adab Bertahlil",
        content: `
          <p>Tahlil adalah tradisi dzikir berjamaah yang fokus pada kalimat tauhid. Adabnya meliputi niat yang ikhlas untuk mendoakan ahli kubur, berpakaian rapi, menghadap kiblat jika memungkinkan, dan menjaga kekhusyukan suara.</p>
        `,
        quran: {
          verse: "Dan orang-orang yang datang sesudah mereka (Muhajirin dan Anshor), mereka berdoa: 'Ya Rabb kami, beri ampunlah kami dan saudara-saudara kami yang telah beriman lebih dulu dari kami...'",
          source: "QS. Al-Hasyr: 10"
        }
      }
    ]
  },
  {
    id: "sholawat",
    title: "Pedoman Sholawat",
    icon: Heart,
    steps: [
      "Sholawat Ibrahimiyah (Paling Utama)",
      "Sholawat Nariyah",
      "Sholawat Tibbil Qulub (Syifa)",
      "Sholawat Jibril (Shallallahu 'ala Muhammad)",
      "Sholawat Badar",
      "Sholawat Munjiyat"
    ],
    articles: [
      {
        title: "Bacaan Sholawat Pilihan",
        content: `
          <div class="space-y-6">
            <div className="p-4 bg-emerald-50 rounded-2xl">
              <p className="font-bold text-emerald-900 mb-2">1. Sholawat Jibril</p>
              <p className="text-right font-arabic text-xl mb-2">صَلَّى اللهُ عَلَى مُحَمَّد</p>
              <p className="text-sm italic">"Shallallahu 'ala Muhammad"</p>
              <p className="text-xs text-gray-600 mt-1">Artinya: Semoga Allah memberikan rahmat-Nya kepada Nabi Muhammad.</p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-2xl">
              <p className="font-bold text-emerald-900 mb-2">2. Sholawat Ibrahimiyah</p>
              <p className="text-right font-arabic text-xl mb-2">اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ...</p>
              <p className="text-xs text-gray-600 mt-1">Ini adalah sholawat yang dibaca saat Tahiyat dalam shalat.</p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-2xl">
              <p className="font-bold text-emerald-900 mb-2">3. Sholawat Tibbil Qulub</p>
              <p className="text-right font-arabic text-xl mb-2">اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ طِبِّ الْقُلُوبِ وَدَوَائِهَا...</p>
              <p className="text-xs text-gray-600 mt-1">Sholawat untuk ketenangan hati dan kesehatan lahir batin.</p>
            </div>
          </div>
        `,
        quran: {
          verse: "Sesungguhnya Allah dan malaikat-malaikat-Nya bershalawat untuk Nabi. Wahai orang-orang yang beriman, bershalawatlah kamu untuk Nabi dan ucapkanlah salam penghormatan kepadanya.",
          source: "QS. Al-Ahzab: 56"
        }
      }
    ]
  },
  {
    id: "fiqih",
    title: "Pedoman Fiqih Dasar",
    icon: BookOpen,
    steps: [
      "Fiqih Ibadah (Thaharah, Shalat, Zakat, Puasa, Haji)",
      "Fiqih Muamalah (Jual Beli, Hutang Piutang)",
      "Fiqih Munakahat (Pernikahan)",
      "Fiqih Jinayah (Hukum Pidana Islam)",
      "Mengenal Madzhab yang Empat"
    ],
    articles: [
      {
        title: "Pentingnya Belajar Fiqih",
        content: `
          <p>Fiqih adalah pemahaman mendalam tentang hukum-hukum syariat yang bersifat praktis. Dengan belajar fiqih, seorang muslim dapat menjalankan ibadah dengan benar sesuai tuntunan Rasulullah SAW dan menghindari kesalahan yang dapat membatalkan ibadah.</p>
        `,
        quran: {
          verse: "...Mengapa tidak pergi dari tiap-tiap golongan di antara mereka beberapa orang untuk memperdalam pengetahuan mereka tentang agama dan untuk memberi peringatan kepada kaumnya apabila mereka telah kembali kepadanya, supaya mereka itu dapat menjaga dirinya.",
          source: "QS. At-Taubah: 122"
        }
      }
    ]
  }
];

export default function Pedoman() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<{ title: string, content: string, quran: { verse: string, source: string } } | null>(null);

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
          <BookOpen size={32} />
        </div>
        <h2 className="text-3xl font-bold text-emerald-800">Pedoman Ibadah</h2>
        <p className="text-gray-500 mt-2">Panduan lengkap langkah demi langkah dalam menjalankan ibadah sesuai syariat.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {guides.map((guide) => (
          <motion.div
            key={guide.id}
            layout
            className={cn(
              "bg-white rounded-3xl border border-emerald-50 shadow-sm overflow-hidden transition-all",
              activeId === guide.id ? "ring-2 ring-emerald-500 shadow-lg" : "hover:shadow-md"
            )}
          >
            <button
              onClick={() => setActiveId(activeId === guide.id ? null : guide.id)}
              className="w-full p-6 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-50 text-emerald-700 rounded-2xl">
                  <guide.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-emerald-900">{guide.title}</h3>
              </div>
              <ChevronRight 
                className={cn("text-emerald-300 transition-transform", activeId === guide.id && "rotate-90")} 
              />
            </button>

            <AnimatePresence>
              {activeId === guide.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="pt-4 border-t border-emerald-50 space-y-6">
                    {/* Articles Section */}
                    {guide.articles && guide.articles.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {guide.articles.map((art, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedArticle(art)}
                            className="px-4 py-2 bg-amber-100 text-amber-800 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-amber-200 transition-colors"
                          >
                            <FileText size={16} /> {art.title}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Steps Section */}
                    <div className="space-y-3">
                      <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Langkah-langkah / Poin Utama:</p>
                      {guide.steps.map((step, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-sm">
                            {i + 1}
                          </div>
                          <p className="text-gray-700 font-medium">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[2.5rem] shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col"
            >
              <div className="p-6 border-b border-emerald-50 flex justify-between items-center bg-emerald-50/50">
                <h3 className="text-2xl font-bold text-emerald-900">{selectedArticle.title}</h3>
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 hover:bg-emerald-100 rounded-full transition-colors text-emerald-700"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
                <div 
                  className="text-gray-700 leading-relaxed space-y-4 text-lg prose prose-emerald max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />

                {/* Quran Quote Section */}
                <div className="mt-12 p-8 bg-amber-50 rounded-[2rem] border border-amber-100 relative overflow-hidden">
                  <Quote className="absolute -top-2 -left-2 text-amber-200/50" size={80} />
                  <div className="relative z-10">
                    <p className="text-amber-900 italic leading-relaxed text-center text-lg mb-4">
                      "{selectedArticle.quran.verse}"
                    </p>
                    <p className="text-amber-700 font-bold text-sm text-center uppercase tracking-widest">
                      — {selectedArticle.quran.source}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-emerald-50 bg-gray-50 flex justify-end">
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="px-10 py-3 bg-emerald-700 text-white rounded-2xl font-bold hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-700/20"
                >
                  Tutup Artikel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 flex gap-4 items-start shadow-sm">
        <Info className="text-blue-600 shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-blue-900 mb-1">Catatan Penting</h4>
          <p className="text-blue-800 text-sm leading-relaxed">
            Panduan ini adalah ringkasan umum untuk memudahkan belajar. Untuk pemahaman yang lebih mendalam mengenai fiqih ibadah, sangat disarankan untuk belajar langsung kepada guru atau ustadz yang berkompeten agar mendapatkan sanad ilmu yang jelas.
          </p>
        </div>
      </div>
    </div>
  );
}
