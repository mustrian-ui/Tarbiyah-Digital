import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, Book, MessageSquare, Heart, Shield, History, 
  Star, Clock, Microscope, ScrollText, BookOpen, 
  TrendingUp, Calculator, CheckSquare, Menu, X 
} from "lucide-react";
import { cn } from "../lib/utils";

const menuItems = [
  { name: "Beranda", icon: Home, path: "/" },
  { name: "Mushaf Al-Qur'an", icon: Book, path: "/quran" },
  { name: "Konsultasi AI", icon: MessageSquare, path: "/ai" },
  { name: "Doa Harian", icon: Heart, path: "/doa" },
  { name: "Tauhid", icon: Shield, path: "/tauhid" },
  { name: "Sejarah Islam", icon: History, path: "/sejarah" },
  { name: "Peristiwa Agung", icon: Star, path: "/peristiwa" },
  { name: "Timeline Manusia", icon: Clock, path: "/timeline" },
  { name: "Ilmuwan Muslim", icon: Microscope, path: "/ilmuwan" },
  { name: "Hadits Arba'in", icon: ScrollText, path: "/hadits" },
  { name: "Pedoman Ibadah", icon: BookOpen, path: "/pedoman" },
  { name: "Roadmap Diri", icon: TrendingUp, path: "/roadmap" },
  { name: "Kalkulator Zakat", icon: Calculator, path: "/zakat" },
  { name: "Ibadah Tracker", icon: CheckSquare, path: "/tracker" },
];

export const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-emerald-800 text-white h-screen fixed left-0 top-0 overflow-y-auto shadow-xl">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-amber-400 flex items-center gap-2">
            <Star className="fill-amber-400" /> Tarbiyah Digital
          </h1>
          <p className="text-xs text-emerald-200 mt-1">Platform Edukasi Islami</p>
        </div>
        <nav className="flex-1 px-4 pb-6">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    location.pathname === item.path
                      ? "bg-emerald-700 text-amber-400 font-semibold"
                      : "hover:bg-emerald-700/50 text-emerald-100"
                  )}
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden bg-emerald-800 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 shadow-md">
        <h1 className="text-xl font-bold text-amber-400 flex items-center gap-2">
          <Star size={20} className="fill-amber-400" /> Tarbiyah Digital
        </h1>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          {isOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-emerald-900/95 z-40 pt-20 px-6 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-4 px-4 py-4 rounded-xl text-lg",
                    location.pathname === item.path
                      ? "bg-emerald-700 text-amber-400 font-bold"
                      : "text-emerald-100"
                  )}
                >
                  <item.icon size={24} />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
