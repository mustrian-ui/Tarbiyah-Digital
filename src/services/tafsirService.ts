import { SurahMeta, TafsirData, TafsirBookmark } from "../types/tafsir";

export const SURAH_LIST: SurahMeta[] = [
  { nomor: 1, nama: "الفاتحة", namaLatin: "Al-Fatihah", jumlahAyat: 7, tempatTurun: "Mekah", arti: "Pembukaan" },
  { nomor: 2, nama: "البقرة", namaLatin: "Al-Baqarah", jumlahAyat: 286, tempatTurun: "Madinah", arti: "Sapi Betina" },
  { nomor: 3, nama: "آل عمران", namaLatin: "Ali 'Imran", jumlahAyat: 200, tempatTurun: "Madinah", arti: "Keluarga Imran" },
  { nomor: 4, nama: "النساء", namaLatin: "An-Nisa'", jumlahAyat: 176, tempatTurun: "Madinah", arti: "Wanita" },
  { nomor: 5, nama: "المائدة", namaLatin: "Al-Ma'idah", jumlahAyat: 120, tempatTurun: "Madinah", arti: "Jamuan Hidangan" },
  { nomor: 6, nama: "الأنعام", namaLatin: "Al-An'am", jumlahAyat: 165, tempatTurun: "Mekah", arti: "Binatang Ternak" },
  { nomor: 7, nama: "الأعراف", namaLatin: "Al-A'raf", jumlahAyat: 206, tempatTurun: "Mekah", arti: "Tempat yang Tertinggi" },
  { nomor: 8, nama: "الأنفال", namaLatin: "Al-Anfal", jumlahAyat: 75, tempatTurun: "Madinah", arti: "Rampasan Perang" },
  { nomor: 9, nama: "التوبة", namaLatin: "At-Taubah", jumlahAyat: 129, tempatTurun: "Madinah", arti: "Pengampunan" },
  { nomor: 10, nama: "يونس", namaLatin: "Yunus", jumlahAyat: 109, tempatTurun: "Mekah", arti: "Nabi Yunus" },
  { nomor: 11, nama: "هود", namaLatin: "Hud", jumlahAyat: 123, tempatTurun: "Mekah", arti: "Nabi Hud" },
  { nomor: 12, nama: "يوسف", namaLatin: "Yusuf", jumlahAyat: 111, tempatTurun: "Mekah", arti: "Nabi Yusuf" },
  { nomor: 13, nama: "الرعد", namaLatin: "Ar-Ra'd", jumlahAyat: 43, tempatTurun: "Madinah", arti: "Guruh" },
  { nomor: 14, nama: "ابراهيم", namaLatin: "Ibrahim", jumlahAyat: 52, tempatTurun: "Mekah", arti: "Nabi Ibrahim" },
  { nomor: 15, nama: "الحجر", namaLatin: "Al-Hijr", jumlahAyat: 99, tempatTurun: "Mekah", arti: "Gunung Al-Hijr" },
  { nomor: 16, nama: "النحل", namaLatin: "An-Nahl", jumlahAyat: 128, tempatTurun: "Mekah", arti: "Lebah" },
  { nomor: 17, nama: "الإسراء", namaLatin: "Al-Isra'", jumlahAyat: 111, tempatTurun: "Mekah", arti: "Memperjalankan di Malam Hari" },
  { nomor: 18, nama: "الكهف", namaLatin: "Al-Kahf", jumlahAyat: 110, tempatTurun: "Mekah", arti: "Penghuni Gua" },
  { nomor: 19, nama: "مريم", namaLatin: "Maryam", jumlahAyat: 98, tempatTurun: "Mekah", arti: "Maryam" },
  { nomor: 20, nama: "طه", namaLatin: "Taha", jumlahAyat: 135, tempatTurun: "Mekah", arti: "Ta Ha" },
  { nomor: 21, nama: "الأنبياء", namaLatin: "Al-Anbiya'", jumlahAyat: 112, tempatTurun: "Mekah", arti: "Para Nabi" },
  { nomor: 22, nama: "الحج", namaLatin: "Al-Hajj", jumlahAyat: 78, tempatTurun: "Madinah", arti: "Haji" },
  { nomor: 23, nama: "المؤمنون", namaLatin: "Al-Mu'minun", jumlahAyat: 118, tempatTurun: "Mekah", arti: "Orang-Orang Mukmin" },
  { nomor: 24, nama: "النور", namaLatin: "An-Nur", jumlahAyat: 64, tempatTurun: "Madinah", arti: "Cahaya" },
  { nomor: 25, nama: "الفرقان", namaLatin: "Al-Furqan", jumlahAyat: 77, tempatTurun: "Mekah", arti: "Pembeda" },
  { nomor: 26, nama: "الشعراء", namaLatin: "Asy-Syu'ara'", jumlahAyat: 227, tempatTurun: "Mekah", arti: "Penyair" },
  { nomor: 27, nama: "النمل", namaLatin: "An-Naml", jumlahAyat: 93, tempatTurun: "Mekah", arti: "Semut" },
  { nomor: 28, nama: "القصص", namaLatin: "Al-Qasas", jumlahAyat: 88, tempatTurun: "Mekah", arti: "Cerita-Cerita" },
  { nomor: 29, nama: "العنكبوت", namaLatin: "Al-'Ankabut", jumlahAyat: 69, tempatTurun: "Mekah", arti: "Laba-Laba" },
  { nomor: 30, nama: "الروم", namaLatin: "Ar-Rum", jumlahAyat: 60, tempatTurun: "Mekah", arti: "Bangsa Romawi" },
  { nomor: 31, nama: "لقمان", namaLatin: "Luqman", jumlahAyat: 34, tempatTurun: "Mekah", arti: "Luqman" },
  { nomor: 32, nama: "السجدة", namaLatin: "As-Sajdah", jumlahAyat: 30, tempatTurun: "Mekah", arti: "Sujud" },
  { nomor: 33, nama: "الأحزاب", namaLatin: "Al-Ahzab", jumlahAyat: 73, tempatTurun: "Madinah", arti: "Golongan yang Bersekutu" },
  { nomor: 34, nama: "سبإ", namaLatin: "Saba'", jumlahAyat: 54, tempatTurun: "Mekah", arti: "Kaum Saba'" },
  { nomor: 35, nama: "فاطر", namaLatin: "Fatir", jumlahAyat: 45, tempatTurun: "Mekah", arti: "Pencipta" },
  { nomor: 36, nama: "يس", namaLatin: "Ya-Sin", jumlahAyat: 83, tempatTurun: "Mekah", arti: "Ya Sin" },
  { nomor: 37, nama: "الصافات", namaLatin: "As-Saffat", jumlahAyat: 182, tempatTurun: "Mekah", arti: "Barisan-Barisan" },
  { nomor: 38, nama: "ص", namaLatin: "Sad", jumlahAyat: 88, tempatTurun: "Mekah", arti: "Shad" },
  { nomor: 39, nama: "الزمر", namaLatin: "Az-Zumar", jumlahAyat: 75, tempatTurun: "Mekah", arti: "Rombongan" },
  { nomor: 40, nama: "غافر", namaLatin: "Ghafir", jumlahAyat: 85, tempatTurun: "Mekah", arti: "Yang Mengampuni" },
  { nomor: 41, nama: "فصلت", namaLatin: "Fussilat", jumlahAyat: 54, tempatTurun: "Mekah", arti: "Yang Dijelaskan" },
  { nomor: 42, nama: "الشورى", namaLatin: "Asy-Syura", jumlahAyat: 53, tempatTurun: "Mekah", arti: "Musyawarah" },
  { nomor: 43, nama: "الزخرف", namaLatin: "Az-Zukhruf", jumlahAyat: 89, tempatTurun: "Mekah", arti: "Perhiasan" },
  { nomor: 44, nama: "الدخان", namaLatin: "Ad-Dukhan", jumlahAyat: 59, tempatTurun: "Mekah", arti: "Kabut Asap" },
  { nomor: 45, nama: "الجاثية", namaLatin: "Al-Jasiyah", jumlahAyat: 37, tempatTurun: "Mekah", arti: "Yang Berlutut" },
  { nomor: 46, nama: "الأحقاف", namaLatin: "Al-Ahqaf", jumlahAyat: 35, tempatTurun: "Mekah", arti: "Bukit-Bukit Pasir" },
  { nomor: 47, nama: "محمد", namaLatin: "Muhammad", jumlahAyat: 38, tempatTurun: "Madinah", arti: "Nabi Muhammad" },
  { nomor: 48, nama: "الفتح", namaLatin: "Al-Fath", jumlahAyat: 29, tempatTurun: "Madinah", arti: "Kemenangan" },
  { nomor: 49, nama: "الحجرات", namaLatin: "Al-Hujurat", jumlahAyat: 18, tempatTurun: "Madinah", arti: "Kamar-Kamar" },
  { nomor: 50, nama: "ق", namaLatin: "Qaf", jumlahAyat: 45, tempatTurun: "Mekah", arti: "Qaf" },
  { nomor: 51, nama: "الذاريات", namaLatin: "Az-Zariyat", jumlahAyat: 60, tempatTurun: "Mekah", arti: "Angin yang Menerbangkan" },
  { nomor: 52, nama: "الطور", namaLatin: "At-Tur", jumlahAyat: 49, tempatTurun: "Mekah", arti: "Bukit Tursina" },
  { nomor: 53, nama: "النجم", namaLatin: "An-Najm", jumlahAyat: 62, tempatTurun: "Mekah", arti: "Bintang" },
  { nomor: 54, nama: "القمر", namaLatin: "Al-Qamar", jumlahAyat: 55, tempatTurun: "Mekah", arti: "Bulan" },
  { nomor: 55, nama: "الرحمن", namaLatin: "Ar-Rahman", jumlahAyat: 78, tempatTurun: "Madinah", arti: "Yang Maha Pemurah" },
  { nomor: 56, nama: "الواقعة", namaLatin: "Al-Waqi'ah", jumlahAyat: 96, tempatTurun: "Mekah", arti: "Hari Kiamat" },
  { nomor: 57, nama: "الحديد", namaLatin: "Al-Hadid", jumlahAyat: 29, tempatTurun: "Madinah", arti: "Besi" },
  { nomor: 58, nama: "المجادلة", namaLatin: "Al-Mujadilah", jumlahAyat: 22, tempatTurun: "Madinah", arti: "Gugatan" },
  { nomor: 59, nama: "الحشر", namaLatin: "Al-Hasyr", jumlahAyat: 24, tempatTurun: "Madinah", arti: "Pengusiran" },
  { nomor: 60, nama: "الممتحنة", namaLatin: "Al-Mumtahanah", jumlahAyat: 13, tempatTurun: "Madinah", arti: "Wanita yang Diuji" },
  { nomor: 61, nama: "الصف", namaLatin: "As-Saff", jumlahAyat: 14, tempatTurun: "Madinah", arti: "Barisan" },
  { nomor: 62, nama: "الجمعة", namaLatin: "Al-Jumu'ah", jumlahAyat: 11, tempatTurun: "Madinah", arti: "Hari Jum'at" },
  { nomor: 63, nama: "المنافقون", namaLatin: "Al-Munafiqun", jumlahAyat: 11, tempatTurun: "Madinah", arti: "Kaum Munafik" },
  { nomor: 64, nama: "التغابن", namaLatin: "At-Taghabun", jumlahAyat: 18, tempatTurun: "Madinah", arti: "Hari Ditampakkan Kesalahan" },
  { nomor: 65, nama: "الطلاق", namaLatin: "At-Talaq", jumlahAyat: 12, tempatTurun: "Madinah", arti: "Perceraian" },
  { nomor: 66, nama: "التحريم", namaLatin: "At-Tahrim", jumlahAyat: 12, tempatTurun: "Madinah", arti: "Pengharaman" },
  { nomor: 67, nama: "الملك", namaLatin: "Al-Mulk", jumlahAyat: 30, tempatTurun: "Mekah", arti: "Kerajaan" },
  { nomor: 68, nama: "القلم", namaLatin: "Al-Qalam", jumlahAyat: 52, tempatTurun: "Mekah", arti: "Pena" },
  { nomor: 69, nama: "الحاقة", namaLatin: "Al-Haqqah", jumlahAyat: 52, tempatTurun: "Mekah", arti: "Kenyataan (Hari Kiamat)" },
  { nomor: 70, nama: "المعارج", namaLatin: "Al-Ma'arij", jumlahAyat: 44, tempatTurun: "Mekah", arti: "Tempat Naik" },
  { nomor: 71, nama: "نوح", namaLatin: "Nuh", jumlahAyat: 28, tempatTurun: "Mekah", arti: "Nabi Nuh" },
  { nomor: 72, nama: "الجن", namaLatin: "Al-Jinn", jumlahAyat: 28, tempatTurun: "Mekah", arti: "Jin" },
  { nomor: 73, nama: "المزمل", namaLatin: "Al-Muzzammil", jumlahAyat: 20, tempatTurun: "Mekah", arti: "Orang yang Berselimut" },
  { nomor: 74, nama: "المدثر", namaLatin: "Al-Muddassir", jumlahAyat: 56, tempatTurun: "Mekah", arti: "Orang yang Berkemul" },
  { nomor: 75, nama: "القيامة", namaLatin: "Al-Qiyamah", jumlahAyat: 40, tempatTurun: "Mekah", arti: "Hari Berbangkit" },
  { nomor: 76, nama: "الانسان", namaLatin: "Al-Insan", jumlahAyat: 31, tempatTurun: "Madinah", arti: "Manusia" },
  { nomor: 77, nama: "المرسلات", namaLatin: "Al-Mursalat", jumlahAyat: 50, tempatTurun: "Mekah", arti: "Malaikat yang Diutus" },
  { nomor: 78, nama: "النبإ", namaLatin: "An-Naba'", jumlahAyat: 40, tempatTurun: "Mekah", arti: "Berita Besar" },
  { nomor: 79, nama: "النازعات", namaLatin: "An-Nazi'at", jumlahAyat: 46, tempatTurun: "Mekah", arti: "Malaikat Pencabut" },
  { nomor: 80, nama: "عبس", namaLatin: "'Abasa", jumlahAyat: 42, tempatTurun: "Mekah", arti: "Ia Bermuka Masam" },
  { nomor: 81, nama: "التكوير", namaLatin: "At-Takwir", jumlahAyat: 29, tempatTurun: "Mekah", arti: "Menggulung" },
  { nomor: 82, nama: "الانفطار", namaLatin: "Al-Infitar", jumlahAyat: 19, tempatTurun: "Mekah", arti: "Terbelah" },
  { nomor: 83, nama: "المطففين", namaLatin: "Al-Mutaffifin", jumlahAyat: 36, tempatTurun: "Mekah", arti: "Orang-Orang Curang" },
  { nomor: 84, nama: "الانشقاق", namaLatin: "Al-Insyiqaq", jumlahAyat: 25, tempatTurun: "Mekah", arti: "Terbelah" },
  { nomor: 85, nama: "البروج", namaLatin: "Al-Buruj", jumlahAyat: 22, tempatTurun: "Mekah", arti: "Gugusan Bintang" },
  { nomor: 86, nama: "الطارق", namaLatin: "At-Tariq", jumlahAyat: 17, tempatTurun: "Mekah", arti: "Yang Datang di Malam Hari" },
  { nomor: 87, nama: "الأعلى", namaLatin: "Al-A'la", jumlahAyat: 19, tempatTurun: "Mekah", arti: "Yang Paling Tinggi" },
  { nomor: 88, nama: "الغاشية", namaLatin: "Al-Ghasyiyah", jumlahAyat: 26, tempatTurun: "Mekah", arti: "Hari Pembalasan" },
  { nomor: 89, nama: "الفجر", namaLatin: "Al-Fajr", jumlahAyat: 30, tempatTurun: "Mekah", arti: "Fajar" },
  { nomor: 90, nama: "البلد", namaLatin: "Al-Balad", jumlahAyat: 20, tempatTurun: "Mekah", arti: "Negeri" },
  { nomor: 91, nama: "الشمس", namaLatin: "Asy-Syams", jumlahAyat: 15, tempatTurun: "Mekah", arti: "Matahari" },
  { nomor: 92, nama: "الليل", namaLatin: "Al-Lail", jumlahAyat: 21, tempatTurun: "Mekah", arti: "Malam" },
  { nomor: 93, nama: "الضحى", namaLatin: "Ad-Duha", jumlahAyat: 11, tempatTurun: "Mekah", arti: "Waktu Dhuha" },
  { nomor: 94, nama: "الشرح", namaLatin: "Asy-Syarh", jumlahAyat: 8, tempatTurun: "Mekah", arti: "Kelapangan" },
  { nomor: 95, nama: "التين", namaLatin: "At-Tin", jumlahAyat: 8, tempatTurun: "Mekah", arti: "Buah Tin" },
  { nomor: 96, nama: "العلق", namaLatin: "Al-'Alaq", jumlahAyat: 19, tempatTurun: "Mekah", arti: "Segumpal Darah" },
  { nomor: 97, nama: "القدر", namaLatin: "Al-Qadr", jumlahAyat: 5, tempatTurun: "Mekah", arti: "Kemuliaan" },
  { nomor: 98, nama: "البينة", namaLatin: "Al-Bayyinah", jumlahAyat: 8, tempatTurun: "Madinah", arti: "Bukti Nyata" },
  { nomor: 99, nama: "الزلزلة", namaLatin: "Az-Zalzalah", jumlahAyat: 8, tempatTurun: "Madinah", arti: "Keguncangan" },
  { nomor: 100, nama: "العاديات", namaLatin: "Al-'Adiyat", jumlahAyat: 11, tempatTurun: "Mekah", arti: "Kuda yang Berlari Kencang" },
  { nomor: 101, nama: "القارعة", namaLatin: "Al-Qari'ah", jumlahAyat: 11, tempatTurun: "Mekah", arti: "Hari Kiamat yang Menggemparkan" },
  { nomor: 102, nama: "التكاثر", namaLatin: "At-Takasur", jumlahAyat: 8, tempatTurun: "Mekah", arti: "Bermegah-Megahan" },
  { nomor: 103, nama: "العصر", namaLatin: "Al-'Asr", jumlahAyat: 3, tempatTurun: "Mekah", arti: "Masa / Waktu" },
  { nomor: 104, nama: "الهمزة", namaLatin: "Al-Humazah", jumlahAyat: 9, tempatTurun: "Mekah", arti: "Pengumpat" },
  { nomor: 105, nama: "الفيل", namaLatin: "Al-Fil", jumlahAyat: 5, tempatTurun: "Mekah", arti: "Gajah" },
  { nomor: 106, nama: "قريش", namaLatin: "Quraisy", jumlahAyat: 4, tempatTurun: "Mekah", arti: "Suku Quraisy" },
  { nomor: 107, nama: "الماعون", namaLatin: "Al-Ma'un", jumlahAyat: 7, tempatTurun: "Mekah", arti: "Barang-Barang yang Berguna" },
  { nomor: 108, nama: "الكوثر", namaLatin: "Al-Kausar", jumlahAyat: 3, tempatTurun: "Mekah", arti: "Nikmat yang Banyak" },
  { nomor: 109, nama: "الكافرون", namaLatin: "Al-Kafirun", jumlahAyat: 6, tempatTurun: "Mekah", arti: "Orang-Orang Kafir" },
  { nomor: 110, nama: "النصر", namaLatin: "An-Nasr", jumlahAyat: 3, tempatTurun: "Madinah", arti: "Pertolongan" },
  { nomor: 111, nama: "المسد", namaLatin: "Al-Lahab", jumlahAyat: 5, tempatTurun: "Mekah", arti: "Gejolak Api" },
  { nomor: 112, nama: "الإخلاص", namaLatin: "Al-Ikhlas", jumlahAyat: 4, tempatTurun: "Mekah", arti: "Ikhlas (Kemurnian Keesaan)" },
  { nomor: 113, nama: "الفلق", namaLatin: "Al-Falaq", jumlahAyat: 5, tempatTurun: "Mekah", arti: "Waktu Subuh" },
  { nomor: 114, nama: "الناس", namaLatin: "An-Nas", jumlahAyat: 6, tempatTurun: "Mekah", arti: "Manusia" }
];

