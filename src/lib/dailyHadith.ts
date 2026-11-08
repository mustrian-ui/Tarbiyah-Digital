export interface DailyHadithItem {
  id: number;
  title: string;
  arabic: string;
  text: string;
  narrator: string;
  category: string;
  wisdom?: string;
}

export const dailyHadithsList: DailyHadithItem[] = [
  {
    id: 1,
    title: "Niat dan Keikhlasan Amal",
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    text: "Sesungguhnya setiap amalan tergantung pada niatnya, dan sesungguhnya setiap orang akan mendapatkan balasan sesuai dengan apa yang ia niatkan.",
    narrator: "HR. Bukhari No. 1 & Muslim No. 1907",
    category: "Keikhlasan",
    wisdom: "Setiap amalan ibadah dan kebaikan hendaknya senantiasa dimurnikan semata-mata karena Allah SWT."
  },
  {
    id: 2,
    title: "Manusia Paling Bermanfaat",
    arabic: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ",
    text: "Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya.",
    narrator: "HR. Ath-Thabrani dalam Mu'jam al-Ausath No. 5787, dihasankan Al-Albani",
    category: "Akhlak & Sosial",
    wisdom: "Kemanfaatan ilmu, tenaga, dan kepedulian sosial merupakan cerminan puncak kebaikan seorang mukmin."
  },
  {
    id: 3,
    title: "Senyum Adalah Sedekah",
    arabic: "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
    text: "Senyummu di hadapan saudaramu adalah bernilai sedekah bagimu.",
    narrator: "HR. Tirmidzi No. 1956, dishahihkan Al-Albani",
    category: "Akhlak & Ukhuwah",
    wisdom: "Kebaikan tidak selalu diukur dengan harta; wajah yang ramah dan menyenangkan hati sesama adalah ibadah."
  },
  {
    id: 4,
    title: "Menahan Amarah",
    arabic: "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ",
    text: "Bukanlah orang yang kuat itu yang pandai bergulat, tetapi orang yang kuat adalah orang yang mampu mengendalikan dirinya ketika sedang marah.",
    narrator: "HR. Bukhari No. 6114 & Muslim No. 2609",
    category: "Penyucian Jiwa",
    wisdom: "Kekuatan sejati seorang hamba terletak pada kemampuannya mengendalikan hawa nafsu dan amarahnya."
  },
  {
    id: 5,
    title: "Mencintai Sesama Saudara Muslim",
    arabic: "لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    text: "Tidak beriman salah seorang di antara kalian sampai ia mencintai untuk saudaranya apa yang ia cintai untuk dirinya sendiri.",
    narrator: "HR. Bukhari No. 13 & Muslim No. 45",
    category: "Ukhuwah Islamiyah",
    wisdom: "Kesempurnaan iman tercermin dari kerelaan berbagi kebaikan dan tidak merasa iri atas karunia sesama."
  },
  {
    id: 6,
    title: "Menjaga Lisan dan Tangan",
    arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
    text: "Seorang muslim sejati adalah orang yang mana kaum muslimin lainnya merasa selamat dan aman dari keburukan lisan dan tangannya.",
    narrator: "HR. Bukhari No. 10 & Muslim No. 40",
    category: "Akhlak",
    wisdom: "Menjaga kehormatan dan perasaan orang lain dari ucapan maupun tindakan zalim adalah ciri keislaman."
  },
  {
    id: 7,
    title: "Berkata Baik atau Diam",
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    text: "Barang siapa beriman kepada Allah dan hari akhir, hendaklah ia berkata yang baik atau (jika tidak bisa) hendaklah ia diam.",
    narrator: "HR. Bukhari No. 6018 & Muslim No. 47",
    category: "Adab Berbicara",
    wisdom: "Lisan adalah pintu keselamatan; menjaga ucapan menghindarkan manusia dari penyesalan di dunia dan akhirat."
  },
  {
    id: 8,
    title: "Keutamaan Menuntut Ilmu",
    arabic: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
    text: "Barang siapa menempuh suatu jalan untuk mencari ilmu, niscaya Allah akan mudahkan baginya jalan menuju surga.",
    narrator: "HR. Muslim No. 2699",
    category: "Ilmu & Tarbiyah",
    wisdom: "Ilmu syar'i dan kebaikan adalah lentera penuntun yang memudahkan langkah seorang hamba meraih ridha-Nya."
  },
  {
    id: 9,
    title: "Membersihkan Hati dari Hasad (Dengki)",
    arabic: "إِيَّاكُمْ وَالْحَسَدَ، فَإِنَّ الْحَسَدَ يَأْكُلُ الْحَسَنَاتِ كَمَا تَأْكُلُ النَّارُ الْحَطَبَ",
    text: "Jauhilah oleh kalian sifat hasad (dengki), karena sesungguhnya hasad itu memakan kebaikan sebagaimana api melahap kayu bakar.",
    narrator: "HR. Abu Dawud No. 4903",
    category: "Tazkiyatun Nafs",
    wisdom: "Iri dengki menghanguskan pahala amal shaleh; bersyukurlah atas nikmat Allah yang dianugerahkan kepada siapapun."
  },
  {
    id: 10,
    title: "Amalan yang Paling Dicintai Allah",
    arabic: "أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ",
    text: "Amalan yang paling dicintai oleh Allah adalah amalan yang dilakukan secara berkesinambungan (istiqamah) walaupun sedikit.",
    narrator: "HR. Bukhari No. 6464 & Muslim No. 783",
    category: "Istiqamah",
    wisdom: "Konsistensi dalam kebaikan jauh lebih bernilai di sisi Allah daripada amalan besar yang terputus-putus."
  },
  {
    id: 11,
    title: "Mempermudah Urusan Orang Lain",
    arabic: "مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ",
    text: "Barang siapa yang melapangkan satu kesulitan dunia seorang mukmin, maka Allah akan melapangkan baginya satu kesulitan dari kesulitan-kesulitan di hari kiamat.",
    narrator: "HR. Muslim No. 2699",
    category: "Sosial & Empati",
    wisdom: "Pertolongan Allah senantiasa bersama seorang hamba selama hamba tersebut menolong saudaranya."
  },
  {
    id: 12,
    title: "Menyambung Tali Silaturahmi",
    arabic: "مَنْ سَرَّهُ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ، وَأَنْ يُنْسَأَ لَهُ فِي أَثَرِهِ، فَلْيَصِلْ رَحِمَهُ",
    text: "Barang siapa yang ingin diluaskan rezekinya dan dipanjangkan umurnya (diberkahi jejak kebaikannya), hendaklah ia menyambung silaturahmi.",
    narrator: "HR. Bukhari No. 5986 & Muslim No. 2557",
    category: "Keluarga & Silaturahmi",
    wisdom: "Hubungan kekeluargaan dan persaudaraan yang terjaga mendatangkan keberkahan umur dan kelapangan rezeki."
  },
  {
    id: 13,
    title: "Menjaga Amanah dan Menepati Janji",
    arabic: "لاَ إِيمَانَ لِمَنْ لاَ أَمَانَةَ لَهُ، وَلاَ دِينَ لِمَنْ لاَ عَهْدَ لَهُ",
    text: "Tidak ada iman (yang sempurna) bagi orang yang tidak amanah, dan tidak ada agama bagi orang yang tidak menepati janjinya.",
    narrator: "HR. Ahmad No. 12386, dishahihkan Ibnu Hibban",
    category: "Integritas & Kejujuran",
    wisdom: "Kejujuran dan sikap amanah adalah cermin utama integritas keimanan seorang mukmin di hadapan Allah dan manusia."
  },
  {
    id: 14,
    title: "Sedekah Tidak Mengurangi Harta",
    arabic: "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ، وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلاَّ عِزًّا",
    text: "Harta tidak akan berkurang karena sedekah, dan Allah tidak menambah bagi seorang hamba yang memaafkan melainkan kemuliaan.",
    narrator: "HR. Muslim No. 2588",
    category: "Kedermawanan",
    wisdom: "Sedekah mendatangkan keberkahan yang berlipat ganda dan membersihkan jiwa dari ketamakan dunia."
  },
  {
    id: 15,
    title: "Dua Kenikmatan yang Sering Melalaikan",
    arabic: "نِعْمَتَانِ مَغْبُونٌ فِيهِمَا كَثِيرٌ مِنَ النَّاسِ: الصِّحَّةُ وَالْفَرَاغُ",
    text: "Dua kenikmatan yang kebanyakan manusia tertipu (merugi) padanya: kesehatan dan waktu luang.",
    narrator: "HR. Bukhari No. 6412",
    category: "Manajemen Waktu",
    wisdom: "Gunakanlah nikmat sehat sebelum datang masa sakit, dan manfaatkan waktu luang sebelum datang masa sibuk."
  },
  {
    id: 16,
    title: "Dunia Tempat Beramal, Akhirat Tempat Memetik",
    arabic: "كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ",
    text: "Jadilah engkau di dunia ini seakan-akan orang asing atau pengembara yang sekadar melintas di suatu jalan.",
    narrator: "HR. Bukhari No. 6416",
    category: "Zuhud & Akhirat",
    wisdom: "Dunia adalah persinggahan sementara; persiapkan bekal takwa sebanyak-banyaknya untuk perjalanan abadi."
  },
  {
    id: 17,
    title: "Menjaga Hak Bertetangga",
    arabic: "مَا زَالَ جِبْرِيلُ يُوصِينِي بِالْجَارِ حَتَّى ظَنَنْتُ أَنَّهُ سَيُوَرِّثُهُ",
    text: "Malaikat Jibril terus-menerus berwasiat kepadaku tentang hak berbuat baik kepada tetangga, hingga aku menduga tetangga akan mendapatkan bagian warisan.",
    narrator: "HR. Bukhari No. 6014 & Muslim No. 2624",
    category: "Adab Bertetangga",
    wisdom: "Memuliakan tetangga dan tidak mengganggu kenyamanan mereka adalah rukun akhlak mulia dalam Islam."
  },
  {
    id: 18,
    title: "Keutamaan Sabar dan Syukur",
    arabic: "عَجَبًا لأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ، إِنْ أَصَابَتْهُ سَرَّاءُ شَكَرَ فَكَانَ خَيْرًا لَهُ، وَإِنْ أَصَابَتْهُ ضَرَّاءُ صَبَرَ فَكَانَ خَيْرًا لَهُ",
    text: "Sungguh menakjubkan urusan seorang mukmin! Semua perkaranya adalah kebaikan: jika mendapat kelapangan ia bersyukur dan itu baik baginya, jika ditimpa kesempitan ia bersabar dan itu pun baik baginya.",
    narrator: "HR. Muslim No. 2999",
    category: "Sabar & Syukur",
    wisdom: "Hati seorang mukmin senantiasa berada dalam naungan ketenteraman di antara dua sayap: sayap syukur dan sayap sabar."
  },
  {
    id: 19,
    title: "Menebarkan Salam dan Kedamaian",
    arabic: "أَفْشُوا السَّلاَمَ، وَأَطْعِمُوا الطَّعَامَ، وَصِلُوا الأَرْحَامَ، وَصَلُّوا بِاللَّيْلِ وَالنَّاسُ نِيَامٌ، تَدْخُلُوا الْجَنَّةَ بِسَلاَمٍ",
    text: "Tebarkanlah salam, berikanlah makan kepada yang membutuhkan, sambunglah tali silaturahmi, dan shalatlah di waktu malam saat manusia terlelap, niscaya kalian masuk surga dengan selamat.",
    narrator: "HR. Tirmidzi No. 2485, dishahihkan Al-Albani",
    category: "Jalan Menuju Surga",
    wisdom: "Menyebarkan salam dan kasih sayang antar sesama melapangkan jalan meraih surga penuh kedamaian."
  },
  {
    id: 20,
    title: "Rasa Malu Adalah Sebagian dari Iman",
    arabic: "الْحَيَاءُ لاَ يَأْتِي إِلاَّ بِخَيْرٍ",
    text: "Rasa malu itu tidak mendatangkan melainkan semata-mata kebaikan.",
    narrator: "HR. Bukhari No. 6117 & Muslim No. 37",
    category: "Malu & Kesucian",
    wisdom: "Rasa malu di hadapan Allah SWT membentengi diri dari perbuatan tercela dan menjaga kehormatan hati."
  },
  {
    id: 21,
    title: "Keutamaan Berdoa",
    arabic: "الدُّعَاءُ هُوَ الْعِبَادَةُ",
    text: "Doa itu adalah intisari dari ibadah.",
    narrator: "HR. Abu Dawud No. 1479 & Tirmidzi No. 2969, dishahihkan Al-Albani",
    category: "Doa & Munajat",
    wisdom: "Berdoa menampakkan kerendahan diri seorang hamba di hadapan Keagungan dan Kekuasaan Sang Khalik."
  },
  {
    id: 22,
    title: "Menjaga Shalat Lima Waktu",
    arabic: "أَوَّلُ مَا يُحَاسَبُ بِهِ الْعَبْدُ يَوْمَ الْقِيَامَةِ مِنْ عَمَلِهِ صَلاَتُهُ",
    text: "Perkara pertama yang akan dihisab dari seorang hamba pada hari kiamat dari amalannya adalah shalatnya.",
    narrator: "HR. Tirmidzi No. 413 & An-Nasa'i No. 465, dishahihkan Al-Albani",
    category: "Pondasi Ibadah",
    wisdom: "Shalat adalah tiang agama; jika shalatnya baik maka beruntung dan selamatlah seluruh amalannya."
  },
  {
    id: 23,
    title: "Menjaga Amanat Lisan dari Dusta",
    arabic: "عَلَيْكُمْ بِالصِّدْقِ، فَإِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ، وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ",
    text: "Hendaklah kalian senantiasa bersikap jujur, karena kejujuran menuntun kepada kebaikan, dan kebaikan menuntun menuju surga.",
    narrator: "HR. Bukhari No. 6094 & Muslim No. 2607",
    category: "Kejujuran",
    wisdom: "Kejujuran menghadirkan ketenangan batin, sedangkan kedustaan selalu melahirkan keragu-raguan dan kecemasan."
  },
  {
    id: 24,
    title: "Keutamaan Orang yang Bertaubat",
    arabic: "التَّائِبُ مِنَ الذَّنْبِ كَمَنْ لاَ ذَنْبَ لَهُ",
    text: "Orang yang bertaubat dari dosa seperti orang yang tidak mempunyai dosa sama sekali.",
    narrator: "HR. Ibnu Majah No. 4250, dihasankan Al-Albani",
    category: "Taubat & Ampunan",
    wisdom: "Pintu rahmat Allah senantiasa terbuka lebar bagi setiap hamba yang menyadari kekhilafannya dan kembali kepada-Nya."
  },
  {
    id: 25,
    title: "Menyayangi yang Lebih Muda dan Menghormati yang Lebih Tua",
    arabic: "لَيْسَ مِنَّا مَنْ لَمْ يَرْحَمْ صَغِيرَنَا وَيَعْرِفْ شَرَفَ كَبِيرِنَا",
    text: "Bukan termasuk golongan kami orang yang tidak menyayangi yang lebih muda di antara kami dan tidak menghormati hak orang yang lebih tua di antara kami.",
    narrator: "HR. Abu Dawud No. 4943 & Tirmidzi No. 1919, dishahihkan Al-Albani",
    category: "Adab Sosial",
    wisdom: "Keharmonisan masyarakat dibangun di atas pilar kasih sayang kepada yang lemah dan penghormatan kepada orang tua."
  },
  {
    id: 26,
    title: "Takwa dan Akhlak yang Baik",
    arabic: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ",
    text: "Bertakwalah kepada Allah di mana pun engkau berada, iringilah keburukan dengan kebaikan niscaya akan menghapusnya, dan pergauililah manusia dengan akhlak yang terpuji.",
    narrator: "HR. Tirmidzi No. 1987, dihasankan oleh Imam Tirmidzi",
    category: "Taqwa & Akhlak",
    wisdom: "Tiga pilar kebahagiaan hamba: hubungan vertikal dengan Allah melalui takwa, perbaikan diri dari dosa, dan pergaulan mulia."
  },
  {
    id: 27,
    title: "Keutamaan Bershalawat kepada Nabi SAW",
    arabic: "مَنْ صَلَّى عَلَيَّ صَلاَةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا",
    text: "Barang siapa bershalawat kepadaku satu kali, maka Allah akan bershalawat (memberikan rahmat) kepadanya sepuluh kali lipat.",
    narrator: "HR. Muslim No. 408",
    category: "Shalawat & Cinta Rasul",
    wisdom: "Memperbanyak shalawat kepada Baginda Rasulullah SAW mendatangkan curahan rahmat dan syafaat di hari kiamat."
  },
  {
    id: 28,
    title: "Membersihkan Diri dari Sifat Sombong",
    arabic: "لاَ يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ",
    text: "Tidak akan masuk surga orang yang di dalam hatinya terdapat seberat biji sawi dari kesombongan.",
    narrator: "HR. Muslim No. 91",
    category: "Tawadhu'",
    wisdom: "Kesombongan adalah menolak kebenaran dan merendahkan sesama manusia; tawadhu' adalah pakaian orang beriman."
  },
  {
    id: 29,
    title: "Membantu Mengentaskan Kesulitan Teman",
    arabic: "وَاللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ",
    text: "Dan Allah senantiasa menolong hamba-Nya selama hamba tersebut suka menolong saudaranya.",
    narrator: "HR. Muslim No. 2699",
    category: "Tolong Menolong",
    wisdom: "Tangan yang suka memberi pertolongan tidak akan pernah ditinggalkan oleh perlindungan dan pertolongan Allah SWT."
  },
  {
    id: 30,
    title: "Menjaga Kemurnian Makanan dan Rezeki",
    arabic: "إِنَّ اللَّهَ طَيِّبٌ لاَ يَقْبَلُ إِلاَّ طَيِّبًا",
    text: "Sesungguhnya Allah itu Maha Thayyib (Maha Baik) dan Dia tidak menerima kecuali sesuatu yang baik (halal lagi berkah).",
    narrator: "HR. Muslim No. 1015",
    category: "Rezeki Halal",
    wisdom: "Rezeki yang halal menjadi sebab mustajabnya doa dan bertumbuhnya ketaatan dalam anggota tubuh."
  },
  {
    id: 31,
    title: "Keutamaan Membaca Al-Qur'an",
    arabic: "اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لأَصْحَابِهِ",
    text: "Bacalah Al-Qur'an, karena sesungguhnya ia akan datang pada hari kiamat sebagai pemberi syafaat bagi para pembacanya.",
    narrator: "HR. Muslim No. 804",
    category: "Kemuliaan Al-Qur'an",
    wisdom: "Al-Qur'an adalah penyejuk hati di dunia dan pembela setia yang menerangi kegelapan alam kubur serta hisab."
  }
];

/**
 * Mendapatkan hadits harian otomatis berdasarkan tanggal kalender.
 * Berputar secara deterministik setiap hari (pukul 00:00).
 */
export function getDailyHadith(date: Date = new Date()): DailyHadithItem {
  // Hitung selisih hari dari epoch kalender untuk variasi harian yang stabil
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  
  // Rumus kombinasi hari dalam tahun + offset tahun
  const startOfYear = new Date(year, 0, 1);
  const dayOfYear = Math.floor((new Date(year, month, day).getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));
  
  const hash = Math.abs(year * 366 + dayOfYear);
  const index = hash % dailyHadithsList.length;
  
  return dailyHadithsList[index];
}
