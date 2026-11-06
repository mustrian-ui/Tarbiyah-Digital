import React, { useState, useEffect } from 'react';
import { Download, X, Clock, Smartphone, Sparkles, Check, Share2, PlusSquare } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

const STORAGE_KEY_POSTPONED = 'tarbiyah_pwa_prompt_postponed_until';
const STORAGE_KEY_DISMISSED = 'tarbiyah_pwa_prompt_dismissed';

export const PWAInstallPromptModal: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [isVisible, setIsVisible] = useState(false);
  const [showGuideModal, setShowGuideModal] = useState(false);

  useEffect(() => {
    if (isInstalled) {
      return;
    }

    try {
      const dismissed = localStorage.getItem(STORAGE_KEY_DISMISSED);
      if (dismissed === 'true') {
        return;
      }

      const postponedUntil = localStorage.getItem(STORAGE_KEY_POSTPONED);
      if (postponedUntil) {
        const postponeTime = parseInt(postponedUntil, 10);
        if (!isNaN(postponeTime) && Date.now() < postponeTime) {
          return;
        }
      }
    } catch {
      // Storage access exception handling
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, [isInstalled]);

  const handlePostpone = () => {
    setIsVisible(false);
    try {
      const nextTime = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY_POSTPONED, nextTime.toString());
    } catch {
      // ignore
    }
  };

  const handleClose = () => {
    handlePostpone();
  };

  const handleInstallNow = async () => {
    if (isInstallable) {
      const success = await install();
      if (success) {
        try {
          localStorage.setItem(STORAGE_KEY_DISMISSED, 'true');
        } catch {
          // ignore
        }
        setIsVisible(false);
        return;
      }
    }
    setShowGuideModal(true);
  };

  if (isInstalled || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Floating Notification Card */}
      <div 
        className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-8 duration-500"
        role="dialog"
        aria-labelledby="pwa-prompt-title"
      >
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 p-5 text-white shadow-2xl border-2 border-amber-400/30 backdrop-blur-md">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-amber-400/10 blur-xl pointer-events-none" />
          <div className="absolute -left-6 -top-6 w-32 h-32 rounded-full bg-emerald-400/10 blur-xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3.5 right-3.5 p-1.5 rounded-full text-emerald-200 hover:text-white hover:bg-emerald-700/50 transition"
            aria-label="Tutup notifikasi"
          >
            <X size={18} />
          </button>

          {/* Header Info */}
          <div className="flex items-start gap-3.5 pr-6">
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-emerald-950 shadow-md">
              <Smartphone size={24} />
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-700 ring-2 ring-emerald-900">
                <Sparkles size={10} className="text-amber-300" />
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded">
                  Aplikasi Web (PWA)
                </span>
              </div>
              <h3 id="pwa-prompt-title" className="text-base font-bold text-white mt-1 leading-snug">
                Pasang Tarbiyah Digital
              </h3>
            </div>
          </div>

          {/* Content Description */}
          <p className="mt-3 text-xs md:text-sm text-emerald-100/90 leading-relaxed">
            Ingin akses cepat dan hemat kuota? Pasang aplikasi ini di layar utama HP atau komputer Anda untuk pengalaman terbaik layaknya aplikasi resmi.
          </p>

          {/* Feature Badges */}
          <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-medium text-emerald-200">
            <span className="flex items-center gap-1 bg-emerald-800/80 px-2 py-1 rounded-md border border-emerald-700/60">
              <Check size={12} className="text-amber-400" /> Akses 1-Klik
            </span>
            <span className="flex items-center gap-1 bg-emerald-800/80 px-2 py-1 rounded-md border border-emerald-700/60">
              <Check size={12} className="text-amber-400" /> Mode Layar Penuh
            </span>
            <span className="flex items-center gap-1 bg-emerald-800/80 px-2 py-1 rounded-md border border-emerald-700/60">
              <Check size={12} className="text-amber-400" /> Ringan & Cepat
            </span>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 pt-3 border-t border-emerald-700/60 flex items-center gap-2.5">
            <button
              onClick={handleInstallNow}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-95 px-4 py-2.5 text-xs md:text-sm font-bold text-emerald-950 shadow-md transition-all"
            >
              <Download size={16} />
              <span>Install Sekarang</span>
            </button>
            <button
              onClick={handlePostpone}
              className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 text-emerald-200 hover:text-white px-3.5 py-2.5 text-xs md:text-sm font-semibold border border-emerald-700 transition-all"
            >
              <Clock size={15} />
              <span>Nanti Saja</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Guide Modal */}
      {showGuideModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl text-gray-800 border border-emerald-100">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Smartphone className="text-emerald-700" size={22} />
                <h3 className="font-bold text-gray-900 text-base">
                  {isIOS ? 'Cara Pasang di iPhone / iPad' : 'Cara Pasang di Perangkat Anda'}
                </h3>
              </div>
              <button 
                onClick={() => {
                  setShowGuideModal(false);
                  setIsVisible(false);
                }}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            {isIOS ? (
              <div className="mt-4 space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-800">1</span>
                  <p className="text-gray-600">
                    Buka browser <strong>Safari</strong> lalu ketuk tombol <span className="inline-flex items-center gap-1 font-semibold text-gray-800 bg-gray-100 px-2 py-0.5 rounded"><Share2 size={13} /> Bagikan (Share)</span> di bagian bawah layar.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-800">2</span>
                  <p className="text-gray-600">
                    Gulir ke bawah dan pilih opsi <span className="inline-flex items-center gap-1 font-semibold text-gray-800 bg-gray-100 px-2 py-0.5 rounded"><PlusSquare size={13} /> Tambahkan ke Layar Utama</span> (Add to Home Screen).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-800">3</span>
                  <p className="text-gray-600">
                    Ketuk <strong>Tambah (Add)</strong> di pojok kanan atas. Ikon aplikasi akan langsung terpasang di layar utama!
                  </p>
                </div>
              </div>
            ) : (
              <div className="mt-4 space-y-3 text-sm text-gray-600">
                <p>
                  Untuk memasang aplikasi ini di browser Anda:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-1 text-xs md:text-sm text-gray-700">
                  <li>
                    <strong>Di Chrome / Edge (Komputer):</strong> Klik ikon <strong>Install</strong> di ujung kanan bilah alamat web (address bar).
                  </li>
                  <li>
                    <strong>Di Android:</strong> Ketuk menu titik tiga di kanan atas browser, lalu pilih <strong>"Install Aplikasi"</strong> atau <strong>"Tambahkan ke Layar Utama"</strong>.
                  </li>
                </ul>
              </div>
            )}

            <button
              onClick={() => {
                setShowGuideModal(false);
                setIsVisible(false);
              }}
              className="mt-6 w-full rounded-xl bg-emerald-700 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800 transition"
            >
              Baik, Saya Mengerti
            </button>
          </div>
        </div>
      )}
    </>
  );
};