export function getSurahMeta(nomor: number): SurahMeta | undefined {
  return SURAH_LIST.find(s => s.nomor === nomor);
}

// Built-in initial offline cache for Surah 73:2 (User reference target)
export const INITIAL_TAFSIR_73_2: TafsirData = {
  surah: 73,
  ayah: 2,
  surahName: "Al-Muzzammil",
  title: "Tafsir As-Sa'di - Indonesian untuk Surah Al-Muzzammil — Ayat 2",
  callout: "Mencakup penjelasan 11 ayat: QS. Al-Muzzammil 73:1 – 73:11",
  classification: "Makkiyah",
  quranText: "يَٰٓأَيُّهَا ٱلۡمُزَّمِّلُ ١ قُمِ ٱلَّيۡلَ إِلَّا قَلِيلٗا ٢ نِّصۡفَهُۥٓ أَوِ ٱنقُصۡ مِنۡهُ قَلِيلًا ٣ أَوۡ زِدۡ عَلَيۡهِ وَرَتِّلِ ٱلۡقُرۡءَانَ تَرۡتِيلًا ٤ إِنَّا سَنُلۡقِي عَلَيۡكَ قَوۡلٗا ثَقِيلًا ٥ إِنَّ نَاشِئَةَ ٱلَّيۡلِ هِيَ أَشَدُّ وَطۡـٔٗا وَأَقۡوَمُ قِيلًا ٦ إِنَّ لَكَ فِي ٱلنَّهَارِ سَبۡحٗا طَوِيلٗا ٧ وَٱذۡكُرِ ٱسۡمَ رَبِّكَ وَتَبَتَّلۡ إِلَيۡهِ تَبۡتِيلٗا ٨ رَّبُّ ٱلۡمَشۡرِقِ وَٱلۡمَغۡرِبِ لَآ إِلَٰهَ إِلَّا هُوَ فَٱتَّخِذۡهُ وَكِيلٗا ٩ وَٱصۡبِرۡ عَلَىٰ مَا يَقُولُونَ وَٱهۡجُرۡهُمۡ هَجۡرٗا جَمِيلٗا ١٠ وَذَرۡنِي وَٱلۡمُكَذِّبِينَ أُوْلِي ٱلنَّعۡمَةِ وَمَهِّلۡهُمۡ قَلِيلًا ١١",
  translation: `"Hai orang yang berselimut (Muhammad), bangunlah (untuk shalat) di malam hari, kecuali sedikit (dari padanya), (yaitu) seperduanya atau kurangilah darinya sedikit, atau lebih dari seperdua itu. Dan bacalah al-Qur'an itu dengan perlahan-lahan. Sesungguhnya Kami akan menurunkan kepadamu perkataan yang berat. Sesungguhnya bangun di waktu malam adalah lebih tepat (untuk khusyu') dan bacaan di waktu itu lebih berkesan. Sesungguhnya kamu pada siang hari mempunyai urusan yang panjang (banyak). Sebutlah nama Rabbmu, dan beribadahlah kepadaNya dengan penuh ketekunan. (Dia-lah) Rabb masyriq dan maghrib, tiada ilah (yang berhak disembah) melainkan Dia, maka ambillah Dia sebagai pelindung. Dan bersabarlah terhadap apa yang mereka ucapkan dan jauhilah mereka dengan cara yang baik. Dan biarkanlah Aku (saja) bertindak terhadap orang-orang yang mendustakan itu, orang-orang yang mempunyai kemewahan dan beri tangguhlah mereka barang sebentar." (QS. Al-Muzzammil: 1-11)`,
  tafsirBlocks: [
    `(1-5) Al-Muzzammil adalah orang yang menutupi badannya dengan baju semakna dengan kata al-Muddatstsir. Hal ini terjadi pada Rasulullah ﷺ ketika Allah سبحانه وتعالى memuliakan beliau dengan risalah. Allah سبحانه وتعالى memulainya dengan menurunkan wahyu dengan mengutus Jibril menemui beliau. Rasulullah ﷺ melihat sesuatu yang belum pernah beliau lihat sebelumnya dan tidak ada yang mampu bertahan atasnya melainkan hanya para rasul. Pada saat itu Rasulullah ﷺ gemetar kala melihat Jibril عليه السلام. Kemudian Rasulullah ﷺ pulang kepada istri beliau dan berkata, "Selimutilah aku, selimutilah aku." Rasulullah ﷺ menggigil ketakutan. Setelah itu datanglah Jibril dan berkata, "Bacalah!" Rasulullah ﷺ menjawab, "Aku tidak bisa membaca." Jibril memeluk erat beliau hingga payah lalu melepaskannya dan berkata, "Bacalah!" Rasulullah ﷺ kembali menjawab, "Aku tidak bisa membaca." Jibril mengulanginya hingga tiga kali kemudian membacakan Firman Allah سبحانه وتعالى, {اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ} "Bacalah dengan (menyebut) nama Rabbmu Yang menciptakan." Maka Rasulullah ﷺ kembali dengan membawa ayat tersebut seraya gemetar hatinya hingga reda ketakutan beliau. Kemudian Allah سبحانه وتعالى mengukuhkan tekad beliau dan memerintahkan beliau untuk bersabar atas gangguan kaumnya.`,
    `(2-4) Allah سبحانه وتعالى memerintah beliau dengan ibadah yang paling mulia, yaitu shalat pada waktu yang paling mantap dan utama (qiyamul lail). Di antara rahmat Allah سبحانه وتعالى, Dia tidak memerintahkan Rasulullah ﷺ untuk menghidupkan seluruh malam dengan shalat, tapi Allah سبحانه وتعالى berfirman, {قُمِ اللَّيْلَ إِلَّا قَلِيلًا} "Bangunlah (untuk shalat) di malam hari, kecuali sedikit (darinya)." Selanjutnya Allah سبحانه وتعالى menentukannya: {نِصْفَهُ أَوِ انْقُصْ مِنْهُ قَلِيلًا} "(Yaitu) seperduanya atau kurangilah darinya sedikit," yakni dari seperdua, misalnya sepertiganya, {أَوْ زِدْ عَلَيْهِ} "atau lebih dari seperdua itu," lebih dari seperdua seukuran dua pertiga malam, {وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا} "dan bacalah al-Qur'an itu dengan perlahan-lahan," karena membaca al-Qur'an dengan perlahan bisa mendatangkan perenungan, pemikiran, bisa menggerakkan kalbu, beribadah dengan tanda-tanda kebesaran Allah سبحانه وتعالى serta bersiap-siaga secara sempurna untuk itu.`,
    `(5) Allah سبحانه وتعالى berfirman, {إِنَّا سَنُلْقِي عَلَيْكَ قَوْلًا ثَقِيلًا} "Sesungguhnya Kami akan menurunkan kepadamu perkataan yang berat," yakni Kami akan mewahyukan al-Qur'an yang agung ini padamu. Yang dimaksud dengan berat adalah makna-maknanya yang agung, hukum-hukumnya yang sarat faedah, dan sifat-sifatnya yang luhur. Untuk itu, sesuatu yang sifatnya seperti ini layak dipersiapkan, dibaca secara perlahan, serta merenungkan apa yang tercakup di dalamnya.`,
    `(6) Kemudian Allah سبحانه وتعالى menyebutkan hikmah dalam perintah qiyamul lail seraya berfirman, {إِنَّ نَاشِئَةَ اللَّيْلِ} "Sesungguhnya bangun di waktu malam," yakni shalat pada waktu malam setelah tidur, {هِيَ أَشَدُّ وَطْئًا وَأَقْوَمُ قِيلًا} "adalah lebih tepat (untuk khusyu') dan bacaan di waktu itu lebih berkesan," yakni lebih dekat mencapai maksud al-Qur'an sehingga sesuai antara hati dan lisan, beban kesibukan dunia menjadi tenang, apa yang diucapkan bisa dipahami, dan urusannya menjadi lurus.`,
    `(7) Tidak seperti di siang hari, karena di waktu siang maksud-maksud ini tidak bisa dicapai dengan konsentrasi yang sama. Karena itu Allah سبحانه وتعالى berfirman, {إِنَّ لَكَ فِي النَّهَارِ سَبْحًا طَوِيلًا} "Sesungguhnya kamu pada siang hari mempunyai urusan yang panjang (banyak)," yakni untuk memenuhi kebutuhan dan penghidupan yang menyebabkan hati sibuk dengan yang lain, tidak konsentrasi secara sempurna.`,
    `(8) {وَاذْكُرِ اسْمَ رَبِّكَ} "Sebutlah nama Rabbmu," mencakup berbagai macam dzikir, {وَتَبَتَّلْ إِلَيْهِ تَبْتِيلًا} "dan beribadahlah kepadaNya dengan penuh ketekunan," yakni konsentrasi padaNya, sebab konsentrasi dan kembali kepada Allah سبحانه وتعالى adalah terputusnya ketergantungan hati dari seluruh makhluk dan penuh kecintaan terhadap Allah سبحانه وتعالى serta segala sesuatu yang bisa mendekatkan padaNya dan pada ridhaNya.`,
    `(9) {رَبُّ الْمَشْرِقِ وَالْمَغْرِبِ} "(Dia-lah) Rabb masyriq dan maghrib," ini adalah isim jenis yang mencakup seluruh penjuru timur dan barat. Allah سبحانه وتعالى adalah Rabb seluruh timur dan barat serta segala cahaya yang ada padanya. Allah سبحانه وتعالى adalah Rabb segala sesuatu, Pencipta dan Pengaturnya. {لَا إِلَهَ إِلَّا هُوَ} "Tiada tuhan yang berhak disembah melainkan Dia," tidak ada yang berhak disembah selain WajahNya Yang Agung. {فَاتَّخِذْهُ وَكِيلًا} "Maka ambillah Dia sebagai pelindung," yakni Penjaga dan Pengatur untuk segala urusanmu.`,
    `(10-11) Pada saat Allah سبحانه وتعالى memerintahkan Rasulullah ﷺ untuk shalat dan berdzikir, Allah juga memerintahkan beliau untuk bersabar atas perkataan para penentang yang mencela dakwah, dan menjauhi mereka dengan cara yang baik (hajran jamila). Allah menegaskan bahwa Dia sendiri yang akan bertindak membalas orang-orang pendusta yang tenggelam dalam kemewahan dunia.`
  ],
  tafsirHtml: "",
  prevAyah: "73:1",
  nextAyah: "73:3",
  sourceUrl: "https://qul.tarteel.ai/resources/translation/503/docs?ayah=73%3A2"
};

