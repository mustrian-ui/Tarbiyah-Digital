import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { 
  Clock, MapPin, Navigation, Compass, Search, 
  ChevronDown, X, Check, RefreshCw, AlertCircle, Sparkles, Moon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  INDONESIAN_CITIES, 
  POPULAR_CITIES, 
  IndonesianCity, 
  findClosestCity 
} from '../data/indonesianCities';

const STORAGE_CITY_KEY = 'tarbiyah_selected_city_id';
const STORAGE_LOCATION_MODE = 'tarbiyah_location_mode';
const STORAGE_GPS_COORDS = 'tarbiyah_gps_coords';

interface PrayerTimesData {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  Imsak?: string;
}

interface HijriData {
  day: string;
  month: { en: string; ar: string };
  year: string;
  designation: { abbreviated: string };
}

export const PrayerTimesCard: React.FC = () => {
  const [selectedCityId, setSelectedCityId] = useState<string>(() => {
    return localStorage.getItem(STORAGE_CITY_KEY) || 'jakarta';
  });

  const [locationMode, setLocationMode] = useState<'city' | 'gps'>(() => {
    return (localStorage.getItem(STORAGE_LOCATION_MODE) as 'city' | 'gps') || 'city';
  });

  const [gpsCoords, setGpsCoords] = useState<{ lat: number; lng: number } | null>(() => {
    const saved = localStorage.getItem(STORAGE_GPS_COORDS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return null;
  });

  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesData | null>(null);
  const [hijriDate, setHijriDate] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [gpsLoading, setGpsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIsland, setSelectedIsland] = useState<string>('Semua');

  const selectedCity = useMemo(() => {
    return INDONESIAN_CITIES.find(c => c.id === selectedCityId) || INDONESIAN_CITIES[0];
  }, [selectedCityId]);

  const detectedGpsCity = useMemo(() => {
    if (locationMode === 'gps' && gpsCoords) {
      return findClosestCity(gpsCoords.lat, gpsCoords.lng);
    }
    return null;
  }, [locationMode, gpsCoords]);

  const fetchTimings = async (lat: number, lng: number, cityName?: string) => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const url = `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lng}&method=20`;
      const res = await axios.get(url, { timeout: 8000 });
      if (res.data?.data?.timings) {
        setPrayerTimes(res.data.data.timings);
        
        try {
          const cacheKey = `tarbiyah_prayer_cache_${cityName || `${lat.toFixed(2)},${lng.toFixed(2)}`}`;
          localStorage.setItem(cacheKey, JSON.stringify(res.data.data.timings));
        } catch {
          // ignore
        }

        const hijri: HijriData = res.data.data.date?.hijri;
        if (hijri) {
          setHijriDate(`${hijri.day} ${hijri.month.en} ${hijri.year} H`);
        }
      }
    } catch (err: any) {
      console.warn('Network error, attempting cache fallback:', err);
      const cacheKey = `tarbiyah_prayer_cache_${cityName || `${lat.toFixed(2)},${lng.toFixed(2)}`}`;
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        try {
          setPrayerTimes(JSON.parse(cached));
          setErrorMsg('Menggunakan data jadwal tersimpan (Mode Offline)');
        } catch {
          setErrorMsg('Gagal memuat jadwal sholat. Periksa koneksi internet Anda.');
        }
      } else {
        setErrorMsg('Gagal memuat jadwal sholat. Silakan coba lagi.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (locationMode === 'gps' && gpsCoords) {
      fetchTimings(gpsCoords.lat, gpsCoords.lng);
    } else {
      fetchTimings(selectedCity.lat, selectedCity.lng, selectedCity.name);
    }
  }, [locationMode, selectedCityId, gpsCoords]);

  const handleActivateGPS = () => {
    if (!navigator.geolocation) {
      setErrorMsg('Perangkat Anda tidak mendukung fitur lokasi GPS.');
      return;
    }

    setGpsLoading(true);
    setErrorMsg(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        setGpsCoords(coords);
        setLocationMode('gps');
        setGpsLoading(false);

        try {
          localStorage.setItem(STORAGE_LOCATION_MODE, 'gps');
          localStorage.setItem(STORAGE_GPS_COORDS, JSON.stringify(coords));
        } catch {
          // ignore
        }
      },
      (err) => {
        setGpsLoading(false);
        let msg = 'Gagal mengakses GPS.';
        if (err.code === err.PERMISSION_DENIED) {
          msg = 'Izin akses lokasi ditolak. Silakan aktifkan izin lokasi di browser atau pilih kota dari daftar.';
        } else if (err.code === err.POSITION_UNAVAILABLE) {
          msg = 'Sinyal GPS tidak tersedia saat ini.';
        } else if (err.code === err.TIMEOUT) {
          msg = 'Waktu pencarian GPS habis. Silakan coba lagi.';
        }
        setErrorMsg(msg);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  };

  const handleSelectCity = (city: IndonesianCity) => {
    setSelectedCityId(city.id);
    setLocationMode('city');
    setIsCityModalOpen(false);

    try {
      localStorage.setItem(STORAGE_LOCATION_MODE, 'city');
      localStorage.setItem(STORAGE_CITY_KEY, city.id);
    } catch {
      // ignore
    }
  };

  const islands = ['Semua', 'Jawa', 'Sumatera', 'Kalimantan', 'Sulawesi', 'Bali & Nusa Tenggara', 'Maluku & Papua'];

  const filteredCities = useMemo(() => {
    return INDONESIAN_CITIES.filter((city) => {
      const matchesSearch = 
        city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.province.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesIsland = selectedIsland === 'Semua' || city.island === selectedIsland;
      return matchesSearch && matchesIsland;
    });
  }, [searchQuery, selectedIsland]);

  const nextPrayer = useMemo(() => {
    if (!prayerTimes) return null;

    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const parseMinutes = (timeStr: string) => {
      if (!timeStr) return 0;
      const [h, m] = timeStr.split(':').map(Number);
      return h * 60 + m;
    };

    const schedule = [
      { name: 'Subuh', time: prayerTimes.Fajr, minutes: parseMinutes(prayerTimes.Fajr) },
      { name: 'Dzuhur', time: prayerTimes.Dhuhr, minutes: parseMinutes(prayerTimes.Dhuhr) },
      { name: 'Ashar', time: prayerTimes.Asr, minutes: parseMinutes(prayerTimes.Asr) },
      { name: 'Maghrib', time: prayerTimes.Maghrib, minutes: parseMinutes(prayerTimes.Maghrib) },
      { name: 'Isya', time: prayerTimes.Isha, minutes: parseMinutes(prayerTimes.Isha) },
    ];

    for (const item of schedule) {
      if (currentMinutes < item.minutes) {
        const diff = item.minutes - currentMinutes;
        const diffH = Math.floor(diff / 60);
        const diffM = diff % 60;
        const countdown = diffH > 0 ? `${diffH} jam ${diffM} mnt lagi` : `${diffM} menit lagi`;
        return { name: item.name, time: item.time, countdown };
      }
    }

    return { name: 'Subuh', time: prayerTimes.Fajr, countdown: 'Besok pagi' };
  }, [prayerTimes]);

  const prayerScheduleItems = [
    { id: 'Imsak', label: 'Imsak', time: prayerTimes?.Imsak || '-' },
    { id: 'Subuh', label: 'Subuh', time: prayerTimes?.Fajr || '-' },
    { id: 'Terbit', label: 'Terbit', time: prayerTimes?.Sunrise || '-' },
    { id: 'Dzuhur', label: 'Dzuhur', time: prayerTimes?.Dhuhr || '-' },
    { id: 'Ashar', label: 'Ashar', time: prayerTimes?.Asr || '-' },
    { id: 'Maghrib', label: 'Maghrib', time: prayerTimes?.Maghrib || '-' },
    { id: 'Isya', label: 'Isya', time: prayerTimes?.Isha || '-' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-100 flex flex-col justify-between"
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-xl font-bold text-emerald-900 flex items-center gap-2">
              <Clock className="text-amber-500" size={22} />
              Jadwal Sholat
            </h3>
            {hijriDate && (
              <p className="text-xs text-emerald-700/80 font-medium flex items-center gap-1 mt-0.5">
                <Moon size={12} className="text-amber-500" />
                {hijriDate}
              </p>
            )}
          </div>

          <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200/60">
            Kemenag RI (Waktu Standar)
          </span>
        </div>

        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50/50 border border-emerald-100/80 mb-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl shadow-sm ${
                locationMode === 'gps' ? 'bg-amber-400 text-emerald-950 ring-2 ring-amber-300' : 'bg-emerald-700 text-white'
              }`}>
                {locationMode === 'gps' ? <Navigation size={18} className="animate-spin-slow" /> : <MapPin size={18} />}
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                    {locationMode === 'gps' ? 'Lokasi Waktu Nyata (GPS)' : 'Wilayah Pilihan'}
                  </span>
                  {locationMode === 'gps' && (
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  )}
                </div>

                <div className="font-bold text-sm md:text-base text-emerald-950 flex items-center gap-1.5">
                  <span>
                    {locationMode === 'gps'
                      ? detectedGpsCity 
                        ? `Sekitar ${detectedGpsCity.name} (${detectedGpsCity.timezone})` 
                        : 'Koordinat GPS Anda'
                      : `${selectedCity.name} (${selectedCity.timezone})`}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleActivateGPS}
                disabled={gpsLoading}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold shadow-sm transition-all active:scale-95 ${
                  locationMode === 'gps'
                    ? 'bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold'
                    : 'bg-white hover:bg-emerald-100/60 text-emerald-800 border border-emerald-200'
                }`}
                title="Gunakan GPS perangkat untuk waktu akurat setempat"
              >
                {gpsLoading ? (
                  <RefreshCw size={14} className="animate-spin" />
                ) : (
                  <Navigation size={14} />
                )}
                <span>{gpsLoading ? 'Mencari...' : 'Aktifkan GPS'}</span>
              </button>

              <button
                onClick={() => setIsCityModalOpen(true)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm transition-all active:scale-95"
              >
                <span>Pilih Kota</span>
                <ChevronDown size={14} />
              </button>
            </div>
          </div>

          {errorMsg && (
            <div className="mt-2.5 flex items-center gap-1.5 text-xs text-amber-700 bg-amber-100/60 p-2 rounded-lg border border-amber-200">
              <AlertCircle size={14} className="shrink-0 text-amber-600" />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>

        {nextPrayer && (
          <div className="mb-4 flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-emerald-800 to-teal-800 text-white shadow-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400/20 text-amber-300">
                <Sparkles size={16} />
              </span>
              <div>
                <p className="text-[11px] text-emerald-200 font-medium">Waktu Sholat Berikutnya</p>
                <p className="text-sm font-bold text-amber-300">
                  {nextPrayer.name} pukul {nextPrayer.time}
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold bg-white/10 px-2.5 py-1 rounded-full text-emerald-100">
              {nextPrayer.countdown}
            </span>
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 animate-pulse">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-16 bg-gray-100 rounded-2xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {prayerScheduleItems.map((item) => {
              const isNext = nextPrayer?.name === item.label;
              return (
                <div
                  key={item.id}
                  className={`flex flex-col p-3 rounded-2xl transition-all duration-200 ${
                    isNext
                      ? 'bg-amber-50 border-2 border-amber-400 shadow-sm'
                      : 'bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-100/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-semibold ${
                      isNext ? 'text-amber-800' : 'text-emerald-900'
                    }`}>
                      {item.label}
                    </span>
                    {isNext && (
                      <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider bg-amber-200/60 px-1.5 py-0.2 rounded">
                        Next
                      </span>
                    )}
                  </div>
                  <span className={`text-lg font-bold mt-1 ${
                    isNext ? 'text-amber-700' : 'text-emerald-800'
                  }`}>
                    {item.time}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <AnimatePresence>
        {isCityModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-xl max-h-[85vh] flex flex-col rounded-3xl bg-white shadow-2xl overflow-hidden border border-emerald-100"
            >
              <div className="p-5 bg-gradient-to-r from-emerald-800 to-teal-900 text-white flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold flex items-center gap-2 text-amber-400">
                    <Compass size={20} />
                    Pilih Wilayah / Kota di Indonesia
                  </h4>
                  <p className="text-xs text-emerald-100 mt-0.5">
                    Tersedia kota-kota di wilayah waktu WIB, WITA, dan WIT
                  </p>
                </div>
                <button
                  onClick={() => setIsCityModalOpen(false)}
                  className="p-1.5 rounded-full text-emerald-100 hover:text-white hover:bg-white/10 transition"
                  aria-label="Tutup"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-4 border-b border-gray-100 bg-emerald-50/30">
                <div className="relative">
                  <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Ketik nama kota atau provinsi (contoh: Bandung, Aceh, Makassar)..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 text-sm"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                {!searchQuery && (
                  <div className="mt-3">
                    <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                      Kota Populer:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {POPULAR_CITIES.map((cityId) => {
                        const cityObj = INDONESIAN_CITIES.find(c => c.id === cityId);
                        if (!cityObj) return null;
                        const isSelected = selectedCityId === cityId && locationMode === 'city';
                        return (
                          <button
                            key={cityId}
                            onClick={() => handleSelectCity(cityObj)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                              isSelected
                                ? 'bg-emerald-700 text-amber-300 font-bold'
                                : 'bg-white hover:bg-emerald-100/70 text-gray-700 border border-gray-200'
                            }`}
                          >
                            {cityObj.name.replace('Kota ', '')}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="mt-3 flex overflow-x-auto pb-1 gap-1.5 no-scrollbar">
                  {islands.map((island) => (
                    <button
                      key={island}
                      onClick={() => setSelectedIsland(island)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                        selectedIsland === island
                          ? 'bg-emerald-800 text-white'
                          : 'bg-white text-gray-600 hover:bg-emerald-50 border border-gray-200'
                      }`}
                    >
                      {island}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-1.5 divide-y divide-gray-100">
                {filteredCities.length === 0 ? (
                  <div className="text-center py-8 text-gray-500 text-sm">
                    Tidak ditemukan kota dengan kata kunci "{searchQuery}".
                  </div>
                ) : (
                  filteredCities.map((city) => {
                    const isSelected = selectedCityId === city.id && locationMode === 'city';
                    return (
                      <button
                        key={city.id}
                        onClick={() => handleSelectCity(city)}
                        className={`w-full pt-2 pb-2 px-3 rounded-xl flex items-center justify-between text-left transition-all ${
                          isSelected
                            ? 'bg-emerald-50 text-emerald-950 font-bold border border-emerald-200'
                            : 'hover:bg-gray-50 text-gray-800'
                        }`}
                      >
                        <div>
                          <div className="font-semibold text-sm flex items-center gap-1.5">
                            <span>{city.name}</span>
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                              {city.timezone}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {city.province} • {city.island}
                          </p>
                        </div>
                        {isSelected && (
                          <Check size={18} className="text-emerald-700 shrink-0" />
                        )}
                      </button>
                    );
                  })
                )}
              </div>

              <div className="p-3.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    setIsCityModalOpen(false);
                    handleActivateGPS();
                  }}
                  className="flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-900 bg-amber-300 hover:bg-amber-400 px-3.5 py-2 rounded-xl transition shadow-sm"
                >
                  <Navigation size={14} />
                  <span>Atau Gunakan GPS Lokasi Saya</span>
                </button>

                <button
                  onClick={() => setIsCityModalOpen(false)}
                  className="text-xs font-semibold text-gray-600 hover:text-gray-900 px-3 py-1.5"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
