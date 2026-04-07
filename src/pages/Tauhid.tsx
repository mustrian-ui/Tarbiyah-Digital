import React, { useState } from "react";
import { Shield, ChevronRight, Info, Book } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const tauhidSections = [
  {
    id: "iman",
    title: "Rukun Iman",
    description: "Enam pilar keyakinan seorang Muslim.",
    items: [
      "Iman kepada Allah",
      "Iman kepada Malaikat Allah",
      "Iman kepada Kitab-kitab Allah",
      "Iman kepada Rasul-rasul Allah",
      "Iman kepada Hari Kiamat",
      "Iman kepada Qada dan Qadar"
    ]
  },
  {
    id: "islam",
    title: "Rukun Islam",
    description: "Lima pondasi utama dalam menjalankan syariat Islam.",
    items: [
      "Syahadat",
      "Sholat",
      "Zakat",
      "Puasa Ramadhan",
      "Haji (bagi yang mampu)"
    ]
  },
  {
    id: "sifat-allah",
    title: "20 Sifat Wajib Allah",
    description: "Sifat-sifat yang pasti ada pada Allah SWT.",
    items: [
      "Wujud (Ada)", "Qidam (Dahulu)", "Baqa (Kekal)", "Mukhalafatu lil Hawaditsi (Berbeda dengan makhluk)",
      "Qiyamuhu Binafsihi (Berdiri sendiri)", "Wahdaniyah (Esa)", "Qudrat (Kuasa)", "Iradat (Berkehendak)",
      "Ilmu (Mengetahui)", "Hayat (Hidup)", "Sama' (Mendengar)", "Bashar (Melihat)", "Kalam (Berfirman)",
      "Qadiran", "Muridan", "Aliman", "Hayyan", "Sami'an", "Bashiran", "Mutakalliman"
    ]
  },
  {
    id: "nabi",
    title: "25 Nabi & Rasul",
    description: "Utusan Allah yang wajib diketahui.",
    items: [
      "Adam AS", "Idris AS", "Nuh AS", "Hud AS", "Shalih AS", "Ibrahim AS", "Luth AS", "Ismail AS",
      "Ishaq AS", "Ya'qub AS", "Yusuf AS", "Ayyub AS", "Syu'aib AS", "Musa AS", "Harun AS", "Dzulkifli AS",
      "Daud AS", "Sulaiman AS", "Ilyas AS", "Ilyasa AS", "Yunus AS", "Zakaria AS", "Yahya AS", "Isa AS", "Muhammad SAW"
    ]
  }
];

export default function Tauhid() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield size={32} className="fill-emerald-700" />
        </div>
        <h2 className="text-3xl font-bold text-emerald-800">Ilmu Tauhid</h2>
        <p className="text-gray-500 mt-2">Memperdalam pemahaman tentang aqidah dan pondasi dasar agama Islam.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tauhidSections.map((section) => (
          <motion.div
            key={section.id}
            layout
            className={cn(
              "bg-white rounded-3xl border border-emerald-50 shadow-sm overflow-hidden transition-all",
              activeSection === section.id ? "ring-2 ring-emerald-500 shadow-lg" : "hover:shadow-md"
            )}
          >
            <button
              onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
              className="w-full p-6 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-50 text-emerald-700 rounded-2xl">
                  <Book size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-900">{section.title}</h3>
                  <p className="text-sm text-gray-500">{section.description}</p>
                </div>
              </div>
              <ChevronRight 
                className={cn("text-emerald-300 transition-transform", activeSection === section.id && "rotate-90")} 
              />
            </button>

            <AnimatePresence>
              {activeSection === section.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="pt-4 border-t border-emerald-50 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 p-3 bg-emerald-50/50 rounded-xl text-emerald-800 text-sm font-medium">
                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100">
        <div className="flex items-center gap-3 mb-4">
          <Info className="text-amber-600" />
          <h4 className="text-xl font-bold text-amber-900">Pentingnya Tauhid</h4>
        </div>
        <p className="text-amber-800 leading-relaxed">
          Tauhid adalah inti dari ajaran Islam. Ia merupakan keyakinan akan keesaan Allah SWT dalam Rububiyah, Uluhiyah, dan Asma wa Sifat. Mempelajari tauhid adalah kewajiban pertama bagi setiap Muslim untuk memastikan ibadahnya diterima oleh Allah SWT.
        </p>
      </div>
    </div>
  );
}