// Clean and beautify the HTML returned from Qul Tarteel
function formatTafsirHtml(rawHtml: string): string {
  if (!rawHtml) return "";

  // Replace symbols like Rasulullah a with ﷺ
  let formatted = rawHtml
    .replace(/Rasulullah\s+a\b/g, "Rasulullah ﷺ")
    .replace(/Nabi\s+a\b/g, "Nabi ﷺ")
    .replace(/beliau\s+a\b/g, "beliau ﷺ")
    .replace(/Jibril\s+عليه\s+السلام/g, "Jibril عليه السلام");

  // Clean extra spaces inside spans
  formatted = formatted
    .replace(/<span class="green">\(([^)]+)\)<\/span>/g, '<span class="inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 font-bold text-xs mx-1">$1</span>')
    .replace(/<span class="brown">/g, '<span class="text-amber-800 font-semibold font-serif">')
    .replace(/<span class="blue">/g, '<span class="text-teal-700 font-medium">')
    .replace(/﴾/g, '<span class="text-emerald-700 font-bold text-base"> ﴾ </span>')
    .replace(/﴿/g, '<span class="text-emerald-700 font-bold text-base"> ﴿ </span>');

  return formatted;
}

// In-memory runtime cache
const memoryTafsirCache = new Map<string, TafsirData>();
memoryTafsirCache.set("73:2", INITIAL_TAFSIR_73_2);
memoryTafsirCache.set("73:1", INITIAL_TAFSIR_73_2);

