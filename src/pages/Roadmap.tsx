import React from "react";
import { TrendingUp, Shield, Clock, Book, Star, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const roadmapSteps = [
  {
    title: "Memperbaiki Iman",
    description: "Memperdalam tauhid, menjauhi syirik, dan mengikhlaskan niat dalam setiap amal.",
    icon: Shield,
    color: "bg-blue-50 text-blue-700 border-blue-100"
  },
  {
    title: "Memperbaiki Sholat",
    description: "Menjaga sholat lima waktu di awal waktu dan menyempurnakan rukun serta khusyuk.",
    icon: Clock,
    color: "bg-emerald-50 text-emerald-700 border-emerald-100"
  },
  {
    title: "Membangun Akhlak",
    description: "Meneladani akhlak Rasulullah SAW dalam berinteraksi dengan sesama manusia.",
    icon: Star,
    color: "bg-amber-50 text-amber-700 border-amber-100"
  },
  {
    title: "Meningkatkan Ilmu",
    description: "Rutin menghadiri majelis ilmu dan membaca literatur Islam yang terpercaya.",
    icon: Book,
    color: "bg-purple-50 text-purple-700 border-purple-100"
  },
  {
    title: "Membangun Produktivitas",
    description: "Mengatur waktu dengan baik (manajemen waktu Islami) untuk dunia dan akhirat.",
    icon: TrendingUp,
    color: "bg-orange-50 text-orange-700 border-orange-100"
  }
];

export default function Roadmap() {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-800">Roadmap Pengembangan Diri</h2>
        <p className="text-gray-500 mt-2">Tahapan sistematis untuk menjadi pribadi Muslim yang lebih baik setiap harinya.</p>
      </div>

      <div className="relative space-y-8">
        {/* Connecting Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-100 hidden md:block"></div>

        {roadmapSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative flex items-start gap-6 group"
          >
            <div className={`z-10 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border-2 ${step.color} group-hover:scale-110 transition-transform`}>
              <step.icon size={28} />
            </div>
            <div className="flex-1 bg-white p-6 rounded-3xl border border-emerald-50 shadow-sm group-hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-emerald-900">{step.title}</h3>
                <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">Tahap {index + 1}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              <div className="mt-4 flex items-center gap-2 text-emerald-600 text-sm font-bold">
                <CheckCircle2 size={16} />
                <span>Fokus Utama</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-emerald-800 rounded-3xl p-10 text-white text-center shadow-xl">
        <h4 className="text-2xl font-bold mb-4">"Hari ini harus lebih baik dari kemarin."</h4>
        <p className="text-emerald-100 max-w-xl mx-auto">
          Perubahan besar dimulai dari langkah-langkah kecil yang konsisten (istiqomah). Mulailah dari tahap yang paling dasar.
        </p>
      </div>
    </div>
  );
}
