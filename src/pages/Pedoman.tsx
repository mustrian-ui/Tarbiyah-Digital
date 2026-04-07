import React, { useState } from "react";
import { BookOpen, ChevronRight, CheckCircle2, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const guides = [
  {
    id: "shalat",
    title: "Pedoman Shalat",
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
    ]
  },
  {
    id: "thaharah",
    title: "Pedoman Bersuci (Wudhu)",
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
    ]
  }
];

export default function Pedoman() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <BookOpen size={32} />
        </div>
        <h2 className="text-3xl font-bold text-emerald-800">Pedoman Ibadah</h2>
        <p className="text-gray-500 mt-2">Panduan langkah demi langkah dalam menjalankan ibadah sesuai syariat.</p>
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
                  <CheckCircle2 size={24} />
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
                  <div className="pt-4 border-t border-emerald-50 space-y-3">
                    {guide.steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl">
                        <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <p className="text-gray-700 font-medium">{step}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 flex gap-4 items-start">
        <Info className="text-blue-600 shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-blue-900 mb-1">Catatan Penting</h4>
          <p className="text-blue-800 text-sm leading-relaxed">
            Panduan ini adalah ringkasan umum. Untuk pemahaman yang lebih mendalam mengenai fiqih ibadah, sangat disarankan untuk belajar langsung kepada guru atau ustadz yang berkompeten.
          </p>
        </div>
      </div>
    </div>
  );
}
