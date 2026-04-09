import React, { useState } from "react";
import { Star, ChevronRight, BookOpen, Sun, Moon, Users, X, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const events = [
  {
    id: "semesta",
    title: "Penciptaan Alam Semesta",
    icon: Sun,
    content: "Allah SWT menciptakan alam semesta dalam enam masa (ayyam). Segala sesuatu di langit dan di bumi adalah tanda-tanda kebesaran-Nya bagi orang-orang yang berakal.",
    fullArticle: `
      <p>Penciptaan alam semesta adalah bukti nyata keagungan Allah SWT. Dalam Al-Qur'an, Allah menjelaskan bahwa langit dan bumi pada awalnya adalah satu kesatuan yang padu, kemudian Allah memisahkannya.</p>
      <p>Proses penciptaan ini terjadi dalam <strong>enam masa</strong> (sittati ayyam). Para ulama dan ilmuwan Muslim sering mengaitkan ini dengan tahapan evolusi kosmik, mulai dari ledakan besar (Big Bang) hingga terbentuknya galaksi, bintang, dan planet.</p>
      <p>Allah menghiasi langit dunia dengan bintang-bintang yang berfungsi sebagai penerang sekaligus penunjuk arah. Keteraturan orbit planet dan bintang menunjukkan adanya perancangan yang maha cerdas dan maha teliti.</p>
    `,
    quranQuote: {
      verse: "Dan apakah orang-orang yang kafir tidak mengetahui bahwasanya langit dan bumi itu keduanya dahulu adalah suatu yang padu, kemudian Kami pisahkan antara keduanya. Dan dari air Kami jadikan segala sesuatu yang hidup. Maka mengapakah mereka tiada juga beriman?",
      source: "QS. Al-Anbiya: 30"
    }
  },
  {
    id: "bumi",
    title: "Penciptaan Bumi dan Isinya",
    icon: Moon,
    content: "Bumi diciptakan sebagai hamparan bagi manusia, lengkap dengan gunung-gunung sebagai pasak, laut, dan segala jenis tumbuhan serta hewan untuk kemaslahatan hidup.",
    fullArticle: `
      <p>Setelah menciptakan langit, Allah SWT mempersiapkan bumi sebagai tempat tinggal bagi makhluk-Nya. Allah menciptakan gunung-gunung yang kokoh agar bumi tidak berguncang, sungai-sungai yang mengalir, dan lautan yang luas.</p>
      <p>Dalam kurun waktu tertentu, Allah menumbuhkan berbagai macam tanaman yang beraneka warna dan rasa. Allah juga menciptakan hewan-hewan yang melata di bumi, burung-burung yang terbang di angkasa, dan ikan-ikan di kedalaman laut.</p>
      <p>Semua fasilitas di bumi ini disediakan Allah secara gratis untuk manusia agar mereka dapat beribadah kepada-Nya dengan tenang dan bersyukur atas segala nikmat yang tak terhitung jumlahnya.</p>
    `,
    quranQuote: {
      verse: "Katakanlah: 'Sesungguhnya patutkah kamu kafir kepada Yang menciptakan bumi dalam dua masa dan kamu adakan sekutu-sekutu bagi-Nya? (Yang bersifat) demikian itu adalah Rabb semesta alam'. Dan Dia menciptakan di bumi itu gunung-gunung yang kokoh di atasnya. Dia memberkahinya dan Dia menentukan padanya kadar makanan-makanan (penghuni)nya dalam empat masa.",
      source: "QS. Fussilat: 9-10"
    }
  },
  {
    id: "adam",
    title: "Kisah Nabi Adam A.S",
    icon: Users,
    content: "Manusia pertama yang diciptakan Allah dari tanah. Kisah ketaatan, godaan iblis, hingga diturunkannya Adam dan Hawa ke bumi sebagai khalifah.",
    fullArticle: `
      <p>Nabi Adam A.S adalah manusia pertama sekaligus nabi pertama. Allah menciptakannya dari tanah, kemudian meniupkan ruh ke dalamnya. Allah memerintahkan para malaikat dan Iblis untuk bersujud kepada Adam sebagai bentuk penghormatan.</p>
      <p>Malaikat bersujud, namun Iblis menolak karena sombong, merasa dirinya lebih baik karena diciptakan dari api. Akibat kesombongannya, Iblis diusir dari surga dan berjanji akan menyesatkan keturunan Adam.</p>
      <p>Adam dan Hawa sempat tinggal di surga, namun karena godaan Iblis, mereka memakan buah khuldi yang dilarang. Mereka bertaubat, dan Allah menerima taubat mereka, lalu menurunkan mereka ke bumi untuk menjalankan tugas sebagai khalifah (pemimpin) di muka bumi.</p>
    `,
    quranQuote: {
      verse: "Ingatlah ketika Tuhanmu berfirman kepada para Malaikat: 'Sesungguhnya Aku hendak menjadikan seorang khalifah di muka bumi'. Mereka berkata: 'Mengapa Engkau hendak menjadikan (khalifah) di bumi itu orang yang akan membuat kerusakan padanya dan menumpahkan darah, padahal kami senantiasa bertasbih dengan memuji Engkau dan mensucikan Engkau?' Allah berfirman: 'Sesungguhnya Aku mengetahui apa yang tidak kamu ketahui'.",
      source: "QS. Al-Baqarah: 30"
    }
  },
  {
    id: "kiamat",
    title: "Peristiwa Hari Kiamat",
    icon: Star,
    content: "Hari di mana seluruh alam semesta akan hancur dan manusia akan dibangkitkan untuk mempertanggungjawabkan segala amal perbuatannya di dunia.",
    fullArticle: `
      <p>Hari Kiamat adalah rukun iman kelima yang wajib diyakini setiap Muslim. Peristiwa ini dimulai dengan tiupan sangkakala oleh Malaikat Israfil yang menghancurkan seluruh alam semesta. Gunung-gunung berterbangan seperti bulu, dan lautan meluap.</p>
      <p>Setelah kehancuran total, sangkakala ditiup kembali untuk membangkitkan seluruh manusia dari alam kubur menuju Padang Mahsyar. Di sana, setiap manusia akan diadili dengan seadil-adilnya. Tidak ada satu pun amal, sekecil biji sawi pun, yang luput dari perhitungan Allah.</p>
      <p>Hari itu adalah hari pembalasan, di mana orang yang beriman dan beramal saleh akan mendapatkan surga, sementara mereka yang ingkar akan mendapatkan balasan yang setimpal di neraka.</p>
    `,
    quranQuote: {
      verse: "Apabila bumi digoncangkan dengan goncangan (yang dahsyat), dan bumi telah mengeluarkan beban-beban berat (yang dikandung)nya, dan manusia bertanya: 'Mengapa bumi (jadi begini)?', pada hari itu bumi menceritakan beritanya, karena sesungguhnya Tuhanmu telah memerintahkan (yang demikian itu) kepadanya.",
      source: "QS. Al-Zalzalah: 1-5"
    }
  }
];

export default function Peristiwa() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
          <Star size={32} className="fill-amber-600" />
        </div>
        <h2 className="text-3xl font-bold text-emerald-800">Peristiwa Agung</h2>
        <p className="text-gray-500 mt-2">Mempelajari kejadian-kejadian besar dalam sejarah penciptaan dan kenabian.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <motion.div
            key={event.id}
            layout
            className={cn(
              "bg-white rounded-3xl border border-emerald-50 shadow-sm overflow-hidden transition-all",
              activeId === event.id ? "ring-2 ring-amber-500 shadow-lg" : "hover:shadow-md"
            )}
          >
            <button
              onClick={() => setActiveId(activeId === event.id ? null : event.id)}
              className="w-full p-6 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl">
                  <event.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-emerald-900">{event.title}</h3>
              </div>
              <ChevronRight 
                className={cn("text-amber-300 transition-transform", activeId === event.id && "rotate-90")} 
              />
            </button>

            <AnimatePresence>
              {activeId === event.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="pt-4 border-t border-amber-50">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {event.content}
                    </p>
                    <button 
                      onClick={() => setSelectedEvent(event)}
                      className="mt-4 text-amber-600 font-bold flex items-center gap-1 hover:underline"
                    >
                      Baca Artikel Lengkap <ChevronRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Full Article Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[2rem] shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-emerald-50 flex justify-between items-center bg-amber-50/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-100 text-amber-600 rounded-xl">
                    <selectedEvent.icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900">{selectedEvent.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="p-2 hover:bg-amber-100 rounded-full transition-colors text-amber-600"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 overflow-y-auto flex-1 custom-scrollbar">
                <div 
                  className="text-gray-700 leading-relaxed space-y-4 text-lg"
                  dangerouslySetInnerHTML={{ __html: selectedEvent.fullArticle }}
                />

                {/* Quran Quote Section */}
                <div className="mt-10 p-6 bg-emerald-50 rounded-3xl border border-emerald-100 relative">
                  <Quote className="absolute top-4 left-4 text-emerald-200" size={40} />
                  <div className="relative z-10">
                    <p className="text-emerald-900 font-arabic text-xl text-right leading-loose mb-4">
                      {/* Arabic text could be added here if needed, but per request we use the translation/quote */}
                    </p>
                    <p className="text-emerald-800 italic leading-relaxed text-center">
                      "{selectedEvent.quranQuote.verse}"
                    </p>
                    <p className="text-emerald-600 font-bold text-sm mt-4 text-center">
                      — {selectedEvent.quranQuote.source}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-emerald-50 bg-gray-50 flex justify-end">
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="px-8 py-3 bg-emerald-700 text-white rounded-2xl font-bold hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-700/20"
                >
                  Selesai Membaca
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
