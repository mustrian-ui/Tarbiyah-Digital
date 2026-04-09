export interface Hadith {
  number: number;
  title: string;
  arabic: string;
  translation: string;
  explanation: string;
}

export const arbainData: Hadith[] = [
  {
    number: 1,
    title: "Niat dan Ikhlas",
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوِ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ.",
    translation: "Sesungguhnya setiap perbuatan tergantung niatnya. Dan sesungguhnya setiap orang (akan dibalas) berdasarkan apa yang dia niatkan. Siapa yang hijrahnya karena (ingin mendapatkan keridhaan) Allah dan Rasul-Nya, maka hijrahnya kepada (keridhaan) Allah dan Rasul-Nya. Dan siapa yang hijrahnya karena dunia yang dikehendakinya atau karena wanita yang ingin dinikahinya, maka hijrahnya (akan bernilai) sesuai dengan tujuan hijrahnya.",
    explanation: "Hadits ini menjelaskan bahwa nilai suatu amal sangat bergantung pada niat pelakunya. Ikhlas karena Allah adalah syarat diterimanya amal."
  },
  {
    number: 2,
    title: "Islam, Iman, dan Ihsan",
    arabic: "بَيْنَمَا نَحْنُ جُلُوْسٌ عِنْدَ رَسُوْلِ اللهِ صلى الله عليه وسلم ذَاتَ يَوْمٍ إِذْ طَلَعَ عَلَيْنَا رَجُلٌ شَدِيْدُ بَيَاضِ الثِّيَابِ شَدِيْدُ سَوَادِ الشَّعْرِ، لاَ يُرَى عَلَيْهِ أَثَرُ السَّفَرِ، وَلاَ يَعْرِفُهُ مِنَّا أَحَدٌ، حَتَّى جَلَسَ إِلَى النَّبِيِّ صلى الله عليه وسلم، فَأَسْنَدَ رُكْبَتَيْهِ إِلَى رُكْبَتَيْهِ، وَوَضَعَ كَفَّيْهِ عَلَى فَخِذَيْهِ، وَقَالَ: يَا مُحَمَّدُ أَخْبِرْنِي عَنِ اْلإِسْلاَمِ...",
    translation: "Ketika kami sedang duduk bersama Rasulullah SAW pada suatu hari, tiba-tiba muncul seorang laki-laki yang berpakaian sangat putih dan rambutnya sangat hitam, tidak terlihat padanya bekas perjalanan jauh dan tidak ada seorang pun di antara kami yang mengenalnya. Ia duduk di hadapan Nabi SAW lalu menyandarkan kedua lututnya ke lutut Nabi dan meletakkan kedua telapak tangannya di atas paha Nabi, kemudian berkata: 'Wahai Muhammad, beritahukan kepadaku tentang Islam'...",
    explanation: "Hadits ini dikenal sebagai Hadits Jibril yang merangkum seluruh ajaran agama Islam dalam tiga tingkatan: Islam (amal lahiriyah), Iman (keyakinan batin), dan Ihsan (kesadaran akan pengawasan Allah)."
  },
  {
    number: 3,
    title: "Rukun Islam",
    arabic: "بُنِيَ الإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلَاةِ، وَإِيتَاءِ الزَّكَاةِ، وَحَجِّ الْبَيْتِ، وَصَوْمِ رَمَضَانَ.",
    translation: "Islam dibangun di atas lima perkara: bersaksi bahwa tidak ada sesembahan yang berhak disembah selain Allah dan Muhammad adalah utusan Allah, mendirikan shalat, menunaikan zakat, haji ke Baitullah, dan puasa Ramadhan.",
    explanation: "Hadits ini menjelaskan lima pilar utama yang menyusun bangunan Islam."
  },
  {
    number: 4,
    title: "Penciptaan Manusia dan Takdir",
    arabic: "إِنَّ أَحَدَكُمْ يُجْمَعُ خَلْقُهُ فِي بَطْنِ أُمِّهِ أَرْبَعِينَ يَوْمًا نُطْفَةً، ثُمَّ يَكُونُ عَلَقَةً مِثْلَ ذَلِكَ، ثُمَّ يَكُونُ مُضْغَةً مِثْلَ ذَلِكَ، ثُمَّ يُرْسَلُ إِلَيْهِ الْمَلَكُ فَيَنْفُخُ فِيهِ الرُّوحَ، وَيُؤْمَرُ بِأَرْبَعِ كَلِمَاتٍ: بِكَتْبِ رِزْقِهِ، وَأَجَلِهِ، وَعَمَلِهِ، وَشَقِيٌّ أَوْ سَعِيدٌ...",
    translation: "Sesungguhnya setiap kalian dikumpulkan penciptaannya dalam rahim ibunya selama empat puluh hari berupa nutfah (sperma), kemudian menjadi 'alaqah (segumpal darah) selama itu pula, kemudian menjadi mudghah (segumpal daging) selama itu pula, kemudian diutuslah malaikat kepadanya lalu meniupkan ruh padanya dan diperintahkan untuk menuliskan empat hal: rizkinya, ajalnya, amalnya, dan apakah dia celaka atau bahagia...",
    explanation: "Hadits ini menjelaskan proses perkembangan janin dan penetapan takdir setiap manusia sejak dalam kandungan."
  },
  {
    number: 5,
    title: "Larangan Bid'ah",
    arabic: "مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ مِنْهُ فَهُوَ رَدٌّ.",
    translation: "Siapa yang mengada-adakan dalam urusan (agama) kami ini sesuatu yang bukan bagian darinya, maka amalan tersebut tertolak.",
    explanation: "Hadits ini menegaskan pentingnya mengikuti tuntunan syariat dan menjauhi perkara baru dalam agama yang tidak memiliki dasar."
  },
  {
    number: 6,
    title: "Meninggalkan Syubhat",
    arabic: "إِنَّ الْحَلَالَ بَيِّنٌ وَإِنَّ الْحَرَامَ بَيِّنٌ وَبَيْنَهُمَا مُشْتَبِهَاتٌ لَا يَعْلَمُهُنَّ كَثِيرٌ مِنَ النَّاسِ، فَمَنِ اتَّقَى الشُّبُهَاتِ اسْتَبْرَأَ لِدِينِهِ وَعِرْضِهِ...",
    translation: "Sesungguhnya yang halal itu jelas dan yang haram itu jelas. Di antara keduanya terdapat perkara-perkara syubhat (samar) yang tidak diketahui oleh banyak orang. Siapa yang menjauhi syubhat, maka ia telah menyelamatkan agama dan kehormatannya...",
    explanation: "Hadits ini mengajarkan sikap wara' (berhati-hati) dengan meninggalkan perkara yang meragukan demi menjaga kesucian agama."
  },
  {
    number: 7,
    title: "Agama adalah Nasihat",
    arabic: "الدِّينُ النَّصِيحَةُ. قُلْنَا: لِمَنْ؟ قَالَ: لِلَّهِ، وَلِكِتَابِهِ، وَلِرَسُولِهِ، وَلِأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ.",
    translation: "Agama itu adalah nasihat. Kami bertanya: 'Untuk siapa?' Beliau bersabda: 'Untuk Allah, Kitab-Nya, Rasul-Nya, para pemimpin kaum muslimin, dan orang-orang awam di antara mereka.'",
    explanation: "Nasihat dalam hadits ini bermakna ketulusan dan loyalitas dalam menjalankan kewajiban terhadap Allah dan sesama."
  },
  {
    number: 8,
    title: "Kehormatan Muslim",
    arabic: "أُمِرْتُ أَنْ أُقَاتِلَ النَّاسَ حَتَّى يَشْهَدُوا أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَيُقِيمُوا الصَّلَاةَ، وَيُؤْتُوا الزَّكَاةَ...",
    translation: "Aku diperintahkan untuk memerangi manusia sampai mereka bersaksi bahwa tidak ada sesembahan yang berhak disembah selain Allah dan Muhammad adalah utusan Allah, mendirikan shalat, dan menunaikan zakat...",
    explanation: "Hadits ini menjelaskan tentang perlindungan nyawa dan harta bagi mereka yang telah memeluk Islam."
  },
  {
    number: 9,
    title: "Melaksanakan Perintah Sesuai Kemampuan",
    arabic: "مَا نَهَيْتُكُمْ عَنْهُ فَاجْتَنِبُوهُ، وَمَا أَمَرْتُكُمْ بِهِ فَأْتُوا مِنْهُ مَا اسْتَطَعْتُمْ...",
    translation: "Apa yang aku larang bagi kalian maka jauhilah, dan apa yang aku perintahkan kepada kalian maka kerjakanlah semampu kalian...",
    explanation: "Islam adalah agama yang mudah. Larangan harus ditinggalkan sepenuhnya, sedangkan perintah dikerjakan sesuai batas kemampuan."
  },
  {
    number: 10,
    title: "Makan dari Rezeki yang Halal",
    arabic: "إِنَّ اللَّهَ طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا، وَإِنَّ اللَّهَ أَمَرَ الْمُؤْمِنِينَ بِمَا أَمَرَ بِهِ الْمُرْسَلِينَ...",
    translation: "Sesungguhnya Allah itu baik dan tidak menerima kecuali yang baik. Dan sesungguhnya Allah memerintahkan orang-orang mukmin dengan apa yang Dia perintahkan kepada para Rasul...",
    explanation: "Hadits ini menekankan pentingnya mengonsumsi harta halal agar doa dikabulkan oleh Allah."
  },
  {
    number: 11,
    title: "Meninggalkan Keragu-raguan",
    arabic: "دَعْ مَا يَرِيْبُكَ إِلَى مَا لاَ يَرِيْبُكَ.",
    translation: "Tinggalkanlah apa yang meragukanmu menuju apa yang tidak meragukanmu.",
    explanation: "Prinsip ketenangan batin adalah dengan memilih perkara yang meyakinkan dan meninggalkan yang syubhat."
  },
  {
    number: 12,
    title: "Meninggalkan Hal yang Tidak Bermanfaat",
    arabic: "مِنْ حُسْنِ إِسْلاَمِ الْمَرْءِ تَرْكُهُ مَا لاَ يَعْنِيْهِ.",
    translation: "Di antara tanda baiknya Islam seseorang adalah ia meninggalkan hal yang tidak bermanfaat baginya.",
    explanation: "Seorang muslim yang baik fokus pada hal-hal yang membawa manfaat bagi dunia dan akhiratnya."
  },
  {
    number: 13,
    title: "Mencintai Saudara",
    arabic: "لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيْهِ مَا يُحِبُّ لِنَفْسِهِ.",
    translation: "Tidak sempurna iman salah seorang di antara kalian sampai ia mencintai untuk saudaranya apa yang ia cintai untuk dirinya sendiri.",
    explanation: "Hadits ini mengajarkan kasih sayang dan empati antar sesama muslim."
  },
  {
    number: 14,
    title: "Larangan Menumpahkan Darah",
    arabic: "لاَ يَحِلُّ دَمُ امْرِئٍ مُسْلِمٍ إِلاَّ بِإِحْدَى ثَلاَثٍ: الثَّيِّبُ الزَّانِي، وَالنَّفْسُ بِالنَّفْسِ، وَالتَّارِكُ لِدِيْنِهِ الْمُفَارِقُ لِلْجَمَاعَةِ.",
    translation: "Tidak halal darah seorang muslim kecuali karena salah satu dari tiga hal: orang tua yang berzina, jiwa dengan jiwa (qishash), dan orang yang meninggalkan agamanya (murtad) lagi memisahkan diri dari jamaah.",
    explanation: "Hadits ini menjelaskan tentang kesucian nyawa seorang muslim dan pengecualian hukumannya."
  },
  {
    number: 15,
    title: "Berkata Baik atau Diam",
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ...",
    translation: "Siapa yang beriman kepada Allah dan hari akhir, hendaklah ia berkata baik atau diam...",
    explanation: "Menjaga lisan dan memuliakan tamu serta tetangga adalah bagian dari konsekuensi iman."
  },
  {
    number: 16,
    title: "Larangan Marah",
    arabic: "لاَ تَغْضَبْ.",
    translation: "Janganlah engkau marah.",
    explanation: "Rasulullah mengulang nasihat ini berkali-kali, menunjukkan bahwa menahan amarah adalah kunci kebaikan akhlak."
  },
  {
    number: 17,
    title: "Berbuat Baik dalam Segala Hal",
    arabic: "إِنَّ اللَّهَ كَتَبَ الإِحْسَانَ عَلَى كُلِّ شَيْءٍ، فَإِذَا قَتَلْتُمْ فَأَحْسِنُوا الْقِتْلَةَ، وَإِذَا ذَبَحْتُمْ فَأَحْسِنُوا الذِّبْحَةَ...",
    translation: "Sesungguhnya Allah mewajibkan berbuat baik (ihsan) atas segala sesuatu. Jika kalian membunuh maka bunuhlah dengan cara yang baik, dan jika kalian menyembelih maka sembelihlah dengan cara yang baik...",
    explanation: "Ihsan harus diterapkan bahkan dalam urusan menyembelih hewan."
  },
  {
    number: 18,
    title: "Bertaqwa di Mana Saja",
    arabic: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ.",
    translation: "Bertaqwalah kepada Allah di mana saja engkau berada, dan ikutilah keburukan dengan kebaikan niscaya kebaikan itu akan menghapusnya, dan pergaulilah manusia dengan akhlak yang baik.",
    explanation: "Tiga wasiat utama: hubungan dengan Allah (taqwa), hubungan dengan diri sendiri (taubat), dan hubungan dengan manusia (akhlak)."
  },
  {
    number: 19,
    title: "Meminta Pertolongan Hanya kepada Allah",
    arabic: "يَا غُلاَمُ إِنِّي أُعَلِّمُكَ كَلِمَاتٍ: احْفَظِ اللَّهَ يَحْفَظْكَ، احْفَظِ اللَّهَ تَجِدْهُ تُجَاهَكَ، إِذَا سَأَلْتَ فَاسْأَلِ اللَّهَ...",
    translation: "Wahai anak muda, aku akan mengajarkanmu beberapa kalimat: Jagalah Allah niscaya Dia akan menjagamu. Jagalah Allah niscaya engkau akan mendapati-Nya di hadapanmu. Jika engkau meminta, mintalah kepada Allah...",
    explanation: "Pelajaran tentang tauhid, ketergantungan penuh kepada Allah, dan keyakinan terhadap takdir."
  },
  {
    number: 20,
    title: "Malu Bagian dari Iman",
    arabic: "إِنَّ مِمَّا أَدْرَكَ النَّاسُ مِنْ كَلاَمِ النُّبُوَّةِ الأُولَى: إِذَا لَمْ تَسْتَحِ فَاصْنَعْ مَا شِئْتَ.",
    translation: "Sesungguhnya di antara perkataan nabi-nabi terdahulu yang masih diingat orang adalah: 'Jika engkau tidak malu, maka berbuatlah sesukamu.'",
    explanation: "Rasa malu adalah pengendali perilaku manusia. Tanpa rasa malu, seseorang akan melakukan apa saja tanpa beban."
  },
  {
    number: 21,
    title: "Istiqomah",
    arabic: "قُلْ: آمَنْتُ بِاللَّهِ، ثُمَّ اسْتَقِمْ.",
    translation: "Katakanlah: 'Aku beriman kepada Allah', kemudian istiqomahlah.",
    explanation: "Inti ajaran Islam adalah mengikrarkan iman dan teguh menjalankannya secara konsisten."
  },
  {
    number: 22,
    title: "Jalan Menuju Surga",
    arabic: "أَرَأَيْتَ إِذَا صَلَّيْتُ الْمَكْتُوبَاتِ، وَصُمْتُ رَمَضَانَ، وَأَحْلَلْتُ الْحَلاَلَ، وَحَرَّمْتُ الْحَرَامَ، وَلَمْ أَزِدْ عَلَى ذَلِكَ شَيْئًا، أَأَدْخُلُ الْجَنَّةَ؟ قَالَ: نَعَمْ.",
    translation: "Bagaimana pendapatmu jika aku shalat fardhu, puasa Ramadhan, menghalalkan yang halal, mengharamkan yang haram, dan aku tidak menambah sedikit pun atas hal itu, apakah aku akan masuk surga? Beliau bersabda: 'Ya.'",
    explanation: "Melaksanakan kewajiban dan meninggalkan larangan adalah syarat minimal masuk surga."
  },
  {
    number: 23,
    title: "Kesucian dan Keutamaan Amal",
    arabic: "الطُّهُورُ شَطْرُ الإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلأُ الْمِيزَانَ، وَسُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ تَمْلآنِ مَا بَيْنَ السَّمَوَاتِ وَالأَرْضِ...",
    translation: "Kesucian itu separuh dari iman, ucapan Alhamdulillah memenuhi timbangan, Subhanallah walhamdulillah memenuhi ruang antara langit dan bumi...",
    explanation: "Hadits ini menjelaskan berbagai macam amal kebaikan dan pahalanya yang luar biasa."
  },
  {
    number: 24,
    title: "Larangan Berbuat Zalim",
    arabic: "يَا عِبَادِي إِنِّي حَرَّمْتُ الظُّلْمَ عَلَى نَفْسِي وَجَعَلْتُهُ بَيْنَكُمْ مُحَرَّمًا فَلاَ تَظَالَمُوا...",
    translation: "Wahai hamba-Ku, sesungguhnya Aku mengharamkan kezaliman atas diri-Ku dan Aku menjadikannya haram di antara kalian, maka janganlah kalian saling menzalimi...",
    explanation: "Hadits Qudsi yang sangat agung tentang keadilan Allah dan larangan berbuat zalim."
  },
  {
    number: 25,
    title: "Sedekah Tidak Harus dengan Harta",
    arabic: "إِنَّ بِكُلِّ تَسْبِيحَةٍ صَدَقَةً، وَكُلِّ تَكْبِيرَةٍ صَدَقَةً، وَكُلِّ تَحْمِيدَةٍ صَدَقَةً، وَكُلِّ تَهْلِيلَةٍ صَدَقَةً...",
    translation: "Sesungguhnya setiap tasbih adalah sedekah, setiap takbir adalah sedekah, setiap tahmid adalah sedekah, dan setiap tahlil adalah sedekah...",
    explanation: "Setiap amal kebaikan dan zikir bernilai sedekah di sisi Allah."
  },
  {
    number: 26,
    title: "Macam-macam Sedekah",
    arabic: "كُلُّ سُلاَمَى مِنَ النَّاسِ عَلَيْهِ صَدَقَةٌ كُلَّ يَوْمٍ تَطْلُعُ فِيهِ الشَّمْسُ: تَعْدِلُ بَيْنَ اثْنَيْنِ صَدَقَةٌ...",
    translation: "Setiap persendian manusia wajib dikeluarkan sedekahnya setiap hari selama matahari masih terbit: mendamaikan dua orang yang berselisih adalah sedekah...",
    explanation: "Sedekah harian sebagai bentuk syukur atas kesehatan tubuh dan persendian."
  },
  {
    number: 27,
    title: "Definisi Kebaikan dan Dosa",
    arabic: "الْبِرُّ حُسْنُ الْخُلُقِ، وَالإِثْمُ مَا حَاكَ فِي نَفْسِكَ وَكَرِهْتَ أَنْ يَطَّلِعَ عَلَيْهِ النَّاسُ.",
    translation: "Kebaikan adalah akhlak yang baik, sedangkan dosa adalah apa yang meragukan jiwamu dan engkau benci jika orang lain mengetahuinya.",
    explanation: "Hati nurani seorang mukmin adalah kompas untuk mengenali kebenaran dan dosa."
  },
  {
    number: 28,
    title: "Berpegang Teguh pada Sunnah",
    arabic: "أُوصِيكُمْ بِتَقْوَى اللَّهِ وَالسَّمْعِ وَالطَّاعَةِ وَإِنْ تَأَمَّرَ عَلَيْكُمْ عَبْدٌ... فَعَلَيْكُمْ بِسُنَّتِي وَسُنَّةِ الْخُلَفَاءِ الرَّاشِدِينَ...",
    translation: "Aku wasiatkan kalian untuk bertaqwa kepada Allah, mendengar dan taat walaupun yang memimpin kalian adalah seorang budak... maka berpegang teguhlah pada sunnahku dan sunnah Khulafaur Rasyidin...",
    explanation: "Wasiat Nabi untuk menghadapi perselisihan dengan kembali kepada Sunnah."
  },
  {
    number: 29,
    title: "Pintu-pintu Kebaikan",
    arabic: "أَلاَ أَدُلُّكَ عَلَى أَبْوَابِ الْخَيْرِ؟ الصَّوْمُ جُنَّةٌ، وَالصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ كَمَا يُطْفِئُ الْمَاءُ النَّارَ...",
    translation: "Maukah aku tunjukkan kepadamu pintu-pintu kebaikan? Puasa adalah perisai, sedekah menghapus kesalahan sebagaimana air memadamkan api...",
    explanation: "Penjelasan tentang amal-amal utama yang dapat menghapus dosa dan meninggikan derajat."
  },
  {
    number: 30,
    title: "Batasan-batasan Allah",
    arabic: "إِنَّ اللَّهَ تَعَالَى فَرَضَ فَرَائِضَ فَلاَ تُضَيِّعُوهَا، وَحَدَّ حُدُودًا فَلاَ تَعْتَدُوهَا...",
    translation: "Sesungguhnya Allah Ta'ala telah mewajibkan beberapa kewajiban maka janganlah kalian menyia-nyiakannya, dan Dia telah menetapkan batasan-batasan maka janganlah kalian melampauinya...",
    explanation: "Pentingnya menjaga syariat Allah dengan tidak meremehkan kewajiban dan tidak melanggar larangan."
  },
  {
    number: 31,
    title: "Zuhud",
    arabic: "ازْهَدْ فِي الدُّنْيَا يُحِبَّكَ اللَّهُ، وَازْهَدْ فِيمَا عِنْدَ النَّاسِ يُحِبَّكَ النَّاسُ.",
    translation: "Zuhudlah terhadap dunia niscaya Allah akan mencintaimu, dan zuhudlah terhadap apa yang ada pada manusia niscaya manusia akan mencintaimu.",
    explanation: "Zuhud bukan berarti miskin, tapi tidak menjadikan dunia sebagai tujuan utama di hati."
  },
  {
    number: 32,
    title: "Larangan Berbuat Bahaya",
    arabic: "لاَ ضَرَرَ وَلاَ ضِرَارَ.",
    translation: "Tidak boleh berbuat bahaya (pada diri sendiri) dan tidak boleh memberikan bahaya (pada orang lain).",
    explanation: "Kaidah fiqih yang agung untuk mencegah segala bentuk kemudharatan."
  },
  {
    number: 33,
    title: "Tuduhan dan Bukti",
    arabic: "لَوْ يُعْطَى النَّاسُ بِدَعْوَاهُمْ لادَّعَى رِجَالٌ أَمْوَالَ قَوْمٍ وَدِمَاءَهُمْ، وَلَكِنِ الْبَيِّنَةُ عَلَى الْمُدَّعِي وَالْيَمِينُ عَلَى مَنْ أَنْكَرَ.",
    translation: "Seandainya setiap manusia diberikan apa yang mereka klaim, niscaya orang-orang akan mengklaim harta dan darah kaum lain. Namun bukti wajib bagi penuduh dan sumpah bagi yang mengingkari.",
    explanation: "Prinsip keadilan dalam hukum Islam untuk menjaga hak setiap orang."
  },
  {
    number: 34,
    title: "Mencegah Kemungkaran",
    arabic: "مَنْ رَأَى مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ بِيَدِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِلِسَانِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِقَلْبِهِ...",
    translation: "Siapa di antara kalian melihat kemungkaran, maka ubahlah dengan tangannya. Jika tidak mampu, maka dengan lisannya. Jika tidak mampu, maka dengan hatinya...",
    explanation: "Kewajiban amar ma'ruf nahi mungkar sesuai dengan tingkatan kemampuan."
  },
  {
    number: 35,
    title: "Persaudaraan Islam",
    arabic: "لاَ تَحَاسَدُوا، وَلاَ تَنَاجَشُوا، وَلاَ تَبَاغَضُوا، وَلاَ تَدَابَرُوا... كُونُوا عِبَادَ اللَّهِ إِخْوَانًا.",
    translation: "Janganlah kalian saling mendengki, janganlah saling menipu, janganlah saling membenci, janganlah saling membelakangi... jadilah kalian hamba-hamba Allah yang bersaudara.",
    explanation: "Larangan terhadap penyakit hati yang dapat merusak ukhuwah islamiyah."
  },
  {
    number: 36,
    title: "Membantu Kesulitan Muslim",
    arabic: "مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ...",
    translation: "Siapa yang melepaskan satu kesusahan dunia dari seorang mukmin, Allah akan melepaskan satu kesusahannya di hari kiamat...",
    explanation: "Balasan Allah sesuai dengan jenis amal yang dilakukan kepada sesama."
  },
  {
    number: 37,
    title: "Kebaikan yang Berlipat Ganda",
    arabic: "إِنَّ اللَّهَ كَتَبَ الْحَسَنَاتِ وَالسَّيِّئَاتِ ثُمَّ بَيَّنَ ذَلِكَ: فَمَنْ هَمَّ بِحَسَنَةٍ فَلَمْ يَعْمَلْهَا كَتَبَهَا اللَّهُ عِنْدَهُ حَسَنَةً كَامِلَةً...",
    translation: "Sesungguhnya Allah menulis kebaikan dan keburukan kemudian menjelaskannya: Siapa yang berniat melakukan kebaikan lalu tidak mengerjakannya, Allah menulisnya sebagai satu kebaikan sempurna...",
    explanation: "Luasnya rahmat Allah dalam melipatgandakan pahala kebaikan."
  },
  {
    number: 38,
    title: "Wali Allah",
    arabic: "مَنْ عَادَى لِي وَلِيًّا فَقَدْ آذَنْتُهُ بِالْحَرْبِ، وَمَا تَقَرَّبَ إِلَيَّ عَبْدِي بِشَيْءٍ أَحَبَّ إِلَيَّ مِمَّا افْتَرَضْتُ عَلَيْهِ...",
    translation: "Siapa yang memusuhi wali-Ku, maka Aku umumkan perang kepadanya. Tidaklah hamba-Ku mendekatkan diri kepada-Ku dengan sesuatu yang lebih Aku cintai daripada apa yang Aku wajibkan kepadanya...",
    explanation: "Cara menjadi kekasih Allah adalah dengan menjalankan kewajiban dan memperbanyak amalan sunnah."
  },
  {
    number: 39,
    title: "Kekhilafan yang Diampuni",
    arabic: "إِنَّ اللَّهَ تَجَاوَزَ لِي عَنْ أُمَّتِي الْخَطَأَ وَالنِّسْيَانَ وَمَا اسْتُكْرِهُوا عَلَيْهِ.",
    translation: "Sesungguhnya Allah mengampuni untukku dari umatku: kekeliruan (tidak sengaja), lupa, dan apa yang dipaksakan kepada mereka.",
    explanation: "Bentuk kemudahan dalam Islam bagi mereka yang melakukan kesalahan tanpa unsur kesengajaan."
  },
  {
    number: 40,
    title: "Hiduplah Seperti Pengembara",
    arabic: "كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ.",
    translation: "Jadilah engkau di dunia ini seakan-akan orang asing atau pengembara.",
    explanation: "Nasihat untuk tidak terlena dengan dunia dan selalu bersiap menghadapi kematian."
  },
  {
    number: 41,
    title: "Menundukkan Hawa Nafsu",
    arabic: "لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يَكُونَ هَوَاهُ تَبَعًا لِمَا جِئْتُ بِهِ.",
    translation: "Tidak sempurna iman salah seorang di antara kalian sampai hawa nafsunya mengikuti apa yang aku bawa (ajaran Islam).",
    explanation: "Iman yang sejati adalah ketika keinginan pribadi tunduk pada syariat Allah."
  },
  {
    number: 42,
    title: "Luasnya Ampunan Allah",
    arabic: "يَا ابْنَ آدَمَ إِنَّكَ مَا دَعَوْتَنِي وَرَجَوْتَنِي غَفَرْتُ لَكَ عَلَى مَا كَانَ فِيكَ وَلاَ أُبَالِي...",
    translation: "Wahai anak Adam, sesungguhnya selama engkau berdoa kepada-Ku dan berharap kepada-Ku, Aku ampuni dosa-dosamu dan Aku tidak peduli...",
    explanation: "Hadits penutup yang memberikan harapan besar akan luasnya ampunan Allah selama manusia mau bertaubat."
  }
];
