import React from "react";
import { Clock, Star, Heart, Skull, Sunrise, Users, ShieldCheck, DoorOpen } from "lucide-react";
import { motion } from "motion/react";

const timelineData = [
  {
    stage: "Penciptaan Manusia",
    description: "Allah SWT menciptakan Nabi Adam AS dari tanah dan meniupkan ruh ke dalamnya.",
    icon: Users,
    color: "bg-emerald-100 text-emerald-700"
  },
  {
    stage: "Kehidupan Dunia",
    description: "Masa ujian dan ibadah bagi manusia untuk menentukan nasib di akhirat kelak.",
    icon: Sunrise,
    color: "bg-amber-100 text-amber-700"
  },
  {
    stage: "Kematian",
    description: "Terpisahnya ruh dari jasad, pintu gerbang menuju alam akhirat.",
    icon: Skull,
    color: "bg-slate-100 text-slate-700"
  },
  {
    stage: "Alam Kubur (Barzakh)",
    description: "Tempat penantian ruh hingga hari kebangkitan tiba.",
    icon: DoorOpen,
    color: "bg-indigo-100 text-indigo-700"
  },
  {
    stage: "Hari Kebangkitan",
    description: "Seluruh manusia dibangkitkan dari kubur untuk dikumpulkan di Padang Mahsyar.",
    icon: Sunrise,
    color: "bg-orange-100 text-orange-700"
  },
  {
    stage: "Hisab & Mizan",
    description: "Perhitungan dan penimbangan amal perbuatan selama di dunia.",
    icon: ShieldCheck,
    color: "bg-blue-100 text-blue-700"
  },
  {
    stage: "Surga atau Neraka",
    description: "Tempat peristirahatan terakhir yang kekal berdasarkan rahmat Allah dan amal shalih.",
    icon: Star,
    color: "bg-yellow-100 text-yellow-700"
  }
];

export default function Timeline() {
  return (
    <div className="space-y-12 pb-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-800">Timeline Perjalanan Manusia</h2>
        <p className="text-gray-500 mt-2">Memahami fase-fase kehidupan dari awal penciptaan hingga akhirat yang kekal.</p>
      </div>

      <div className="relative max-w-3xl mx-auto px-4">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-emerald-100 -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Content */}
              <div className="flex-1 w-full">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-emerald-50 hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">{item.stage}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>

              {/* Icon / Marker */}
              <div className={`relative z-10 w-16 h-16 rounded-full ${item.color} flex items-center justify-center shadow-lg border-4 border-white shrink-0`}>
                <item.icon size={28} />
              </div>

              {/* Spacer for desktop layout */}
              <div className="flex-1 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-emerald-800 rounded-3xl p-8 text-white text-center shadow-xl">
        <h4 className="text-2xl font-bold mb-4 italic">"Dunia ini hanyalah tempat persinggahan..."</h4>
        <p className="text-emerald-100">Mari persiapkan bekal terbaik untuk perjalanan panjang kita menuju keabadian.</p>
      </div>
    </div>
  );
}
