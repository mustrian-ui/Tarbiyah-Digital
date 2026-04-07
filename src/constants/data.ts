import { Doa, Scientist, Hadith } from "../types";

export const DOA_HARIAN: Doa[] = [
  {
    id: "1",
    title: "Doa Bangun Tidur",
    arabic: "اَلْحَمْدُ لِلّٰهِ الَّذِيْ أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُوْرُ",
    latin: "Alhamdu lillahil ladzi ahyana ba'da ma amatana wa ilaihin nusyur",
    translation: "Segala puji bagi Allah yang telah menghidupkan kami setelah mematikan kami (tidur) dan kepada-Nya kami kembali.",
    category: "Harian"
  },
  {
    id: "2",
    title: "Doa Sebelum Makan",
    arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
    latin: "Allahumma barik lana fima razaqtana wa qina 'adzaban nar",
    translation: "Ya Allah, berkahilah kami dalam rezeki yang telah Engkau berikan kepada kami dan peliharalah kami dari siksa api neraka.",
    category: "Harian"
  },
  {
    id: "3",
    title: "Doa Setelah Makan",
    arabic: "اَلْحَمْدُ لِلّٰهِ الَّذِيْ أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ الْمُسْلِمِيْنَ",
    latin: "Alhamdu lillahil ladzi ath'amana wa saqana wa ja'alana minal muslimin",
    translation: "Segala puji bagi Allah yang telah memberi kami makan dan minum serta menjadikan kami termasuk golongan orang-orang muslim.",
    category: "Harian"
  },
  {
    id: "4",
    title: "Doa Keluar Rumah",
    arabic: "بِسْمِ اللّٰهِ تَوَكَّلْتُ عَلَى اللّٰهِ لَا حَوْلَ وَلَا قُوَّةَ اِلَّا بِاللّٰهِ",
    latin: "Bismillahi tawakkaltu 'alallahi la haula wala quwwata illa billah",
    translation: "Dengan nama Allah, aku bertawakal kepada Allah, tiada daya dan kekuatan kecuali dengan pertolongan Allah.",
    category: "Harian"
  },
  {
    id: "5",
    title: "Doa Masuk Rumah",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلَجِ وَخَيْرَ الْمَخْرَجِ بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
    latin: "Allahumma inni as-aluka khairal maulaji wa khairal makhraji bismillahi walajna wa bismillahi kharajna wa 'alallahi rabbina tawakkalna",
    translation: "Ya Allah, sesungguhnya aku memohon kepada-Mu kebaikan tempat masuk dan kebaikan tempat keluar. Dengan nama Allah kami masuk dan dengan nama Allah kami keluar dan kepada Allah Tuhan kami, kami bertawakal.",
    category: "Harian"
  }
];

export const ILMUWAN_MUSLIM: Scientist[] = [
  {
    id: "ibnu-sina",
    name: "Ibnu Sina (Avicenna)",
    biography: "Dikenal sebagai 'Bapak Kedokteran Modern'. Lahir di Afshana dekat Bukhara.",
    contributions: ["Menulis Al-Qanun fi al-Tibb (The Canon of Medicine)", "Menemukan sifat menular dari penyakit infeksi"],
    works: ["Al-Qanun fi al-Tibb", "Kitab al-Shifa (The Book of Healing)"]
  },
  {
    id: "al-khwarizmi",
    name: "Al-Khwarizmi",
    biography: "Bapak Aljabar. Ilmuwan Persia yang memberikan kontribusi besar dalam matematika, astronomi, dan geografi.",
    contributions: ["Memperkenalkan konsep Aljabar", "Memperkenalkan angka nol dan sistem desimal ke dunia Barat"],
    works: ["Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala"]
  }
  // ... more will be added
];

export const HADITS_ARBAIN: Hadith[] = [
  {
    number: 1,
    title: "Niat dan Ikhlas",
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى...",
    translation: "Sesungguhnya setiap perbuatan tergantung niatnya. Dan sesungguhnya setiap orang (akan dibalas) berdasarkan apa yang dia niatkan...",
    explanation: "Hadits ini merupakan salah satu pilar Islam yang menekankan pentingnya niat dalam setiap ibadah."
  }
];

export const TAUHID_DATA = {
  rukunIman: [
    "Iman kepada Allah",
    "Iman kepada Malaikat Allah",
    "Iman kepada Kitab-kitab Allah",
    "Iman kepada Rasul-rasul Allah",
    "Iman kepada Hari Kiamat",
    "Iman kepada Qada dan Qadar"
  ],
  rukunIslam: [
    "Mengucapkan Dua Kalimat Syahadat",
    "Mendirikan Sholat",
    "Menunaikan Zakat",
    "Berpuasa di Bulan Ramadhan",
    "Menunaikan Haji bagi yang mampu"
  ]
};
