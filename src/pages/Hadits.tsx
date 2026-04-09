import React, { useState } from "react";
import { ScrollText, Search, ChevronRight, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { arbainData } from "../constants/arbain";

export default function Hadits() {
  const [activeNum, setActiveNum] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredHadits = arbainData.filter(h => 
    h.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    h.number.toString().includes(searchQuery)
  );

  return (
    <div className="space-y-8">
      <div className="bg-amber-500 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-2">Hadits Arba'in</h2>
          <p className="text-amber-50 text-lg">42 Hadits pilihan Imam An-Nawawi yang menjadi pondasi ajaran Islam.</p>
        </div>
        <ScrollText size={200} className="absolute top-0 right-0 -mr-12 -mt-12 opacity-20" />
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Cari nomor atau judul hadits..."
          className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-emerald-50 shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredHadits.map((hadith) => (
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
