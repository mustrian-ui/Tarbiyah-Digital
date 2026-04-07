import React, { useState } from "react";
import { ScrollText, Search, ChevronRight, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const arbainData = [
  {
    number: 1,
    title: "Niat dan Ikhlas",
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوِ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ.",
    translation: "Sesungguhnya setiap perbuatan tergantung niatnya. Dan sesungguhnya setiap orang (akan dibalas) berdasarkan apa yang dia niatkan. Siapa yang hijrahnya karena (ingin mendapatkan keridhaan) Allah dan Rasul-Nya, maka hijrahnya kepada (keridhaan) Allah dan Rasul-Nya. Dan siapa yang hijrahnya karena dunia yang dikehendakinya atau karena wanita yang ingin dinikahinya, maka hijrahnya (akan bernilai) sesuai dengan tujuan hijrahnya.",
    explanation: "Hadits ini merupakan salah satu pilar Islam. Niat adalah pembeda antara ibadah dan kebiasaan, serta antara ibadah yang satu dengan yang lainnya."
  },
  {
    number: 2,
    title: "Islam, Iman, dan Ihsan",
    arabic: "بَيْنَمَا نَحْنُ جُلُوْسٌ عِنْدَ رَسُوْلِ اللهِ صلى الله عليه وسلم ذَاتَ يَوْمٍ إِذْ طَلَعَ عَلَيْنَا رَجُلٌ شَدِيْدُ بَيَاضِ الثِّيَابِ شَدِيْدُ سَوَادِ الشَّعْرِ...",
    translation: "Ketika kami sedang duduk bersama Rasulullah SAW pada suatu hari, tiba-tiba muncul seorang laki-laki yang berpakaian sangat putih dan rambutnya sangat hitam...",
    explanation: "Hadits ini dikenal sebagai Hadits Jibril yang menjelaskan tentang rukun Islam, rukun Iman, dan Ihsan."
  }
  // ... more can be added
];

export default function Hadits() {
  const [activeNum, setActiveNum] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      <div className="bg-amber-500 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-2">Hadits Arba'in</h2>
          <p className="text-amber-50 text-lg">42 Hadits pilihan Imam An-Nawawi yang menjadi pondasi ajaran Islam.</p>
        </div>
        <ScrollText size={200} className="absolute top-0 right-0 -mr-12 -mt-12 opacity-20" />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {arbainData.map((hadith) => (
          <motion.div
            key={hadith.number}
            layout
            className={cn(
              "bg-white rounded-2xl border border-emerald-50 shadow-sm overflow-hidden transition-all",
              activeNum === hadith.number ? "ring-2 ring-emerald-500 shadow-md" : "hover:bg-emerald-50/30"
            )}
          >
            <button
              onClick={() => setActiveNum(activeNum === hadith.number ? null : hadith.number)}
              className="w-full p-6 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center font-bold">
                  {hadith.number}
                </div>
                <h3 className="text-xl font-bold text-emerald-900">{hadith.title}</h3>
              </div>
              <ChevronRight 
                className={cn("text-emerald-300 transition-transform", activeNum === hadith.number && "rotate-90")} 
              />
            </button>

            <AnimatePresence>
              {activeNum === hadith.number && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="pt-6 border-t border-emerald-50 space-y-6">
                    <p className="text-right font-arabic text-2xl leading-loose text-emerald-900">
                      {hadith.arabic}
                    </p>
                    <div className="space-y-4">
                      <div className="p-4 bg-slate-50 rounded-2xl border-l-4 border-emerald-500">
                        <p className="text-gray-700 leading-relaxed italic">
                          "{hadith.translation}"
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-bold text-emerald-800 flex items-center gap-2">
                          <BookOpen size={18} /> Penjelasan
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {hadith.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
