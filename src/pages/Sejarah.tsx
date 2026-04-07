import React, { useState } from "react";
import { History, ChevronRight, BookOpen, Map, Landmark } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const historySections = [
  {
    id: "quran",
    title: "Sejarah Turunnya Al-Qur'an",
    icon: BookOpen,
    content: "Al-Qur'an diturunkan secara berangsur-angsur selama kurang lebih 23 tahun kepada Nabi Muhammad SAW melalui perantara Malaikat Jibril. Dimulai di Gua Hira dengan wahyu pertama Surat Al-Alaq ayat 1-5."
  },
  {
    id: "khulafaur",
    title: "Sejarah Khulafaur Rasyidin",
    icon: Landmark,
    content: "Masa kepemimpinan empat sahabat Nabi: Abu Bakar Ash-Shiddiq, Umar bin Khattab, Utsman bin Affan, dan Ali bin Abi Thalib. Masa ini merupakan zaman keemasan Islam dalam hal keadilan dan perluasan dakwah."
  },
  {
    id: "umayyah",
    title: "Sejarah Dinasti Umayyah",
    icon: Map,
    content: "Dinasti pertama setelah masa Khulafaur Rasyidin, berpusat di Damaskus. Berperan besar dalam perluasan wilayah Islam hingga ke Spanyol (Andalusia)."
  },
  {
    id: "abbasiyah",
    title: "Sejarah Dinasti Abbasiyah",
    icon: Landmark,
    content: "Masa keemasan ilmu pengetahuan Islam (Golden Age of Islam). Berpusat di Baghdad, melahirkan banyak ilmuwan besar seperti Al-Khwarizmi dan Ibnu Sina."
  },
  {
    id: "indonesia",
    title: "Sejarah Islam di Indonesia",
    icon: Map,
    content: "Islam masuk ke Nusantara melalui jalur perdagangan dan dakwah damai oleh para pedagang Arab, Gujarat, dan Persia. Peran Wali Songo sangat krusial dalam penyebaran Islam di tanah Jawa."
  }
];

export default function Sejarah() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="bg-emerald-800 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">Sejarah Islam</h2>
          <p className="text-emerald-100 text-lg leading-relaxed">
            Menelusuri jejak peradaban Islam dari masa kenabian hingga penyebarannya ke seluruh penjuru dunia.
          </p>
        </div>
        <History size={200} className="absolute top-0 right-0 -mr-12 -mt-12 opacity-10" />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {historySections.map((section) => (
          <motion.div
            key={section.id}
            layout
            className={cn(
              "bg-white rounded-2xl border border-emerald-50 shadow-sm overflow-hidden transition-all",
              activeId === section.id ? "ring-2 ring-emerald-500" : "hover:bg-emerald-50/30"
            )}
          >
            <button
              onClick={() => setActiveId(activeId === section.id ? null : section.id)}
              className="w-full p-6 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
                  <section.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-emerald-900">{section.title}</h3>
              </div>
              <ChevronRight 
                className={cn("text-emerald-300 transition-transform", activeId === section.id && "rotate-90")} 
              />
            </button>

            <AnimatePresence>
              {activeId === section.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="pt-4 border-t border-emerald-50">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {section.content}
                    </p>
                    <button className="mt-4 text-emerald-700 font-bold flex items-center gap-1 hover:underline">
                      Baca Selengkapnya <ChevronRight size={16} />
                    </button>
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
