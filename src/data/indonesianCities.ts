export interface IndonesianCity {
  id: string;
  name: string;
  province: string;
  island: string;
  timezone: 'WIB' | 'WITA' | 'WIT';
  lat: number;
  lng: number;
}

export const POPULAR_CITIES = [
  'jakarta',
  'surabaya',
  'bandung',
  'medan',
  'semarang',
  'makassar',
  'yogyakarta',
  'denpasar',
  'palembang',
  'banda-aceh',
  'balikpapan',
  'jayapura'
];

export const INDONESIAN_CITIES: IndonesianCity[] = [
  // DKI Jakarta & Bodetabek
  { id: 'jakarta', name: 'DKI Jakarta', province: 'DKI Jakarta', island: 'Jawa', timezone: 'WIB', lat: -6.2088, lng: 106.8456 },
  { id: 'bogor', name: 'Kota Bogor', province: 'Jawa Barat', island: 'Jawa', timezone: 'WIB', lat: -6.5971, lng: 106.8060 },
  { id: 'depok', name: 'Kota Depok', province: 'Jawa Barat', island: 'Jawa', timezone: 'WIB', lat: -6.4025, lng: 106.7942 },
  { id: 'tangerang', name: 'Kota Tangerang', province: 'Banten', island: 'Jawa', timezone: 'WIB', lat: -6.1783, lng: 106.6319 },
  { id: 'tangerang-selatan', name: 'Tangerang Selatan', province: 'Banten', island: 'Jawa', timezone: 'WIB', lat: -6.2888, lng: 106.7179 },
  { id: 'bekasi', name: 'Kota Bekasi', province: 'Jawa Barat', island: 'Jawa', timezone: 'WIB', lat: -6.2383, lng: 106.9756 },

  // Jawa Barat
  { id: 'bandung', name: 'Kota Bandung', province: 'Jawa Barat', island: 'Jawa', timezone: 'WIB', lat: -6.9175, lng: 107.6191 },
  { id: 'cirebon', name: 'Kota Cirebon', province: 'Jawa Barat', island: 'Jawa', timezone: 'WIB', lat: -6.7320, lng: 108.5523 },
  { id: 'sukabumi', name: 'Kota Sukabumi', province: 'Jawa Barat', island: 'Jawa', timezone: 'WIB', lat: -6.9277, lng: 106.9300 },
  { id: 'tasikmalaya', name: 'Kota Tasikmalaya', province: 'Jawa Barat', island: 'Jawa', timezone: 'WIB', lat: -7.3274, lng: 108.2207 },
  { id: 'garut', name: 'Garut', province: 'Jawa Barat', island: 'Jawa', timezone: 'WIB', lat: -7.2278, lng: 107.9087 },
  { id: 'karawang', name: 'Karawang', province: 'Jawa Barat', island: 'Jawa', timezone: 'WIB', lat: -6.3054, lng: 107.3060 },

  // Jawa Tengah & DIY
  { id: 'semarang', name: 'Kota Semarang', province: 'Jawa Tengah', island: 'Jawa', timezone: 'WIB', lat: -6.9667, lng: 110.4167 },
  { id: 'surakarta', name: 'Solo / Surakarta', province: 'Jawa Tengah', island: 'Jawa', timezone: 'WIB', lat: -7.5755, lng: 110.8243 },
  { id: 'yogyakarta', name: 'Kota Yogyakarta', province: 'DI Yogyakarta', island: 'Jawa', timezone: 'WIB', lat: -7.7956, lng: 110.3695 },
  { id: 'magelang', name: 'Kota Magelang', province: 'Jawa Tengah', island: 'Jawa', timezone: 'WIB', lat: -7.4706, lng: 110.2178 },
  { id: 'purwokerto', name: 'Purwokerto (Banyumas)', province: 'Jawa Tengah', island: 'Jawa', timezone: 'WIB', lat: -7.4244, lng: 109.2302 },
  { id: 'tegal', name: 'Kota Tegal', province: 'Jawa Tengah', island: 'Jawa', timezone: 'WIB', lat: -6.8694, lng: 109.1402 },
  { id: 'pekalongan', name: 'Kota Pekalongan', province: 'Jawa Tengah', island: 'Jawa', timezone: 'WIB', lat: -6.8886, lng: 109.6753 },
  { id: 'kudus', name: 'Kudus', province: 'Jawa Tengah', island: 'Jawa', timezone: 'WIB', lat: -6.8048, lng: 110.8405 },
  { id: 'cilacap', name: 'Cilacap', province: 'Jawa Tengah', island: 'Jawa', timezone: 'WIB', lat: -7.7167, lng: 109.0000 },

  // Jawa Timur
  { id: 'surabaya', name: 'Kota Surabaya', province: 'Jawa Timur', island: 'Jawa', timezone: 'WIB', lat: -7.2575, lng: 112.7521 },
  { id: 'malang', name: 'Kota Malang', province: 'Jawa Timur', island: 'Jawa', timezone: 'WIB', lat: -7.9666, lng: 112.6326 },
  { id: 'kediri', name: 'Kota Kediri', province: 'Jawa Timur', island: 'Jawa', timezone: 'WIB', lat: -7.8480, lng: 112.0178 },
  { id: 'jember', name: 'Jember', province: 'Jawa Timur', island: 'Jawa', timezone: 'WIB', lat: -8.1724, lng: 113.6995 },
  { id: 'banyuwangi', name: 'Banyuwangi', province: 'Jawa Timur', island: 'Jawa', timezone: 'WIB', lat: -8.2192, lng: 114.3692 },
  { id: 'madiun', name: 'Kota Madiun', province: 'Jawa Timur', island: 'Jawa', timezone: 'WIB', lat: -7.6298, lng: 111.5239 },
  { id: 'probolinggo', name: 'Kota Probolinggo', province: 'Jawa Timur', island: 'Jawa', timezone: 'WIB', lat: -7.7543, lng: 113.2159 },
  { id: 'pasuruan', name: 'Kota Pasuruan', province: 'Jawa Timur', island: 'Jawa', timezone: 'WIB', lat: -7.6453, lng: 112.9075 },

  // Banten
  { id: 'serang', name: 'Kota Serang', province: 'Banten', island: 'Jawa', timezone: 'WIB', lat: -6.1104, lng: 106.1640 },
  { id: 'cilegon', name: 'Kota Cilegon', province: 'Banten', island: 'Jawa', timezone: 'WIB', lat: -6.0028, lng: 106.0538 },

  // Sumatera
  { id: 'banda-aceh', name: 'Kota Banda Aceh', province: 'Aceh', island: 'Sumatera', timezone: 'WIB', lat: 5.5483, lng: 95.3238 },
  { id: 'lhokseumawe', name: 'Kota Lhokseumawe', province: 'Aceh', island: 'Sumatera', timezone: 'WIB', lat: 5.1801, lng: 97.1407 },
  { id: 'medan', name: 'Kota Medan', province: 'Sumatera Utara', island: 'Sumatera', timezone: 'WIB', lat: 3.5952, lng: 98.6722 },
  { id: 'pematangsiantar', name: 'Pematangsiantar', province: 'Sumatera Utara', island: 'Sumatera', timezone: 'WIB', lat: 2.9599, lng: 99.0687 },
  { id: 'padang', name: 'Kota Padang', province: 'Sumatera Barat', island: 'Sumatera', timezone: 'WIB', lat: -0.9471, lng: 100.4172 },
  { id: 'bukittinggi', name: 'Kota Bukittinggi', province: 'Sumatera Barat', island: 'Sumatera', timezone: 'WIB', lat: -0.3055, lng: 100.3692 },
  { id: 'pekanbaru', name: 'Kota Pekanbaru', province: 'Riau', island: 'Sumatera', timezone: 'WIB', lat: 0.5071, lng: 101.4478 },
  { id: 'dumai', name: 'Kota Dumai', province: 'Riau', island: 'Sumatera', timezone: 'WIB', lat: 1.6667, lng: 101.4500 },
  { id: 'batam', name: 'Kota Batam', province: 'Kepulauan Riau', island: 'Sumatera', timezone: 'WIB', lat: 1.0456, lng: 104.0305 },
  { id: 'tanjungpinang', name: 'Kota Tanjungpinang', province: 'Kepulauan Riau', island: 'Sumatera', timezone: 'WIB', lat: 0.9167, lng: 104.4500 },
  { id: 'jambi', name: 'Kota Jambi', province: 'Jambi', island: 'Sumatera', timezone: 'WIB', lat: -1.6101, lng: 103.6131 },
  { id: 'palembang', name: 'Kota Palembang', province: 'Sumatera Selatan', island: 'Sumatera', timezone: 'WIB', lat: -2.9909, lng: 104.7565 },
  { id: 'lubuklinggau', name: 'Kota Lubuklinggau', province: 'Sumatera Selatan', island: 'Sumatera', timezone: 'WIB', lat: -3.2936, lng: 102.8617 },
  { id: 'bengkulu', name: 'Kota Bengkulu', province: 'Bengkulu', island: 'Sumatera', timezone: 'WIB', lat: -3.8004, lng: 102.2655 },
  { id: 'bandar-lampung', name: 'Kota Bandar Lampung', province: 'Lampung', island: 'Sumatera', timezone: 'WIB', lat: -5.4500, lng: 105.2667 },
  { id: 'metro', name: 'Kota Metro', province: 'Lampung', island: 'Sumatera', timezone: 'WIB', lat: -5.1139, lng: 105.3069 },
  { id: 'pangkal-pinang', name: 'Kota Pangkal Pinang', province: 'Bangka Belitung', island: 'Sumatera', timezone: 'WIB', lat: -2.1333, lng: 106.1167 },

  // Kalimantan
  { id: 'pontianak', name: 'Kota Pontianak', province: 'Kalimantan Barat', island: 'Kalimantan', timezone: 'WIB', lat: -0.0263, lng: 109.3425 },
  { id: 'singkawang', name: 'Kota Singkawang', province: 'Kalimantan Barat', island: 'Kalimantan', timezone: 'WIB', lat: 0.9083, lng: 108.9875 },
  { id: 'palangkaraya', name: 'Kota Palangka Raya', province: 'Kalimantan Tengah', island: 'Kalimantan', timezone: 'WIB', lat: -2.2161, lng: 113.9167 },
  { id: 'banjarmasin', name: 'Kota Banjarmasin', province: 'Kalimantan Selatan', island: 'Kalimantan', timezone: 'WITA', lat: -3.3194, lng: 114.5908 },
  { id: 'banjarbaru', name: 'Kota Banjarbaru', province: 'Kalimantan Selatan', island: 'Kalimantan', timezone: 'WITA', lat: -3.4403, lng: 114.8300 },
  { id: 'samarinda', name: 'Kota Samarinda', province: 'Kalimantan Timur', island: 'Kalimantan', timezone: 'WITA', lat: -0.5022, lng: 117.1536 },
  { id: 'balikpapan', name: 'Kota Balikpapan', province: 'Kalimantan Timur', island: 'Kalimantan', timezone: 'WITA', lat: -1.2654, lng: 116.8312 },
  { id: 'bontang', name: 'Kota Bontang', province: 'Kalimantan Timur', island: 'Kalimantan', timezone: 'WITA', lat: 0.1333, lng: 117.5000 },
  { id: 'tarakan', name: 'Kota Tarakan', province: 'Kalimantan Utara', island: 'Kalimantan', timezone: 'WITA', lat: 3.3000, lng: 117.6333 },
  { id: 'nusantara', name: 'Ibu Kota Nusantara (IKN)', province: 'Kalimantan Timur', island: 'Kalimantan', timezone: 'WITA', lat: -0.9744, lng: 116.7089 },

  // Bali & Nusa Tenggara
  { id: 'denpasar', name: 'Kota Denpasar', province: 'Bali', island: 'Bali & Nusa Tenggara', timezone: 'WITA', lat: -8.6705, lng: 115.2126 },
  { id: 'singaraja', name: 'Singaraja (Buleleng)', province: 'Bali', island: 'Bali & Nusa Tenggara', timezone: 'WITA', lat: -8.1120, lng: 115.0882 },
  { id: 'mataram', name: 'Kota Mataram (Lombok)', province: 'Nusa Tenggara Barat', island: 'Bali & Nusa Tenggara', timezone: 'WITA', lat: -8.5833, lng: 116.1167 },
  { id: 'bima', name: 'Kota Bima', province: 'Nusa Tenggara Barat', island: 'Bali & Nusa Tenggara', timezone: 'WITA', lat: -8.4597, lng: 118.7267 },
  { id: 'kupang', name: 'Kota Kupang', province: 'Nusa Tenggara Timur', island: 'Bali & Nusa Tenggara', timezone: 'WITA', lat: -10.1772, lng: 123.6070 },
  { id: 'labuan-bajo', name: 'Labuan Bajo', province: 'Nusa Tenggara Timur', island: 'Bali & Nusa Tenggara', timezone: 'WITA', lat: -8.4964, lng: 119.8877 },

  // Sulawesi
  { id: 'makassar', name: 'Kota Makassar', province: 'Sulawesi Selatan', island: 'Sulawesi', timezone: 'WITA', lat: -5.1477, lng: 119.4327 },
  { id: 'parepare', name: 'Kota Parepare', province: 'Sulawesi Selatan', island: 'Sulawesi', timezone: 'WITA', lat: -4.0131, lng: 119.6253 },
  { id: 'palopo', name: 'Kota Palopo', province: 'Sulawesi Selatan', island: 'Sulawesi', timezone: 'WITA', lat: -2.9944, lng: 120.1969 },
  { id: 'manado', name: 'Kota Manado', province: 'Sulawesi Utara', island: 'Sulawesi', timezone: 'WITA', lat: 1.4748, lng: 124.8421 },
  { id: 'tomohon', name: 'Kota Tomohon', province: 'Sulawesi Utara', island: 'Sulawesi', timezone: 'WITA', lat: 1.3300, lng: 124.8400 },
  { id: 'palu', name: 'Kota Palu', province: 'Sulawesi Tengah', island: 'Sulawesi', timezone: 'WITA', lat: -0.9003, lng: 119.8779 },
  { id: 'kendari', name: 'Kota Kendari', province: 'Sulawesi Tenggara', island: 'Sulawesi', timezone: 'WITA', lat: -3.9985, lng: 122.5126 },
  { id: 'gorontalo', name: 'Kota Gorontalo', province: 'Gorontalo', island: 'Sulawesi', timezone: 'WITA', lat: 0.5435, lng: 123.0568 },
  { id: 'mamuju', name: 'Kota Mamuju', province: 'Sulawesi Barat', island: 'Sulawesi', timezone: 'WITA', lat: -2.6748, lng: 118.8887 },

  // Maluku & Papua
  { id: 'ambon', name: 'Kota Ambon', province: 'Maluku', island: 'Maluku & Papua', timezone: 'WIT', lat: -3.6954, lng: 128.1814 },
  { id: 'ternate', name: 'Kota Ternate', province: 'Maluku Utara', island: 'Maluku & Papua', timezone: 'WIT', lat: 0.7904, lng: 127.3826 },
  { id: 'tidore', name: 'Kota Tidore Kepulauan', province: 'Maluku Utara', island: 'Maluku & Papua', timezone: 'WIT', lat: 0.6947, lng: 127.4419 },
  { id: 'jayapura', name: 'Kota Jayapura', province: 'Papua', island: 'Maluku & Papua', timezone: 'WIT', lat: -2.5337, lng: 140.7181 },
  { id: 'sorong', name: 'Kota Sorong', province: 'Papua Barat Daya', island: 'Maluku & Papua', timezone: 'WIT', lat: -0.8762, lng: 131.2558 },
  { id: 'manokwari', name: 'Manokwari', province: 'Papua Barat', island: 'Maluku & Papua', timezone: 'WIT', lat: -0.8615, lng: 134.0620 },
  { id: 'merauke', name: 'Merauke', province: 'Papua Selatan', island: 'Maluku & Papua', timezone: 'WIT', lat: -8.4991, lng: 140.4049 },
  { id: 'mimika', name: 'Timika (Mimika)', province: 'Papua Tengah', island: 'Maluku & Papua', timezone: 'WIT', lat: -4.5444, lng: 136.8872 }
];

export function findClosestCity(lat: number, lng: number): IndonesianCity {
  let closest = INDONESIAN_CITIES[0];
  let minDistance = Number.MAX_VALUE;

  for (const city of INDONESIAN_CITIES) {
    const d = Math.hypot(lat - city.lat, lng - city.lng);
    if (d < minDistance) {
      minDistance = d;
      closest = city;
    }
  }

  return closest;
}
