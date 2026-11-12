export interface PustakaTopic {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  subtitle: string;
  icon: string;
  badge?: string;
  route?: string; // If it links to an existing route
  modalId?: string; // If it opens an integrated reader
  gradient: string;
  textColor: string;
}

export interface PustakaCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const PUSTAKA_CATEGORIES: PustakaCategory[] = [
  {
    id: "semua",
    name: "Semua Kategori",
    description: "Seluruh khazanah keilmuan Islam dalam satu pintu",
    icon: "BookOpen"
  },
  {
    id: "akidah_pemikiran",
    name: "Akidah & Pemikiran",
    description: "Mengkaji pilar-pilar keimanan, kemurnian tauhid, dan pemikiran Islam",
    icon: "Shield"
  },
  {
    id: "quran_hadits",
    name: "Al-Qur'an & Hadits",
    description: "Sumber primer wahyu ilahi dan sunnah Rasulullah SAW",
    icon: "Book"
  },
  {
    id: "sirah_kisah",
    name: "Sirah & Kisah Kenabian",
    description: "Keteladanan para utusan Allah dan sejarah perjuangan Nabi SAW",
    icon: "Heart"
  },
  {
    id: "sejarah_peradaban",
    name: "Sejarah & Peradaban",
    description: "Napak tilas kejayaan peradaban Islam dan para tokoh pelopornya",
    icon: "History"
  },
  {
    id: "studi_quran",
    name: "Studi Khusus Al-Qur'an",
    description: "Kajian tematik, kronologi alam semesta, dan geografi peristiwa Al-Qur'an",
    icon: "Star"
  },
  {
    id: "hukum_pedoman",
    name: "Hukum & Pedoman",
    description: "Panduan ibadah praktis, khazanah kitab klasik, dan kaidah syariah",
    icon: "Scale"
  }
];

export const PUSTAKA_TOPICS: PustakaTopic[] = [
  // 1. Akidah & Pemikiran
  {
    id: "tauhid",
    title: "Tauhid",
    category: "Akidah & Pemikiran",
    categoryId: "akidah_pemikiran",
    subtitle: "Mengkaji pilar-pilar keimanan dan esensi dari tauhid.",
    icon: "ShieldCheck",
    route: "/tauhid",
    gradient: "from-emerald-700 to-teal-800",
    textColor: "text-emerald-700",
    badge: "Modul Lengkap"
  },
  {
    id: "akhlak",
    title: "Akhlak",
    category: "Akidah & Pemikiran",
    categoryId: "akidah_pemikiran",
    subtitle: "Panduan membentuk karakter mulia sesuai teladan Rasulullah.",
    icon: "HeartHandshake",
    modalId: "akhlak",
    gradient: "from-rose-600 to-pink-700",
    textColor: "text-rose-600",
    badge: "Kajian Lengkap"
  },
  {
    id: "ensiklopedia",
    title: "Ensiklopedia Islam",
    category: "Akidah & Pemikiran",
    categoryId: "akidah_pemikiran",
    subtitle: "Penjelasan mendalam tentang konsep-konsep penting dalam Islam.",
    icon: "Library",
    modalId: "ensiklopedia",
    gradient: "from-indigo-600 to-blue-800",
    textColor: "text-indigo-600",
    badge: "Glosarium Tematik"
  },
  {
    id: "psikologi",
    title: "Psikologi Barat Vs Islam",
    category: "Akidah & Pemikiran",
    categoryId: "akidah_pemikiran",
    subtitle: "Kajian perbandingan antara Psikologi Barat dan Islam.",
    icon: "Brain",
    modalId: "psikologi",
    gradient: "from-purple-700 to-indigo-900",
    textColor: "text-purple-700",
    badge: "Komparasi Kritis"
  },

  // 2. Al-Qur'an & Hadits
  {
    id: "hadits-arbain",
    title: "Hadits Arba'in",
    category: "Al-Qur'an & Hadits",
    categoryId: "quran_hadits",
    subtitle: "Mempelajari dan menghafal 42 hadits fundamental dari Imam Nawawi.",
    icon: "ScrollText",
    route: "/hadits",
    gradient: "from-amber-600 to-emerald-800",
    textColor: "text-amber-700",
    badge: "42 Hadits Sahih"
  },
  {
    id: "quran-vs-alkitab",
    title: "Al-Qur'an Vs Alkitab",
    category: "Al-Qur'an & Hadits",
    categoryId: "quran_hadits",
    subtitle: "Kajian perbandingan antara Al-Qur'an dan Alkitab.",
    icon: "BookMarked",
    modalId: "quran-vs-alkitab",
    gradient: "from-teal-700 to-emerald-900",
    textColor: "text-teal-700",
    badge: "Studi Perbandingan"
  },

  // 3. Sirah & Kisah Kenabian
  {
    id: "sirah",
    title: "Sirah Nabawiyah",
    category: "Sirah & Kisah Kenabian",
    categoryId: "sirah_kisah",
    subtitle: "Menelusuri jejak kehidupan Nabi Muhammad SAW.",
    icon: "Milestone",
    modalId: "sirah",
    gradient: "from-amber-700 to-orange-900",
    textColor: "text-amber-700",
    badge: "Kronik Lengkap"
  },
  {
    id: "kisah-25-nabi",
    title: "Kisah 25 Nabi",
    category: "Sirah & Kisah Kenabian",
    categoryId: "sirah_kisah",
    subtitle: "Kisah inspiratif 25 Nabi dan Rasul yang wajib diimani.",
    icon: "Crown",
    route: "/kisah-nabi",
    gradient: "from-emerald-800 to-teal-950",
    textColor: "text-emerald-800",
    badge: "25 Nabi & Rasul"
  },
  {
    id: "tanya-sejarah-nabi",
    title: "Tanya Sejarah Nabi",
    category: "Sirah & Kisah Kenabian",
    categoryId: "sirah_kisah",
    subtitle: "Tanya jawab interaktif seputar sejarah para nabi dengan AI.",
    icon: "Bot",
    route: "/ai",
    gradient: "from-cyan-600 to-blue-700",
    textColor: "text-cyan-700",
    badge: "Asisten Cerdas"
  },

  // 4. Sejarah & Peradaban
  {
    id: "sejarah-islam",
    title: "Sejarah Islam",
    category: "Sejarah & Peradaban",
    categoryId: "sejarah_peradaban",
    subtitle: "Menjelajahi khazanah sejarah dan peradaban Islam.",
    icon: "History",
    route: "/sejarah",
    gradient: "from-yellow-700 to-amber-900",
    textColor: "text-yellow-700",
    badge: "Artikel Lengkap"
  },
  {
    id: "pelopor-islam",
    title: "Pelopor Islam",
    category: "Sejarah & Peradaban",
    categoryId: "sejarah_peradaban",
    subtitle: "Mengenal 'Yang Pertama' dalam sejarah peradaban Islam.",
    icon: "Trophy",
    modalId: "pelopor-islam",
    gradient: "from-amber-500 to-emerald-800",
    textColor: "text-amber-600",
    badge: "Awwaliyatul Islam"
  },
  {
    id: "tokoh-muslim",
    title: "Tokoh Muslim Berpengaruh",
    category: "Sejarah & Peradaban",
    categoryId: "sejarah_peradaban",
    subtitle: "Biografi singkat tokoh-tokoh Muslim yang berpengaruh.",
    icon: "Microscope",
    route: "/ilmuwan",
    gradient: "from-teal-600 to-cyan-800",
    textColor: "text-teal-700",
    badge: "Ilmuwan & Ulama"
  },

  // 5. Studi Khusus Al-Qur'an
  {
    id: "peristiwa-lainnya",
    title: "Peristiwa Lainnya",
    category: "Studi Khusus Al-Qur'an",
    categoryId: "studi_quran",
    subtitle: "Kisah-kisah penting dalam Al-Qur'an di luar kisah para nabi.",
    icon: "Sparkles",
    route: "/peristiwa",
    gradient: "from-violet-700 to-purple-900",
    textColor: "text-violet-700",
    badge: "Peristiwa Qur'ani"
  },
  {
    id: "timeline-manusia",
    title: "Timeline Manusia",
    category: "Studi Khusus Al-Qur'an",
    categoryId: "studi_quran",
    subtitle: "Memahami perjalanan ruh dari alam azali hingga ke akhirat.",
    icon: "Hourglass",
    route: "/timeline",
    gradient: "from-blue-700 to-indigo-900",
    textColor: "text-blue-700",
    badge: "Perjalanan Ruh"
  },
  {
    id: "peta-peristiwa-quran",
    title: "Peta Peristiwa Qur'an",
    category: "Studi Khusus Al-Qur'an",
    categoryId: "studi_quran",
    subtitle: "Jelajahi lokasi geografis peristiwa penting dalam Al-Qur'an.",
    icon: "Compass",
    modalId: "peta-peristiwa-quran",
    gradient: "from-emerald-700 to-teal-900",
    textColor: "text-emerald-700",
    badge: "Geografi Sejarah"
  },

  // 6. Hukum & Pedoman
  {
    id: "pedoman-ibadah",
    title: "Pedoman Ibadah",
    category: "Hukum & Pedoman",
    categoryId: "hukum_pedoman",
    subtitle: "Panduan praktis untuk ibadah sehari-hari seperti shalat dan bersuci.",
    icon: "BookCheck",
    route: "/pedoman",
    gradient: "from-emerald-600 to-green-800",
    textColor: "text-emerald-700",
    badge: "Thaharah & Shalat"
  },
  {
    id: "kitab-kuning",
    title: "Kitab Kuning",
    category: "Hukum & Pedoman",
    categoryId: "hukum_pedoman",
    subtitle: "Kajian kitab-kitab klasik yang dipelajari di pesantren.",
    icon: "BookOpenCheck",
    modalId: "kitab-kuning",
    gradient: "from-amber-700 to-yellow-900",
    textColor: "text-amber-800",
    badge: "Matan Turats"
  },
  {
    id: "hukum-syariah",
    title: "Hukum Syari'ah",
    category: "Hukum & Pedoman",
    categoryId: "hukum_pedoman",
    subtitle: "Mengenal dasar-dasar dan sumber hukum dalam syariat Islam.",
    icon: "Scale",
    route: "/fikih",
    gradient: "from-blue-800 to-slate-900",
    textColor: "text-blue-800",
    badge: "Kaidah Fikih"
  },
  {
    id: "istilah-penting",
    title: "Istilah Penting",
    category: "Hukum & Pedoman",
    categoryId: "hukum_pedoman",
    subtitle: "Glosarium istilah-istilah penting dalam studi keislaman.",
    icon: "SpellCheck",
    modalId: "istilah-penting",
    gradient: "from-teal-800 to-emerald-950",
    textColor: "text-teal-800",
    badge: "Kamus Glosarium A-Z"
  }
];

