import React, { useState } from 'react';
import { Download, Smartphone, Share2, PlusSquare, X, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'compact' | 'full' | 'sidebar';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ 
  className = '', 
  variant = 'compact' 
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [showDesktopGuide, setShowDesktopGuide] = useState(false);

  if (isInstalled) {
    if (variant === 'sidebar') {
      return (
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-700/40 text-emerald-200 text-xs">
          <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
          <span>Aplikasi Terpasang (PWA)</span>
        </div>
      );
    }
    return null;
  }

  if (isInstallable) {
    if (variant === 'sidebar') {
      return (
        <button
          onClick={install}
          className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-sm shadow-md transition-all active:scale-95 ${className}`}
        >
          <Download size={18} />
          <span>Install Aplikasi</span>
        </button>
      );
    }

    return (
      <button
        onClick={install}
        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-emerald-950 font-semibold text-xs md:text-sm shadow transition-all active:scale-95 ${className}`}
      >
        <Download size={16} />
        <span>Install App</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className={`flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-amber-400/90 hover:bg-amber-400 text-emerald-950 font-semibold text-xs transition-all ${className}`}
          title="Pasang di iPhone / iPad"
        >
          <Smartphone size={16} />
          <span>Install di iOS</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl text-gray-800 border border-emerald-100 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Smartphone className="text-emerald-700" size={22} />
                  <h3 className="font-bold text-gray-900 text-base">Pasang di iPhone / iPad</h3>
                </div>
                <button 
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>

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
                    Ketuk <strong>Tambah (Add)</strong> di pojok kanan atas. Ikon aplikasi Tarbiyah Digital akan muncul di layar ponsel Anda!
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-6 w-full rounded-xl bg-emerald-700 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800 transition"
              >
                Saya Mengerti
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => setShowDesktopGuide(true)}
        className={`flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-700/60 hover:bg-emerald-700 text-emerald-100 hover:text-white font-medium text-xs transition-all ${className}`}
        title="Pasang aplikasi di perangkat"
      >
        <Download size={15} />
        <span>Pasang Aplikasi</span>
      </button>

      {showDesktopGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl text-gray-800 border border-emerald-100">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Download className="text-emerald-700" size={22} />
                <h3 className="font-bold text-gray-900 text-base">Cara Memasang Aplikasi (PWA)</h3>
              </div>
              <button 
                onClick={() => setShowDesktopGuide(false)}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <p>
                Aplikasi ini mendukung teknologi <strong>Progressive Web App (PWA)</strong> sehingga dapat diinstal langsung seperti aplikasi native:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-1 text-xs md:text-sm text-gray-700">
                <li>
                  <strong>Di Chrome / Edge (Komputer):</strong> Klik ikon <span className="font-semibold text-emerald-800">Install</span> di ujung kanan bilah alamat (address bar).
                </li>
                <li>
                  <strong>Di Android:</strong> Buka menu browser (titik tiga) lalu pilih <span className="font-semibold text-emerald-800">"Install Aplikasi"</span> atau <span className="font-semibold text-emerald-800">"Tambahkan ke Layar Utama"</span>.
                </li>
                <li>
                  <strong>Di iOS (Safari):</strong> Ketuk tombol Bagikan lalu pilih <span className="font-semibold text-emerald-800">"Tambahkan ke Layar Utama"</span>.
                </li>
              </ul>
            </div>

            <button
              onClick={() => setShowDesktopGuide(false)}
              className="mt-6 w-full rounded-xl bg-emerald-700 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800 transition"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </>
  );
};
