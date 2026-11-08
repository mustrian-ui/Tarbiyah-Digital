import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, Book, MessageSquare, Heart, Shield, History, 
  Star, Clock, Microscope, ScrollText, BookOpen, 
  TrendingUp, Calculator, CheckSquare, Menu, X, Scroll, Scale
} from "lucide-react";
import { cn } from "../lib/utils";
import { PWAInstallButton } from "./PWAInstallButton";

const menuItems = [
  { name: "Beranda", icon: Home, path: "/" },
  { name: "Mushaf Al-Qur'an", icon: Book, path: "/quran" },
  { name: "Materi Khutbah Jum'at", icon: Scroll, path: "/khutbah" },
  { name: "Fikih", icon: Scale, path: "/fikih" },
  { name: "Konsultasi AI", icon: MessageSquare, path: "/ai" },
  { name: "Doa Harian", icon: Heart, path: "/doa" },
  { name: "Tauhid", icon: Shield, path: "/tauhid" },
  { name: "Sejarah", icon: History, path: "/sejarah" },
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
      {/* Desktop Sidebar (Warna Asli Emerald 800) */}
      <aside className="hidden lg:flex flex-col w-64 bg-emerald-800 text-white h-screen fixed left-0 top-0 overflow-y-auto shadow-xl">
        {/* Header dengan ukuran font semula & jarak proporsional */}
        <div className="px-5 py-4 border-b border-emerald-700/60 bg-emerald-900/30 flex items-center gap-3 shrink-0">
          <img 
            src="/logo.png" 
            alt="Logo Tarbiyah Digital" 
            className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-400/80 shadow-md shrink-0 bg-emerald-950"
          />
          <div className="min-w-0">
            <h1 className="text-base font-bold text-amber-300 leading-snug truncate">
              Tarbiyah Digital
            </h1>
            <p className="text-[11px] text-emerald-200 truncate">Pendidikan Islam Era Digital</p>
          </div>
        </div>

        {/* Navigation - Ukuran font dikembalikan seperti semula (text-base / standard) & jarak rapat rapi ke Beranda */}
        <nav className="flex-1 px-4 pt-3 pb-4 overflow-y-auto">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-base",
                    location.pathname === item.path
                      ? "bg-emerald-700 text-amber-400 font-semibold"
                      : "hover:bg-emerald-700/50 text-emerald-100 hover:text-white"
                  )}
                >
                  <item.icon size={20} className="shrink-0" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* PWA Install Button in Desktop Sidebar */}
        <div className="p-4 border-t border-emerald-700/60 bg-emerald-900/40 shrink-0">
          <PWAInstallButton variant="sidebar" />
        </div>
      </aside>

      {/* Mobile Header Bar */}
      <header className="lg:hidden bg-emerald-800 text-white px-4 py-3 flex justify-between items-center fixed top-0 left-0 right-0 z-50 shadow-md">
        <Link to="/" className="flex items-center gap-2.5">
          <img 
            src="/logo.png" 
            alt="Logo Tarbiyah Digital" 
            className="w-9 h-9 rounded-full object-cover ring-2 ring-amber-400/80 shadow shrink-0 bg-emerald-950" 
          />
          <div>
            <h1 className="text-base font-bold text-amber-300 leading-tight">
              Tarbiyah Digital
            </h1>
            <p className="text-[9px] text-emerald-200">Pendidikan Islam Era Digital</p>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <PWAInstallButton variant="compact" />
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-emerald-100 hover:text-white" 
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay (Warna Asli bg-emerald-900/95 & Ukuran Font Semula) */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-emerald-900/95 z-40 pt-16 px-6 pb-24 overflow-y-auto flex flex-col justify-start">
          {/* Header Overlay yang rapi tanpa jarak kosong berlebih */}
          <div className="flex items-center gap-3 pb-4 mb-3 border-b border-emerald-700/60 pt-3 shrink-0">
            <img 
              src="/logo.png" 
              alt="Logo Tarbiyah Digital" 
              className="w-11 h-11 rounded-full object-cover ring-2 ring-amber-400 shadow shrink-0 bg-emerald-950" 
            />
            <div className="flex-1">
              <h2 className="text-base font-bold text-amber-300">Tarbiyah Digital</h2>
              <p className="text-xs text-emerald-200">Pendidikan Islam Era Digital</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-emerald-200 hover:text-white"
              aria-label="Tutup Menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Menu items dengan font text-base seperti semula & langsung bersambung tanpa rongga */}
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-4 px-4 py-3.5 rounded-xl text-base",
                    location.pathname === item.path
                      ? "bg-emerald-700 text-amber-400 font-bold"
                      : "text-emerald-100 hover:bg-emerald-800/50"
                  )}
                >
                  <item.icon size={22} className="shrink-0" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* PWA Install Button at Bottom */}
          <div className="mt-6 pt-4 border-t border-emerald-700/60 shrink-0">
            <PWAInstallButton variant="sidebar" />
          </div>
        </div>
      )}
    </>
  );
};