// Rich datasets for topics that open modals
export const PUSTAKA_MODAL_CONTENTS: Record<string, {
  title: string;
  category: string;
  subtitle: string;
  sections: {
    heading: string;
    subheading?: string;
    content: string | string[];
    arabic?: string;
    items?: { term?: string; name?: string; desc: string; detail?: string; year?: string }[];
  }[];
}> = {
  "akhlak": {
    title: "Kajian Akhlak Islami",
    category: "Akidah & Pemikiran",
    subtitle: "Panduan membentuk karakter mulia sesuai teladan Rasulullah SAW dan salafus saleh.",
    sections: [
      {
        heading: "1. Definisi, Kedudukan, dan Urgensi Akhlak",
        content: [
          'Akhlak secara etimologi berasal dari kata Arab "khuluq" yang bermakna budi pekerti, perangai, tabiat, atau watak bawaan. Secara terminologi, Imam Al-Ghazali mendefinisikannya sebagai sifat yang tertanam kuat dalam jiwa, yang darinya muncul perbuatan-perbuatan spontan tanpa membutuhkan pemikiran atau pertimbangan panjang.',
          'Kedudukan akhlak dalam Islam menempati puncak tertinggi. Rasulullah SAW bersabda: "Sesungguhnya aku diutus hanyalah untuk menyempurnakan kemuliaan akhlak." (HR. Al-Bukhari & Ahmad). Akhlak merupakan bukti nyata kemurnian tauhid dan keimanan seseorang kepada Allah SWT.'
        ]
      },
      {
        heading: "2. Akhlak kepada Allah SWT",
        subheading: "Pondasi utama hubungan makhluk dengan Sang Pencipta",
        items: [
          { name: "Mentauhidkan Allah (At-Tauhid)", desc: "Menyembah hanya kepada Allah semata tanpa menyekutukan-Nya dengan apapun, baik dalam Rububiyah, Uluhiyah, maupun Asma' wa Sifat." },
          { name: "Ikhlas dalam Beramal", desc: "Memurnikan seluruh niat ibadah dan amal kebaikan semata-mata mencari keridhaan Allah tanpa mengharap pujian manusia." },
          { name: "Rasa Syukur (Asy-Syukr)", desc: "Mengakui segenap nikmat berasal dari Allah, memuji-Nya dengan lisan, dan menggunakan nikmat tersebut dalam ketaatan." },
          { name: "Tawakkal & Ridha", desc: "Menyerahkan segala urusan kepada takdir dan ketetapan Allah setelah berikhtiar secara maksimal, serta berprasangka baik atas segala hikmah-Nya." },
          { name: "Khauf & Raja'", desc: "Menyeimbangkan antara rasa takut terhadap siksa Allah dan pengharapan yang teguh atas rahmat serta ampunan-Nya." }
        ],
        content: ""
      },
      {
        heading: "3. Akhlak kepada Rasulullah SAW",
        subheading: "Kewajiban menghormati dan meneladani suri teladan terbaik",
        items: [
          { name: "Mencintai Rasulullah SAW", desc: "Mencintai beliau melebihi cinta kepada diri sendiri, orang tua, anak, dan seluruh manusia." },
          { name: "Ittiba' (Mengikuti Sunnah)", desc: "Menjadikan petunjuk dan hadits beliau sebagai pedoman mutlak dalam akidah, ibadah, muamalah, dan adab." },
          { name: "Memperbanyak Shalawat", desc: "Mengirimkan shalawat dan salam penghormatan kepada beliau di setiap kesempatan, khususnya di hari Jum'at." },
          { name: "Membela Kemuliaan Beliau", desc: "Menjaga kehormatan syariat dan nama baik Rasulullah SAW dari fitnah atau penyimpangan pemikiran." }
        ],
        content: ""
      },
      {
        heading: "4. Akhlak kepada Diri Sendiri & Sesama Manusia",
        subheading: "Karakter pribadi muslim dalam kehidupan bermasyarakat",
        items: [
          { name: "Iffah (Menjaga Kehormatan Diri)", desc: "Menjauhkan diri dari perbuatan maksiat, menundukkan pandangan, dan menjauhi perkara syubhat." },
          { name: "Shidq (Kejujuran)", desc: "Lurus hati dan berani berkata benar, tidak berbohong atau mengkhianati amanah yang dipikul." },
          { name: "Birrul Walidain (Berbakti kepada Orang Tua)", desc: "Memperlakukan kedua orang tua dengan penuh kelembutan, ketaatan dalam kebaikan, dan selalu mendoakan mereka." },
          { name: "Silaturahim & Menghormati Tetangga", desc: "Menyambung tali persaudaraan, membantu yang membutuhkan, memuliakan tetangga, serta tidak menyakiti lisan maupun perbuatan." }
        ],
        content: ""
      }
    ]
  },

  "pelopor-islam": {
    title: "Pelopor Islam (Awwaliyat)",
    category: "Sejarah & Peradaban",
    subtitle: "Mengenal 'Yang Pertama' dalam sejarah, keimanan, dakwah, dan peradaban Islam.",
    sections: [
      {
        heading: "Pelopor Keimanan & Ibadah",
        subheading: "Sosok-sosok generasi awal yang mengukir sejarah ketakwaan",
        items: [
          { term: "Manusia & Nabi Pertama", desc: "Nabi Adam A.S., diciptakan langsung oleh Allah SWT dari tanah dan dijadikan khalifah pertama di muka bumi." },
          { term: "Wanita Pertama Masuk Islam", desc: "Khadijah binti Khuwailid R.A., istri tercinta Rasulullah SAW yang langsung membenarkan wahyu pertama dan mengorbankan seluruh hartanya untuk dakwah." },
          { term: "Laki-laki Dewasa Pertama", desc: "Abu Bakar Ash-Shiddiq R.A., sahabat terdekat yang tanpa ragu beriman dan membawa banyak tokoh Quraisy lainnya masuk Islam." },
          { term: "Anak-anak Pertama Masuk Islam", desc: "Ali bin Abi Thalib R.A., sepupu sekaligus menantu Nabi SAW yang memeluk Islam pada usia sangat belia di Mekkah." },
          { term: "Muadzin Pertama dalam Islam", desc: "Bilal bin Rabah R.A., sahabat mantan budak yang teguh mempertahankan tauhid di bawah siksaan dan mengumandangkan adzan pertama atas perintah Rasulullah SAW." },
          { term: "Syahid Pertama dalam Islam", desc: "Sumayyah binti Khayyat R.A., ibunda Ammar bin Yasir, wanita pemberani yang gugur syahid di jalan Allah karena menolak murtad." },
          { term: "Masjid Pertama Dibangun", desc: "Masjid Quba di pinggiran Madinah, dibangun oleh Rasulullah SAW saat peristiwa Hijrah sebelum memasuki pusat kota Madinah." }
        ],
        content: ""
      },
      {
        heading: "Pelopor Dakwah & Pemerintahan Islam",
        subheading: "Langkah-langkah strategis meletakkan fondasi peradaban dan administrasi",
        items: [
          { term: "Duta Dakwah Pertama", desc: "Mush'ab bin Umair R.A., pemuda bangsawan yang diutus Rasulullah SAW ke Madinah untuk mengajarkan Al-Qur'an dan mengislamkan para pemuka Yatsrib." },
          { term: "Pembaca Al-Qur'an Terang-terangan di Ka'bah", desc: "Abdullah bin Mas'ud R.A., dengan penuh keberanian melantunkan Surah Ar-Rahman di hadapan kaum kafir Quraisy." },
          { term: "Pengumpul Mushaf Al-Qur'an", desc: "Khalifah Abu Bakar Ash-Shiddiq R.A. atas usulan Umar bin Khattab R.A., diketuai oleh sahabat Zaid bin Tsabit R.A." },
          { term: "Penetap Penanggalan Kalender Hijriyah", desc: "Khalifah Umar bin Khattab R.A. pada tahun 16 H, menetapkan momentum Hijrah Nabi SAW sebagai tahun awal kalender Islam." },
          { term: "Pendiri Armada Laut Muslim Pertama", desc: "Khalifah Utsman bin Affan R.A. melalui inisiatif Mu'awiyah bin Abu Sufyan untuk melindungi pesisir Syam dan menaklukkan Siprus." }
        ],
        content: ""
      },
      {
        heading: "Pelopor Sains & Keilmuan Dunia",
        subheading: "Cendekiawan muslim yang meletakkan dasar metodologi ilmiah modern",
        items: [
          { term: "Penemu Aljabar & Algoritma", desc: "Muhammad bin Musa Al-Khawarizmi, penemu konsep nol, aljabar, dan sistem penomoran desimal dalam kitab 'Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala'." },
          { term: "Bapak Kedokteran Eksperimental Modern", desc: "Ibnu Sina (Avicenna), penulis 'Al-Qanun fi Ath-Thibb' (The Canon of Medicine) yang menjadi buku rujukan medis universitas Eropa selama lebih dari 500 tahun." },
          { term: "Bapak Optik & Metode Ilmiah", desc: "Ibnu Al-Haitsam (Alhazen), pelopor ilmu optik modern dalam kitab 'Kitab al-Manazir' dan penemu prinsip kamera obskura." },
          { term: "Penyusun Kitab Hadits Sahih Tematik", desc: "Imam Muhammad bin Ismail Al-Bukhari dengan karya monumentalnya 'Shahih Al-Bukhari'." }
        ],
        content: ""
      }
    ]
  },

  "kitab-kuning": {
    title: "Kajian Kitab Kuning (Turats)",
    category: "Hukum & Pedoman",
    subtitle: "Mengenal kitab-kitab klasik rujukan pesantren dalam Fikih, Nahwu, Adab, dan Akidah.",
    sections: [
      {
        heading: "1. Kitab Safinatun Najah",
        subheading: "Karya Syekh Salim bin Sumair Al-Hadhrami (Fiqih Ibadah Dasar Mazhab Syafi'i)",
        content: [
          'Kitab Safinatun Najah fi Ushuliddin wal Fiqh (Perahu Keselamatan dalam Dasar Agama dan Fiqih) adalah matan ringkas namun sarat makna yang wajib dipelajari penuntut ilmu pemula.',
          'Pembahasan utamanya mencakup: Rukun Islam, Rukun Iman, Tanda-tanda Baligh, Syarat Istinja\' dengan batu, Rukun dan Syarat Wudhu, Perkara Pembatal Wudhu, Mandi Wajib, Fardhu dan Sunnah Shalat, hingga Syarat Sah Khutbah dan Jenazah.'
        ]
      },
      {
        heading: "2. Kitab Al-Jurumiyah",
        subheading: "Karya Abu Abdillah Sidi Muhammad bin Ajurrum As-Shanhaji (Gramatika Bahasa Arab)",
        content: [
          'Kitab Al-Jurumiyah adalah pintu gerbang memahami tata bahasa Arab (Nahwu) yang menjadi syarat mutlak membaca dan menafsirkan teks-teks Al-Qur\'an, Hadits, dan kitab ulama.',
          'Membahas hakikat Kalam (Lafadz yang tersusun dan berfaedah), pembagian kata (Isim, Fi\'il, Huruf), I\'rab beserta tanda-tandanya (Rafa\', Nashab, Khafadh/Jar, Jazm), serta marfu\'at, manshubat, dan makhfudhatul asma\'.'
        ]
      },
      {
        heading: "3. Kitab Ta'limul Muta'allim",
        subheading: "Karya Syaikh Burhanul Islam Az-Zarnuji (Adab & Metode Penuntut Ilmu)",
        content: [
          'Kitab panduan adab dan metodologi belajar yang mengajarkan bahwa keberkahan dan kemanfaatan ilmu sangat bergantung pada ketulusan niat dan penghormatan kepada guru, kitab, dan majelis ilmu.',
          'Mencakup bab: Niat dalam belajar, Cara memilih ilmu, guru, dan teman, Mengagungkan ilmu dan ahlinya, Kesungguhan (jiddiyah) dan konsistensi, serta hal-hal yang dapat menguatkan atau melemahkan hafalan.'
        ]
      },
      {
        heading: "4. Kitab Aqidatul Awam",
        subheading: "Karya Syekh Ahmad Al-Marzuqi Al-Maliki (Akidah Ahlussunnah dalam Bentuk Nadzom)",
        content: [
          'Bait-bait nadzam yang indah merangkum aqidah 50 (Sifat Wajib, Mustahil, dan Jaiz bagi Allah serta Rasul-Nya).',
          'Sangat populer dihafal santri madrasah: memuat 20 sifat wajib bagi Allah, 4 sifat wajib bagi Rasul (Shiddiq, Amanah, Tabligh, Fathanah), nama-nama malaikat, 25 nabi, kitab-kitab suci, serta silsilah keluarga Rasulullah SAW.'
        ]
      },
      {
        heading: "5. Kitab Bidayatul Hidayah",
        subheading: "Karya Hujjatul Islam Imam Al-Ghazali (Adab Harian & Tasawuf Amali)",
        content: [
          'Buku pedoman amalan harian seorang mukmin sejak bangun tidur, menyucikan diri, menegakkan shalat berjamaah, berdzikir, beradab dalam pergaulan, hingga menjaga anggota tubuh dari tujuh pintu maksiat (mata, telinga, lisan, perut, kemaluan, tangan, dan kaki).'
        ]
      },
      {
        heading: "6. Kitab Matan Ghayah wat Taqrib",
        subheading: "Karya Al-Qadhi Abu Syuja' Ahmad bin Al-Hasan Al-Isfahani",
        content: [
          'Kitab Fikih Mazhab Syafi\'i komprehensif yang memuat seluruh cabang hukum Islam secara sistematis: Bab Thaharah (bersuci), Shalat, Zakat, Puasa, Haji, Muamalah jual-beli, Waris & Wasiat, Pernikahan (Munakahat), Jinayat (pidana), Jihad, hingga Makanan dan Sumpah.'
        ]
      }
    ]
  },

  "istilah-penting": {
    title: "Glosarium Istilah Penting Islam A-Z",
    category: "Hukum & Pedoman",
    subtitle: "Kamus istilah keislaman penting dari disiplin Akidah, Fikih, Hadits, Tasawuf, dan Syariat.",
    sections: [
      {
        heading: "Daftar Istilah Keislaman",
        subheading: "Pahami makna terminologi ilmiah dalam khazanah Islam",
        items: [
          { term: "Abd", desc: "Hamba atau budak. Dalam konteks spiritual Islam berarti hamba Allah SWT yang tunduk taat." },
          { term: "Adab", desc: "Etika luhur, sopan santun, tata krama, dan moralitas yang selaras dengan ajaran Islam." },
          { term: "Adil", desc: "Menempatkan segala sesuatu secara proporsional pada tempat haknya; lawan dari zalim." },
          { term: "Ahad", desc: "Maha Esa dan Tunggal, tidak terbagi-bagi; sebutan keesaan mutlak bagi Allah SWT." },
          { term: "Ahkam", desc: "Bentuk jamak dari hukm; ketetapan atau hukum-hukum syariat dalam Islam." },
          { term: "Ahlul Bait", desc: "Keluarga dan garis keturunan Rasulullah SAW yang wajib dihormati dan dicintai umat Islam." },
          { term: "Ahlus Sunnah wal Jama'ah", desc: "Golongan kaum muslimin yang berpegang teguh pada Sunnah Nabi SAW dan kesepakatan para sahabat." },
          { term: "Akhirat", desc: "Alam kehidupan abadi setelah berakhirnya alam dunia (kiamat) sebagai tempat pembalasan surga dan neraka." },
          { term: "Amanah", desc: "Kepercayaan, tanggung jawab moral, dan titipan yang wajib ditunaikan kepada yang berhak." },
          { term: "Asbabun Nuzul", desc: "Latar belakang, sebab-sebab, atau peristiwa historis yang melatarbelakangi turunnya suatu ayat Al-Qur'an." },
          { term: "Asbabul Wurud", desc: "Sebab-sebab atau konteks historis yang melatarbelakangi disabdakannya sebuah hadits Nabi SAW." },
          { term: "Barzakh", desc: "Alam kubur; dinding pemisah antara kehidupan duniawi dan alam akhirat tempat ruh menanti hari kebangkitan." },
          { term: "Bid'ah", desc: "Perkara baru yang diada-adakan dalam urusan agama/ibadah yang tidak memiliki dasar dari Al-Qur'an dan Sunnah." },
          { term: "Fardhu 'Ain", desc: "Kewajiban individual yang dibebankan kepada setiap muslim yang mukallaf (misal: shalat lima waktu, puasa Ramadhan)." },
          { term: "Fardhu Kifayah", desc: "Kewajiban kolektif umat Islam yang jika sudah ditunaikan sebagian orang, gugur dosanya bagi yang lain (misal: shalat jenazah)." },
          { term: "Fatwa", desc: "Pendapat hukum Islam yang dikeluarkan oleh seorang mufti atau lembaga ulama yang berkompeten atas suatu perkara." },
          { term: "Ijtihad", desc: "Pengerahan segenap daya nalar ulama mujtahid untuk menggali hukum syariat dari dalil Al-Qur'an dan Sunnah." },
          { term: "Ijma'", desc: "Kesepakatan bulat para ulama mujtahid umat Islam pada suatu masa setelah wafatnya Rasulullah atas suatu hukum syar'i." },
          { term: "Ikhlas", desc: "Memurnikan seluruh motivasi niat beribadah dan beramal semata-mata mengharap ridha Allah SWT." },
          { term: "Maqashid Syari'ah", desc: "Lima tujuan luhur ditetapkannya hukum Islam: Menjaga Agama, Jiwa, Akal, Keturunan/Kehormatan, dan Harta." },
          { term: "Qiyas", desc: "Menyamakan hukum suatu perkara baru dengan perkara lama yang ada dalilnya karena kesamaan 'illat (alasan hukum)." },
          { term: "Riba", desc: "Tambahan atau rente yang disyaratkan dalam transaksi pinjam meminjam atau pertukaran barang ribawi; haram hukumnya." },
          { term: "Sanad", desc: "Mata rantai perawi hadits yang menghubungkan teks hadits dari pencatat kitab sampai kepada Rasulullah SAW." },
          { term: "Tazkiyatun Nafs", desc: "Proses pembersihan dan penyucian jiwa dari kotoran syahwat, riya, hasad, dan penyakit hati menuju kedekatan ilahi." }
        ],
        content: ""
      }
    ]
  },

  "ensiklopedia": {
    title: "Ensiklopedia Konsep Islam",
    category: "Akidah & Pemikiran",
    subtitle: "Penjelasan mendalam tentang pilar-pilar konseptual ajaran Islam.",
    sections: [
      {
        heading: "1. Trilogi Ajaran Islam: Iman, Islam, dan Ihsan",
        content: [
          'Dalam Hadits Jibril yang sangat terkenal, agama Islam ditopang oleh tiga pilar utama:',
          '• Islam: Penyerahan diri lahiriah melalui lima rukun (Syahadat, Shalat, Zakat, Puasa Ramadhan, dan Haji ke Baitullah).',
          '• Iman: Pembenaran batiniah dan keyakinan hati terhadap enam rukun (Iman kepada Allah, Malaikat-Nya, Kitab-kitab-Nya, Para Rasul-Nya, Hari Akhir, dan Takdir baik maupun buruk).',
          '• Ihsan: Puncak penghayatan spiritual, yaitu "Engkau beribadah kepada Allah seakan-akan engkau melihat-Nya, dan jika engkau tidak mampu melihat-Nya, maka sesungguhnya Dia melihatmu."'
        ]
      },
      {
        heading: "2. Maqashid Asy-Syari'ah (5 Tujuan Pokok Syariat)",
        subheading: "Prinsip penjagaan maslahat universal dalam seluruh hukum Islam",
        items: [
          { term: "Hifdzud Din (Menjaga Agama)", desc: "Menegakkan tauhid, syiar ibadah, dan melarang pemurtadan serta penodaan agama." },
          { term: "Hifdzun Nafs (Menjaga Jiwa)", desc: "Menjamin hak hidup setiap insan, mengharamkan pembunuhan, dan mewajibkan qishash." },
          { term: "Hifdzul Aql (Menjaga Akal)", desc: "Mendorong pengembangan ilmu pengetahuan dan mengharamkan segala bentuk zat memabukkan (khamr dan narkotika)." },
          { term: "Hifdzun Nasl (Menjaga Keturunan)", desc: "Menyariatkan pernikahan yang sah dan mengharamkan perzinahan serta perusakan tatanan keluarga." },
          { term: "Hifdzul Mal (Menjaga Harta)", desc: "Melindungi hak kepemilikan individu, melarang pencurian, korupsi, riba, penipuan, serta transaksi zalim." }
        ],
        content: ""
      },
      {
        heading: "3. Khazanah Empat Mazhab Fikih Ahlussunnah",
        items: [
          { name: "Mazhab Hanafi (Imam Abu Hanifah 80-150 H)", desc: "Berciri khas kekuatan analogi (ra'yu), istihsan, dan urf; banyak dianut di Asia Selatan, Turki, dan Asia Tengah." },
          { name: "Mazhab Maliki (Imam Malik bin Anas 93-179 H)", desc: "Berciri khas kuat pada amalan penduduk Madinah (Amal Ahlil Madinah) dan Maslahah Mursalah; dominan di Afrika Utara." },
          { name: "Mazhab Syafi'i (Imam Muhammad bin Idris Asy-Syafi'i 150-204 H)", desc: "Sintesis harmonis antara aliran Hadits dan Ra'yu, peletak dasar Ushul Fiqih melalui Kitab Ar-Risalah; dominan di Nusantara, Mesir, dan Yaman." },
          { name: "Mazhab Hambali (Imam Ahmad bin Hanbal 164-241 H)", desc: "Berpegang amat ketat pada teks hadits dan atsar sahabat; dominan di Semenanjung Jazirah Arab." }
        ],
        content: ""
      }
    ]
  },

  "psikologi": {
    title: "Psikologi Barat Vs Psikologi Islam",
    category: "Akidah & Pemikiran",
    subtitle: "Kajian kritis komparatif hakikat jiwa, kesehatan mental, dan tujuan eksistensi manusia.",
    sections: [
      {
        heading: "1. Dua Paradigma Memandang Hakikat Manusia",
        content: [
          'Psikologi Barat modern lahir dari tradisi positivisme, materialisme, dan sekularisme. Manusia dipandang terutama sebagai makhluk biologis yang perilakunya dibentuk oleh dorongan hewani tak sadar (Freud), pembiasaan stimulus-respons (Behaviorisme), atau potensi aktualisasi diri semata (Humanistik).',
          'Sebaliknya, Psikologi Islam memandang manusia sebagai entitas dwitunggal: jasad badaniah dan ruh spiritual yang ditiupkan langsung oleh Allah SWT. Hakikat inti manusia bukanlah otaknya, melainkan Qalb (hati), Nafs (jiwa), Aql (daya nalar), dan Ruh (koneksi ilahiah).'
        ]
      },
      {
        heading: "2. Anatomi Jiwa Manusia dalam Islam",
        subheading: "Tingkatan kondisi jiwa menurut Al-Qur'an",
        items: [
          { name: "An-Nafs Al-Ammarah bis-Su' (Jiwa Pendorong Keburukan)", desc: "Tingkatan jiwa yang dikuasai hawa nafsu hewani dan dorongan syahwat, mengajak manusia kepada maksiat dan kekufuran (QS. Yusuf: 53)." },
          { name: "An-Nafs Al-Lawwamah (Jiwa yang Menyesali Diri)", desc: "Tingkatan jiwa yang memiliki kesadaran moral, sering berbuat salah namun segera menyesal, mencela dirinya, dan bertaubat kepada Allah (QS. Al-Qiyamah: 2)." },
          { name: "An-Nafs Al-Muthma'innah (Jiwa yang Tenang)", desc: "Puncak kedamaian jiwa yang ridha kepada ketentuan Allah, kokoh dalam tauhid, dan selalu merasakan ketentraman dalam dzikir (QS. Al-Fajr: 27-28)." }
        ],
        content: ""
      },
      {
        heading: "3. Perbandingan Aspek Kunci",
        items: [
          { term: "Sumber Pengetahuan", desc: "Barat: Empirisme, laboratorium, observasi tingkah laku jasmani. Islam: Wahyu Al-Qur'an dan Sunnah yang dipadukan dengan nalar kritis dan tazkiyatun nafs." },
          { term: "Tujuan Terapi Mental", desc: "Barat: Menghilangkan simtom kegelisahan agar bisa berfungsi normal dalam masyarakat materialistik. Islam: Meraih Sa'adah (kebahagiaan hakiki dunia-akhirat) dan ridha Allah SWT." },
          { term: "Metode Pemulihan", desc: "Barat: Psikoanalisis, farmakoterapi, CBT (Cognitive Behavioral Therapy). Islam: Mengintegrasikan CBT medis dengan Shalat khusyuk, Istighfar, Dzikrullah, Tilawah Qur'an, dan Puasa." }
        ],
        content: ""
      }
    ]
  },

  "quran-vs-alkitab": {
    title: "Al-Qur'an & Alkitab: Studi Perbandingan",
    category: "Al-Qur'an & Hadits",
    subtitle: "Memahami posisi Al-Qur'an sebagai mushaddiq (pembenar) dan muhaimin (penguji/penyempurna).",
    sections: [
      {
        heading: "1. Akar Wahyu dan Kedudukan Teologis",
        content: [
          'Dalam akidah Islam, Al-Qur\'an mengakui bahwa Allah SWT menurunkan kitab-kitab samawi sebelumnya: Taurat kepada Nabi Musa AS, Zabur kepada Nabi Daud AS, dan Injil kepada Nabi Isa AS.',
          'Namun demikian, Al-Qur\'an menegaskan posisinya sebagai mukjizat pamungkas yang berfungsi sebagai Mushaddiq (membenarkan pokok tauhid kitab terdahulu) dan Muhaimin (penjaga, pengoreksi, dan penyempurna syariat yang telah mengalami distorsi atau interpolasi manusia).'
        ]
      },
      {
        heading: "2. Komparasi Karakteristik Teks & Pelestarian",
        items: [
          { term: "Bahasa dan Transmisi", desc: "Al-Qur'an: Terpelihara murni dalam bahasa aslinya (Bahasa Arab Quraisy) melalui transmisi mutawatir lisan ratusan ribu penghafal (hafizh) dan naskah tertulis sejak zaman Nabi Muhammad SAW. Alkitab: Terdiri dari teks Ibrani kuno, Aramaik, dan Yunani Koine yang diterjemahkan berulang kali dalam berbagai versi kanonik berbeda (Katolik, Protestan, Ortodoks)." },
          { term: "Penulisan dan Kodifikasi", desc: "Al-Qur'an: Selesai diwahyukan selama 23 tahun dalam masa hidup Rasulullah SAW dan dikodifikasi seragam di masa Khalifah Abu Bakar dan Utsman RA. Alkitab: Ditulis oleh puluhan penulis anonim maupun tokoh berjarak puluhan hingga ratusan tahun setelah peristiwa aslinya." },
          { term: "Jaminan Pemeliharaan Ilahi", desc: "Al-Qur'an ditegaskan langsung oleh Allah: 'Sesungguhnya Kamilah yang menurunkan Al-Qur'an, dan sesungguhnya Kami benar-benar memeliharanya.' (QS. Al-Hijr: 9)." }
        ],
        content: ""
      },
      {
        heading: "3. Perbandingan Konsep Teologis Pokok",
        items: [
          { term: "Konsep Ketuhanan", desc: "Al-Qur'an menegakkan Tauhid Murni tanpa sekutu: Allah Maha Esa, tidak beranak dan tidak diperanakkan (QS. Al-Ikhlas). Doktrin Kristen arus utama meyakini Tritunggal (Trinitas): Allah Bapa, Allah Anak, dan Roh Kudus dalam satu hakikat." },
          { term: "Sosok Para Nabi", desc: "Dalam Islam, para nabi memiliki sifat 'Ishmah (terpelihara dari dosa besar dan noda moral hina). Dalam narasi Perjanjian Lama, beberapa nabi dituduh melakukan perbuatan nista (seperti mabuk, inses, atau pembunuhan berencana) yang ditolak tegas oleh Al-Qur'an." },
          { term: "Nabi Isa / Yesus", desc: "Dalam Islam, Nabi Isa AS adalah hamba Allah dan rasul agung (Ulul Azmi) yang terlahir dari perawan Maryam tanpa ayah melalui kalimat Allah, tidak disalib dan tidak wafat terhina, melainkan diangkat ke sisi Allah (QS. An-Nisa: 157-158)." }
        ],
        content: ""
      }
    ]
  },

  "sirah": {
    title: "Sirah Nabawiyah: Jejak Kehidupan Rasulullah SAW",
    category: "Sirah & Kisah Kenabian",
    subtitle: "Kronik lengkap perjuangan manusia termulia dari kelahiran hingga wafat.",
    sections: [
      {
        heading: "1. Periode Mekkah (Masa Kelahiran & Penempaan)",
        content: [
          '• Tahun Gajah (571 M): Kelahiran Nabi Muhammad SAW dalam keadaan yatim dari ayahanda Abdullah bin Abdul Muthalib dan ibunda Aminah binti Wahb.',
          '• Masa Kanak-kanak & Remaja: Disusui Halimah As-Sa\'diyah di pedalaman Bani Sa\'d, wafatnya sang ibu pada usia 6 tahun, diasuh kakeknya Abdul Muthalib lalu pamannya Abu Thalib. Dikenal berakhlak mulia hingga bergelar Al-Amin (Yang Terpercaya).',
          '• Usia 25 Tahun: Menikah dengan Sayyidah Khadijah binti Khuwailid RA setelah memimpin kafilah dagang ke Syam dengan penuh kejujuran.',
          '• Usia 40 Tahun (610 M): Turunnya wahyu pertama di Gua Hira (QS. Al-\'Alaq: 1-5) melalui Malaikat Jibril AS.',
          '• Dakwah Sembunyi-sembunyi & Terang-terangan: Dimulai di Darul Arqam, kemudian dakwah terbuka di Bukit Shafa yang menghadapi penentangan keras kafir Quraisy.',
          '• Pemboikotan & Tahun Duka Cita (\'Amul Huzn): Wafatnya Abu Thalib dan Khadijah RA, disusul peristiwa Isra\' Mi\'raj serta kewajiban shalat lima waktu.',
          '• Bai\'at \'Aqabah I & II: Janji setia penduduk Yatsrib yang membuka jalan Hijrah.'
        ]
      },
      {
        heading: "2. Periode Madinah (Pembangunan Peradaban & Kedaulatan)",
        content: [
          '• Tahun 1 H: Hijrah bersejarah, pembangunan Masjid Nabawi, dan persaudaraan agung antara kaum Muhajirin dan kaum Anshar.',
          '• Piagam Madinah (Mitsaq Al-Madinah): Konstitusi tertulis pertama di dunia yang menjamin hak asasi, kebebasan beragama, dan persatuan masyarakat majemuk.',
          '• Pertempuran Penentu: Perang Badar Al-Kubra (2 H) kemenangan telak 313 muslim melawan 1000 musyrikin; Perang Uhud (3 H) pelajaran berharga tentang ketaatan; Perang Khandaq (5 H) taktik parit pertahanan spektakuler.',
          '• Perjanjian Hudaibiyah (6 H): Kemenangan diplomatik yang melipatgandakan pengikut Islam.',
          '• Fathu Makkah (8 H): Pembebasan damai kota Mekkah, pembersihan Ka\'bah dari 360 berhala tanpa pertumpahan darah, dan amnesti massal bagi penduduk Mekkah.',
          '• Haji Wada\' (10 H): Khutbah perpisahan monumental Rasulullah SAW yang menegaskan persaudaraan manusia, kesetaraan ras, dan larangan riba serta penindasan.',
          '• Wafatnya Rasulullah SAW (12 Rabiul Awwal 11 H / 632 M) di pangkuan Sayyidah Aisyah RA dan dimakamkan di Madinah Munawwarah.'
        ]
      }
    ]
  },

  "kisah-25-nabi": {
    title: "Kisah Teladan 25 Nabi & Rasul",
    category: "Sirah & Kisah Kenabian",
    subtitle: "Rangkaian kisah inspiratif para utusan Allah yang wajib diimani setiap mukmin.",
    sections: [
      {
        heading: "Daftar 25 Nabi dan Rasul Allah",
        subheading: "Mukjizat agung dan hikmah perjuangan keteladanan",
        items: [
          { name: "1. Nabi Adam AS", desc: "Manusia dan khalifah pertama di bumi; mengajarkan makna taubat dan kerendahan hati setelah diuji." },
          { name: "2. Nabi Idris AS", desc: "Nabi pertama yang pandai menulis dengan pena, menjahit pakaian, dan menguasai ilmu falak." },
          { name: "3. Nabi Nuh AS", desc: "Rasul Ulul Azmi yang berdakwah selama 950 tahun dengan kesabaran luar biasa dan diperintahkan membuat Bahtera penyelamat dari banjir besar." },
          { name: "4. Nabi Hud AS", desc: "Diutus kepada Kaum 'Ad yang bertubuh perkasa dan arsitek ulung namun sombong, ditimpa angin topan mematikan selama 7 malam 8 hari." },
          { name: "5. Nabi Shaleh AS", desc: "Diutus kepada Kaum Tsamud; mukjizat unta betina bunting yang keluar dari batu cadas." },
          { name: "6. Nabi Ibrahim AS", desc: "Khalilullah (Kekasih Allah) dan bapak para nabi; selamat dari kobaran api Raja Namrud dan peletak fondasi Ka'bah bersama Nabi Ismail." },
          { name: "7. Nabi Luth AS", desc: "Keponakan Nabi Ibrahim yang berjuang keras mendakwahi kaum Sodom yang melakukan penyimpangan fitrah." },
          { name: "8. Nabi Ismail AS", desc: "Putra keteladanan yang ikhlas berserah diri saat diuji perintah penyembelihan; nenek moyang bangsa Arab dan Rasulullah SAW." },
          { name: "9. Nabi Ishaq AS", desc: "Putra Nabi Ibrahim dari Siti Sarah; leluhur para nabi Bani Israil." },
          { name: "10. Nabi Ya'qub AS (Israil)", desc: "Sosok ayah penyabar yang memiliki 12 putra, teladan mendalam dalam kesabaran menanti kepulangan Nabi Yusuf." },
          { name: "11. Nabi Yusuf AS", desc: "Dikaruniai ketampanan luar biasa, tafsir mimpi, dan keikhlasan memaafkan saudara-saudaranya hingga menjadi bendahara agung Mesir." },
          { name: "12. Nabi Ayyub AS", desc: "Puncak ketabahan dalam menghadapi ujian penyakit parah bertahun-tahun, kehilangan anak, dan harta tanpa sedikitpun mengeluh." },
          { name: "13. Nabi Syu'aib AS", desc: "Khatibul Anbiya' (Juru bicara para nabi) yang diutus kepada kaum Madyan untuk membasmi kecurangan timbangan dagang." },
          { name: "14. Nabi Musa AS", desc: "Kalimullah (berbicara langsung dengan Allah); membelah Laut Merah dan membebaskan Bani Israil dari tirani Fir'aun." },
          { name: "15. Nabi Harun AS", desc: "Saudara Nabi Musa yang fasih lisannya dan menjadi wazir pendamping dakwah menghadapi Fir'aun." },
          { name: "16. Nabi Dzulkifli AS", desc: "Sosok nabi yang sanggup memenuhi janji dan sabar dalam menjalankan keadilan hukum." },
          { name: "17. Nabi Daud AS", desc: "Dianugerahi kitab Zabur, suara merdu memuji Allah yang diikuti gunung dan burung, serta mampu melunakkan besi dengan tangan kosong." },
          { name: "18. Nabi Sulaiman AS", desc: "Raja bijaksana yang dianugerahi kerajaan megah, memahami bahasa binatang, dan mampu memerintahkan jin dan angin." },
          { name: "19. Nabi Ilyas AS", desc: "Mendakwahi kaum Ba'labak yang menyembah berhala Ba'al di Syam." },
          { name: "20. Nabi Ilyasa' AS", desc: "Penerus dakwah Nabi Ilyas yang memimpin kaumnya dengan hikmah dan keadilan." },
          { name: "21. Nabi Yunus AS (Dzan-Nun)", desc: "Nabi yang ditelan ikan paus (Nun) dan melantunkan doa taubat paling masyhur: La ilaha illa Anta subhanaka inni kuntu minazh zhalimin." },
          { name: "22. Nabi Zakariya AS", desc: "Ulama penjaga Baitul Maqdis dan pengasuh Maryam yang tak pernah putus asa berdoa memohon keturunan saleh." },
          { name: "23. Nabi Yahya AS", desc: "Putra Nabi Zakariya yang suci, berjiwa pemberani menegakkan syariat dan menentang tirani." },
          { name: "24. Nabi Isa AS (Al-Masih)", desc: "Dilahirkan tanpa ayah, berbicara saat bayi di buaian, menyembuhkan orang buta dan kusta, serta menghidupkan orang mati atas izin Allah." },
          { name: "25. Nabi Muhammad SAW", desc: "Khatamun Nabiyyin (Penutup Para Nabi), pembawa risalah universal rahmatan lil 'alamin dan mukjizat abadi Al-Qur'anul Karim." }
        ],
        content: ""
      }
    ]
  },

  "peta-peristiwa-quran": {
    title: "Peta Geografi & Peristiwa Al-Qur'an",
    category: "Studi Khusus Al-Qur'an",
    subtitle: "Menelusuri lokasi historis dan saksi bisu peristiwa-peristiwa penting dalam Al-Qur'an.",
    sections: [
      {
        heading: "Lokasi Suci di Jazirah Arab & Sekitarnya",
        items: [
          { term: "Makkah Al-Mukarramah (Bakkah)", desc: "Pusat gravitasi spiritual umat Islam. Di dalamnya terdapat Ka'bah (Baitullah pertama), Maqam Ibrahim, Hijir Ismail, Sumur Zamzam, Bukit Shafa dan Marwah, serta Gua Hira tempat turunnya wahyu pertama (QS. Ali 'Imran: 96)." },
          { term: "Madinah Al-Munawwarah (Yatsrib)", desc: "Kota suci tujuan Hijrah. Tempat berdirinya Masjid Nabawi, Masjid Quba, Jabal Uhud, dan pemakaman Baqi' (QS. At-Taubah: 108)." },
          { term: "Baitul Maqdis / Yerusalem (Al-Quds)", desc: "Kiblat pertama umat Islam dan tujuan Isra' Rasulullah SAW menuju Mi'raj ke Sidratul Muntaha. Memuat Masjid Al-Aqsa yang diberkahi sekelilingnya (QS. Al-Isra': 1)." },
          { term: "Lembah Sinai & Bukit Tursina (Mesir)", desc: "Lokasi Nabi Musa AS berbicara langsung dengan Allah SWT dan menerima sepuluh firman (The Ten Commandments) di Bukit Sinai (QS. At-Tin: 2, Thaha: 9-14)." },
          { term: "Mada'in Saleh & Al-Hijr (Arab Saudi)", desc: "Situs bebatuan megah tempat tinggal Kaum Tsamud yang diuji dengan unta Nabi Shaleh AS dan diazab akibat kecongkakannya (QS. Al-Hijr: 80-84)." },
          { term: "Negeri Saba' & Bendungan Ma'rib (Yaman)", desc: "Negeri makmur Baldatun Thayyibatun wa Rabbun Ghafur yang dipimpin Ratu Balqis pada masa Nabi Sulaiman AS, yang kemudian runtuh diterjang banjir Sailul 'Arim (QS. Saba': 15-16)." },
          { term: "Bukit Judi (Pegunungan Ararat / Turki)", desc: "Tempat berlabuhnya Bahtera Nabi Nuh AS setelah reda banjir besar dahsyat yang menenggelamkan orang-orang kafir (QS. Hud: 44)." },
          { term: "Gua Ashabul Kahfi (Yordania)", desc: "Tempat persembunyian para pemuda beriman bersama anjingnya yang tertidur selama 309 tahun demi menyelamatkan akidah dari raja zhalim (QS. Al-Kahf: 9-22)." }
        ],
        content: ""
      }
    ]
  }
};
