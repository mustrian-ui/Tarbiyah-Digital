import React, { useState } from "react";
import { Star, ChevronRight, BookOpen, Sun, Moon, Users } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const events = [
  {
    id: "semesta",
    title: "Penciptaan Alam Semesta",
    icon: Sun,
    content: "Allah SWT menciptakan alam semesta dalam enam masa (ayyam). Segala sesuatu di langit dan di bumi adalah tanda-tanda kebesaran-Nya bagi orang-orang yang berakal."
  },
  {
    id: "bumi",
    title: "Penciptaan Bumi dan Isinya",
    icon: Moon,
    content: "Bumi diciptakan sebagai hamparan bagi manusia, lengkap dengan gunung-gunung sebagai pasak, laut, dan segala jenis tumbuhan serta hewan untuk kemaslahatan hidup."
  },
  {
    id: "adam",
    title: "Kisah Nabi Adam A.S",
    icon: Users,
    content: "Manusia pertama yang diciptakan Allah dari tanah. Kisah ketaatan, godaan iblis, hingga diturunkannya Adam dan Hawa ke bumi sebagai khalifah."
  },
  {
    id: "kiamat",
    title: "Peristiwa Hari Kiamat",
    icon: Star,
    content: "Hari di mana seluruh alam semesta akan hancur dan manusia akan dibangkitkan untuk mempertanggungjawabkan segala amal perbuatannya di dunia."
  }
];

export default function Peristiwa() {
  const [activeId, setActiveId] = useState<string | null>(null);

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
                    <button className="mt-4 text-amber-600 font-bold flex items-center gap-1 hover:underline">
                      Baca Artikel Lengkap <ChevronRight size={16} />
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
