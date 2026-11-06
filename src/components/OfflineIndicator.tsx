import React from 'react';
import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2.5 text-xs md:text-sm font-medium text-white shadow-xl border border-amber-400/40 animate-fade-in backdrop-blur-md">
      <WifiOff size={18} className="animate-pulse" />
      <span>Mode Offline — Data tersimpan dalam cache dapat diakses tanpa koneksi internet.</span>
    </div>
  );
};
