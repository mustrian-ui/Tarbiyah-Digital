import React, { useState, useEffect } from "react";
import { CheckSquare, Calendar, Trash2, CheckCircle2, Circle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { cn } from "../lib/utils";

const defaultTasks = [
  { id: "sholat-5", label: "Sholat 5 Waktu", category: "Wajib" },
  { id: "puasa", label: "Puasa Sunnah/Wajib", category: "Sunnah" },
  { id: "tilawah", label: "Tilawah Al-Qur'an", category: "Sunnah" },
  { id: "sedekah", label: "Sedekah Harian", category: "Sunnah" },
  { id: "dzikir", label: "Dzikir Pagi & Petang", category: "Sunnah" },
  { id: "sholat-malam", label: "Sholat Tahajud/Witir", category: "Sunnah" },
  { id: "sholat-dhuha", label: "Sholat Dhuha", category: "Sunnah" },
];

export default function Tracker() {
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const saved = localStorage.getItem(`tracker_${format(date, "yyyy-MM-dd")}`);
    if (saved) {
      setCompletedTasks(JSON.parse(saved));
    } else {
      setCompletedTasks({});
    }
  }, [date]);

  const toggleTask = (id: string) => {
    const newCompleted = { ...completedTasks, [id]: !completedTasks[id] };
    setCompletedTasks(newCompleted);
    localStorage.setItem(`tracker_${format(date, "yyyy-MM-dd")}`, JSON.stringify(newCompleted));
  };

  const resetTracker = () => {
    if (window.confirm("Hapus semua checklist hari ini?")) {
      setCompletedTasks({});
      localStorage.removeItem(`tracker_${format(date, "yyyy-MM-dd")}`);
    }
  };

  const progress = Math.round((Object.values(completedTasks).filter(Boolean).length / defaultTasks.length) * 100);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-emerald-800">Ibadah Tracker</h2>
          <p className="text-gray-500">Pantau perkembangan ibadah harianmu untuk istiqomah.</p>
        </div>
        <div className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-emerald-100 shadow-sm">
          <Calendar className="text-emerald-700" size={20} />
          <span className="font-bold text-emerald-900">{format(date, "EEEE, d MMMM yyyy", { locale: id })}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Progress Section */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-emerald-800 rounded-3xl p-8 text-white shadow-xl text-center flex flex-col justify-center h-full relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-emerald-200 font-bold mb-6">Progress Hari Ini</h4>
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="58"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    className="text-emerald-700"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="58"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray={364}
                    strokeDashoffset={364 - (364 * progress) / 100}
                    className="text-amber-400 transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
                  {progress}%
                </div>
              </div>
              <p className="text-sm text-emerald-100 opacity-80">
                {progress === 100 ? "Maa syaa Allah! Ibadahmu sempurna hari ini." : "Ayo selesaikan checklist ibadahmu!"}
              </p>
            </div>
            <div className="absolute top-0 right-0 -mr-12 -mt-12 opacity-10">
              <CheckSquare size={200} />
            </div>
          </div>
        </div>

        {/* Checklist Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-emerald-50 space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-emerald-900">Daftar Ibadah</h3>
              <button 
                onClick={resetTracker}
                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                title="Reset Checklist"
              >
                <Trash2 size={20} />
              </button>
            </div>

            <div className="space-y-3">
              {defaultTasks.map((task) => (
                <button
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={cn(
                    "w-full flex items-center justify-between p-4 rounded-2xl border transition-all text-left group",
                    completedTasks[task.id] 
                      ? "bg-emerald-50 border-emerald-200" 
                      : "bg-slate-50 border-emerald-50 hover:bg-emerald-50/50"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "transition-colors",
                      completedTasks[task.id] ? "text-emerald-600" : "text-gray-300 group-hover:text-emerald-400"
                    )}>
                      {completedTasks[task.id] ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                    </div>
                    <div>
                      <p className={cn(
                        "font-bold transition-all",
                        completedTasks[task.id] ? "text-emerald-900 line-through opacity-50" : "text-emerald-900"
                      )}>
                        {task.label}
                      </p>
                      <span className={cn(
                        "text-[10px] font-bold px-2 py-0.5 rounded-full",
                        task.category === "Wajib" ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"
                      )}>
                        {task.category}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
