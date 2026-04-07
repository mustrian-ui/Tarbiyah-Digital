export interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

export interface Ayah {
  number: number;
  text: string;
  numberInSurah: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: boolean;
}

export interface PrayerTimes {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Sunset: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
}

export interface Doa {
  id: string;
  title: string;
  arabic: string;
  latin: string;
  translation: string;
  category: string;
}

export interface Hadith {
  number: number;
  arabic: string;
  translation: string;
  title: string;
  explanation?: string;
}

export interface Scientist {
  id: string;
  name: string;
  biography: string;
  contributions: string[];
  works: string[];
  image?: string;
}
