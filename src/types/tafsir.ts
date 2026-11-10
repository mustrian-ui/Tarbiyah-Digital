export interface SurahMeta {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: "Mekah" | "Madinah";
  arti: string;
  deskripsi?: string;
}

export interface TafsirData {
  surah: number;
  ayah: number;
  surahName: string;
  title: string;
  callout: string;
  classification: string;
  quranText: string;
  translation: string;
  tafsirBlocks: string[];
  tafsirHtml: string;
  prevAyah: string | null;
  nextAyah: string | null;
  sourceUrl: string;
}

export interface TafsirBookmark {
  id: string; // e.g. "73:2"
  surah: number;
  ayah: number;
  surahName: string;
  date: string;
}
