export type IlmuwanCategory =
  | "Kedokteran & Biologi"
  | "Matematika & Astronomi"
  | "Fisika, Kimia & Teknik"
  | "Filsafat, Sejarah & Geografi";

export interface IlmuwanWork {
  title: string;
  description: string;
}

export interface IlmuwanSection {
  heading: string;
  paragraphs: string[];
}

export interface IlmuwanProfile {
  id: string;
  name: string;
  fullName: string;
  arabicName: string;
  title: string;
  era: string;
  lifespan: string;
  birthPlace: string;
  field: string;
  category: IlmuwanCategory;
  summary: string;
  quote?: {
    text: string;
    context?: string;
  };
  sections: IlmuwanSection[];
  keyContributions: string[];
  works: IlmuwanWork[];
}

export const ILMUWAN_PART1: IlmuwanProfile[] = [
  {
    id: "ibnu-sina",
    name: "Ibnu Sina (Avicenna)",
    fullName: "Abu Ali Al-Husayn bin Abdullah bin Al-Hasan bin Ali bin Sina",
    arabicName: "ابن سينا",
    title: "Bapak Kedokteran Modern & Pangeran Para Dokter",
    era: "Zaman Keemasan Abbasiyah",
    lifespan: "980 – 1037 M (370 – 428 H)",
    birthPlace: "Afshana, dekat Bukhara (Uzbekistan)",
    field: "Kedokteran, Filsafat, Farmakologi, Logika & Fisika",
    category: "Kedokteran & Biologi",
    summary: "Polimatik legendaris abad ke-10 yang menyusun ensiklopedia medis Al-Qanun fi Ath-Thibb, buku rujukan utama fakultas kedokteran di dunia Islam dan Eropa selama lebih dari lima abad.",
    quote: {
      text: "Ilmu kedokteran adalah ilmu yang mempelajari kondisi tubuh manusia untuk memelihara kesehatan yang telah ada dan mengembalikan kesehatan yang telah hilang.",
      context: "Pembukaan kitab Al-Qanun fi Ath-Thibb"
    },
    sections: [
      {
        heading: "1. Masa Kecil, Kecerdasan Luar Biasa, dan Pendidikan",
        paragraphs: [
          "Abu Ali Al-Husayn bin Abdullah bin Sina, yang dikenal di dunia Barat dengan nama Latin 'Avicenna', lahir pada tahun 980 M di desa Afshana dekat Bukhara (wilayah Uzbekistan modern) pada masa Dinasti Samaniyah. Ayahnya, Abdullah, berasal dari Balkh dan menjabat sebagai pejabat pemerintahan lokal yang sangat menghargai ilmu pengetahuan, sehingga rumah mereka kerap menjadi tempat berkumpulnya para cendekiawan, ahli fikih, dan filsuf.",
          "Sejak kanak-kanak, Ibnu Sina menunjukkan daya ingat dan kecerdasan yang mencengangkan. Pada usia 10 tahun, ia telah menghafal seluruh isi Al-Qur'an 30 juz beserta penguasaan mendalam terhadap sastra Arab. Ia kemudian mempelajari aritmetika dari seorang pedagang sayur lokal, mendalami ilmu fikih kepada Ismail Az-Zahid, serta belajar filsafat, logika, dan geometri Euclid bersama Abu Abdillah An-Natili.",
          "Pada usia 16 tahun, Ibnu Sina beralih mempelajari ilmu kedokteran secara mendalam. Menurut pengakuan dalam otobiografinya, ilmu kedokteran terasa lebih mudah ia kuasai dibandingkan ilmu metafisika, hingga dalam usia belum genap 18 tahun para dokter senior di Bukhara justru datang berkonsultasi kepadanya. Titik balik kariernya terjadi ketika Sultan Bukhara, Nuh bin Mansur, menderita sakit parah yang tak kunjung sembuh. Ibnu Sina berhasil mengobatinya hingga pulih, dan sebagai imbalannya ia diberi akses penuh ke perpustakaan kerajaan Samaniyah yang berisi ribuan manuskrip langka."
        ]
      },
      {
        heading: "2. Terobosan Ilmiah dalam Dunia Kedokteran & Farmakologi",
        paragraphs: [
          "Ibnu Sina mengubah praktik pengobatan dari sekadar tradisi empiris dan spekulasi menjadi disiplin ilmu klinis yang sistematis dan berbasis observasi. Ia adalah salah satu tokoh pertama yang memaparkan konsep penularan penyakit melalui udara dan air, bahkan jauh sebelum ditemukannya mikroskop, ia telah menyarankan metode karantina selama 40 hari (al-arba'iniyah) untuk memutus rantai penyebaran wabah penyakit menular—konsep yang kelak menjadi asal-usul kata 'quarantine' di Eropa.",
          "Dalam bidang anatomi dan patologi, Ibnu Sina secara akurat mendeskripsikan gejala dan perbedaan antara meningitis primer dengan penyakit saraf lain, mengenali diabetes melalui rasa manis pada urine pasien, memaparkan anatomi mata serta cara kerja saraf optik, dan membedakan nyeri dada akibat kelainan jantung dengan gangguan pernapasan. Ia juga menjadi pelopor pengobatan penyakit berbasis psikologi (psikosomatik) dengan mengamati hubungan langsung antara denyut nadi, tekanan emosi, dan kesehatan fisik pasien.",
          "Di ranah farmakologi, Ibnu Sina menetapkan tujuh aturan ilmiah ketat untuk menguji efektivitas obat pada manusia, termasuk keharusan obat bebas dari sifat bawaan asing, diuji pada penyakit tunggal bukan komplikasi, diuji dosisnya secara bertahap, serta memperhatikan waktu timbulnya reaksi obat—suatu kerangka yang menjadi cikal bakal uji klinis farmasi modern."
        ]
      },
      {
        heading: "3. Kontribusi dalam Filsafat, Fisika, dan Geologi",
        paragraphs: [
          "Selain sebagai dokter terkemuka, Ibnu Sina adalah filsuf besar dalam tradisi filsafat Islam klasik yang memadukan rasionalitas Aristoteles dengan prinsip tauhid Islam. Ia merumuskan pembedaan fundamental antara 'Wajib al-Wujud' (Eksistensi yang Niscaya, yakni Allah SWT yang keberadaan-Nya berasal dari Dzat-Nya sendiri) dan 'Mumkin al-Wujud' (eksistensi yang mungkin ada karena sebab dari luar, yakni seluruh makhluk ciptaan). Ia juga terkenal dengan eksperimen pemikiran 'Manusia Terbang' (Al-Insan Al-Mu'allaq) untuk membuktikan eksistensi kesadaran jiwa yang terlepas dari persepsi indrawi fisik.",
          "Dalam bidang fisika, Ibnu Sina merumuskan teori 'Mail' (dorongan atau momentum awal yang diberikan pada benda bergerak) jauh sebelum teori inersia Galileo dan Newton. Dalam geologi, di dalam kitab Ash-Shifa', ia menjelaskan bagaimana pegunungan terbentuk melalui proses pengangkatan kerak bumi akibat gempa dan pengikisan bertahap oleh air dan angin selama rentang waktu geologis yang panjang—menjadikannya salah satu perintis hukum superposisi stratigrafi modern."
        ]
      },
      {
        heading: "4. Akhir Hayat dan Warisan Abadi",
        paragraphs: [
          "Kehidupan politik yang bergejolak setelah runtuhnya Dinasti Samaniyah membuat Ibnu Sina sering berpindah kota, mulai dari Rayy, Qazwin, Hamadan, hingga Isfahan. Di Hamadan, ia sempat diangkat menjadi wazir (menteri) setelah kembali menyembuhkan penguasa setempat, Syams Ad-Daulah, meski persaingan politik juga sempat membuatnya dipenjara. Di dalam sel penjara maupun di atas pelana kuda saat bertugas, ia tak pernah berhenti menulis.",
          "Pada tahun 1037 M dalam usia 57 tahun, Ibnu Sina wafat di Hamadan akibat penyakit kolik akut yang dideritanya, setelah sebelumnya memerdekakan seluruh budaknya, menyedekahkan hartanya kepada kaum miskin, dan mengkhatamkan Al-Qur'an setiap tiga hari di masa sakitnya. Sekitar 450 risalah ditulisnya, dan sekitar 240 naskah masih bertahan hingga kini. Karya terbesarnya, Al-Qanun fi Ath-Thibb, diterjemahkan ke bahasa Latin oleh Gerard dari Cremona pada abad ke-12 dan menjadi buku teks wajib fakultas kedokteran di Paris, Bologna, Leuven, hingga Oxford sampai pertengahan abad ke-17."
        ]
      }
    ],
    keyContributions: [
      "Menyusun ensiklopedia medis 5 jilid 'Al-Qanun fi Ath-Thibb' yang memetakan 760 jenis obat dan berbagai penyakit klinis.",
      "Memperkenalkan konsep karantina 40 hari untuk mencegah penularan wabah dan mengidentifikasi penularan penyakit lewat air dan tanah.",
      "Merumuskan 7 kaidah metodologi uji klinis obat yang menjadi fondasi farmakologi eksperimental modern.",
      "Mempelopori kajian psikosomatik melalui diagnosis hubungan denyut nadi dan kondisi psikologis pasien.",
      "Merumuskan konsep momentum awal dalam fisika dan prinsip stratigrafi pembentukan pegunungan dalam ilmu kebumian."
    ],
    works: [
      {
        title: "Al-Qanun fi Ath-Thibb (The Canon of Medicine)",
        description: "Ensiklopedia kedokteran 5 jilid yang merangkum dasar ilmu medis, materi medika (farmakologi), patologi organ khusus, penyakit sistemik seperti demam dan luka, serta panduan formularium peracikan obat."
      },
      {
        title: "Kitab Ash-Shifa (The Book of Healing)",
        description: "Ensiklopedia ilmiah dan filsafat komprehensif dalam 4 bagian besar: logika, ilmu alam (fisika, biologi, geologi), matematika (astronomi, geometri, musik), dan metafisika."
      },
      {
        title: "Al-Isyarat wat-Tanbihat",
        description: "Karya matang di akhir hayatnya yang membahas logika, filsafat alam, dan tasawuf filosofis secara ringkas namun mendalam."
      },
      {
        title: "Danishnama-i 'Ala'i",
        description: "Buku teks filsafat dan ilmu pengetahuan pertama yang ditulis secara sistematis dalam bahasa Persia."
      }
    ]
  },
  {
    id: "al-khwarizmi",
    name: "Al-Khwarizmi",
    fullName: "Muhammad bin Musa Al-Khwarizmi",
    arabicName: "محمد بن موسى الخوارزمي",
    title: "Bapak Aljabar & Pelopor Konsep Algoritma Dunia",
    era: "Era Awal Baitul Hikmah Abbasiyah",
    lifespan: "sekitar 780 – 850 M",
    birthPlace: "Khwarazm (Khiva, Uzbekistan)",
    field: "Matematika, Aljabar, Astronomi & Kartografi",
    category: "Matematika & Astronomi",
    summary: "Cendekiawan utama di Baitul Hikmah Baghdad yang melahirkan disiplin ilmu Aljabar, memperkenalkan sistem angka desimal beserta angka nol ke dunia Barat, dan namanya diabadikan menjadi istilah 'Algoritma'.",
    quote: {
      text: "Apa yang paling mudah dan bermanfaat dalam aritmetika adalah hal-hal yang selalu dibutuhkan manusia dalam urusan pembagian warisan, wasiat, perdagangan, pengadilan, pengukuran tanah, hingga penggalian saluran air.",
      context: "Mukadimah Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala"
    },
    sections: [
      {
        heading: "1. Kehidupan di Baghdad dan Peran di Baitul Hikmah",
        paragraphs: [
          "Muhammad bin Musa Al-Khwarizmi berasal dari wilayah Khwarazm di Asia Tengah (kini wilayah Uzbekistan dan Turkmenistan) yang sejak lama menjadi persimpangan jalur perdagangan dan keilmuan antara Persia, India, dan dunia Arab. Tidak banyak catatan rinci mengenai masa kecilnya, namun pada awal abad ke-9 M ia telah menetap di Baghdad dan dipercaya oleh Khalifah Abbasiyah, Al-Ma'mun (berkuasa 813–833 M), sebagai sarjana senior sekaligus pengelola perpustakaan di Baitul Hikmah (Rumah Kebijaksanaan).",
          "Di lembaga riset paling bergengsi pada masanya tersebut, Al-Khwarizmi bekerja bersama para astronom, penerjemah, dan matematikawan terkemuka. Ia mendapat akses penuh terhadap manuskrip matematika Babilonia, geometri Yunani karya Euclid, serta risalah astronomi dan sistem angka dari India (Siddhanta). Berbekal sintesis luar biasa, Al-Khwarizmi tidak sekadar menerjemahkan warisan masa lalu, melainkan merumuskan disiplin ilmu matematika yang sama sekali baru dan jauh lebih praktis bagi kehidupan masyarakat."
        ]
      },
      {
        heading: "2. Lahirnya Aljabar Sebagai Ilmu Independen",
        paragraphs: [
          "Karya paling revolusioner Al-Khwarizmi berjudul 'Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala' (Buku Ringkas tentang Perhitungan Pemulihan dan Penyeimbangan) yang ditulis sekitar tahun 820 M. Kata 'al-jabr' dari judul buku inilah yang diserap oleh bangsa Eropa menjadi kata 'Algebra' (Aljabar). Sebelumnya, persoalan matematika hanya diselesaikan secara kasus per kasus atau melalui gambar geometri yang rumit.",
          "Al-Khwarizmi memperkenalkan metode sistematis untuk menyelesaikan persamaan linear dan kuadrat. Teknik 'al-jabr' berarti memindahkan suku negatif ke sisi lain persamaan agar bernilai positif (pemulihan), sedangkan 'al-muqabala' berarti menyederhanakan suku-suku sejenis pada kedua sisi persamaan (penyeimbangan). Ia menyajikan enam tipe bentuk persamaan dasar beserta langkah penyelesaian analitis dan pembuktian geometrisnya. Menariknya, ia mendedikasikan bagian besar bukunya untuk memecahkan persoalan praktis umat Islam, seperti perhitungan pembagian harta warisan (faraidh) yang rumit, pengukuran luas lahan pertanian, dan pembagian hasil dagang."
        ]
      },
      {
        heading: "3. Angka Desimal, Angka Nol, dan Lahirnya Kata 'Algoritma'",
        paragraphs: [
          "Dalam risalah aritmetikanya yang berjudul 'Kitab al-Jam' wat-Tafriq bi-Hisab al-Hind' (Buku tentang Penjumlahan dan Pengurangan Menurut Perhitungan India), Al-Khwarizmi menjelaskan secara gamblang penggunaan sistem bilangan berbasis sepuluh (desimal) yang memanfaatkan sembilan angka beserta tanda kosong 'sifr' (nol) sebagai penentu nilai tempat (satuan, puluhan, ratusan, ribuan).",
          "Ketika naskah ini diterjemahkan ke bahasa Latin pada abad ke-12 dengan judul 'Algoritmi de numero Indorum' (Al-Khwarizmi tentang Bilangan India), masyarakat Eropa yang sebelumnya kesulitan berhitung menggunakan angka Romawi (I, V, X, L, C, M) akhirnya beralih ke sistem angka Arab-Hindu. Nama 'Al-Khwarizmi' yang dilatinkan menjadi 'Algoritmi' kemudian berkembang menjadi istilah 'Algoritma'—prosedur langkah demi langkah yang kini menjadi tulang punggung seluruh pemrograman komputer dan kecerdasan buatan modern."
        ]
      },
      {
        heading: "4. Kontribusi di Bidang Astronomi, Kalender, dan Geografi",
        paragraphs: [
          "Al-Khwarizmi juga merupakan seorang astronom dan geografer ulung. Ia menyusun tabel astronomi pertama di dunia Islam yang lengkap berjudul 'Zij al-Sindhind', memuat perhitungan posisi matahari, bulan, lima planet yang dikenal saat itu, serta tabel sinus dan tangen untuk keperluan navigasi dan penentuan waktu shalat maupun awal bulan Hijriyah.",
          "Atas perintah Khalifah Al-Ma'mun, ia memimpin tim 70 ahli geografi dalam proyek raksasa untuk memetakan ulang dunia dan mengukur keliling bumi melalui derajat lintang di dataran Sinjar, Irak. Dari riset ini lahir kitab geografi berjudul 'Kitab Surat al-Ard' (Buku tentang Rupa Bumi) yang mengoreksi berbagai kekeliruan peta Ptolemy, khususnya dalam hal panjang Laut Mediterania dan letak koordinat lebih dari 2.400 kota, gunung, pulau, serta sungai penting di Asia, Afrika, dan Eropa."
        ]
      }
    ],
    keyContributions: [
      "Mendirikan Aljabar sebagai cabang matematika mandiri lengkap dengan metode solusi persamaan linear dan kuadrat.",
      "Memperkenalkan sistem bilangan desimal (0-9) dan fungsi nilai tempat angka nol ke dunia Islam dan Eropa.",
      "Namanya diabadikan sebagai asal kata 'Algoritma', konsep inti komputasi dan pemrograman komputer modern.",
      "Menyusun tabel trigonometri awal (sinus dan tangen) serta tabel astronomi komprehensif 'Zij al-Sindhind'.",
      "Memperbaiki peta dunia klasik Ptolemy dengan mencantumkan koordinat lintang dan bujur 2.402 lokasi geografis dalam Kitab Surat al-Ard."
    ],
    works: [
      {
        title: "Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala",
        description: "Buku induk Aljabar pertama di dunia yang merumuskan metode penyelesaian persamaan kuadrat, aplikasi pembagian warisan Islam, hingga pengukuran geometri terapan."
      },
      {
        title: "Kitab al-Jam' wat-Tafriq bi-Hisab al-Hind",
        description: "Risalah mengenai teknik operasi penjumlahan, pengurangan, perkalian, pembagian, dan akar kuadrat menggunakan angka desimal dan angka nol."
      },
      {
        title: "Kitab Surat al-Ard (The Image of the Earth)",
        description: "Karya kartografi dan geografi matematis yang memetakan garis pantai, sungai, pegunungan, dan kota-kota dunia jauh lebih akurat daripada peta Yunani kuno."
      },
      {
        title: "Zij al-Sindhind",
        description: "Kumpulan 37 bab dan 116 tabel astronomi untuk menghitung pergerakan benda langit, gerhana, serta penampakan hilal."
      }
    ]
  },
  {
    id: "al-farabi",
    name: "Al-Farabi",
    fullName: "Abu Nasr Muhammad bin Muhammad Al-Farabi",
    arabicName: "أبو نصر محمد الفارابي",
    title: "Guru Kedua (Al-Mu'allim Ats-Tsani) & Filsuf Kota Utama",
    era: "Zaman Keemasan Abbasiyah",
    lifespan: "sekitar 872 – 950 M",
    birthPlace: "Farab (Otrar, Kazakhstan) atau Faryab (Khorasan)",
    field: "Filsafat Politik, Logika, Etika, Musikologi & Metafisika",
    category: "Filsafat, Sejarah & Geografi",
    summary: "Filsuf besar yang dijuluki 'Guru Kedua' setelah Aristoteles karena kecakapannya merumuskan sistematika logika, teori kenegaraan ideal (Al-Madinah Al-Fadhilah), dan teori akustik musik.",
    quote: {
      text: "Kebahagiaan sejati manusia hanya dapat dicapai ketika akal dan akhlak bekerja selaras di dalam sebuah masyarakat yang saling menolong menuju kebajikan.",
      context: "Intisari pemikiran dalam kitab Ara' Ahl al-Madinah al-Fadhilah"
    },
    sections: [
      {
        heading: "1. Pengembara Ilmu yang Menembus Batas Budaya",
        paragraphs: [
          "Abu Nasr Muhammad Al-Farabi lahir sekitar tahun 872 M di wilayah Farab, Transoxiana (Asia Tengah), dari keluarga keturunan perwira militer. Tidak mengejar jabatan pemerintahan, Al-Farabi justru menempuh jalan sunyi sebagai pencari ilmu sejati. Awalnya ia menimba ilmu di Bukhara, lalu berangkat ke Baghdad—pusat intelektual dunia saat itu—untuk belajar filsafat, logika, tata bahasa Arab, dan ilmu kedokteran di bawah bimbingan sarjana Kristen Nestorian ternama, Yuhanna bin Haylan dan Abu Bisyr Matta bin Yunus.",
          "Dalam perjalanan intelektualnya, Al-Farabi menguasai berbagai bahasa, termasuk Arab, Persia, Turki, dan Yunani (secara konseptual melalui teks terjemahan). Ia menjalani hidup sangat zuhud dan sederhana, lebih menyukai duduk di tepi sungai sambil merenung dan menulis daripada hidup mewah di istana. Pada tahun 942 M, ia memenuhi undangan pangeran dinasti Hamdanid, Sayf Ad-Daulah, untuk menetap di Aleppo (Suriah), di mana ia dihormati sebagai cendekiawan agung hingga wafatnya di Damaskus pada tahun 950 M."
        ]
      },
      {
        heading: "2. Julukan 'Al-Mu'allim Ats-Tsani' dan Sistematisasi Ilmu",
        paragraphs: [
          "Dalam sejarah filsafat dunia, Al-Farabi menyandang gelar kehormatan 'Al-Mu'allim Ats-Tsani' (Guru Kedua) tepat setelah Aristoteles yang disebut 'Guru Pertama'. Julukan ini diberikan karena Al-Farabi tidak hanya menjelaskan teks-teks rumit logika Organon Aristoteles dengan kejernihan luar biasa, tetapi juga menyusun ulang klasifikasi seluruh cabang ilmu pengetahuan manusia dalam bukunya 'Ihsha' al-Ulum' (Pengelompokan Ilmu-ilmu).",
          "Di dalam 'Ihsha' al-Ulum', ia membagi pengetahuan ke dalam lima rumpun sistematis: Ilmu Bahasa, Ilmu Logika, Ilmu Matematika (Aritmetika, Geometri, Optik, Astronomi, Musik), Ilmu Alam dan Metafisika, serta Ilmu Sipil/Politik, Fikih, dan Kalam. Buku ini kelak menjadi panduan kurikulum universitas-universitas abad pertengahan di Dunia Islam dan Eropa selama berabad-abad."
        ]
      },
      {
        heading: "3. Konsep Negara Utama (Al-Madinah Al-Fadhilah)",
        paragraphs: [
          "Salah satu sumbangsih paling monumental Al-Farabi adalah di bidang filsafat politik melalui mahakaryanya 'Ara' Ahl al-Madinah al-Fadhilah' (Pandangan Penduduk Kota Utama). Ia menganalogikan negara ideal layaknya tubuh manusia yang sehat: setiap organ memiliki peran yang berbeda namun saling bekerja sama secara harmonis di bawah kendali jantung yang sehat.",
          "Menurut Al-Farabi, tujuan negara bukan sekadar menumpuk kekuasaan atau kekayaan materi, melainkan mewujudkan 'As-Sa'adah' (kebahagiaan paripurna dunia dan akhirat) bagi seluruh warganya melalui keadilan, pendidikan, dan kerja sama sosial. Pemimpin ideal sebuah negara utama haruslah sosok yang memadukan kedalaman hikmah intelektual, kematangan spiritual (kenabian/wahyu atau kebijaksanaan kenegaraan), keberanian, keadilan, dan kemampuan komunikasi yang mampu menggerakkan rakyat menuju kebaikan."
        ]
      },
      {
        heading: "4. Pelopor Ilmu Musikologi dan Terapi Akustik",
        paragraphs: [
          "Tak banyak yang tahu bahwa Al-Farabi juga merupakan seorang ahli teori musik terhebat pada abad pertengahan. Melalui karyanya 'Kitab al-Musiqa al-Kabir' (Buku Besar tentang Musik), ia membedah musik bukan sekadar hiburan, melainkan bagian dari ilmu matematika, fisika bunyi (akustik), dan psikologi manusia.",
          "Ia meneliti hubungan matematis antara panjang senar, frekuensi getaran udara, dan tinggi-rendah nada, merumuskan sistem tangga nada Arab yang sangat presisi, sekaligus merancang dan menyempurnakan alat musik petik seperti 'oud' dan 'qanun'. Selain itu, Al-Farabi juga menulis risalah tentang efek psikologis alunan suara dan ritme dalam menenangkan gangguan kejiwaan—sebuah praktik awal terapi musik di rumah sakit Islam (bimaristan)."
        ]
      }
    ],
    keyContributions: [
      "Menyusun klasifikasi ilmu pengetahuan dunia secara sistematis dalam 'Ihsha' al-Ulum' yang menjadi rujukan universitas klasik.",
      "Merumuskan teori negara ideal dan etika kepemimpinan dalam 'Al-Madinah Al-Fadhilah'.",
      "Menyelaraskan logika filsafat rasional dengan ajaran wahyu dan kenabian Islam.",
      "Mengembangkan fisika akustik, matematika interval nada, dan terapi musik melalui 'Kitab al-Musiqa al-Kabir'.",
      "Mempengaruhi langsung pemikiran Ibnu Sina, Ibnu Rusyd, Al-Ghazali, hingga pemikir Barat seperti Maimonides dan Thomas Aquinas."
    ],
    works: [
      {
        title: "Ara' Ahl al-Madinah al-Fadhilah (The Virtuous City)",
        description: "Risalah filsafat politik dan sosial terkenal mengenai struktur masyarakat ideal, kriteria pemimpin utama, serta perbandingan antara kota utama dan kota-kota yang tersesat."
      },
      {
        title: "Ihsha' al-Ulum (Enumeration of the Sciences)",
        description: "Karya ensiklopedis yang memetakan seluruh cabang ilmu pengetahuan manusia mulai dari linguistik, logika, matematika, fisika, metafisika, hingga fikih."
      },
      {
        title: "Kitab al-Musiqa al-Kabir (The Great Book of Music)",
        description: "Karya paling otoritatif pada abad pertengahan mengenai teori akustik bunyi, interval matematis nada, instrumen musik, dan efek psikologis irama."
      },
      {
        title: "Tahsil al-Sa'adah (The Attainment of Happiness)",
        description: "Kajian filsafat etika mengenai bagaimana ilmu teoretis, ilmu politik, dan akhlak mulia berpadu mengantarkan manusia pada kebahagiaan sejati."
      }
    ]
  },
  {
    id: "ibnu-khaldun",
    name: "Ibnu Khaldun",
    fullName: "Waliuddin Abdurrahman bin Muhammad bin Muhammad bin Abi Bakr bin Khaldun",
    arabicName: "ابن خلدون",
    title: "Bapak Sosiologi, Historiografi Modern & Ekonomi Politik",
    era: "Era Dinasti Afrika Utara & Mamluk",
    lifespan: "1332 – 1406 M (732 – 808 H)",
    birthPlace: "Tunis, Tunisia",
    field: "Sosiologi, Sejarah Kritis, Ekonomi & Filsafat Peradaban",
    category: "Filsafat, Sejarah & Geografi",
    summary: "Pemikir agung abad ke-14 yang meletakkan dasar ilmu sosiologi ('Ilm al-Umran), filsafat sejarah ilmiah, dan teori ekonomi modern dalam kitab fenomenalnya 'Al-Muqaddimah'.",
    quote: {
      text: "Sejarah pada hakikatnya adalah informasi tentang masyarakat manusia, yakni peradaban dunia beserta perubahan-perubahan alami yang terjadi di dalamnya seperti sikap liar, kehidupan menetap, solidaritas kelompok, serta naik-turunnya dinasti.",
      context: "Kitab Al-Muqaddimah"
    },
    sections: [
      {
        heading: "1. Latar Belakang Kelahiran dan Karir Politik Penuh Dinamika",
        paragraphs: [
          "Abdurrahman Ibnu Khaldun lahir pada tahun 1332 M di Tunisia dari keluarga cendekiawan dan negarawan Muslim Andalusia (Sevilla) yang bermigrasi ke Afrika Utara setelah jatuhnya kota tersebut pada Reconquista. Di usia muda, ia menempuh pendidikan kelas wahid di Tunis, mempelajari Al-Qur'an, hadits, fikih Maliki, sastra Arab, logika, dan filsafat dari guru-guru terbaik Maghrib.",
          "Pada tahun 1348 M, wabah maut hitam (Black Death) melanda Tunisia dan merenggut nyawa kedua orang tua serta sebagian besar gurunya. Tragedi tersebut membangkitkan kesadaran mendalam pada dirinya tentang rapuhnya peradaban manusia. Setelah itu, Ibnu Khaldun memasuki panggung politik Afrika Utara dan Granada yang penuh intrik; ia pernah menjabat sebagai penulis istana, duta besar di kerajaan Kastilia (Spanyol), perdana menteri, hingga merasakan pengasingan dan penjara akibat perubahan kekuasaan dinasti yang silih berganti."
        ]
      },
      {
        heading: "2. Lahirnya 'Al-Muqaddimah' di Benteng Qal'at Ibnu Salamah",
        paragraphs: [
          "Merasa letih dengan intrik kekuasaan politik, pada tahun 1375 M Ibnu Khaldun mengundurkan diri ke benteng terpencil Qal'at Ibnu Salamah di Aljazair selama empat tahun. Dalam ketenangan pengasingan itulah ia menyusun kitab sejarah dunia 'Kitab al-Ibar', yang bagian pengantarnya ia tulis menjadi jilid tersendiri berjudul 'Al-Muqaddimah' (Pendahuluan) — sebuah mahakarya yang diakui sejarawan modern Arnold Toynbee sebagai karya filsafat sejarah terhebat yang pernah diciptakan pikiran manusia.",
          "Dalam Al-Muqaddimah, Ibnu Khaldun mengkritik para sejarawan terdahulu yang hanya menyalin berita mentah tanpa memverifikasi akal sehat, konteks sosial, dan hukum alam. Untuk menguji kebenaran suatu laporan sejarah, ia merumuskan disiplin ilmu baru yang ia sebut ''Ilm al-'Umran al-Basyari' (Ilmu Peradaban Manusia) — yang kini kita kenal sebagai Sosiologi."
        ]
      },
      {
        heading: "3. Teori 'Ashabiyah' dan Siklus Bangkit-Runtuhnya Peradaban",
        paragraphs: [
          "Konsep sentral sosiologi Ibnu Khaldun adalah ''Ashabiyah' (solidaritas sosial atau ikatan kohesi kelompok). Ia menjelaskan bahwa setiap negara atau peradaban besar lahir dari kelompok yang memiliki solidaritas sosial kuat, kesederhanaan, dan keberanian moral. Namun, seiring meningkatnya kemakmuran kota, generasi penerus terbuai kemewahan, pajak dinaikkan untuk membiayai gaya hidup elite, solidaritas memudar, dan kezaliman merajalela hingga akhirnya peradaban itu runtuh dalam siklus rata-rata 3 sampai 4 generasi (sekitar 120 tahun) dan digantikan oleh kelompok baru yang lebih kuat.",
          "Tak hanya sosiologi dan sejarah, pemikiran ekonomi Ibnu Khaldun dalam Al-Muqaddimah mendahului pemikiran Adam Smith dan Arthur Laffer berabad-abad sebelumnya. Ia mengemukakan teori nilai kerja (labor theory of value), pembagian kerja untuk meningkatkan produktivitas, hukum penawaran dan permintaan, serta gagasan terkenal bahwa pajak yang terlalu tinggi justru membunuh semangat kerja pengusaha sehingga penerimaan kas negara akhirnya menyusut (yang di ekonomi modern dikenal sebagai Kurva Laffer)."
        ]
      },
      {
        heading: "4. Tahun-Tahun Terakhir di Mesir & Pertemuan dengan Timur Lenk",
        paragraphs: [
          "Pada tahun 1382 M, Ibnu Khaldun hijrah ke Kairo, Mesir, dan disambut hangat oleh Sultan Barquq. Di Kairo ia mengajar di Universitas Al-Azhar serta beberapa kali diangkat menjadi Hakim Agung (Qadhi al-Qudhat) Mazhab Maliki. Ketika panglima Mongol Timur Lenk menyerbu Damaskus pada tahun 1401 M, Ibnu Khaldun turun dari tembok kota menggunakan tali untuk berdialog langsung dengan sang penakluk demi melindungi rakyat sipil dan mengkaji karakter sang penguasa secara langsung.",
          "Ibnu Khaldun wafat di Kairo pada tahun 1406 M dalam usia 73 tahun dan dimakamkan di pemakaman kaum sufi di luar Bab an-Nasr. Warisannya terus hidup sebagai perintis sosiologi empiris, ilmu politik modern, historiografi kritis, dan teori siklus peradaban dunia."
        ]
      }
    ],
    keyContributions: [
      "Menciptakan ''Ilm al-Umran' (Ilmu Sosial/Sosiologi) sebagai metodologi ilmiah untuk menganalisis masyarakat manusia.",
      "Merumuskan teori 'Ashabiyah' (kohesi sosial) untuk menjelaskan pola berdirinya negara, puncak kejayaan, dan keruntuhan peradaban.",
      "Mengubah penulisan sejarah dari dongeng kronologis menjadi analisis kritis sebab-akibat berbasis fakta sosial dan ekonomi.",
      "Merumuskan hubungan tarif pajak dengan pendapatan negara, teori nilai kerja, dan mekanisme pasar jauh sebelum ekonomi klasik Barat.",
      "Memaparkan metode pedagogi pendidikan anak yang menekankan pemahaman bertahap serta menolak kekerasan fisik dalam mendidik."
    ],
    works: [
      {
        title: "Al-Muqaddimah (Prolegomena)",
        description: "Buku induk ilmu sosiologi, ekonomi politik, geografi manusia, filsafat sejarah, dan teori pendidikan yang merangkum hukum-hukum pergerakan peradaban manusia."
      },
      {
        title: "Kitab al-Ibar wa Diwan al-Mubtada' wal-Khabar",
        description: "Ensiklopedia sejarah dunia dalam tujuh jilid besar yang mengulas sejarah bangsa Arab, Persia, Yunani, Romawi, hingga suku Berber di Afrika Utara."
      },
      {
        title: "At-Ta'rif bi Ibni Khaldun wa Rihlatuhu Gharban wa Syarqan",
        description: "Otobiografi lengkap Ibnu Khaldun yang mencatat secara detail perjalanan hidup, pengalamannya di istana, hingga pertemuannya dengan Timur Lenk."
      },
      {
        title: "Lubab al-Muhashshal fi Ushul ad-Din",
        description: "Ringkasan kritis tentang ilmu kalam dan teologi Islam yang ia tulis pada usia muda."
      }
    ]
  },
  {
    id: "al-biruni",
    name: "Al-Biruni",
    fullName: "Abu Rayhan Muhammad bin Ahmad Al-Biruni",
    arabicName: "أبو الريحان البيروني",
    title: "Bapak Antropologi, Geodesi & Pengukur Keliling Bumi",
    era: "Era Dinasti Ghaznawiyah",
    lifespan: "973 – 1048 M",
    birthPlace: "Kath, Khwarazm (Uzbekistan)",
    field: "Astronomi, Geodesi, Antropologi, Fisika & Farmakologi",
    category: "Matematika & Astronomi",
    summary: "Ilmuwan jenius lintas disiplin yang menghitung jari-jari dan keliling bumi dengan tingkat kesalahan kurang dari 1%, mengukur massa jenis mineral dengan presisi modern, dan menulis risalah antropologi ilmiah pertama tentang India.",
    quote: {
      text: "Tidak ada jalan bagi manusia untuk sampai kepada kebenaran ilmiah selain dengan membersihkan diri dari prasangka, fanatisme golongan, dan sikap mengikuti hawa nafsu.",
      context: "Mukadimah Kitab Al-Atsar al-Baqiyah"
    },
    sections: [
      {
        heading: "1. Pencinta Ilmu Sejak Masa Muda di Khwarazm",
        paragraphs: [
          "Abu Rayhan Muhammad bin Ahmad Al-Biruni lahir pada tahun 973 M di pinggiran kota Kath, Khwarazm. Julukan 'Al-Biruni' berarti 'orang dari pinggiran luar kota'. Sejak remaja ia telah dibimbing oleh astronom dan matematikawan ulung Abu Nasr Mansur bin Iraq yang memperkenalkannya pada trigonometri sferis dan pengamatan benda langit.",
          "Pada usia 22 tahun, Al-Biruni sudah membuat perangkat observasi astronomi berskala besar untuk mengukur kemiringan sumbu bumi dan menentukan garis lintang kota kelahirannya dengan akurasi luar biasa. Ia menjalin korespondensi ilmiah yang terkenal dengan sesama raksasa ilmu saat itu, Ibnu Sina, di mana keduanya saling berdebat secara kritis namun santun mengenai teori fisika cahaya, kekosongan ruang, dan sifat alam semesta."
        ]
      },
      {
        heading: "2. Pengukuran Jari-Jari & Keliling Bumi yang Mengagumkan",
        paragraphs: [
          "Salah satu pencapaian terhebat Al-Biruni terjadi ketika ia berada di Benteng Nandana (kini wilayah Punjab, Pakistan). Alih-alih memakai metode lama seperti berjalan ribuan kilometer melintasi gurun untuk mengukur jarak busur meridian, Al-Biruni menggunakan kecerdasan trigonometri murni. Ia mengukur tinggi sebuah gunung menggunakan dua titik pengamatan di dataran rata, lalu naik ke puncak gunung untuk mengukur sudut depresi cakrawala (dip of the horizon).",
          "Dengan rumus trigonometri sederhana namun brilian tersebut, Al-Biruni berhasil menghitung jari-jari bumi sebesar 6.339,6 kilometer — angka yang hanya berselisih kurang dari 0,5% hingga 1% dari hasil pengukuran satelit GPS modern (6.371 km)! Ia juga mengembangkan instrumen piknometer hidrostatis untuk mengukur berat jenis 18 jenis batu permata dan logam secara tepat, menghasilkan nilai yang sangat dekat dengan standar laboratorium modern."
        ]
      },
      {
        heading: "3. Bapak Antropologi Perbandingan Agama melalui 'Kitab al-Hind'",
        paragraphs: [
          "Ketika Sultan Mahmud dari Ghazni melakukan ekspedisi ke anak benua India, Al-Biruni ikut mendampingi dan memanfaatkan kesempatan emas itu untuk mempelajari bahasa Sanskerta secara mendalam. Selama bertahun-tahun ia bergaul dan berdiskusi langsung dengan para pendeta, filsuf, dan ilmuwan India guna memahami kitab suci, filsafat, sistem kalender, astronomi, serta adat istiadat masyarakat India dari sumber primernya.",
          "Hasil riset lapangan tersebut dituangkan dalam karya legendaris berjudul 'Tahqiq ma lil-Hind' (atau Kitab al-Hind). Karya ini diperlakukan sebagai studi antropologi dan sosiologi komparatif paling objektif pada abad pertengahan karena Al-Biruni menulisnya tanpa menghakimi atau mengejek keyakinan bangsa lain, melainkan memaparkannya apa adanya secara ilmiah dan komparatif."
        ]
      },
      {
        heading: "4. Kesetiaan pada Riset Hingga Akhir Hayat",
        paragraphs: [
          "Al-Biruni menguasai bahasa Arab, Persia, Khwarazm, Yunani (secara literatur), Ibrani, Suryani, hingga Sanskerta. Ia menulis lebih dari 146 kitab di bidang astronomi, geografi, farmakologi, mekanika fluida, sejarah kalender dunia, dan geologi — termasuk menyimpulkan bahwa lembah Sungai Indus dulunya merupakan dasar lautan purba yang terisi sedimen.",
          "Ketekunan Al-Biruni dalam menuntut ilmu begitu melegenda. Dikisahkan oleh seorang sahabat ahli fikih, Al-Walwaliji, ketika Al-Biruni sedang terbaring menjelang wafatnya pada tahun 1048 M, ia masih bertanya tentang sebuah masalah hukum pembagian warisan (faraidh). Ketika sahabatnya merasa iba dan menyarankan agar ia beristirahat saja, Al-Biruni menjawab: 'Mana yang lebih baik: aku mati dalam keadaan mengetahui masalah ini, atau mati dalam keadaan bodoh?' Begitu sang sahabat selesai menjelaskannya, beberapa saat kemudian Al-Biruni menghembuskan napas terakhir dengan tenang."
        ]
      }
    ],
    keyContributions: [
      "Menghitung jari-jari dan keliling bumi menggunakan metode trigonometri sudut cakrawala gunung dengan akurasi hampir 99%.",
      "Merintis ilmu Antropologi budaya dan studi perbandingan agama secara objektif melalui Kitab al-Hind.",
      "Mengukur berat jenis (specific gravity) 18 mineral, permata, dan logam dengan metode kesetimbangan hidrostatis.",
      "Merumuskan sistem proyeksi peta azimutal serta mengidentifikasi potensi keberadaan benua berpenghuni di belahan bumi barat (Amerika) ratusan tahun sebelum Columbus.",
      "Menjelaskan konsep kecepatan cahaya jauh lebih cepat daripada suara dan menganalisis sifat mata air artesis berdasarkan hukum bejana berhubungan."
    ],
    works: [
      {
        title: "Kitab al-Hind (Tahqiq ma lil-Hind)",
        description: "Studi mendalam mengenai filsafat, agama, bahasa, sistem sosial, astronomi, dan kebudayaan masyarakat India berdasarkan pengamatan empiris langsung."
      },
      {
        title: "Al-Qanun al-Mas'udi",
        description: "Ensiklopedia astronomi terbesar karya Al-Biruni dalam 11 jilid yang merangkum trigonometri, gerakan planet, pengukuran bumi, dan geodesi."
      },
      {
        title: "Al-Atsar al-Baqiyah 'an al-Qurun al-Khaliyah",
        description: "Studi kronologi sejarah dan kalender berbagai peradaban dunia kuno (Persia, Yunani, Yahudi, Kristen, Arab Pra-Islam, dan Islam)."
      },
      {
        title: "Kitab ash-Shaydanah fi ath-Thibb",
        description: "Buku panduan farmakologi dan pengenalan lebih dari seribu jenis obat herbal beserta sinonim namanya dalam berbagai bahasa."
      }
    ]
  },
  {
    id: "ibnu-al-haytham",
    name: "Ibnu Al-Haytham (Alhazen)",
    fullName: "Abu Ali Al-Hasan bin Al-Hasan bin Al-Haytham",
    arabicName: "الحسن بن الهيثم",
    title: "Bapak Optik Modern & Perintis Metode Ilmiah Eksperimental",
    era: "Era Dinasti Fatimiyah (Kairo)",
    lifespan: "965 – 1040 M",
    birthPlace: "Basra, Irak",
    field: "Optik, Fisika, Matematika & Metodologi Ilmiah",
    category: "Fisika, Kimia & Teknik",
    summary: "Ilmuwan besar yang menumbangkan teori penglihatan Yunani kuno dengan membuktikan bahwa mata melihat karena cahaya memantul dari benda masuk ke mata, penemu prinsip kamera obskura, dan perumus metode eksperimen ilmiah modern.",
    quote: {
      text: "Pencari kebenaran bukanlah orang yang memercayai tulisan para pendahulu tanpa syarat, melainkan orang yang menaruh keraguan ilmiah terhadapnya, mengujinya melalui eksperimen, dan hanya tunduk pada pembuktian empiris serta argumen rasional.",
      context: "Kitab Al-Syukuk 'ala Batlamyus (Keraguan terhadap Ptolemy)"
    },
    sections: [
      {
        heading: "1. Dari Insinyur Basra hingga Drama Sungai Nil di Kairo",
        paragraphs: [
          "Abu Ali Al-Hasan bin Al-Haytham, yang di Barat tersohor dengan nama 'Alhazen', lahir di Basra (Irak) pada tahun 965 M. Di kota kelahirannya, ia sempat mengabdi sebagai pejabat administrasi namun memilih meninggalkan jabatan birokrasi demi memfokuskan hidupnya pada matematika, fisika, dan teknik sipil.",
          "Reputasinya sebagai insinyur cerdas membuat Khalifah Fatimiyah di Mesir, Al-Hakim bi-Amrillah, mengundangnya ke Kairo untuk merancang proyek pengendalian banjir Sungai Nil yang kerap mengancam pertanian Mesir. Setelah meninjau langsung arus Nil hingga ke hulu Aswan, Ibnu Al-Haytham menyadari bahwa teknologi pembangunan saat itu belum memungkinkan pembendungan sungai raksasa tersebut — sebuah proyek yang kelak baru terwujud seribu tahun kemudian lewat Bendungan Aswan modern. Khawatir akan murka sang penguasa, Ibnu Al-Haytham berpura-pura mengalami gangguan jiwa dan menjalani tahanan rumah selama kurang lebih sepuluh tahun di dekat Masjid Al-Azhar."
        ]
      },
      {
        heading: "2. Revolusi Ilmu Optik & Kamera Obskura dari Dalam Ruang Gelap",
        paragraphs: [
          "Masa tahanan rumah di ruang yang temaram ternyata menjadi momen paling produktif bagi peradaban sains dunia. Mengamati seberkas cahaya matahari yang menyelinap masuk melalui celah kecil tirai ke dalam ruang gelapnya dan memproyeksikan bayangan terbalik di dinding seberang, Ibnu Al-Haytham melakukan serangkaian eksperimen presisi menggunakan 'Al-Bayt Al-Muzlim' (Ruang Gelap) — istilah Arab yang kemudian diterjemahkan ke bahasa Latin menjadi 'Camera Obscura'.",
          "Dari pengamatan itu ia menulis mahakarya tujuh jilid berjudul 'Kitab al-Manazir' (Buku tentang Optik). Sebelumnya, para ilmuwan Yunani seperti Euclid dan Ptolemy meyakini teori emisi — bahwa mata memancarkan sinar ke arah benda agar bisa melihat. Ibnu Al-Haytham meruntuhkan teori berusia ribuan tahun tersebut secara eksperimental. Ia membuktikan bahwa cahaya merambat lurus dari sumber terang menuju benda, lalu memantul ke dalam pupil mata, melewati lensa, hingga membentuk citra visual yang diproses oleh saraf optik dan otak. Penemuan inilah yang melandasi teknologi fotografi, lensa kacamata, teleskop, hingga proyektor modern."
        ]
      },
      {
        heading: "3. Perintis Metode Ilmiah Modern (Scientific Method)",
        paragraphs: [
          "Kontribusi terbesar Ibnu Al-Haytham melebihi ilmu optik itu sendiri: ia adalah arsitek pertama dari metodologi ilmiah eksperimental modern, lebih dari 200 tahun sebelum Roger Bacon dan 500 tahun sebelum Galileo. Dalam karyanya, setiap hipotesis tidak boleh diterima hanya karena kewibawaan tokoh besar seperti Aristoteles atau Ptolemy.",
          "Ibnu Al-Haytham menetapkan siklus kerja ilmiah yang terdiri dari: (1) Pengamatan fenomena alam secara cermat, (2) Perumusan hipotesis rasional, (3) Pengujian melalui eksperimen fisik terkontrol (yang ia sebut 'i'tibar') dengan perangkat pengukur presisi, (4) Analisis matematika atas data yang terkumpul, serta (5) Penarikan kesimpulan umum yang dapat diulang oleh peneliti lain."
        ]
      },
      {
        heading: "4. Cahaya Senja, Pembiasan Atmosfer, dan Masalah Alhazen",
        paragraphs: [
          "Selain menemukan hukum pemantulan dan pembiasan cahaya pada cermin datar, cembung, cekung, dan parabola, Ibnu Al-Haytham juga mengkaji panjang fenomena fajar (shafak) serta senja. Melalui pengamatan sudut depresi matahari sebesar 19 derajat di bawah ufuk saat cahaya fajar muncul atau senja menghilang, ia mampu memperkirakan ketinggian atmosfer bumi secara cukup mendekati perhitungan ilmiah.",
          "Dalam matematika murni, ia merumuskan persoalan geometri terkenal yang di dunia Barat dinamakan 'Alhazen's Problem' — yaitu menentukan titik pantulan pada permukaan cermin lengkung dari sumber cahaya dan posisi mata pengamat tertentu — yang membutuhkan penyelesaian aljabar berderajat empat. Ia wafat di Kairo sekitar tahun 1040 M dengan meninggalkan warisan lebih dari 200 risalah ilmiah dan sebuah kawah di Bulan (Kawah Alhazen) yang dinamai untuk mengenangnya."
        ]
      }
    ],
    keyContributions: [
      "Membuktikan secara eksperimental teori intromisi cahaya (penglihatan terjadi karena cahaya masuk ke mata, bukan keluar dari mata).",
      "Membangun fondasi Camera Obscura yang menjadi cikal bakal kamera, fotografi, dan proyeksi optik modern.",
      "Merumuskan Metode Ilmiah Eksperimental (observasi, hipotesis, eksperimen berulang, pembuktian matematis).",
      "Memaparkan anatomi lengkap mata manusia serta mengenalkan istilah retina, kornea, dan humor vitreous.",
      "Memperkirakan ketebalan atmosfer bumi melalui analisis pembiasan cahaya matahari saat fajar dan senja."
    ],
    works: [
      {
        title: "Kitab al-Manazir (Book of Optics / De Aspectibus)",
        description: "Karya 7 jilid paling berpengaruh dalam sejarah fisika optik yang membedah sifat cahaya, fisiologi mata, persepsi visual, ilusi optik, serta hukum pemantulan dan pembiasan."
      },
      {
        title: "Al-Syukuk 'ala Batlamyus (Doubts Concerning Ptolemy)",
        description: "Karya kritik tajam berbasis logika dan eksperimen yang membongkar kelemahan model astronomi geosentris Ptolemy."
      },
      {
        title: "Maqalah fi al-Daw' (Treatise on Light)",
        description: "Risalah khusus yang menganalisis cahaya sebagai sifat fisis independen yang bergerak dengan kecepatan tertentu pada medium berbeda."
      },
      {
        title: "Maqalah fi Kayfiyyat al-Zilal (On the Configuration of the World)",
        description: "Kajian astronomi fisik yang mencoba memvisualisasikan model fisik pergerakan bola-bola planet secara mekanis."
      }
    ]
  },
  {
    id: "jabir-ibn-hayyan",
    name: "Jabir Ibn Hayyan (Geber)",
    fullName: "Abu Musa Jabir bin Hayyan Al-Azdi",
    arabicName: "جابر بن حيان",
    title: "Bapak Ilmu Kimia Eksperimental Dunia",
    era: "Masa Awal Dinasti Abbasiyah (Kufah & Baghdad)",
    lifespan: "sekitar 721 – 815 M",
    birthPlace: "Tus, Khurasan (Iran)",
    field: "Kimia Eksperimental, Metalurgi & Farmakologi",
    category: "Fisika, Kimia & Teknik",
    summary: "Ilmuwan abad ke-8 yang memisahkan ilmu kimia dari takhayul sihir alkimia, memperkenalkan metode eksperimen laboratorium terkontrol, menciptakan alat distilasi 'Alembic', serta menemukan berbagai asam kuat penting bagi industri.",
    quote: {
      text: "Kewajiban pertama bagi seorang pengkaji kimia adalah bekerja di laboratorium dan melakukan eksperimen nyata; sebab siapa yang tidak bereksperimen tidak akan pernah mencapai derajat ilmu yang sejati.",
      context: "Kutipan dari risalah ilmiah Jabir ibn Hayyan"
    },
    sections: [
      {
        heading: "1. Perjalanan Hidup dari Tus ke Kufah dan Istana Abbasiyah",
        paragraphs: [
          "Abu Musa Jabir bin Hayyan lahir sekitar tahun 721 M di kota Tus, wilayah Khurasan (Iran). Ayahnya, Hayyan Al-Azdi, adalah seorang apoteker asal Arab yang turut mendukung gerakan revolusi Abbasiyah hingga dihukum mati oleh penguasa Umayyah. Setelah peristiwa itu, Jabir kecil dikirim ke Yaman untuk belajar Al-Qur'an, matematika, dan berbagai ilmu dasar di bawah bimbingan ulama Harbi Al-Himyari.",
          "Setelah berdirinya Kekhalifahan Abbasiyah, Jabir pindah ke Kufah (Irak) yang kala itu merupakan salah satu pusat keilmuan utama. Di sana ia mendirikan laboratorium kimia pribadi serta menimba ilmu spiritual dan hikmah dari Imam Ja'far Ash-Shadiq. Kepiawaian ilmiahnya menarik perhatian keluarga wazir terkenal Barmaki di Baghdad pada masa Khalifah Harun Ar-Rasyid, sehingga Jabir dipercaya sebagai ahli kimia resmi istana sebelum kembali ke Kufah hingga wafat sekitar tahun 815 M."
        ]
      },
      {
        heading: "2. Mengubah Alkimia Mistis Menjadi Sains Laboratorium",
        paragraphs: [
          "Sebelum era Jabir ibn Hayyan, studi materi di Mesir kuno dan Yunani masih sangat erat dibalut simbolisme mistis, ramalan astrologi, dan spekulasi tanpa uji empiris. Jabir menjadi pelopor yang meletakkan dasar penelitian kuantitatif dan eksperimen laboratorium yang terukur. Ia menekankan pentingnya mengukur takaran bahan secara akurat menggunakan timbangan presisi ('al-mizan') sebelum mencampurkan zat.",
          "Ia merumuskan teori struktur materi bahwa logam terdiri atas kombinasi unsur merkuri dan belerang dalam proporsi yang terukur, serta mengklasifikasikan berbagai zat mineral berdasarkan sifat fisika-kimianya ke dalam tiga kategori utama: zat mudah menguap ('spirits' seperti kamper, amonium klorida, dan merkuri), logam ('metals' seperti emas, perak, tembaga, timah, besi), dan batuan/mineral tak melebur."
        ]
      },
      {
        heading: "3. Penemuan Alat 'Al-Inbiq' (Alembic) dan Proses Kimia Fundamental",
        paragraphs: [
          "Jabir merancang puluhan peralatan gelas laboratorium yang tahan panas serta menyempurnakan proses-proses dasar industri kimia modern. Temuan alat distilasinya yang paling terkenal disebut 'Al-Inbiq' — yang diserap ke dalam bahasa Inggris menjadi 'Alembic' — memungkinkan pemisahan cairan berdasarkan perbedaan titik didih secara murni.",
          "Selain distilasi (penyulingan), ia mendokumentasikan secara sistematis teknik kristalisasi, kalsinasi (pemanasan hingga berubah sifat), sublimasi, penguapan (evaporasi), dan penyaringan (filtrasi). Dengan metode tersebut ia berhasil menyintesis dan mengisolasi asam-asam mineral kuat seperti asam sulfat, asam nitrat, asam klorida, serta campuran legendaris 'Aqua Regia' (air raja) yang mampu melarutkan emas murni."
        ]
      },
      {
        heading: "4. Aplikasi Praktis Industri dan Pengaruh bagi Dunia Barat",
        paragraphs: [
          "Riset Jabir ibn Hayyan sangat memajukan industri dunia Islam pada abad pertengahan. Ia menemukan formula pembuatan baja tahan karat yang lebih kuat, zat pewarna tekstil dan penyamakan kulit yang tahan luntur, cairan anti-karat untuk melapisi logam senjata, tinta emas yang tahan lama untuk penulisan manuskrip mushaf Al-Qur'an, serta teknik penggunaan mangan dioksida untuk membuat kaca bening tanpa warna hijau kecokelatan.",
          "Karya-karya Jabir diterjemahkan secara luas ke bahasa Latin mulai abad ke-12 dengan nama pena 'Geber'. Istilah kimia modern seperti 'alkali' (dari bahasa Arab al-qaly) pun berasal dari perbendaharaan riset ilmuwan Muslim yang dirintisnya. Sejarawan sains modern George Sarton dan Eric Holmyard menobatkannya sebagai Bapak Ilmu Kimia sejati yang membuka jalan bagi lahirnya kimia modern."
        ]
      }
    ],
    keyContributions: [
      "Merancang alat distilasi 'Al-Inbiq' (Alembic) dan merumuskan metode distilasi, kristalisasi, sublimasi, dan kalsinasi.",
      "Mengisolasi berbagai senyawa kimia krusial seperti asam nitrat, asam klorida, asam asetat pekat, asam sitrat, dan Aqua Regia.",
      "Mengklasifikasikan materi ke dalam kelompok spirits (zat volatil), logam, dan mineral padat.",
      "Mengembangkan teknologi produksi kaca jernih menggunakan mangan dioksida serta metode pewarnaan tekstil dan pencegahan karat besi.",
      "Memperkenalkan eksperimen terukur berbasis timbangan akurat sebagai fondasi sains kimia modern."
    ],
    works: [
      {
        title: "Kitab al-Kimya (Book of the Composition of Alchemy)",
        description: "Salah satu risalah kimia tertua yang diterjemahkan ke bahasa Latin oleh Robert of Chester pada tahun 1144 M dan memperkenalkan terminologi kimia Arab ke Eropa."
      },
      {
        title: "Kitab as-Sab'in (The Book of Seventy)",
        description: "Kumpulan 70 risalah ringkas yang menguraikan prosedur laboratorium, klasifikasi senyawa alam, dan teori proporsi zat."
      },
      {
        title: "Kitab al-Mizan (The Book of Balances)",
        description: "Karya teoretis dan praktis mengenai prinsip kesetimbangan kuantitatif dan pengukuran proporsional dalam reaksi senyawa kimia."
      },
      {
        title: "Al-Khawass al-Kabir (The Great Book of Properties)",
        description: "Buku eksperimen yang memaparkan sifat-sifat unik berbagai mineral, tumbuhan, dan senyawa buatan manusia."
      }
    ]
  },
  {
    id: "al-razi",
    name: "Al-Razi (Rhazes)",
    fullName: "Abu Bakr Muhammad bin Zakariya Al-Razi",
    arabicName: "أبو بكر محمد بن زكريا الرازي",
    title: "Dokter Klinis Terbesar Zaman Keemasan & Perintis Pediatri",
    era: "Era Abbasiyah (Rayy & Baghdad)",
    lifespan: "865 – 925 M",
    birthPlace: "Rayy (dekat Teheran, Iran)",
    field: "Kedokteran Klinis, Farmasi, Pediatri & Kimia",
    category: "Kedokteran & Biologi",
    summary: "Dokter kepala rumah sakit Rayy dan Baghdad yang membedakan penyakit cacar dan campak untuk pertama kalinya dalam sejarah, memelopori kedokteran anak (pediatri), serta menulis ensiklopedia klinis 23 jilid Al-Hawi.",
    quote: {
      text: "Ketika seorang dokter dapat mengobati pasien cukup melalui pengaturan pola makan dan gaya hidup sehat, janganlah ia tergesa-gesa memberinya obat; dan jika bisa memakai obat tunggal, hindarilah obat campuran.",
      context: "Nasihat klinis dalam kitab Akhlaq ath-Thabib (Etika Dokter)"
    },
    sections: [
      {
        heading: "1. Dari Pemusik dan Kimiawan Menuju Dokter Terbesar Dunia Islam",
        paragraphs: [
          "Abu Bakr Muhammad bin Zakariya Al-Razi — dikenal di Eropa sebagai 'Rhazes' — lahir di kota Rayy (dekat Teheran modern) pada tahun 865 M. Pada masa mudanya, Al-Razi memiliki minat besar pada seni musik kecapi ('oud), sastra, filsafat, dan eksperimen kimia. Menurut catatan sejarah, ketertarikannya beralih ke bidang kedokteran pada usia dewasa setelah matanya terganggu oleh uap eksperimen kimia di laboratorium dan ia sering mengamati cara kerja dokter di rumah sakit setempat.",
          "Ia pun belajar kedokteran secara tekun di Rayy dan Baghdad di bawah bimbingan dokter terkemuka Ali bin Sahl Rabban ath-Thabari. Berkat kecerdasan klinis serta empatinya terhadap pasien miskin, Al-Razi dipercaya memimpin Rumah Sakit Rayy dan kemudian ditunjuk Khalifah Abbasiyah Al-Muktafi untuk merancang dan memimpin rumah sakit terbesar di Baghdad."
        ]
      },
      {
        heading: "2. Metode Ilmiah Pemilihan Lokasi Rumah Sakit dan Observasi Klinis",
        paragraphs: [
          "Salah satu kisah kecerdasan empiris Al-Razi yang paling tersohor adalah cara ia memilih lokasi pembangunan Rumah Sakit Baghdad. Alih-alih memilih tempat secara acak, ia menggantung potongan daging segar di beberapa penjuru kota Baghdad, lalu mengamati lokasi mana yang dagingnya paling lambat membusuk. Ia menyimpulkan bahwa wilayah dengan udara terbersih dan paling sedikit penyebab pembusukan itulah lokasi paling sehat untuk mendirikan rumah sakit.",
          "Al-Razi memelopori penerapan kontrol kelompok pembanding (control group) dalam uji efektivitas terapi medis — misalnya saat meneliti penanganan pasien meningitis awal dengan membagi pasien menjadi kelompok yang diberi terapi dan kelompok tanpa terapi guna melihat perbandingan pemulihan secara objektif. Ia juga menjadi dokter pertama yang rutin mencatat riwayat perkembangan gejala pasien hari demi hari dalam rekam medis sistematis."
        ]
      },
      {
        heading: "3. Pembeda Cacar & Campak, Bapak Pediatri, dan Penemu Alkohol Medis",
        paragraphs: [
          "Karya Al-Razi berjudul 'Kitab al-Jadari wal-Hasbah' (Risalah tentang Cacar dan Campak) menjadi tonggak abadi ilmu penyakit menular. Untuk pertama kalinya dalam sejarah kedokteran, ia membedakan secara tepat dua penyakit yang selama berabad-abad dianggap sama tersebut berdasarkan gejala klinis, pola ruam kulit, serta fase demamnya. Buku ini dicetak ulang di Eropa puluhan kali hingga abad ke-19.",
          "Al-Razi juga menulis risalah khusus pertama mengenai penyakit anak-anak sehingga diakui sebagai perintis ilmu Pediatri. Selain itu, ia memperkenalkan penggunaan benang jahit bedah dari usus hewan (catgut), menggunakan gips dari bahan kalsium sulfat untuk patah tulang, menemukan penggunaan alkohol medis (etanol hasil penyulingan) sebagai antiseptik untuk membersihkan luka, serta meneliti alergi hidung akibat serbuk bunga mawar (allergic rhinitis)."
        ]
      },
      {
        heading: "4. Etika Profesi Kedokteran dan Akhir Pengabdian",
        paragraphs: [
          "Bagi Al-Razi, seorang dokter wajib bersikap penyayang, menjaga kerahasiaan pasien, mengobati orang fakir secara cuma-cuma, dan tidak pernah meresepkan racun atau obat penggugur kandungan. Ia merangkum prinsip ini dalam kitab etika medis 'Akhlaq ath-Thabib'. Ia juga menulis kitab 'Ath-Thibb ar-Ruhani' (Pengobatan Jiwa) yang membahas cara mengendalikan marah, kesedihan, dan keserakahan demi kesehatan mental.",
          "Menjelang akhir hayatnya, penglihatan Al-Razi mengalami kebutaan akibat katarak yang tidak sempat dioperasi karena usianya yang telah sepuh dan kondisi fisik yang lemah. Ia wafat di kota kelahirannya Rayy pada tahun 925 M dalam usia 60 tahun, meninggalkan lebih dari 200 karya tulis di bidang kedokteran, kimia, dan filsafat alam."
        ]
      }
    ],
    keyContributions: [
      "Membedakan secara klinis penyakit cacar (smallpox) dan campak (measles) untuk pertama kalinya dalam sejarah kedokteran.",
      "Memelopori cabang kedokteran anak (Pediatri) melalui monograf medis khusus pertama tentang penyakit anak.",
      "Menggunakan alkohol hasil distilasi sebagai antiseptik medis dan merintis penggunaan benang bedah dari usus hewan.",
      "Menginisiasi metode rekam medis klinis pasien dan teknik kelompok pembanding (control group) dalam uji pengobatan.",
      "Mengklasifikasikan bahan kimia secara sistematis menjadi kelompok mineral, nabati, dan hewani dalam kitab Sirr al-Asrar."
    ],
    works: [
      {
        title: "Kitab al-Hawi fi ath-Thibb (Continens Liber)",
        description: "Ensiklopedia kedokteran raksasa berisi 23 jilid yang merangkum catatan klinis seumur hidup Al-Razi dan membandingkan pendapat dokter Yunani, India, dan Arab secara kritis."
      },
      {
        title: "Kitab al-Jadari wal-Hasbah (On Smallpox and Measles)",
        description: "Monograf medis paling otoritatif yang menguraikan diagnosis pembeda, pencegahan, dan terapi klinis untuk penyakit cacar dan campak."
      },
      {
        title: "Kitab al-Manshuri fi ath-Thibb",
        description: "Buku ajar ringkas 10 bab tentang anatomi, kebersihan, diet sehat, penyakit kulit, kosmetika medis, dan bedah yang menjadi buku teks populer di universitas Eropa."
      },
      {
        title: "Ath-Thibb ar-Ruhani (Spiritual Physick)",
        description: "Risalah psikologi etis dan pengobatan kejiwaan untuk membebaskan manusia dari belenggu kecemasan, marah, dan kerakusan."
      }
    ]
  },
  {
    id: "al-battani",
    name: "Al-Battani (Albategnius)",
    fullName: "Abu Abdullah Muhammad bin Jabir bin Sinan Al-Raqqi Al-Harrani Ash-Shabi Al-Battani",
    arabicName: "محمد بن جابر بن سنان البتاني",
    title: "Pangeran Para Astronom & Penemu Dasar Trigonometri Modern",
    era: "Era Keemasan Abbasiyah (Raqqah, Suriah)",
    lifespan: "sekitar 858 – 929 M",
    birthPlace: "Harran, Mesopotamia Atas (Turki Tenggara)",
    field: "Astronomi Observasional, Trigonometri & Matematika",
    category: "Matematika & Astronomi",
    summary: "Astronom paling teliti di abad pertengahan yang menentukan panjang tahun matahari menjadi 365 hari 5 jam 46 menit 24 detik—hanya selisih dua menit dari perhitungan modern—dan merumuskan trigonometri berbasis sinus serta kotangen.",
    quote: {
      text: "Pengamatan langit tidak cukup bertumpu pada warisan naskah masa lalu; mata dan instrumen yang cermat harus terus menguji kesesuaian peredaran benda langit di setiap generasi.",
      context: "Pengantar Kitab az-Zij ash-Shabi'"
    },
    sections: [
      {
        heading: "1. Putra Kota Harran dan Empat Dekade Observasi Langit di Raqqah",
        paragraphs: [
          "Abu Abdullah Muhammad bin Jabir Al-Battani — dikenal di kalangan astronom Eropa sebagai 'Albategnius' — lahir sekitar tahun 858 M di kota Harran yang sejak lama terkenal dengan tradisi perbintangan dan perajin instrumen astronomi presisi. Ayahnya, Jabir bin Sinan, merupakan seorang ahli pembuat astrolab dan alat ukur langit ternama, sehingga Al-Battani tumbuh di lingkungan yang sangat akrab dengan geometri dan astronomi.",
          "Sebagian besar hidup ilmiahnya dihabiskan di kota Raqqah di tepi Sungai Efrat (Suriah). Selama lebih dari 42 tahun (antara tahun 877 hingga 918 M), Al-Battani membangun observatorium pribadi dan melakukan pengamatan langit secara berkesinambungan menggunakan kuadran dinding berukuran besar, bola armiler, penggaris paralaktik, dan jam matahari yang ia sempurnakan sendiri demi menekan kesalahan pembacaan sudut sekecil mungkin."
        ]
      },
      {
        heading: "2. Pengukuran Tahun Matahari & Koreksi Besar Terhadap Ptolemy",
        paragraphs: [
          "Ketelitian instrumen dan kedisiplinan observasi membuat Al-Battani berhasil merevisi banyak angka dasar astronomi Yunani karya Ptolemy dalam kitab Almagest. Pencapaian paling fenomenalnya adalah pengukuran presisi panjang satu tahun tropis (waktu bumi mengelilingi matahari dari ekuinoks ke ekuinoks) sebesar 365 hari, 5 jam, 46 menit, dan 24 detik — hanya terpaut sekitar 2 menit saja dari hasil pengukuran jam atom modern!",
          "Selain itu, ia menentukan sudut kemiringan sumbu ekliptika bumi (23° 35') secara sangat akurat, menemukan bahwa jarak terjauh matahari dari bumi (apogee) tidak statis melainkan bergerak perlahan seiring waktu, serta membuktikan kemungkinan terjadinya gerhana matahari cincin (annular solar eclipse) akibat perubahan diameter sudut matahari dan bulan."
        ]
      },
      {
        heading: "3. Menggantikan Geometri Tali Busur dengan Trigonometri Sinus",
        paragraphs: [
          "Sebelum era Al-Battani, astronom Yunani memakai metode perhitungan tali busur (chords) yang panjang dan melelahkan. Al-Battani mempopulerkan dan memperluas penggunaan rasio setengah tali busur atau 'al-jayb' (sinus), serta mengembangkan konsep kosinus, tangen, dan kotangen (yang ia sebut 'bayangan membalik' dan 'bayangan lurus' pada jam matahari).",
          "Ia merumuskan sejumlah identitas trigonometri penting — termasuk aturan sinus segitiga sferis dan hubungan tan(α) = sin(α)/cos(α) — sehingga perhitungan posisi bintang, tinggi matahari, dan penentuan arah kiblat menjadi jauh lebih cepat dan teliti. Karena jasanya ini, Al-Battani diakui sebagai salah satu perintis sejati ilmu trigonometri modern."
        ]
      },
      {
        heading: "4. Kitab az-Zij ash-Shabi' yang Mengilhami Renaisans Astronomi Eropa",
        paragraphs: [
          "Hasil observasi 40 tahun Al-Battani dirangkum dalam mahakarya 'Kitab az-Zij ash-Shabi'' yang disusun sekitar tahun 900 M, berisi katalog posisi 489 bintang dan tabel perhitungan kalender serta gerhana. Naskah ini diterjemahkan ke bahasa Latin pada abad ke-12 oleh Plato dari Tivoli dengan judul 'De Motu Stellarum' dan menjadi rujukan utama para astronom Eropa selama lebih dari lima ratus tahun.",
          "Dalam karya revolusionernya 'De Revolutionibus Orbium Coelestium' (1543), Nicolaus Copernicus mengutip data pengamatan Al-Battani hingga 23 kali, begitu pula Tycho Brahe, Johannes Kepler, dan Galileo Galilei. Al-Battani wafat pada tahun 929 M di dekat Samarra (Irak) dalam perjalanan pulang dari Baghdad setelah membela hak penduduk Raqqah atas persoalan pajak yang tidak adil. Untuk menghormatinya, sebuah kawah di permukaan Bulan dinamai Kawah Albategnius."
        ]
      }
    ],
    keyContributions: [
      "Menghitung panjang tahun matahari secara tepat (365 hari 5 jam 46 menit 24 detik) hanya berselisih dua menit dari standar modern.",
      "Mengembangkan dan memformalkan fungsi sinus, kosinus, tangen, dan kotangen dalam perhitungan astronomi bola.",
      "Membuktikan perubahan pergerakan titik apogee matahari serta kemungkinan terjadinya gerhana matahari cincin.",
      "Menyusun katalog astronomi dan tabel posisi 489 bintang dengan tingkat akurasi tertinggi di abad pertengahan.",
      "Menjadi rujukan langsung bagi Nicolaus Copernicus, Tycho Brahe, dan Johannes Kepler dalam revolusi astronomi Eropa."
    ],
    works: [
      {
        title: "Kitab az-Zij ash-Shabi'",
        description: "Buku induk astronomi matematis dan tabel benda langit paling berpengaruh yang memuat formula trigonometri, perhitungan gerhana, dan revisi astronomi Ptolemy."
      },
      {
        title: "Kitab Ma'rifat Mathali' al-Buruj",
        description: "Karya ilmiah mengenai cara menghitung titik terbit zodiak astronomis dan hubungan sudut koordinat benda langit."
      },
      {
        title: "Syarh al-Arba' Maqalat li Batlamyus",
        description: "Komentar ilmiah terhadap risalah klasik Tetrabiblos karya Ptolemy."
      }
    ]
  }
];
