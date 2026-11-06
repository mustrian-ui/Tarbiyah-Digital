import React from 'react';
import { Smartphone, Sparkles } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { PWAInstallButton } from './PWAInstallButton';

export const PWAInstallBanner: React.FC = () => {
  const { isInstalled } = usePWAInstall();

  if (isInstalled) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 p-5 md:p-6 text-white shadow-lg border border-emerald-700/50">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
        <div className="flex items-start gap-3.5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-emerald-950 shadow-md">
            <Smartphone size={26} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-base md:text-lg text-amber-300">
                Pasang Aplikasi Tarbiyah Digital
              </h4>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-700/80 text-emerald-100 px-2 py-0.5 rounded-full">
                <Sparkles size={11} className="text-amber-300" /> PWA Ready
              </span>
            </div>
            <p className="text-xs md:text-sm text-emerald-100/90 mt-1 max-w-xl leading-relaxed">
              Dapat diinstal di Android, iPhone, & Desktop. Akses cepat dari layar beranda tanpa perlu membuka browser secara manual.
            </p>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-2 self-start sm:self-center">
          <PWAInstallButton variant="compact" className="text-sm px-4 py-2" />
        </div>
      </div>
    </div>
  );
};
