export interface DoaItem {
  id: string;
  title: string;
  arabic: string;
  latin: string;
  translation: string;
  source: string;
  category: string;
}

export interface DoaCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export const DOA_CATEGORIES: DoaCategory[] = [
  {
    "id": "Dzikir Pagi & Sore",
    "name": "Dzikir Pagi & Sore",
    "icon": "fas fa-cloud-sun",
    "count": 10
  },
  {
    "id": "Aktivitas Sehari-hari",
    "name": "Aktivitas Sehari-hari",
    "icon": "fas fa-walking",
    "count": 8
  },
  {
    "id": "Rumah & Keluarga",
    "name": "Rumah & Keluarga",
    "icon": "fas fa-home",
    "count": 8
  },
  {
    "id": "Ilmu & Pekerjaan",
    "name": "Ilmu & Pekerjaan",
    "icon": "fas fa-briefcase",
    "count": 7
  },
  {
    "id": "Kesehatan & Keselamatan",
    "name": "Kesehatan & Keselamatan",
    "icon": "fas fa-heartbeat",
    "count": 7
  },
  {
    "id": "Perjalanan",
    "name": "Perjalanan",
    "icon": "fas fa-plane",
    "count": 7
  },
  {
    "id": "Lain-Lain",
    "name": "Lain-Lain",
    "icon": "fas fa-asterisk",
    "count": 3
  }
];