export async function fetchTafsir(surah: number, ayah: number): Promise<TafsirData> {
  const key = `${surah}:${ayah}`;
  const surahMeta = getSurahMeta(surah) || {
    nomor: surah,
    nama: "القرآن",
    namaLatin: `Surah ${surah}`,
    jumlahAyat: 100,
    tempatTurun: "Mekah" as const,
    arti: "Al-Qur'an"
  };

  if (memoryTafsirCache.has(key)) {
    return memoryTafsirCache.get(key)!;
  }

  const endpoint = `/api/tafsir?ayah=${encodeURIComponent(key)}`;
  const directUrl = `https://qul.tarteel.ai/resources/translation/503/docs?ayah=${encodeURIComponent(key)}`;

  try {
    const res = await fetch(endpoint, {
      headers: {
        Accept: "text/html,application/xhtml+xml,application/xml"
      }
    });

    if (!res.ok) {
      throw new Error(`Proxy error ${res.status}`);
    }

    const html = await res.text();

    // 1. Extract Title
    const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : `Tafsir As-Sa'di - Surah ${surahMeta.namaLatin} Ayat ${ayah}`;

    // 2. Extract Callout
    const calloutMatch = html.match(/<div class="docs-callout[^"]*">([\s\S]*?)<\/div>/i);
    let callout = calloutMatch ? calloutMatch[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() : "";
    if (callout) {
      callout = callout
        .replace(/You are reading tafsir of (\d+) ayahs?:/i, "Mencakup penjelasan $1 ayat:")
        .replace(/to/i, "sampai");
    }

    // 3. Extract Quran Arabic text
    const quranTextMatch = html.match(/<div class="qpc-hafs quran-text">([\s\S]*?)<\/div>/i);
    const quranText = quranTextMatch ? quranTextMatch[1].replace(/\s+/g, " ").trim() : "";

    // 4. Extract Translation
    const transMatch = html.match(/<p class="ms translation"[^>]*>([\s\S]*?)<\/p>/i);
    const translation = transMatch ? transMatch[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() : "";

    // 5. Extract Surah classification
    const classMatch = html.match(/<p lang="jv"[^>]*>([\s\S]*?)<\/p>/i);
    const classification = classMatch ? classMatch[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() : (surahMeta.tempatTurun === "Mekah" ? "Makkiyah" : "Madaniyah");

    // 6. Extract Tafsir Blocks
    const tafsirBlocks: string[] = [];
    const blockRegex = /<(?:div|p)\s+lang="(?:id|ms)"\s+class="[^"]*">([\s\S]*?)<\/(?:div|p)>/gi;
    let m;
    while ((m = blockRegex.exec(html)) !== null) {
      const raw = m[1].trim();
      if (raw && !raw.includes("Dengan Menyebut Nama Allah") && !raw.includes('class="ms translation"')) {
        const cleaned = raw.replace(/\s+/g, " ").trim();
        tafsirBlocks.push(cleaned);
      }
    }

    // 7. Extract Next / Prev
    const prevMatch = html.match(/href="\/resources\/translation\/503\?ayah=([^"]+)"[^>]*>\s*←\s*Previous/i);
    const nextMatch = html.match(/href="\/resources\/translation\/503\?ayah=([^"]+)"[^>]*>\s*Next\s*→/i);

    const prevAyah = prevMatch ? decodeURIComponent(prevMatch[1]) : null;
    const nextAyah = nextMatch ? decodeURIComponent(nextMatch[1]) : null;

    const tafsirHtml = formatTafsirHtml(tafsirBlocks.map(b => `<p class="leading-relaxed mb-4">${b}</p>`).join(""));

    const parsedData: TafsirData = {
      surah,
      ayah,
      surahName: surahMeta.namaLatin,
      title,
      callout: callout || `Mencakup penjelasan QS. ${surahMeta.namaLatin} ayat ${ayah}`,
      classification,
      quranText,
      translation,
      tafsirBlocks,
      tafsirHtml,
      prevAyah,
      nextAyah,
      sourceUrl: directUrl
    };

    memoryTafsirCache.set(key, parsedData);
    return parsedData;
  } catch (err) {
    console.warn(`Fetch tafsir from /api/tafsir for ${key} failed, checking fallback:`, err);
    if (key === "73:2" || key === "73:1") {
      return INITIAL_TAFSIR_73_2;
    }
    // Return gracefully with available Surah info
    return {
      surah,
      ayah,
      surahName: surahMeta.namaLatin,
      title: `Tafsir As-Sa'di - QS. ${surahMeta.namaLatin} Ayat ${ayah}`,
      callout: `Mencakup Penjelasan QS. ${surahMeta.namaLatin} Ayat ${ayah}`,
      classification: surahMeta.tempatTurun === "Mekah" ? "Makkiyah" : "Madaniyah",
      quranText: "",
      translation: `Tafsir As-Sa'di (Indonesian) untuk Surah ${surahMeta.namaLatin} ayat ${ayah}.`,
      tafsirBlocks: [
        `Penjelasan tafsir sedang dimuat. Silakan periksa koneksi internet Anda atau muat ulang halaman ini.`
      ],
      tafsirHtml: `<p>Penjelasan tafsir untuk QS. ${surahMeta.namaLatin} ayat ${ayah} sedang dimuat.</p>`,
      prevAyah: ayah > 1 ? `${surah}:${ayah - 1}` : null,
      nextAyah: ayah < surahMeta.jumlahAyat ? `${surah}:${ayah + 1}` : null,
      sourceUrl: directUrl
    };
  }
}

// Tafsir Bookmarks
const STORAGE_KEY_TAFSIR_BOOKMARKS = "tarbiyah_tafsir_bookmarks";

export function getTafsirBookmarks(): TafsirBookmark[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_TAFSIR_BOOKMARKS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleTafsirBookmark(surah: number, ayah: number, surahName: string): boolean {
  try {
    const list = getTafsirBookmarks();
    const id = `${surah}:${ayah}`;
    const idx = list.findIndex(b => b.id === id);
    let updated: TafsirBookmark[];
    let isSaved = false;

    if (idx === -1) {
      updated = [{ id, surah, ayah, surahName, date: new Date().toISOString() }, ...list];
      isSaved = true;
    } else {
      updated = list.filter(b => b.id !== id);
      isSaved = false;
    }

    localStorage.setItem(STORAGE_KEY_TAFSIR_BOOKMARKS, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent("tarbiyah_tafsir_bookmark_changed", { detail: { id, isSaved } }));
    return isSaved;
  } catch {
    return false;
  }
}

export function isTafsirBookmarked(surah: number, ayah: number): boolean {
  const id = `${surah}:${ayah}`;
  const list = getTafsirBookmarks();
  return list.some(b => b.id === id);
}
