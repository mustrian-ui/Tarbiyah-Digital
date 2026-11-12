export type SejarahListItem = string | { title?: string; points?: string[] };

export interface SejarahTopic {
  id: string;
  title: string;
  icon: string;
  subtitle: string;
  dalil?: {
    text: string;
    source: string;
  };
  content: Array<{
    type?: string;
    title?: string;
    text?: string;
    items?: SejarahListItem[];
  }>;
}

export const SEJARAH_PART1: SejarahTopic[] = [
  {
    "id": "alquran",
    "title": "Sejarah Turunnya Al-Qur'an",
    "icon": "fas fa-book-quran",
    "subtitle": "Perjalanan wahyu ilahi dari Lauhul Mahfuz hingga menjadi mushaf yang utuh.",
    "content": [
      {
        "type": "paragraph",
        "text": "Sejarah turunnya Al-Qur'an (Nuzulul Qur'an) adalah salah satu pilar fundamental dalam studi Islam, menandai proses penurunan firman Allah SWT kepada Nabi Muhammad SAW. Proses ini tidak terjadi sekaligus, melainkan secara bertahap selama kurang lebih 23 tahun, sebuah metode yang penuh hikmah untuk menguatkan hati Nabi, menjawab tantangan zaman, dan memudahkan pemahaman serta penghafalan bagi kaum Muslimin. Perjalanan ini dimulai dari sebuah gua terpencil di Makkah hingga menjadi kitab suci yang terkodifikasi sempurna."
      },
      {
        "type": "paragraph",
        "title": "Tahap-tahap Penurunan Al-Qur'an",
        "text": "Ulama membagi proses turunnya Al-Qur'an menjadi tiga tahap utama. Pertama, Al-Qur'an diturunkan dari Allah SWT ke Lauhul Mahfuz, sebuah kitab terpelihara di sisi-Nya, dalam satu kali penurunan (jumlatan wahidah). Ini menunjukkan bahwa keseluruhan Al-Qur'an telah ada dalam ilmu Allah sejak azali. Kedua, dari Lauhul Mahfuz, Al-Qur'an diturunkan ke Baitul 'Izzah di langit dunia, juga dalam satu kali penurunan. Tahap ini terjadi pada malam Lailatul Qadar, malam yang penuh kemuliaan di bulan Ramadhan. Ketiga, dan ini yang paling dikenal, adalah penurunan dari Baitul 'Izzah kepada Nabi Muhammad SAW secara berangsur-angsur (munajjaman) melalui perantara Malaikat Jibril. Proses inilah yang berlangsung selama 23 tahun masa kenabian beliau."
      },
      {
        "type": "paragraph",
        "title": "Wahyu Pertama dan Periode Makkah",
        "text": "Peristiwa monumental penerimaan wahyu pertama terjadi pada 17 Ramadhan, saat Nabi Muhammad SAW berusia 40 tahun. Beliau sedang berkhalwat (menyendiri) di Gua Hira, sebuah gua di Jabal Nur sekitar 6 km dari Makkah. Malaikat Jibril datang dalam wujud aslinya, memeluk Nabi dengan sangat kuat, dan memerintahkan, \"Iqra'!\" (Bacalah!). Nabi yang seorang ummi (tidak bisa membaca dan menulis) menjawab, \"Aku tidak bisa membaca.\" Jibril mengulangi perintahnya hingga tiga kali sebelum akhirnya menyampaikan lima ayat pertama dari Surah Al-'Alaq. Peristiwa ini sangat mengguncang Nabi, yang kemudian pulang dengan gemetar dan ditenangkan oleh istri tercintanya, Khadijah RA. Selama periode Makkah (sekitar 13 tahun), ayat-ayat yang turun umumnya berfokus pada pilar-pilar aqidah: keesaan Allah (Tauhid), kenabian, hari kebangkitan, dan akhlak mulia. Ayat-ayat Makkiyah ini dicirikan dengan gaya bahasa yang kuat, puitis, dan seringkali pendek, bertujuan untuk menanamkan fondasi iman yang kokoh di hati kaum Muslimin awal yang saat itu minoritas dan tertindas."
      },
      {
        "type": "paragraph",
        "title": "Periode Madinah dan Kelengkapan Syariat",
        "text": "Setelah hijrah ke Madinah, corak wahyu yang turun pun berubah. Periode Madinah (sekitar 10 tahun) ditandai dengan pembentukan masyarakat dan negara Islam. Oleh karena itu, ayat-ayat Madaniyyah lebih banyak berisi tentang hukum-hukum (syariat) yang mengatur kehidupan sosial, seperti hukum shalat, zakat, puasa, haji, jihad, hukum waris, pernikahan, pidana (hudud), dan hubungan antarumat beragama. Ayat-ayat pada periode ini cenderung lebih panjang dan detail, memberikan panduan lengkap bagi tatanan masyarakat yang baru terbentuk. Wahyu terakhir yang diterima Nabi SAW diyakini adalah Surah Al-Ma'idah ayat 3, yang turun saat Haji Wada' (haji perpisahan), beberapa bulan sebelum beliau wafat, yang menyatakan kesempurnaan agama Islam."
      },
      {
        "type": "paragraph",
        "title": "Proses Pencatatan dan Kodifikasi",
        "text": "Setiap kali wahyu turun, Nabi Muhammad SAW segera menghafalkannya dan menyampaikannya kepada para sahabat. Beliau juga menunjuk beberapa sahabat yang memiliki kemampuan menulis untuk menjadi juru tulis wahyu (kuttabul wahy), di antaranya Zaid bin Tsabit, Ali bin Abi Thalib, Utsman bin Affan, dan Ubay bin Ka'ab. Mereka menuliskannya di media yang tersedia saat itu, seperti pelepah kurma, tulang belulang, batu tipis, dan kulit hewan. Namun, tulisan-tulisan ini masih tersebar. Pada masa kekhalifahan Abu Bakar Ash-Shiddiq, setelah banyak penghafal Al-Qur'an (huffaz) gugur dalam Perang Yamamah, Umar bin Khattab mengusulkan agar Al-Qur'an dikumpulkan dalam satu mushaf. Abu Bakar menugaskan Zaid bin Tsabit untuk memimpin proyek besar ini. Zaid dengan sangat teliti mengumpulkan tulisan-tulisan yang tersebar dan memverifikasinya dengan hafalan para sahabat. Hasilnya adalah satu mushaf yang disimpan oleh Abu Bakar, kemudian Umar, dan terakhir oleh putrinya, Hafsah. Puncak kodifikasi terjadi pada masa kekhalifahan Utsman bin Affan. Ketika Islam meluas dan muncul perbedaan dalam cara membaca Al-Qur'an (qira'at), Utsman membentuk sebuah panitia, kembali dipimpin oleh Zaid bin Tsabit, untuk menyalin ulang mushaf yang ada dengan standar dialek Quraisy (dialek di mana Al-Qur'an pertama kali diturunkan). Mushaf standar ini, yang dikenal sebagai Mushaf Utsmani, kemudian digandakan dan dikirim ke pusat-pusat wilayah Islam, sementara naskah-naskah lainnya diperintahkan untuk dimusnahkan demi menjaga keaslian dan kesatuan Al-Qur'an. Mushaf inilah yang menjadi rujukan umat Islam di seluruh dunia hingga hari ini, sebuah bukti nyata janji Allah untuk menjaga firman-Nya."
      }
    ],
    "dalil": {
      "text": "Sesungguhnya Kamilah yang menurunkan Al-Qur'an, dan sesungguhnya Kami benar-benar memeliharanya.",
      "source": "QS. Al-Hijr: 9"
    }
  },
  {
    "id": "khulafa",
    "title": "Sejarah Khulafaur Rasyidin",
    "icon": "fas fa-users",
    "subtitle": "Era kepemimpinan empat khalifah bijaksana setelah wafatnya Rasulullah SAW.",
    "content": [
      {
        "type": "paragraph",
        "text": "Khulafaur Rasyidin (632-661 M) merujuk pada periode kepemimpinan empat khalifah pertama dalam Islam yang dianggap paling ideal dan mendapat petunjuk. Mereka adalah para sahabat terdekat Nabi Muhammad SAW yang melanjutkan estafet kepemimpinan umat setelah beliau wafat. Era ini dianggap sebagai 'zaman keemasan' dalam kepemimpinan Islam karena para pemimpinnya memerintah berdasarkan Al-Qur'an dan Sunnah Nabi dengan penuh keadilan, kesederhanaan, dan kebijaksanaan. Mereka tidak hanya berperan sebagai kepala negara, tetapi juga sebagai pemimpin spiritual, panglima perang, dan hakim tertinggi."
      },
      {
        "type": "list",
        "title": "1. Abu Bakar Ash-Shiddiq (632-634 M)",
        "items": [
          "Pengangkatan: Setelah wafatnya Nabi, terjadi perdebatan tentang suksesi kepemimpinan di Saqifah Bani Sa'idah. Melalui musyawarah, Abu Bakar, sahabat terdekat dan mertua Nabi, dipilih sebagai khalifah pertama.",
          "Tantangan Awal: Masa pemerintahannya yang singkat (2 tahun) dihadapkan pada ujian berat. Banyak suku Arab murtad dan menolak membayar zakat, serta munculnya nabi-nabi palsu seperti Musailamah Al-Kazzab. Abu Bakar dengan tegas memerangi mereka dalam Perang Riddah (Perang Melawan Kemurtadan) dan berhasil menyatukan kembali Jazirah Arab di bawah panji Islam.",
          "Kodifikasi Al-Qur'an: Atas usulan Umar bin Khattab yang khawatir akan gugurnya para penghafal Al-Qur'an di medan perang, Abu Bakar memulai proyek pengumpulan ayat-ayat Al-Qur'an yang tersebar menjadi satu mushaf. Tugas ini dipercayakan kepada Zaid bin Tsabit.",
          "Ekspansi Awal: Beliau juga mengirimkan ekspedisi militer awal ke perbatasan Romawi (Bizantium) di Suriah dan Persia, meletakkan dasar bagi penaklukan besar di masa selanjutnya."
        ]
      },
      {
        "type": "list",
        "title": "2. Umar bin Khattab (634-644 M)",
        "items": [
          "Penaklukan Besar (Futuhat): Diangkat berdasarkan wasiat Abu Bakar, Umar bin Khattab memimpin ekspansi Islam terbesar dalam sejarah. Di masanya, wilayah Islam meluas hingga mencakup Suriah, Palestina (termasuk penaklukan Yerusalem pada 637 M), Mesir, Irak, dan sebagian besar wilayah Kekaisaran Persia. Kemenangan gemilang dalam Pertempuran Yarmuk (melawan Romawi) dan Pertempuran Al-Qadisiyyah (melawan Persia) menjadi kunci penaklukan ini.",
          "Inovasi Administrasi: Umar dikenal sebagai seorang administrator ulung. Ia mendirikan berbagai institusi negara yang fundamental, seperti Diwan (departemen) untuk mengelola keuangan negara dan mencatat data tentara, membentuk sistem pos, menetapkan kalender Hijriyah sebagai penanggalan resmi, dan membangun kota-kota garnisun seperti Kufah dan Basra.",
          "Keadilan dan Kesejahteraan: Ia sangat terkenal dengan keadilannya. Kisah-kisahnya saat berpatroli di malam hari untuk memastikan kesejahteraan rakyatnya menjadi legenda. Ia menerapkan prinsip akuntabilitas bagi para pejabatnya dan memastikan hukum Islam ditegakkan tanpa pandang bulu.",
          "Akhir Hayat: Umar wafat setelah ditikam oleh Abu Lu'lu'ah, seorang budak Persia, saat sedang mengimami shalat Subuh. Sebelum wafat, ia membentuk dewan syura beranggotakan enam sahabat senior untuk memilih khalifah berikutnya."
        ]
      },
      {
        "type": "list",
        "title": "3. Utsman bin Affan (644-656 M)",
        "items": [
          "Pemilihan dan Karakter: Utsman, seorang saudagar kaya, menantu Nabi, dan dikenal dengan kedermawanan serta sifat pemalunya, terpilih sebagai khalifah ketiga. Masa pemerintahannya yang berlangsung 12 tahun dapat dibagi menjadi dua periode: enam tahun pertama yang penuh kedamaian dan kemakmuran, dan enam tahun terakhir yang diwarnai gejolak politik.",
          "Standardisasi Mushaf Al-Qur'an: Jasa terbesar Utsman adalah standardisasi mushaf Al-Qur'an. Ketika muncul berbagai dialek bacaan (qira'at) yang berpotensi menimbulkan perpecahan, Utsman memerintahkan penyusunan ulang mushaf standar berdasarkan dialek Quraisy, yang dikenal sebagai Mushaf Utsmani. Salinannya dikirim ke seluruh penjuru wilayah Islam dan menjadi satu-satunya rujukan resmi hingga kini.",
          "Ekspansi Maritim: Di masanya, angkatan laut Islam pertama kali dibentuk di bawah pimpinan Muawiyah bin Abi Sufyan, gubernur Suriah. Angkatan laut ini berhasil menaklukkan Siprus dan mengalahkan armada Bizantium.",
          "Fitnah dan Tragedi: Enam tahun terakhir pemerintahannya diwarnai oleh ketidakpuasan dari beberapa wilayah. Tuduhan nepotisme (mengangkat kerabat dari Bani Umayyah sebagai pejabat) dan kebijakan lainnya menjadi bahan bakar bagi para pemberontak. Puncaknya, sekelompok pemberontak dari Mesir, Kufah, dan Basra mengepung rumahnya dan secara tragis membunuh Utsman saat ia sedang membaca Al-Qur'an. Peristiwa ini dikenal sebagai Al-Fitnah Al-Kubra (Fitnah Besar) pertama."
        ]
      },
      {
        "type": "list",
        "title": "4. Ali bin Abi Thalib (656-661 M)",
        "items": [
          "Masa Penuh Gejolak: Ali, sepupu sekaligus menantu Nabi, dibaiat sebagai khalifah dalam suasana yang sangat genting setelah pembunuhan Utsman. Prioritas utamanya adalah memulihkan stabilitas, namun tuntutan untuk segera menghukum pembunuh Utsman memicu perpecahan.",
          "Perang Saudara: Masa pemerintahannya didominasi oleh konflik internal. Perang Jamal (656 M) terjadi antara pasukan Ali dengan kelompok yang dipimpin Aisyah, Thalhah, dan Zubair yang menuntut qisas atas kematian Utsman. Ali memenangkan pertempuran ini. Selanjutnya, terjadi Perang Siffin (657 M) melawan Muawiyah bin Abi Sufyan, gubernur Suriah dan kerabat Utsman, yang menolak membaiat Ali sebelum pembunuh Utsman diadili. Perang ini berakhir dengan arbitrase (tahkim) yang kontroversial dan justru melahirkan kelompok baru yang memisahkan diri, yaitu Khawarij.",
          "Pemerintahan di Kufah: Ali memindahkan ibu kota dari Madinah ke Kufah (Irak) untuk lebih efektif mengelola wilayahnya yang luas dan bergejolak.",
          "Akhir Hayat: Ali bin Abi Thalib wafat setelah dibunuh oleh seorang Khawarij bernama Abdurrahman bin Muljam saat hendak mengimami shalat Subuh di Kufah. Wafatnya Ali menandai berakhirnya periode Khulafaur Rasyidin dan dimulainya era kekuasaan dinasti (kerajaan)."
        ]
      }
    ]
  },
  {
    "id": "umayyah",
    "title": "Sejarah Dinasti Umayyah",
    "icon": "fas fa-archway",
    "subtitle": "Kekhalifahan pertama yang menerapkan sistem monarki dan ekspansi besar-besaran.",
    "content": [
      {
        "type": "paragraph",
        "text": "Dinasti Umayyah (661-750 M) adalah kekhalifahan Islam pertama yang menggantikan sistem pemilihan khalifah era Khulafaur Rasyidin dengan sistem monarki (keturunan). Didirikan oleh Muawiyah bin Abi Sufyan, dinasti ini menandai babak baru dalam sejarah Islam, dengan pusat kekuasaan yang berpindah dari Madinah ke Damaskus, Suriah. Selama 90 tahun berkuasa, Bani Umayyah berhasil melakukan ekspansi wilayah yang sangat masif, memperluas kekuasaan Islam dari perbatasan India di timur hingga Spanyol di barat. Era ini juga diwarnai dengan perkembangan administrasi, arsitektur megah, serta tantangan dan konflik internal yang pada akhirnya menyebabkan keruntuhannya."
      },
      {
        "type": "paragraph",
        "title": "Pendirian dan Konsolidasi Kekuasaan",
        "text": "Setelah terbunuhnya Ali bin Abi Thalib pada tahun 661 M, putranya Hasan bin Ali dibaiat sebagai khalifah di Kufah. Namun, untuk menghindari pertumpahan darah lebih lanjut di kalangan umat Islam, Hasan menyerahkan kekuasaan kepada Muawiyah bin Abi Sufyan, gubernur Suriah yang kuat dan berpengalaman. Tahun tersebut dikenal sebagai 'Amul Jama'ah (Tahun Persatuan). Muawiyah, seorang politisi dan administrator yang ulung, berhasil mengkonsolidasikan kekuasaannya. Ia memindahkan ibu kota ke Damaskus, yang lebih strategis secara militer dan lebih dekat dengan basis pendukungnya. Langkah paling kontroversialnya adalah menunjuk putranya, Yazid, sebagai penerus, yang secara efektif mengubah sistem suksesi menjadi monarki herediter. Keputusan ini ditentang oleh banyak tokoh senior, termasuk Husain bin Ali (cucu Nabi), yang kemudian memicu Tragedi Karbala pada masa pemerintahan Yazid, sebuah peristiwa kelam yang memperdalam perpecahan antara Sunni dan Syiah."
      },
      {
        "type": "paragraph",
        "title": "Ekspansi Wilayah Spektakuler",
        "text": "Puncak kejayaan militer Bani Umayyah terjadi pada masa Khalifah Al-Walid I (705-715 M). Di bawah kepemimpinannya dan para jenderalnya yang brilian, wilayah Islam mencapai luas maksimum. Di front timur, pasukan yang dipimpin oleh Qutaibah bin Muslim menaklukkan wilayah Asia Tengah, termasuk Bukhara, Samarkand, dan mencapai perbatasan Tiongkok. Muhammad bin Qasim memimpin penaklukan Sindh (sekarang bagian dari Pakistan), membuka jalan bagi penyebaran Islam di anak benua India. Di front barat, ekspansi paling fenomenal terjadi. Setelah menaklukkan seluruh Afrika Utara (Maghrib), pasukan Islam di bawah pimpinan Thariq bin Ziyad menyeberangi selat yang kemudian dinamai menurut namanya (Jabal Thariq atau Gibraltar) pada tahun 711 M. Mereka berhasil menaklukkan hampir seluruh Semenanjung Iberia (Spanyol dan Portugal), mendirikan pemerintahan Islam yang akan bertahan selama hampir 800 tahun. Ekspansi ke Eropa sempat terhenti setelah kekalahan dalam Pertempuran Tours (atau Poitiers) di Prancis pada tahun 732 M."
      },
      {
        "type": "paragraph",
        "title": "Pembangunan dan Administrasi",
        "text": "Bani Umayyah memberikan kontribusi signifikan dalam bidang administrasi dan pembangunan. Mereka mengadopsi dan mengadaptasi sistem birokrasi dari Romawi (Bizantium) dan Persia. Diwan (departemen) yang sudah ada dikembangkan lebih lanjut. Khalifah Abdul Malik bin Marwan (685-705 M) melakukan reformasi penting: ia menjadikan bahasa Arab sebagai bahasa resmi administrasi negara, menggantikan bahasa Yunani dan Persia. Ia juga mencetak mata uang Islam pertama (dinar emas dan dirham perak) yang menggantikan mata uang Romawi dan Persia, memberikan kedaulatan ekonomi bagi kekhalifahan. Dalam arsitektur, Bani Umayyah meninggalkan warisan yang megah. Mereka membangun Kubah Shakhrah (Dome of the Rock) di Yerusalem, salah satu landmark arsitektur Islam paling ikonik. Masjid Agung Damaskus (Masjid Umayyah), yang dibangun di atas bekas gereja, juga menjadi mahakarya yang memadukan seni Bizantium dan Islam."
      },
      {
        "type": "paragraph",
        "title": "Tantangan dan Keruntuhan",
        "text": "Meskipun mencapai banyak kesuksesan, pemerintahan Bani Umayyah tidak lepas dari masalah. Ada ketidakpuasan yang meluas di kalangan Muslim non-Arab (mawali), yang merasa didiskriminasi dan dikenakan pajak lebih tinggi dibandingkan Muslim Arab. Kelompok Syiah terus menentang legitimasi kekuasaan mereka, dan kaum Khawarij juga sering melakukan pemberontakan. Konflik internal di antara faksi-faksi Arab (Qais dan Yaman) juga melemahkan stabilitas. Pemerintahan yang dianggap terlalu sekuler dan bergaya hidup mewah oleh sebagian khalifah juga menimbulkan kritik dari kalangan ulama. Semua faktor ini menjadi benih bagi gerakan oposisi yang kuat, yang dipimpin oleh keturunan paman Nabi, Abbas bin Abdul Muthalib. Gerakan rahasia ini, yang dikenal sebagai Revolusi Abbasiyah, mendapatkan dukungan luas dari mawali di Khurasan (Persia). Pada tahun 750 M, dalam Pertempuran Zab, pasukan Abbasiyah berhasil mengalahkan tentara Umayyah yang terakhir. Khalifah Marwan II terbunuh, dan hampir seluruh anggota keluarga Bani Umayyah diburu dan dibunuh, mengakhiri kekuasaan mereka di timur. Satu-satunya pangeran yang berhasil lolos, Abdurrahman Ad-Dakhil, melarikan diri ke Spanyol dan mendirikan Keamiran Umayyah di Cordoba, melanjutkan warisan dinasti di Barat."
      }
    ]
  },
  {
    "id": "abbasiyah",
    "title": "Sejarah Dinasti Abbasiyah",
    "icon": "fas fa-book-open-reader",
    "subtitle": "Puncak Zaman Keemasan Islam dengan Baghdad sebagai pusat ilmu pengetahuan dunia.",
    "content": [
      {
        "type": "paragraph",
        "text": "Dinasti Abbasiyah (750-1258 M) merupakan kekhalifahan kedua dalam Islam yang menggulingkan Dinasti Umayyah. Berkuasa selama lebih dari lima abad, era Abbasiyah seringkali dianggap sebagai puncak Zaman Keemasan Islam (The Islamic Golden Age). Dengan memindahkan ibu kota dari Damaskus ke Baghdad, Abbasiyah menciptakan sebuah pusat peradaban dunia yang tak tertandingi pada masanya. Di bawah naungan mereka, ilmu pengetahuan, filsafat, kedokteran, matematika, astronomi, dan seni berkembang pesat. Era ini ditandai dengan kosmopolitanisme, di mana para sarjana dari berbagai latar belakang etnis dan agama bekerja sama untuk menerjemahkan dan mengembangkan warisan intelektual dunia kuno."
      },
      {
        "type": "paragraph",
        "title": "Revolusi Abbasiyah dan Pendirian Baghdad",
        "text": "Gerakan untuk menggulingkan Bani Umayyah didasarkan pada klaim bahwa kepemimpinan umat Islam seharusnya berada di tangan keluarga Nabi (Ahlul Bait). Bani Abbasiyah, sebagai keturunan dari Abbas bin Abdul Muthalib (paman Nabi), berhasil menggalang dukungan dari berbagai kelompok yang tidak puas dengan pemerintahan Umayyah, terutama dari kalangan Muslim non-Arab (mawali) di Persia. Di bawah kepemimpinan Abu Muslim al-Khurasani, mereka melancarkan pemberontakan dari provinsi Khurasan. Setelah kemenangan entscheidend dalam Pertempuran Zab pada tahun 750 M, Abu al-Abbas as-Saffah diproklamasikan sebagai khalifah Abbasiyah pertama. Khalifah kedua, Al-Mansur, mengambil langkah strategis dengan membangun ibu kota baru. Pada tahun 762 M, ia mendirikan Baghdad di tepi Sungai Tigris. Kota ini dirancang dengan arsitektur melingkar yang megah dan dengan cepat berkembang menjadi kota metropolis terbesar di dunia, pusat perdagangan, budaya, dan intelektual."
      },
      {
        "type": "paragraph",
        "title": "Puncak Kekuasaan dan Zaman Keemasan",
        "text": "Puncak kekuasaan Dinasti Abbasiyah terjadi pada masa pemerintahan Khalifah Harun Ar-Rasyid (786-809 M) dan putranya, Al-Ma'mun (813-833 M). Harun Ar-Rasyid, yang namanya diabadikan dalam kisah Seribu Satu Malam, memimpin sebuah kekhalifahan yang kaya raya dan stabil. Diplomasi terjalin hingga ke Kekaisaran Karoling di Eropa yang dipimpin oleh Charlemagne. Namun, fondasi Zaman Keemasan sesungguhnya diletakkan dan dikembangkan secara masif oleh Al-Ma'mun. Ia adalah seorang pelindung ilmu pengetahuan yang fanatik. Jasa terbesarnya adalah pendirian Baitul Hikmah (Rumah Kebijaksanaan) di Baghdad. Ini bukan sekadar perpustakaan, melainkan sebuah akademi ilmu pengetahuan, pusat penerjemahan, dan observatorium. Para sarjana Muslim, Kristen, dan Yahudi dipekerjakan untuk menerjemahkan karya-karya Yunani, Persia, dan India ke dalam bahasa Arab. Dari sinilah lahir inovasi-inovasi brilian. Al-Khawarizmi mengembangkan aljabar dan memperkenalkan angka Hindu-Arab (termasuk nol) ke dunia. Ibnu Sina (Avicenna) menulis 'The Canon of Medicine' yang menjadi buku teks kedokteran standar di Eropa selama berabad-abad. Al-Kindi dianggap sebagai bapak filsafat Islam. Di bidang astronomi, para ilmuwan mengukur keliling bumi dengan akurasi yang menakjubkan dan mengembangkan astrolab."
      },
      {
        "type": "paragraph",
        "title": "Fragmentasi dan Kemunduran Politik",
        "text": "Ironisnya, saat kebudayaan dan ilmu pengetahuan mencapai puncaknya, kekuatan politik khalifah mulai terkikis. Wilayah kekhalifahan yang sangat luas sulit dikendalikan secara terpusat. Sejak abad ke-9, berbagai dinasti lokal mulai muncul dan memerintah secara semi-otonom, meskipun masih mengakui khalifah Abbasiyah sebagai pemimpin spiritual. Dinasti Aghlabiyah di Afrika Utara, Thuluniyah di Mesir, dan Samaniyah di Persia adalah beberapa contohnya. Pada pertengahan abad ke-10, kekuasaan politik khalifah menjadi sangat lemah. Mereka menjadi boneka di tangan dinasti militer yang kuat, pertama oleh Dinasti Buwaihi (Syiah Persia) dan kemudian oleh Dinasti Seljuk (Sunni Turki). Meskipun khalifah tidak lagi memegang kekuasaan temporal yang efektif, mereka tetap menjadi simbol persatuan umat Islam Sunni dan pusat keagamaan."
      },
      {
        "type": "paragraph",
        "title": "Kehancuran oleh Bangsa Mongol",
        "text": "Akhir tragis bagi Dinasti Abbasiyah datang pada tahun 1258 M. Pasukan Mongol di bawah pimpinan Hulagu Khan, cucu Jenghis Khan, menyerbu dan mengepung Baghdad. Setelah pertahanan kota runtuh, bangsa Mongol menghancurkan Baghdad tanpa ampun. Ratusan ribu penduduk dibantai. Perpustakaan-perpustakaan besar, termasuk Baitul Hikmah, dibakar dan buku-bukunya dilemparkan ke Sungai Tigris hingga airnya dikatakan menjadi hitam karena tinta. Khalifah terakhir, Al-Musta'sim, ditangkap dan dieksekusi, mengakhiri secara definitif Kekhalifahan Abbasiyah di Baghdad yang telah berdiri selama 508 tahun. Kejatuhan Baghdad menjadi pukulan telak bagi peradaban Islam dan menandai akhir dari Zaman Keemasan. Meskipun demikian, sisa-sisa keluarga Abbasiyah berhasil melarikan diri ke Mesir, di mana mereka diangkat sebagai khalifah seremonial di bawah perlindungan Kesultanan Mamluk, tetapi tanpa kekuatan politik sama sekali."
      }
    ]
  },
  {
    "id": "emas",
    "title": "Zaman Keemasan Islam",
    "icon": "fas fa-flask",
    "subtitle": "Sebuah era di mana peradaban Islam menjadi mercusuar ilmu pengetahuan bagi dunia.",
    "content": [
      {
        "type": "paragraph",
        "text": "Zaman Keemasan Islam, yang secara luas berlangsung dari pertengahan abad ke-8 hingga ke-13, merupakan periode pencapaian intelektual, budaya, dan ilmiah yang luar biasa dalam sejarah Islam. Berpusat di Baghdad pada masa Dinasti Abbasiyah, tetapi juga bersinar di pusat-pusat lain seperti Cordoba, Kairo, dan Samarkand, era ini menyaksikan kemajuan pesat di hampir semua bidang pengetahuan. Peradaban Islam pada masa ini tidak hanya melestarikan ilmu pengetahuan dari peradaban kuno seperti Yunani, Persia, dan India, tetapi juga mengembangkannya secara inovatif dan memberikan kontribusi orisinal yang kemudian menjadi fondasi bagi Renaisans di Eropa."
      },
      {
        "type": "paragraph",
        "title": "Gerakan Penerjemahan dan Baitul Hikmah",
        "text": "Kunci utama yang memicu Zaman Keemasan adalah Gerakan Penerjemahan besar-besaran yang disponsori oleh negara, terutama pada masa Khalifah Al-Ma'mun. Di Baitul Hikmah (Rumah Kebijaksanaan) di Baghdad, karya-karya fundamental dari filsuf dan ilmuwan Yunani seperti Plato, Aristoteles, Euclid, Ptolemy, dan Galen, serta teks-teks penting dari Persia dan India, diterjemahkan secara sistematis ke dalam bahasa Arab. Proses ini mengubah bahasa Arab menjadi bahasa ilmu pengetahuan utama di dunia. Namun, para sarjana Muslim tidak hanya berhenti pada penerjemahan. Mereka mempelajari, mengkritik, mengoreksi, dan mensintesis pengetahuan ini dengan pandangan dunia Islam, yang kemudian melahirkan penemuan-penemuan baru."
      },
      {
        "type": "list",
        "title": "Kontribusi dalam Berbagai Bidang Ilmu",
        "items": [
          "Matematika: Kontribusi paling signifikan adalah pengembangan aljabar oleh Muhammad ibn Musa al-Khawarizmi, yang namanya diabstraksikan menjadi kata 'algoritma'. Ia juga yang mempopulerkan sistem angka Hindu-Arab, termasuk konsep angka nol, yang merevolusi perhitungan. Ilmuwan lain seperti Omar Khayyam memberikan kontribusi besar pada geometri dan solusi persamaan kubik.",
          "Kedokteran: Bidang ini mencapai kemajuan luar biasa. Ibnu Sina (Avicenna) menulis 'Al-Qanun fi't-Tibb' (The Canon of Medicine), sebuah ensiklopedia kedokteran komprehensif yang menjadi rujukan utama di universitas-universitas Eropa hingga abad ke-17. Ar-Razi (Rhazes) adalah orang pertama yang secara akurat membedakan antara cacar dan campak. Rumah sakit (bimaristan) didirikan di kota-kota besar, yang tidak hanya merawat pasien tetapi juga berfungsi sebagai pusat pendidikan medis, dengan bangsal terpisah untuk penyakit yang berbeda, apotek, dan perpustakaan.",
          "Astronomi: Para astronom Muslim mengembangkan observatorium canggih untuk mengamati benda-benda langit. Mereka mengkritik dan memperbaiki model geosentris Ptolemy, yang kemudian mempengaruhi karya Copernicus. Mereka mengembangkan astrolab, sebuah instrumen kompleks untuk navigasi dan penentuan waktu shalat, serta menyusun katalog bintang yang akurat dan memberi nama banyak bintang yang masih digunakan hingga kini (misalnya, Aldebaran, Betelgeuse).",
          "Kimia: Jabir ibn Hayyan (Geber) dianggap sebagai 'Bapak Kimia'. Ia memperkenalkan metode eksperimental ke dalam kimia, mengubahnya dari alkimia mistis menjadi ilmu pengetahuan. Ia mengembangkan proses-proses dasar seperti distilasi, kristalisasi, sublimasi, dan evaporasi.",
          "Filsafat dan Ilmu Sosial: Filsuf seperti Al-Kindi, Al-Farabi, Ibnu Sina, dan Ibnu Rusyd (Averroes) berusaha mensintesis filsafat Yunani dengan ajaran Islam. Karya-karya mereka, terutama komentar Ibnu Rusyd terhadap Aristoteles, sangat berpengaruh dalam membangkitkan kembali studi filsafat di Eropa abad pertengahan. Ibnu Khaldun, pada abad ke-14, dianggap sebagai salah satu pendiri sosiologi dan historiografi modern dengan karyanya 'Muqaddimah'."
        ]
      },
      {
        "type": "paragraph",
        "title": "Seni, Arsitektur, dan Teknologi",
        "text": "Zaman Keemasan juga melahirkan pencapaian artistik dan teknologi. Arsitektur Islam menghasilkan mahakarya seperti Masjid Agung Samarra dengan menara spiralnya, Masjid Agung Cordoba dengan lengkungan tapal kudanya, dan Istana Alhambra di Granada. Seni kaligrafi, arabesque (pola geometris dan floral yang rumit), dan kerajinan logam mencapai tingkat kesempurnaan yang tinggi. Dalam teknologi, para insinyur seperti Al-Jazari merancang berbagai mesin otomatis yang cerdik, termasuk jam air dan robot-robot awal, yang ia dokumentasikan dalam 'Kitab Pengetahuan tentang Perangkat Mekanik yang Cerdik'. Pabrik kertas pertama di luar Tiongkok didirikan di Baghdad, yang memfasilitasi penyebaran pengetahuan secara luas."
      },
      {
        "type": "paragraph",
        "title": "Faktor-faktor Pendorong dan Akhir Era",
        "text": "Kejayaan ini didorong oleh beberapa faktor: ajaran Islam yang sangat mendorong pencarian ilmu, stabilitas politik dan kemakmuran ekonomi pada awal masa Abbasiyah, kebijakan khalifah yang menjadi patron ilmu pengetahuan, serta keterbukaan peradaban Islam untuk menyerap dan berdialog dengan budaya lain. Kemunduran Zaman Keemasan disebabkan oleh serangkaian faktor kompleks, termasuk fragmentasi politik internal, invasi dari luar (terutama Perang Salib dan penghancuran Baghdad oleh Mongol pada 1258), serta pergeseran fokus intelektual. Meskipun demikian, warisan Zaman Keemasan Islam tetap abadi, membentuk jembatan vital antara dunia kuno dan dunia modern."
      }
    ]
  },
  {
    "id": "andalusia",
    "title": "Sejarah Islam di Andalusia",
    "icon": "fas fa-mosque",
    "subtitle": "Kisah peradaban Muslim di Spanyol yang penuh dengan kemegahan dan toleransi.",
    "content": [
      {
        "type": "paragraph",
        "text": "Sejarah Islam di Andalusia, nama Arab untuk Semenanjung Iberia (Spanyol dan Portugal), adalah salah satu bab paling cemerlang dan kompleks dalam sejarah peradaban Islam dan Eropa. Selama hampir delapan abad (711-1492 M), Andalusia menjadi mercusuar ilmu pengetahuan, budaya, dan seni di Eropa yang saat itu sedang mengalami 'Zaman Kegelapan'. Peradaban ini melahirkan kota-kota megah seperti Cordoba, Sevilla, dan Granada, serta meninggalkan warisan arsitektur yang menakjubkan dan kontribusi intelektual yang mendalam. Kisah Andalusia adalah kisah tentang penaklukan, kejayaan, koeksistensi antaragama (convivencia), konflik, hingga kejatuhan yang tragis."
      },
      {
        "type": "paragraph",
        "title": "Penaklukan dan Pendirian Keamiran",
        "text": "Pada tahun 711 M, pasukan Muslim yang sebagian besar terdiri dari suku Berber dari Afrika Utara, di bawah komando jenderal Thariq bin Ziyad, menyeberangi selat yang memisahkan Afrika dan Eropa. Setelah mendarat di sebuah gunung yang kemudian dinamai Jabal Thariq (Gibraltar), mereka berhasil mengalahkan pasukan Visigoth yang saat itu menguasai Spanyol. Dalam beberapa tahun, hampir seluruh Semenanjung Iberia berada di bawah kendali Muslim. Awalnya, Andalusia adalah sebuah provinsi dari Kekhalifahan Umayyah di Damaskus. Namun, setelah Dinasti Umayyah di timur digulingkan oleh Abbasiyah pada 750 M, seorang pangeran Umayyah yang selamat, Abdurrahman I (Ad-Dakhil atau 'Sang Imigran'), berhasil melarikan diri ke Andalusia. Pada tahun 756 M, ia mendirikan Keamiran Umayyah yang independen di Cordoba, melepaskan diri secara politik dari kekuasaan Abbasiyah di Baghdad."
      },
      {
        "type": "paragraph",
        "title": "Puncak Kejayaan: Kekhalifahan Cordoba",
        "text": "Puncak kemegahan Andalusia terjadi pada abad ke-10 di bawah kepemimpinan Abdurrahman III. Pada tahun 929 M, ia memproklamasikan dirinya sebagai Khalifah, mendirikan Kekhalifahan Cordoba dan menyaingi kekuasaan Abbasiyah di Baghdad dan Fatimiyah di Mesir. Cordoba di bawah pemerintahannya menjadi kota terbesar, termakmur, dan paling beradab di Eropa. Diperkirakan populasinya mencapai setengah juta jiwa. Kota ini memiliki jalanan beraspal, lampu jalan, sistem irigasi canggih, rumah sakit, dan lebih dari 70 perpustakaan, dengan perpustakaan pusat yang konon menyimpan hingga 400.000 jilid buku. Masjid Agung Cordoba (Mezquita), dengan pilar-pilar dan lengkungan tapal kuda gandanya yang ikonik, menjadi salah satu keajaiban arsitektur dunia."
      },
      {
        "type": "paragraph",
        "title": "Ilmu Pengetahuan dan Convivencia",
        "text": "Andalusia menjadi jembatan intelektual antara dunia Islam dan Eropa. Para sarjana Muslim, Yahudi, dan Kristen hidup berdampingan dalam sebuah periode yang dikenal sebagai La Convivencia (koeksistensi), meskipun tidak selalu harmonis. Mereka bekerja sama menerjemahkan karya-karya Yunani dan Arab ke dalam bahasa Latin. Tokoh-tokoh besar lahir dari peradaban ini, seperti filsuf Ibnu Rusyd (Averroes), yang komentarnya terhadap Aristoteles sangat mempengaruhi pemikiran Eropa. Ada pula dokter bedah brilian Az-Zahrawi (Abulcasis), yang menemukan banyak instrumen bedah. Di kalangan Yahudi, muncul filsuf besar Maimonides. Kemajuan terjadi di berbagai bidang, mulai dari kedokteran, pertanian (memperkenalkan tanaman baru seperti jeruk dan tebu), astronomi, hingga musik dan puisi."
      },
      {
        "type": "paragraph",
        "title": "Fragmentasi dan Kejatuhan",
        "text": "Setelah kematian penguasa kuat Al-Mansur pada awal abad ke-11, Kekhalifahan Cordoba mengalami perang saudara dan terpecah menjadi banyak kerajaan kecil yang disebut 'taifa'. Meskipun beberapa taifa seperti Sevilla dan Granada tetap menjadi pusat budaya yang cemerlang, perpecahan ini melemahkan kekuatan politik dan militer Muslim secara keseluruhan. Kelemahan ini dimanfaatkan oleh kerajaan-kerajaan Kristen di utara (seperti Castile, Aragon, dan Portugal) yang secara bertahap melancarkan kampanye penaklukan kembali yang disebut Reconquista. Mereka merebut kota-kota penting satu per satu: Toledo pada 1085, Cordoba pada 1236, dan Sevilla pada 1248. Kekuasaan Islam akhirnya hanya tersisa di Keamiran Granada di selatan, yang diperintah oleh Dinasti Nasrid. Selama 250 tahun, Granada bertahan sebagai benteng terakhir Muslim, dan pada masa inilah Istana Alhambra yang legendaris dibangun. Namun, pada tahun 1492, setelah penyatuan kerajaan Castile dan Aragon melalui pernikahan Ferdinand dan Isabella, Granada akhirnya menyerah. Peristiwa ini menandai akhir dari pemerintahan Muslim di Semenanjung Iberia. Setelah penaklukan, Muslim dan Yahudi dipaksa untuk pindah agama ke Kristen, diusir, atau menghadapi Inkuisisi Spanyol, sebuah akhir yang tragis bagi sebuah peradaban yang pernah begitu gemilang."
      }
    ]
  },
  {
    "id": "konstantinopel",
    "title": "Sejarah Penaklukan Konstantinopel",
    "icon": "fas fa-city",
    "subtitle": "Kisah jatuhnya ibu kota Romawi Timur dan pemenuhan Bisyarah Rasulullah SAW.",
    "content": [
      {
        "type": "paragraph",
        "title": "Pengantar: Kota Dua Benua, Permata Dunia",
        "text": "Konstantinopel, yang kini dikenal sebagai Istanbul, adalah sebuah kota dengan takdir luar biasa. Terletak di persimpangan strategis antara Eropa dan Asia, mengendalikan jalur laut vital dari Laut Hitam ke Mediterania, ia adalah permata yang diperebutkan selama berabad-abad. Selama lebih dari seribu tahun, ia menjabat sebagai ibu kota Kekaisaran Romawi Timur (Bizantium), pusat peradaban Kristen Ortodoks, dan benteng pertahanan paling tangguh di dunia. Tembok Theodosian yang legendaris, berlapis tiga dan menjulang tinggi, telah menggagalkan puluhan pengepungan. Namun, bagi dunia Islam, penaklukan kota ini bukan sekadar ambisi militer; ia adalah sebuah tujuan spiritual, sebuah nubuwwah (ramalan) atau bisyarah (kabar gembira) yang disampaikan langsung oleh lisan Rasulullah Muhammad SAW. Dalam sebuah hadits masyhur, beliau bersabda, \"Sungguh, Konstantinopel akan ditaklukkan. Sebaik-baik pemimpin adalah pemimpinnya, dan sebaik-baik pasukan adalah pasukannya.\" (HR. Ahmad). Bisyarah inilah yang menginspirasi para khalifah dan sultan selama 800 tahun untuk mencoba meraih kemuliaan tersebut, hingga akhirnya takdir itu terwujud di tangan seorang pemuda jenius: Sultan Mehmed II."
      },
      {
        "type": "paragraph",
        "title": "Upaya-upaya Awal dan Warisan Abu Ayyub Al-Ansari",
        "text": "Api semangat untuk menaklukkan Konstantinopel telah menyala sejak era awal Islam. Beberapa ekspedisi besar dilancarkan pada masa Kekhalifahan Umayyah. Pengepungan pertama yang signifikan terjadi pada masa Khalifah Muawiyah bin Abi Sufyan sekitar tahun 674 M. Dalam ekspedisi inilah turut serta seorang sahabat Nabi yang sudah sangat lanjut usia, Abu Ayyub Al-Ansari. Beliau adalah sahabat mulia yang rumahnya menjadi tempat singgah pertama Rasulullah saat hijrah ke Madinah. Didorong oleh kerinduan untuk menjadi bagian dari 'sebaik-baik pasukan', beliau tetap ikut berjihad meski usianya telah senja. Beliau jatuh sakit dan wafat selama pengepungan, dan sesuai wasiatnya, dimakamkan sedekat mungkin dengan tembok Konstantinopel. Makamnya kelak menjadi situs spiritual penting setelah penaklukan. Meskipun semua upaya awal ini gagal, mereka menanamkan sebuah warisan impian dan cita-cita yang tak pernah padam dalam sanubari umat Islam."
      },
      {
        "type": "paragraph",
        "title": "Sultan Mehmed II: Sang Penakluk yang Dipersiapkan",
        "text": "Pada pertengahan abad ke-15, Kekaisaran Bizantium hanyalah bayang-bayang dari kejayaan masa lalunya, wilayahnya menyusut drastis dan hanya tersisa kota Konstantinopel dan sekitarnya. Sebaliknya, Kesultanan Utsmaniyah telah tumbuh menjadi kekuatan dominan yang mengelilinginya. Pada tahun 1451, tahta Utsmaniyah diwarisi oleh seorang pangeran muda berusia 21 tahun, Sultan Mehmed II. Sejak kecil, ia telah dididik oleh para ulama terbaik, termasuk guru spiritualnya, Syekh Aaq Syamsuddin, yang terus-menerus menanamkan bisyarah Nabi di dalam jiwanya. Mehmed II bukan hanya seorang pejuang yang tangguh, tetapi juga seorang intelektual jenius. Ia menguasai banyak bahasa, termasuk Arab, Persia, Latin, dan Yunani. Ia mempelajari sejarah para penakluk besar seperti Alexander Agung dan Julius Caesar. Ia adalah seorang ahli strategi militer dan insinyur yang brilian. Seluruh hidupnya, sejak ia memahami hadits tersebut, terfokus pada satu tujuan: menjadi pemimpin yang diramalkan oleh Rasulullah."
      },
      {
        "type": "list",
        "title": "Pengepungan Agung (6 April – 29 Mei 1453)",
        "items": [
          {
            "title": "Persiapan Genius",
            "points": [
              "Benteng Rumeli Hisarı: Langkah pertama Mehmed adalah membangun sebuah benteng raksasa di tepi Selat Bosphorus, tepat di seberang benteng yang sudah ada di sisi Asia. Benteng yang selesai dibangun dalam waktu singkat ini (kurang dari 4 bulan) secara efektif memutus jalur bantuan dari Laut Hitam ke Konstantinopel.",
              "Meriam Raksasa: Mehmed mempekerjakan seorang insinyur Hongaria bernama Orban untuk merancang dan membangun meriam-meriam terbesar yang pernah ada di dunia pada saat itu. Yang paling terkenal adalah 'Meriam Basilica', sebuah meriam perunggu raksasa yang membutuhkan puluhan lembu untuk menariknya dan mampu melontarkan bola batu seberat lebih dari 500 kg sejauh satu mil. Meriam inilah yang menjadi kunci untuk meruntuhkan Tembok Theodosian.",
              "Pasukan Kolosal: Ia mengumpulkan pasukan yang sangat besar, diperkirakan antara 80.000 hingga 150.000 prajurit, termasuk korps Janissari yang elit. Armada lautnya juga dikerahkan untuk memblokade kota dari laut."
            ]
          },
          {
            "title": "Pertahanan yang Gigih",
            "points": [
              "Kaisar Konstantinus XI Palaiologos, kaisar Bizantium terakhir, memimpin pertahanan dengan sangat heroik. Namun, pasukannya sangat kecil, hanya sekitar 7.000 prajurit, yang terdiri dari tentara Bizantium dan sukarelawan dari Genoa dan Venesia di bawah pimpinan Giovanni Giustiniani.",
              "Rantai Emas: Pertahanan laut utama mereka adalah sebuah rantai raksasa yang direntangkan di mulut Teluk Tanduk Emas (Golden Horn), sebuah pelabuhan alami yang vital, untuk mencegah masuknya armada Utsmaniyah."
            ]
          },
          {
            "title": "Manuver Paling Brilian dalam Sejarah Militer",
            "points": [
              "Setelah serangan laut berulang kali gagal menembus rantai Tanduk Emas, Mehmed II melakukan sebuah manuver yang dianggap mustahil. Pada malam 22 April, ia memerintahkan sekitar 70 kapalnya untuk ditarik keluar dari Bosphorus, melintasi daratan berbukit di wilayah Galata menggunakan gelondongan kayu yang diminyaki, dan diluncurkan kembali ke dalam Tanduk Emas, sepenuhnya melewati rantai penghalang. Manuver ini mengejutkan para pengepung, merusak moral mereka, dan memaksa mereka untuk membagi pasukan pertahanan mereka yang sudah tipis."
            ]
          },
          {
            "title": "Serangan Terakhir dan Jatuhnya Kota",
            "points": [
              "Setelah pengepungan selama 53 hari yang diwarnai dengan bombardir tanpa henti, serangan terowongan bawah tanah, dan berbagai pertempuran kecil, Mehmed II merencanakan serangan pamungkas. Pada dini hari tanggal 29 Mei 1453, serangan besar-besaran dilancarkan dari tiga sisi. Setelah pertempuran yang sangat sengit, di mana Giustiniani terluka parah dan Kaisar Konstantinus XI gugur saat bertempur di dekat gerbang, pasukan Janissari akhirnya berhasil menembus tembok di sektor Kerkoporta dan menaikkan bendera Utsmaniyah di atas menara. Pertahanan kota pun runtuh."
            ]
          }
        ]
      },
      {
        "type": "paragraph",
        "title": "Transformasi Menjadi Istanbul",
        "text": "Sultan Mehmed II memasuki kota pada sore harinya. Ia langsung menuju gereja termegah di dunia Kristen, Hagia Sophia. Ia turun dari kudanya, mengambil segenggam tanah, dan menaburkannya di atas sorbannya sebagai tanda kerendahan hati kepada Allah. Ia kemudian memerintahkan agar Hagia Sophia diubah menjadi masjid, sebagai simbol kemenangan Islam. Shalat Jumat pertama pun dilaksanakan di sana. Ia menjamin keamanan dan kebebasan beragama bagi penduduk Kristen yang tersisa dan mengundang orang-orang dari seluruh wilayah kekuasaannya untuk menghuni kota tersebut. Ia memulai program rekonstruksi besar-besaran, mengubah Konstantinopel menjadi ibu kota baru Kesultanan Utsmaniyah yang megah dan kosmopolitan, yang kemudian dikenal sebagai Istanbul. Penaklukan ini tidak hanya mengakhiri Kekaisaran Romawi yang telah berusia 1.500 tahun, tetapi juga menandai berakhirnya Abad Pertengahan dan dimulainya era dominasi Utsmaniyah di panggung dunia. Bagi umat Islam, peristiwa ini adalah pemenuhan janji Nabi, sebuah kemenangan iman, strategi, dan keberanian yang akan terus dikenang sepanjang masa."
      }
    ],
    "dalil": {
      "text": "Rasulullah SAW bersabda, 'Sungguh, Konstantinopel akan ditaklukkan. Sebaik-baik pemimpin adalah pemimpinnya, dan sebaik-baik pasukan adalah pasukannya.'",
      "source": "HR. Ahmad"
    }
  }
];