export const DOA_HARIAN_COMPLETE: DoaItem[] = [
  {
    "id": "doa-1",
    "title": "Dzikir Pembuka Pagi",
    "arabic": "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ.",
    "latin": "Ash-bahnaa wa ash-bahal mulku lillah walhamdulillah, laa ilaha illallah wahdahu laa syarika lah, lahul mulku walahul hamdu wa huwa ‘ala kulli syai-in qodir.",
    "translation": "Kami telah memasuki waktu pagi dan kerajaan hanya milik Allah, segala puji bagi Allah. Tidak ada Tuhan (yang berhak disembah) kecuali Allah semata, tiada sekutu bagi-Nya. Milik-Nya lah kerajaan dan bagi-Nya pujian. Dia-lah Yang Mahakuasa atas segala sesuatu.",
    "source": "HR. Muslim no. 2723",
    "category": "Dzikir Pagi & Sore"
  },
  {
    "id": "doa-2",
    "title": "Dzikir Pembuka Sore",
    "arabic": "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ للهِ، وَالْحَمْدُ للهِ، لَا إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
    "latin": "Amsaynaa wa amsal mulku lillah walhamdulillah, laa ilaha illallah wahdahu laa syarika lah, lahul mulku walahul hamdu wa huwa ‘ala kulli syai-in qodir.",
    "translation": "Kami telah memasuki waktu sore dan kerajaan hanya milik Allah, segala puji bagi Allah. Tidak ada Tuhan (yang berhak disembah) kecuali Allah semata, tiada sekutu bagi-Nya. Milik-Nya lah kerajaan dan bagi-Nya pujian. Dia-lah Yang Mahakuasa atas segala sesuatu.",
    "source": "HR. Muslim no. 2723",
    "category": "Dzikir Pagi & Sore"
  },
  {
    "id": "doa-3",
    "title": "Sayyidul Istighfar (Raja Istighfar)",
    "arabic": "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    "latin": "Allahumma anta rabbii laa ilaaha illaa anta, khalaqtanii wa ana 'abduka, wa ana 'alaa 'ahdika wa wa'dika mas tatho'tu, a'uudzu bika min syarri maa shona'tu, abuu-u laka bini'matika 'alayya, wa abuu-u bi dzanbii, faghfir lii, fa innahu laa yaghfirudz dzunuuba illaa anta.",
    "translation": "Ya Allah, Engkau adalah Tuhanku, tidak ada Tuhan selain Engkau. Engkau telah menciptakanku dan aku adalah hamba-Mu. Aku berada di atas janji-Mu dan ikrar-Mu semampuku. Aku berlindung kepada-Mu dari kejahatan perbuatanku. Aku mengakui nikmat-Mu kepadaku dan aku mengakui dosaku, maka ampunilah aku. Sungguh, tidak ada yang dapat mengampuni dosa selain Engkau.",
    "source": "HR. Bukhari no. 6306",
    "category": "Dzikir Pagi & Sore"
  },
  {
    "id": "doa-4",
    "title": "Doa Memohon Perlindungan (3x)",
    "arabic": "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    "latin": "Bismillahilladzi laa yadhurru ma'asmihi syai'un fil ardhi wa laa fis samaa'i wa huwas samii'ul 'aliim.",
    "translation": "Dengan nama Allah yang dengan nama-Nya tidak ada sesuatu pun yang dapat membahayakan di bumi maupun di langit, dan Dia-lah Yang Maha Mendengar lagi Maha Mengetahui.",
    "source": "HR. Abu Dawud, Tirmidzi",
    "category": "Dzikir Pagi & Sore"
  },
  {
    "id": "doa-5",
    "title": "Doa Memohon Keselamatan ('Afiyah)",
    "arabic": "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي",
    "latin": "Allahumma inni as'alukal-'afiyah fid-dunya wal-akhirah. Allahumma inni as'alukal-'afwa wal-'afiyah fi dini wa dunyaya wa ahli wa mali. Allahummastur 'awrati wa aamin raw'ati. Allahummahfazhni min bayni yadayya wa min khalfi wa 'an yamini wa 'an syimali wa min fawqi, wa a'udzu bi'azhamatika an ughtala min tahti.",
    "translation": "Ya Allah, sesungguhnya aku memohon kepada-Mu 'afiyah (keselamatan) di dunia dan di akhirat. Ya Allah, sesungguhnya aku memohon kepada-Mu ampunan dan 'afiyah dalam agamaku, duniaku, keluargaku, dan hartaku. Ya Allah, tutupilah auratku (aibku) dan berilah ketenteraman di hatiku. Ya Allah, peliharalah aku dari arah depan, belakang, kanan, kiri, dan atasku, serta aku berlindung dengan keagungan-Mu agar tidak dibinasakan dari bawahku.",
    "source": "HR. Abu Dawud",
    "category": "Dzikir Pagi & Sore"
  },
  {
    "id": "doa-6",
    "title": "Doa Pengakuan Nikmat",
    "arabic": "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
    "latin": "Allahumma ma ashbaha bi min ni’mah aw bi-ahadin min kholqik, fa minka wahdaka laa syariika lak, fa lakal hamdu wa lakasy syukr.",
    "translation": "Ya Allah, nikmat apapun yang ada padaku di pagi ini atau pada salah seorang dari makhluk-Mu, maka itu semua dari-Mu semata, tiada sekutu bagi-Mu. Maka bagi-Mu segala puji dan bagi-Mu segala syukur.",
    "source": "HR. Abu Dawud",
    "category": "Dzikir Pagi & Sore"
  },
  {
    "id": "doa-7",
    "title": "Dzikir Tasbih (100x)",
    "arabic": "سُبْحَانَ اللهِ وَبِحَمْدِهِ",
    "latin": "Subhanallahi wa bihamdih.",
    "translation": "Maha Suci Allah, aku memuji-Nya.",
    "source": "HR. Muslim no. 2692",
    "category": "Dzikir Pagi & Sore"
  },
  {
    "id": "doa-8",
    "title": "Doa Berlindung dari Kesusahan",
    "arabic": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ",
    "latin": "Allahumma inni a'udzu bika minal hammi wal hazan, wa a'udzu bika minal 'ajzi wal kasal, wa a'udzu bika minal jubni wal bukhl, wa a'udzu bika min ghalabatid dayni wa qahrir rijal.",
    "translation": "Ya Allah, aku berlindung kepada-Mu dari kegelisahan dan kesedihan, dari kelemahan dan kemalasan, dari sifat pengecut dan kikir, dan dari lilitan utang dan penindasan orang.",
    "source": "HR. Bukhari no. 6369",
    "category": "Dzikir Pagi & Sore"
  },
  {
    "id": "doa-9",
    "title": "Doa Memohon Kesehatan (3x)",
    "arabic": "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ",
    "latin": "Allahumma 'afini fi badani, Allahumma 'afini fi sam'i, Allahumma 'afini fi bashari, la ilaha illa anta.",
    "translation": "Ya Allah, sehatkanlah badanku. Ya Allah, sehatkanlah pendengaranku. Ya Allah, sehatkanlah penglihatanku. Tidak ada Tuhan selain Engkau.",
    "source": "HR. Abu Dawud",
    "category": "Dzikir Pagi & Sore"
  },
  {
    "id": "doa-10",
    "title": "Ayat Kursi",
    "arabic": "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    "latin": "Allahu la ilaha illa huwal hayyul qayyum, laa ta'khudzuhu sinatuw wala naum, lahu ma fis samawati wa ma fil ardh, man dzalladzi yasyfa'u 'indahu illa bi idznih, ya'lamu ma bayna aydihim wa ma khalfahum, wa la yuhiithuna bisyai'in min 'ilmihi illa bima syaa', wasi'a kursiyyuhus samawati wal ardh, wa la ya'uduhu hifzhuhuma wa huwal 'aliyyul 'adziim.",
    "translation": "Allah, tidak ada tuhan (yang berhak disembah) selain Dia. Yang Mahahidup, Yang terus menerus mengurus (makhluk-Nya), tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan apa yang ada di bumi. Tidak ada yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya. Dia mengetahui apa yang di hadapan mereka dan apa yang di belakang mereka, dan mereka tidak mengetahui sesuatu apa pun tentang ilmu-Nya melainkan apa yang Dia kehendaki. Kursi-Nya meliputi langit dan bumi. Dan Dia tidak merasa berat memelihara keduanya, dan Dia Mahatinggi, Mahabesar.",
    "source": "QS. Al-Baqarah: 255",
    "category": "Dzikir Pagi & Sore"
  },
  {
    "id": "doa-11",
    "title": "Doa Sebelum Tidur",
    "arabic": "بِاسْمِكَ اللَّهُمَّ أَحْيَا وَأَمُوتُ",
    "latin": "Bismika Allahumma ahya wa amut.",
    "translation": "Dengan nama-Mu, ya Allah, aku hidup dan aku mati.",
    "source": "HR. Bukhari no. 6324",
    "category": "Aktivitas Sehari-hari"
  },
  {
    "id": "doa-12",
    "title": "Doa Bangun Tidur",
    "arabic": "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    "latin": "Alhamdulillahilladzi ahyana ba'da ma amatana wa ilaihin nusyur.",
    "translation": "Segala puji bagi Allah, yang telah menghidupkan kami setelah mematikan kami, dan kepada-Nya lah kami kembali.",
    "source": "HR. Bukhari no. 6324",
    "category": "Aktivitas Sehari-hari"
  },
  {
    "id": "doa-13",
    "title": "Doa Sebelum Makan",
    "arabic": "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
    "latin": "Allahumma baarik lanaa fiimaa rozaqtanaa wa qinaa 'adzaaban naar.",
    "translation": "Ya Allah, berkahilah kami dalam rezeki yang telah Engkau berikan kepada kami dan peliharalah kami dari siksa api neraka.",
    "source": "HR. Ibnu as-Sunni",
    "category": "Aktivitas Sehari-hari"
  },
  {
    "id": "doa-14",
    "title": "Doa Sesudah Makan",
    "arabic": "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
    "latin": "Alhamdulillahilladzi ath'amanaa wa saqoonaa wa ja'alanaa minal muslimiin.",
    "translation": "Segala puji bagi Allah yang telah memberi kami makan dan minum, serta menjadikan kami seorang muslim.",
    "source": "HR. Abu Dawud, Tirmidzi",
    "category": "Aktivitas Sehari-hari"
  },
  {
    "id": "doa-15",
    "title": "Doa Memakai Pakaian",
    "arabic": "الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
    "latin": "Alhamdulillahilladzi kasaani hadzaa wa rozaqoniihi min ghoiri hawlin minni wa laa quwwatin.",
    "translation": "Segala puji bagi Allah yang telah memberiku pakaian ini dan menganugerahkannya kepadaku tanpa daya dan kekuatan dariku.",
    "source": "HR. Abu Dawud",
    "category": "Aktivitas Sehari-hari"
  },
  {
    "id": "doa-16",
    "title": "Doa Masuk WC",
    "arabic": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
    "latin": "Allahumma inni a'udzu bika minal khubutsi wal khaba'its.",
    "translation": "Ya Allah, aku berlindung kepada-Mu dari setan laki-laki dan setan perempuan.",
    "source": "HR. Bukhari dan Muslim",
    "category": "Aktivitas Sehari-hari"
  },
  {
    "id": "doa-17",
    "title": "Doa Keluar WC",
    "arabic": "غُفْرَانَكَ",
    "latin": "Ghufronaka.",
    "translation": "Aku memohon ampunan-Mu.",
    "source": "HR. Tirmidzi, Abu Dawud",
    "category": "Aktivitas Sehari-hari"
  },
  {
    "id": "doa-18",
    "title": "Doa Ketika Turun Hujan",
    "arabic": "اللَّهُمَّ صَيِّباً نَافِعاً",
    "latin": "Allahumma shoyyiban naafi'an.",
    "translation": "Ya Allah, turunkanlah hujan yang bermanfaat.",
    "source": "HR. Bukhari",
    "category": "Aktivitas Sehari-hari"
  },
  {
    "id": "doa-19",
    "title": "Doa Untuk Kedua Orang Tua",
    "arabic": "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    "latin": "Rabbighfir lii wa liwaalidayya warhamhumaa kamaa robbayaanii shoghiiroo.",
    "translation": "Ya Tuhanku, ampunilah aku dan kedua orang tuaku, dan sayangilah mereka sebagaimana mereka telah mendidikku di waktu kecil.",
    "source": "QS. Al-Isra': 24 (Modifikasi)",
    "category": "Rumah & Keluarga"
  },
  {
    "id": "doa-20",
    "title": "Doa Kebaikan Dunia Akhirat",
    "arabic": "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    "latin": "Rabbana aatina fid-dunya hasanah wa fil-akhirati hasanah wa qina 'adzaaban-nar.",
    "translation": "Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari azab neraka.",
    "source": "QS. Al-Baqarah: 201",
    "category": "Rumah & Keluarga"
  },
  {
    "id": "doa-21",
    "title": "Doa Masuk Rumah",
    "arabic": "بِسْمِ اللهِ وَلَجْنَا، وَبِسْمِ اللهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا",
    "latin": "Bismillahi walajnaa, wa bismillahi kharajnaa, wa'ala rabbina tawakkalnaa.",
    "translation": "Dengan nama Allah kami masuk, dengan nama Allah kami keluar, dan hanya kepada Tuhan kami, kami bertawakkal.",
    "source": "HR. Abu Dawud",
    "category": "Rumah & Keluarga"
  },
  {
    "id": "doa-22",
    "title": "Doa Keluar Rumah",
    "arabic": "بِسْمِ اللهِ، تَوَكَّلْتُ عَلَى اللهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ",
    "latin": "Bismillahi, tawakkaltu 'alallah, laa haula wa laa quwwata illa billah.",
    "translation": "Dengan nama Allah, aku bertawakkal kepada Allah. Tiada daya dan kekuatan kecuali dengan Allah.",
    "source": "HR. Abu Dawud, Tirmidzi",
    "category": "Rumah & Keluarga"
  },
  {
    "id": "doa-23",
    "title": "Doa Saat Bercermin",
    "arabic": "اللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي",
    "latin": "Allahumma kamaa hassanta khalqii fahassin khuluqii.",
    "translation": "Ya Allah, sebagaimana Engkau telah memperindah rupaku, maka perindahlah pula akhlakku.",
    "source": "HR. Ahmad",
    "category": "Rumah & Keluarga"
  },
  {
    "id": "doa-24",
    "title": "Doa Memohon Keturunan yang Baik",
    "arabic": "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ",
    "latin": "Rabbi hab lii minash-shoolihin.",
    "translation": "Ya Tuhanku, anugerahkanlah kepadaku (seorang anak) yang termasuk orang-orang yang saleh.",
    "source": "QS. Ash-Shaffat: 100",
    "category": "Rumah & Keluarga"
  },
  {
    "id": "doa-25",
    "title": "Doa Perlindungan untuk Keluarga",
    "arabic": "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    "latin": "A'uudzu bi kalimaatillahit-taammaati min syarri maa kholaq.",
    "translation": "Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk-Nya.",
    "source": "HR. Muslim",
    "category": "Rumah & Keluarga"
  },
  {
    "id": "doa-26",
    "title": "Doa Pasangan Penyejuk Hati",
    "arabic": "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    "latin": "Rabbanaa hab lanaa min azwaajinaa wa dzurriyyaatinaa qurrota a'yun, waj'alnaa lil muttaqiina imaamaa.",
    "translation": "Ya Tuhan kami, anugerahkanlah kepada kami pasangan kami dan keturunan kami sebagai penyenang hati (kami), dan jadikanlah kami pemimpin bagi orang-orang yang bertakwa.",
    "source": "QS. Al-Furqan: 74",
    "category": "Rumah & Keluarga"
  },
  {
    "id": "doa-27",
    "title": "Doa Sebelum Belajar",
    "arabic": "رَبِّ زِدْنِي عِلْمًا، وَارْزُقْنِيْ فَهْمًا",
    "latin": "Rabbi zidnii 'ilman, warzuqnii fahman.",
    "translation": "Ya Tuhanku, tambahkanlah aku ilmu dan berikanlah aku pemahaman yang baik.",
    "source": "Populer (dari QS. Taha: 114)",
    "category": "Ilmu & Pekerjaan"
  },
  {
    "id": "doa-28",
    "title": "Doa Memohon Ilmu Bermanfaat",
    "arabic": "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
    "latin": "Allahumma innii as-aluka 'ilman naafi'an, wa rizqon thoyyiban, wa 'amalan mutaqobbalan.",
    "translation": "Ya Allah, aku memohon kepada-Mu ilmu yang bermanfaat, rezeki yang baik, dan amalan yang diterima.",
    "source": "HR. Ibnu Majah",
    "category": "Ilmu & Pekerjaan"
  },
  {
    "id": "doa-29",
    "title": "Doa Dimudahkan Urusan",
    "arabic": "رَبِّ اشْرَحْ لِي صَدْرِي، وَيَسِّرْ لِي أَمْرِي، وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي، يَفْقَهُوا قَوْلِي",
    "latin": "Rabbisyrah lii shodrii, wa yassir lii amrii, wahlul 'uqdatam mil lisaanii, yafqohuu qoulii.",
    "translation": "Ya Tuhanku, lapangkanlah dadaku, mudahkanlah untukku urusanku, dan lepaskanlah kekakuan dari lidahku, agar mereka mengerti perkataanku.",
    "source": "QS. Taha: 25-28",
    "category": "Ilmu & Pekerjaan"
  },
  {
    "id": "doa-30",
    "title": "Doa Agar Diberi Petunjuk",
    "arabic": "اللَّهُمَّ أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ، وَأَرِنَا الْبَاطِلَ بَاطِلًا وَارْزُقْنَا اجْتِنَابَهُ",
    "latin": "Allahumma arinal-haqqo haqqon warzuqnat-tibaa'ah, wa arinal-baathila baathilan warzuqnaj-tinaabah.",
    "translation": "Ya Allah, tunjukkanlah kepada kami yang benar itu benar dan berilah kami kemampuan untuk mengikutinya, dan tunjukkanlah kepada kami yang batil itu batil dan berilah kami kemampuan untuk menjauhinya.",
    "source": "Doa Umar bin Khattab",
    "category": "Ilmu & Pekerjaan"
  },
  {
    "id": "doa-31",
    "title": "Doa Memohon Rezeki Halal",
    "arabic": "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
    "latin": "Allahummak-finii bi halaalika 'an haroomik, wa agh-ninii bi fadhlika 'amman siwaak.",
    "translation": "Ya Allah, cukupkanlah aku dengan yang halal dan jauhkanlah aku dari yang haram, dan kayakanlah aku dengan karunia-Mu dari bergantung pada selain-Mu.",
    "source": "HR. Tirmidzi",
    "category": "Ilmu & Pekerjaan"
  },
  {
    "id": "doa-32",
    "title": "Doa Sesudah Belajar",
    "arabic": "اللَّهُمَّ إِنِّي أَسْتَوْدِعُكَ مَا عَلَّمْتَنِيهِ، فَارْدُدْهُ إِلَيَّ عِنْدَ حَاجَتِي إِلَيْهِ، وَلَا تُنْسِنِيهِ يَا رَبَّ الْعَالَمِينَ",
    "latin": "Allahumma inni astaudi’uka ma ‘allamtaniihi, fardud-hu ilayya ‘inda haajati ilaihi, wa laa tunsiniihi yaa robbal ‘aalamiin.",
    "translation": "Ya Allah, sesungguhnya aku titipkan kepada-Mu apa yang telah Engkau ajarkan kepadaku, maka kembalikanlah ia kepadaku ketika aku membutuhkannya. Dan janganlah Engkau buat aku lupa padanya, wahai Tuhan semesta alam.",
    "source": "Doa Populer",
    "category": "Ilmu & Pekerjaan"
  },
  {
    "id": "doa-33",
    "title": "Doa Berlindung dari Ilmu yang Tak Bermanfaat",
    "arabic": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ، وَمِنْ قَلْبٍ لَا يَخْشَعُ، وَمِنْ نَفْسٍ لَا تَشْبَعُ، وَمِنْ دَعْوَةٍ لَا يُسْتَجَابُ لَهَا",
    "latin": "Allahumma inni a'udzu bika min 'ilmin laa yanfa', wa min qalbin laa yakhsya', wa min nafsin laa tasyba', wa min da'watin laa yustajaabu lahaa.",
    "translation": "Ya Allah, aku berlindung kepada-Mu dari ilmu yang tidak bermanfaat, dari hati yang tidak khusyuk, dari jiwa yang tidak pernah puas, dan dari doa yang tidak dikabulkan.",
    "source": "HR. Muslim",
    "category": "Ilmu & Pekerjaan"
  },
  {
    "id": "doa-34",
    "title": "Doa Saat Sakit",
    "arabic": "اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ الْبَأْسَ، اشْفِ أَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا",
    "latin": "Allahumma rabban-nas, adzhibil-ba's, isyfi antasy-syafi, laa syifa-a illa syifa-uk, syifa-an laa yughadiru saqaman.",
    "translation": "Ya Allah, Tuhan manusia, hilangkanlah penyakit ini, sembuhkanlah, Engkaulah Yang Maha Penyembuh, tidak ada kesembuhan kecuali kesembuhan dari-Mu, kesembuhan yang tidak meninggalkan penyakit.",
    "source": "HR. Bukhari",
    "category": "Kesehatan & Keselamatan"
  },
  {
    "id": "doa-35",
    "title": "Doa Menjenguk Orang Sakit",
    "arabic": "أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ",
    "latin": "As'alullahal-'azhiim, rabbal-'arsyil-'azhiim, an yasyfiyak.",
    "translation": "Aku memohon kepada Allah yang Maha Agung, Tuhan 'Arsy yang Agung, semoga Dia menyembuhkanmu. (Dibaca 7x)",
    "source": "HR. Abu Dawud, Tirmidzi",
    "category": "Kesehatan & Keselamatan"
  },
  {
    "id": "doa-36",
    "title": "Doa Saat Tertimpa Musibah",
    "arabic": "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي، وَأَخْلِفْ لِي خَيْرًا مِنْهَا",
    "latin": "Inna lillahi wa inna ilaihi raji'un. Allahumma'jurni fii mushibati, wa akhlif lii khairan minha.",
    "translation": "Sesungguhnya kami milik Allah dan kepada-Nya lah kami kembali. Ya Allah, berilah aku pahala dalam musibahku ini dan gantilah untukku dengan yang lebih baik darinya.",
    "source": "HR. Muslim",
    "category": "Kesehatan & Keselamatan"
  },
  {
    "id": "doa-37",
    "title": "Doa Mohon Keselamatan",
    "arabic": "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
    "latin": "Allahumma inni as'alukal-'afiyah fid-dunya wal-akhirah.",
    "translation": "Ya Allah, sesungguhnya aku memohon kepada-Mu 'afiyah (keselamatan dan kesejahteraan) di dunia dan di akhirat.",
    "source": "HR. Abu Dawud",
    "category": "Kesehatan & Keselamatan"
  },
  {
    "id": "doa-38",
    "title": "Doa Ketika Mendengar Petir",
    "arabic": "سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ",
    "latin": "Subhanalladzi yusabbihur ro'du bihamdihi wal mala-ikatu min khiifatih.",
    "translation": "Maha Suci Allah yang petir bertasbih dengan memuji-Nya, dan begitu juga para malaikat, karena takut kepada-Nya.",
    "source": "Al-Muwatha'",
    "category": "Kesehatan & Keselamatan"
  },
  {
    "id": "doa-39",
    "title": "Doa Berlindung dari Penyakit Buruk",
    "arabic": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبَرَصِ، وَالْجُنُونِ، وَالْجُذَامِ، وَمِنْ سَيِّئِ الأَسْقَامِ",
    "latin": "Allahumma inni a'udzu bika minal barash, wal junuun, wal judzaam, wa min sayyi'il asqoom.",
    "translation": "Ya Allah, aku berlindung kepada-Mu dari penyakit belang, gila, kusta, dan dari penyakit-penyakit yang buruk lainnya.",
    "source": "HR. Abu Dawud",
    "category": "Kesehatan & Keselamatan"
  },
  {
    "id": "doa-40",
    "title": "Doa Ketika Marah",
    "arabic": "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    "latin": "A'uudzu billaahi minasy-syaithoonir-rojiim.",
    "translation": "Aku berlindung kepada Allah dari setan yang terkutuk.",
    "source": "HR. Bukhari dan Muslim",
    "category": "Kesehatan & Keselamatan"
  },
  {
    "id": "doa-41",
    "title": "Doa Naik Kendaraan",
    "arabic": "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
    "latin": "Subhanalladzi sakhkhara lana hadza wa ma kunna lahu muqrinin, wa inna ila rabbina lamunqalibun.",
    "translation": "Maha Suci Tuhan yang telah menundukkan semua ini bagi kami padahal kami sebelumnya tidak mampu menguasainya, dan sesungguhnya kami akan kembali kepada Tuhan kami.",
    "source": "QS. Az-Zukhruf: 13-14",
    "category": "Perjalanan"
  },
  {
    "id": "doa-42",
    "title": "Doa Saat Bepergian (Safar)",
    "arabic": "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ، اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى، اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ، اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ وَالْخَلِيفَةُ فِي الْأَهْلِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ وَكَآبَةِ الْمَنْظَرِ وَسُوءِ الْمُنْقَلَبِ فِي الْمَالِ وَالْأَهْلِ",
    "latin": "Allahu Akbar, Allahu Akbar, Allahu Akbar. Subhanalladzi sakhkhara lana hadza wa ma kunna lahu muqrinin. Wa inna ila Rabbina lamunqalibun. Allahumma inna nas'aluka fi safarina hadzal-birra wat-taqwa, wa minal-'amali ma tardha. Allahumma hawwin 'alayna safarana hadza watwi 'anna bu'dahu. Allahumma antash-shahibu fis-safari wal-khalifatu fil-ahli. Allahumma inni a'udzu bika min wa'tsa'is-safari wa kAabatil-manzhari wa suu'il-munqalabi fil-mali wal-ahli.",
    "translation": "Allah Mahabesar (3x). Mahasuci Allah yang telah menundukkan kendaraan ini bagi kami, padahal sebelumnya kami tidak mampu menguasainya. Dan sesungguhnya kepada Tuhan kami lah kami akan kembali. Ya Allah, sesungguhnya kami memohon kepada-Mu kebaikan dan ketakwaan dalam perjalanan ini, serta amal yang Engkau ridhai. Ya Allah, mudahkanlah perjalanan kami ini dan dekatkanlah jaraknya. Ya Allah, Engkaulah pendamping dalam perjalanan dan pengganti/penjaga keluarga(ku). Ya Allah, aku berlindung kepada-Mu dari kesulitan perjalanan, pemandangan yang menyedihkan, serta kepulangan yang buruk pada harta dan keluarga.",
    "source": "HR. Muslim",
    "category": "Perjalanan"
  },
  {
    "id": "doa-43",
    "title": "Doa Saat Tiba di Suatu Tempat",
    "arabic": "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    "latin": "A'udzu bikalimatillahit-tammati min syarri ma khalaq.",
    "translation": "Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk-Nya.",
    "source": "HR. Muslim",
    "category": "Perjalanan"
  },
  {
    "id": "doa-44",
    "title": "Doa Musafir untuk yang Ditinggal",
    "arabic": "أَسْتَوْدِعُكُمُ اللَّهَ الَّذِي لَا تَضِيعُ وَدَائِعُهُ",
    "latin": "Astawdi'ukumullahalladzi laa tadhi'u wa daa'i'uhu.",
    "translation": "Aku menitipkan kalian kepada Allah yang tidak akan hilang titipan-Nya.",
    "source": "HR. Ahmad, Ibnu Majah",
    "category": "Perjalanan"
  },
  {
    "id": "doa-45",
    "title": "Doa Orang yang Ditinggal untuk Musafir",
    "arabic": "أَسْتَوْدِعُ اللَّهَ دِينَكَ، وَأَمَانَتَكَ، وَخَوَاتِيمَ عَمَلِكَ",
    "latin": "Astawdi'ullaha diinak, wa amanatak, wa khawatima 'amalik.",
    "translation": "Aku menitipkan agamamu, amanahmu, dan akhir dari amalanmu kepada Allah.",
    "source": "HR. Abu Dawud, Tirmidzi",
    "category": "Perjalanan"
  },
  {
    "id": "doa-46",
    "title": "Doa Saat Kembali dari Perjalanan",
    "arabic": "آيِبُونَ، تَائِبُونَ، عَابِدُونَ، لِرَبِّنَا حَامِدُونَ",
    "latin": "Aayibuun, taa-ibuun, 'aabiduun, lirobbinaa haamiduun.",
    "translation": "Kami kembali, kami bertaubat, kami beribadah, dan kepada Tuhan kami, kami memuji.",
    "source": "HR. Muslim",
    "category": "Perjalanan"
  },
  {
    "id": "doa-47",
    "title": "Doa Saat Singgah di Suatu Tempat",
    "arabic": "رَبِّ أَنْزِلْنِي مُنْزَلًا مُبَارَكًا وَأَنْتَ خَيْرُ الْمُنْزِلِينَ",
    "latin": "Rabbi anzilnii munzalan mubaarokan wa anta khoirul munziliin.",
    "translation": "Ya Tuhanku, tempatkanlah aku pada tempat yang diberkahi, dan Engkau adalah sebaik-baik Yang memberi tempat.",
    "source": "QS. Al-Mu'minun: 29",
    "category": "Perjalanan"
  },
  {
    "id": "doa-48",
    "title": "Doa Ketika Lupa",
    "arabic": "سُبْحَانَ الَّذِي لَا يَنَامُ وَلَا يَنْسَى",
    "latin": "Subhanalladzi laa yanaamu wa laa yansaa.",
    "translation": "Maha Suci Dzat yang tidak pernah tidur dan tidak pernah lupa.",
    "source": "Doa Populer",
    "category": "Lain-Lain"
  },
  {
    "id": "doa-49",
    "title": "Doa Berlindung dari Sifat Malas",
    "arabic": "اللَّهُمَّ إِنِّى أَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ",
    "latin": "Allahumma inni a'udzu bika minal 'ajzi wal kasal.",
    "translation": "Ya Allah, aku berlindung kepada-Mu dari kelemahan dan kemalasan.",
    "source": "HR. Bukhari no. 6367",
    "category": "Lain-Lain"
  },
  {
    "id": "doa-50",
    "title": "Doa Ketika Melihat Sesuatu yang Disukai",
    "arabic": "الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ",
    "latin": "Alhamdulillahilladzi bini'matihi tatimmus sholihat.",
    "translation": "Segala puji bagi Allah yang dengan nikmat-Nya segala kebaikan menjadi sempurna.",
    "source": "HR. Ibnu Majah",
    "category": "Lain-Lain"
  }
];
