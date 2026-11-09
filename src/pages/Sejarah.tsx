import React, { useState, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { 
  History, BookOpen, Landmark, Map, ChevronRight, X, 
  Search, Bookmark, Copy, Printer, Share2, ArrowLeft, 
  CheckCircle2, RefreshCw, ScrollText, Sparkles, Filter, 
  Clock, Shield, Star, Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { 
  fetchSejarahArticles, 
  getCachedSejarahBySlug, 
  getSejarahBookmarkedIds, 
  toggleSejarahBookmark,
  cleanSejarahContentHtml,
  fetchSejarahArticleBySlug
} from "../services/sejarahService";
import { SejarahArticleItem, SejarahSubmenu } from "../types/sejarah";

// Existing "Sejarah Islam" historical eras dataset
const peradabanSections = [
  {
    id: "quran",
    title: "Sejarah Turunnya Al-Qur'an",
    icon: BookOpen,
    era: "Masa Kenabian (610–632 M)",
    content: "Al-Qur'an diturunkan secara berangsur-angsur selama kurang lebih 23 tahun kepada Nabi Muhammad SAW melalui perantara Malaikat Jibril. Dimulai di Gua Hira dengan wahyu pertama Surat Al-Alaq ayat 1-5.",
    fullContent: `
      <h3>Mengenal Sejarah Al-Qur’an</h3>
      <p>Al-Qur'an adalah kitab suci umat Islam yang merupakan kalam Allah SWT yang diturunkan kepada Nabi Muhammad SAW melalui perantara Malaikat Jibril. Proses turunnya Al-Qur'an terjadi secara berangsur-angsur selama kurang lebih 23 tahun (13 tahun di Makkah dan 10 tahun di Madinah).</p>
      
      <h4>Periode Turunnya Al-Qur'an</h4>
      <p><strong>1. Periode Makkah (Makkiyah):</strong> Dimulai pada malam 17 Ramadhan (Nuzulul Qur'an) saat Nabi Muhammad SAW sedang bertahannuts di Gua Hira. Wahyu pertama yang turun adalah Surat Al-Alaq ayat 1-5. Ayat-ayat yang turun di periode ini umumnya pendek, menekankan pada penguatan tauhid, akidah, akhlak, dan berita tentang hari kiamat.</p>
      <p><strong>2. Periode Madinah (Madaniyah):</strong> Terjadi setelah Nabi Muhammad SAW hijrah ke Madinah. Ayat-ayat periode ini umumnya lebih panjang dan mengatur tentang hukum-hukum Islam (syariat), kemasyarakatan, politik, peperangan, dan hubungan antarumat beragama.</p>
      
      <h4>Sejarah Pembukuan Al-Qur'an</h4>
      <p><strong>Masa Rasulullah SAW:</strong> Al-Qur'an dicatat oleh para sahabat di pelepah kurma, batu, kulit binatang, dan tulang-belulang, serta dihafal oleh banyak sahabat.</p>
      <p><strong>Masa Khalifah Abu Bakar:</strong> Setelah banyak penghafal Al-Qur'an gugur dalam Perang Yamamah, Umar bin Khattab mengusulkan pengumpulan Al-Qur'an. Abu Bakar menunjuk Zaid bin Tsabit untuk memimpin pengumpulan naskah-naskah tersebut menjadi satu mushaf.</p>
      <p><strong>Masa Khalifah Utsman bin Affan:</strong> Karena meluasnya wilayah Islam dan munculnya perbedaan dialek bacaan, Utsman bin Affan memerintahkan penyalinan mushaf standar yang dikenal sebagai Mushaf Utsmani. Mushaf ini kemudian dikirim ke berbagai wilayah Islam dan menjadi standar tunggal hingga saat ini.</p>
    `
  },
  {
    id: "khulafaur",
    title: "Sejarah Khulafaur Rasyidin",
    icon: Landmark,
    era: "Era Sahabat Utama (632–661 M)",
    content: "Masa kepemimpinan empat sahabat Nabi: Abu Bakar Ash-Shiddiq, Umar bin Khattab, Utsman bin Affan, dan Ali bin Abi Thalib. Masa ini merupakan zaman keemasan Islam dalam hal keadilan dan perluasan dakwah.",
    fullContent: `
      <h3>Mengenal Khulafaur Rasyidin</h3>
      <p>Khulafaur Rasyidin berarti "pemimpin yang mendapat petunjuk". Mereka adalah empat sahabat utama Nabi Muhammad SAW yang memimpin umat Islam setelah wafatnya Rasulullah.</p>
      
      <h4>1. Abu Bakar Ash-Shiddiq (632–634 M)</h4>
      <p>Beliau adalah khalifah pertama. Fokus utamanya adalah menjaga stabilitas umat Islam yang baru saja ditinggal wafat Nabi. Beliau berhasil memadamkan pemberontakan kaum murtad dan nabi palsu dalam Perang Riddah, serta memulai proses pengumpulan Al-Qur'an.</p>
      
      <h4>2. Umar bin Khattab (634–644 M)</h4>
      <p>Dikenal sebagai Al-Faruq (pembeda antara yang benar dan salah). Di bawah kepemimpinannya, wilayah Islam meluas hingga ke Persia, Syam, dan Mesir. Beliau membentuk administrasi negara yang modern, menetapkan kalender Hijriah, dan mendirikan lembaga-lembaga pemerintahan (Diwan).</p>
      
      <h4>3. Utsman bin Affan (644–656 M)</h4>
      <p>Dikenal sebagai Dzun Nurain (pemilik dua cahaya). Beliau melanjutkan perluasan wilayah dan memberikan kontribusi besar dalam pembukuan Al-Qur'an menjadi satu mushaf standar (Mushaf Utsmani). Beliau juga membangun armada laut Islam yang pertama.</p>
      
      <h4>4. Ali bin Abi Thalib (656–661 M)</h4>
      <p>Sepupu sekaligus menantu Nabi. Masa kepemimpinannya diwarnai dengan tantangan internal yang besar. Meskipun terjadi berbagai ujian politik, Ali tetap dikenal sebagai pemimpin yang sangat cerdas, adil, berilmu luas, dan teguh dalam memegang prinsip syariat.</p>
    `
  },
  {
    id: "umayyah",
    title: "Sejarah Dinasti Umayyah",
    icon: Map,
    era: "Damaskus & Andalusia (661–750 M)",
    content: "Dinasti pertama setelah masa Khulafaur Rasyidin, berpusat di Damaskus. Berperan besar dalam perluasan wilayah Islam hingga ke Spanyol (Andalusia) dan Asia Tengah.",
    fullContent: `
      <h3>Sejarah Bani Umayyah</h3>
      <p>Bani Umayyah adalah kekhalifahan Islam pertama setelah berakhirnya masa Khulafaur Rasyidin. Didirikan oleh Muawiyah bin Abu Sufyan pada tahun 661 M setelah peristiwa Amul Jama'ah (Tahun Persatuan).</p>
      
      <h4>Sistem Pemerintahan</h4>
      <p>Dinasti Umayyah mengubah sistem kepemimpinan menjadi sistem monarki turun-temurun. Pusat pemerintahan dipindahkan dari Madinah ke Damaskus, Suriah.</p>
      
      <h4>Masa Kejayaan</h4>
      <p>Masa kejayaan dicapai pada masa Khalifah Al-Walid bin Abdul Malik dan Umar bin Abdul Aziz. Wilayah Islam meluas hingga ke India di timur dan Andalusia (Spanyol) di barat. Perkembangan terjadi di berbagai bidang:</p>
      <ul>
        <li><strong>Arsitektur:</strong> Pembangunan Masjid Agung Damaskus dan Kubah Shakhrah (Dome of the Rock).</li>
        <li><strong>Administrasi:</strong> Penggunaan bahasa Arab sebagai bahasa resmi administrasi dan pencetakan mata uang dinar/dirham Islam.</li>
        <li><strong>Ilmu Pengetahuan:</strong> Dimulainya penerjemahan karya-karya ilmiah dan perkembangan ilmu hadits serta fiqih.</li>
      </ul>
      
      <h4>Keruntuhan</h4>
      <p>Dinasti ini berakhir di Damaskus pada tahun 750 M, namun salah satu keturunannya, Abdurrahman Ad-Dakhil, berhasil mendirikan kembali kekhalifahan Umayyah di Andalusia (Spanyol) yang bertahan selama beberapa abad berikutnya.</p>
    `
  },
  {
    id: "abbasiyah",
    title: "Sejarah Dinasti Abbasiyah",
    icon: Landmark,
    era: "Zaman Keemasan Baghdad (750–1258 M)",
    content: "Masa keemasan ilmu pengetahuan Islam (Golden Age of Islam). Berpusat di Baghdad, melahirkan banyak ilmuwan besar seperti Al-Khwarizmi dan Ibnu Sina.",
    fullContent: `
      <h3>Sejarah Dinasti Abbasiyah</h3>
      <p>Dinasti Abbasiyah didirikan oleh Abu al-Abbas as-Saffah pada tahun 750 M. Dinasti ini berkuasa selama lebih dari lima abad dengan pusat peradaban megah di Baghdad, Irak.</p>
      
      <h4>Zaman Keemasan Islam (The Golden Age)</h4>
      <p>Puncak kejayaan terjadi pada masa Khalifah Harun al-Rasyid dan putranya, Al-Ma'mun. Baghdad menjadi pusat ilmu dunia. Salah satu warisan terbesarnya adalah <strong>Bayt al-Hikmah</strong> (Rumah Kebijaksanaan), sebuah perpustakaan, akademi penerjemahan, dan pusat riset sains raksasa.</p>
      
      <h4>Kontribusi Ilmu Pengetahuan</h4>
      <p>Ilmu pengetahuan berkembang pesat di berbagai cabang:</p>
      <ul>
        <li><strong>Al-Khwarizmi:</strong> Penemu Aljabar dan konsep algoritma modern.</li>
        <li><strong>Ibnu Sina (Avicenna):</strong> Pengarang Al-Qanun fi at-Tibb, rujukan kedokteran dunia.</li>
        <li><strong>Al-Biruni:</strong> Bapak geodesi dan astronomi komparatif.</li>
        <li><strong>Jabir bin Hayyan:</strong> Perintis ilmu kimia eksperimental.</li>
      </ul>
      
      <h4>Keruntuhan</h4>
      <p>Kemunduran terjadi akibat perpecahan internal dan mencapai titik akhir saat bangsa Mongol di bawah Hulagu Khan menyerbu dan menghancurkan Baghdad pada tahun 1258 M.</p>
    `
  },
  {
    id: "indonesia",
    title: "Sejarah Islam di Indonesia",
    icon: Map,
    era: "Nusantara (Abad ke-7 – Sekarang)",
    content: "Islam masuk ke Nusantara melalui jalur perdagangan dan dakwah damai oleh para pedagang Arab, Gujarat, dan Persia. Peran Wali Songo sangat krusial dalam penyebaran Islam di tanah Jawa.",
    fullContent: `
      <h3>Sejarah Islam di Indonesia</h3>
      <p>Islam masuk ke wilayah Nusantara melalui proses yang damai, berkeadaban, dan bertahap, menjadikannya agama mayoritas dengan corak budaya yang toleran dan santun.</p>
      
      <h4>Teori Masuknya Islam</h4>
      <ul>
        <li><strong>Teori Makkah:</strong> Islam masuk langsung dari tanah Arab pada abad ke-7 (masa awal sahabat Nabi).</li>
        <li><strong>Teori Gujarat:</strong> Islam dibawa oleh pedagang dari Gujarat, India pada abad ke-13.</li>
        <li><strong>Teori Persia:</strong> Pengaruh budaya Persia pada masa-masa awal kerajaan Islam di pesisir Sumatera.</li>
      </ul>
      
      <h4>Peran Wali Songo</h4>
      <p>Di Pulau Jawa, dakwah Islam dipelopori oleh Wali Songo dengan pendekatan kultural yang bijak, menyelaraskan ajaran tauhid dengan budaya masyarakat lokal tanpa merusak akidah.</p>
      
      <h4>Kerajaan-Kerajaan Islam Nusantara</h4>
      <p>Penyebaran Islam semakin kuat dengan berdirinya kesultanan-kesultanan bersejarah seperti Samudera Pasai, Kesultanan Demak, Mataram Islam, Kesultanan Banten, Gowa-Tallo, serta Ternate dan Tidore.</p>
    `
  }
];

export default function Sejarah() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = (searchParams.get("tab") as SejarahSubmenu) || "artikel";
  const selectedSlug = searchParams.get("slug");

  // Articles state (from dakwah.id)
  const [articles, setArticles] = useState<SejarahArticleItem[]>([]);
  const [loadingArticles, setLoadingArticles] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>(() => getSejarahBookmarkedIds());
  const [showOnlyBookmarks, setShowOnlyBookmarks] = useState<boolean>(false);

  // Reader state for dakwah.id articles
  const [activeArticle, setActiveArticle] = useState<SejarahArticleItem | null>(null);
  const [loadingArticle, setLoadingArticle] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<"normal" | "large">("normal");
  const [copyToast, setCopyToast] = useState<boolean>(false);

  // Existing "Sejarah Islam" peradaban modal state
  const [activePeradabanId, setActivePeradabanId] = useState<string | null>(null);
  const [showFullPeradaban, setShowFullPeradaban] = useState<string | null>(null);

  const readerTopRef = useRef<HTMLDivElement>(null);

  // Sync bookmarks
  useEffect(() => {
    const handleBookmarkChange = () => {
      setBookmarkedIds(getSejarahBookmarkedIds());
    };
    window.addEventListener("tarbiyah_sejarah_bookmark_changed", handleBookmarkChange);
    return () => window.removeEventListener("tarbiyah_sejarah_bookmark_changed", handleBookmarkChange);
  }, []);

  // Fetch articles from dakwah.id
  useEffect(() => {
    loadArticles(1, searchQuery);
  }, [searchQuery]);

  // Handle URL slug parameter & internal navigation
  useEffect(() => {
    if (selectedSlug) {
      handleNavigateSlug(selectedSlug, false);
    } else {
      setActiveArticle(null);
    }
  }, [selectedSlug]);

  const handleNavigateSlug = async (slug: string, updateUrl: boolean = true) => {
    if (updateUrl) {
      setSearchParams({ tab: "artikel", slug });
    }

    // 1. Check in already loaded articles
    const found = articles.find(a => a.slug === slug);
    if (found && found.contentHtml && found.contentHtml.length > 200) {
      setActiveArticle(found);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 2. Check in cached dataset
    const cached = getCachedSejarahBySlug(slug);
    if (cached && cached.contentHtml && cached.contentHtml.length > 200) {
      setActiveArticle(cached);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 3. Fetch from API with loading indicator
    setLoadingArticle(true);
    try {
      const fetched = await fetchSejarahArticleBySlug(slug);
      if (fetched) {
        setActiveArticle(fetched);
        setArticles(prev => {
          if (!prev.some(a => a.slug === slug)) {
            return [fetched, ...prev];
          }
          return prev.map(a => a.slug === slug ? fetched : a);
        });
      }
    } catch (err) {
      console.error("Error fetching sejarah article by slug:", slug, err);
    } finally {
      setLoadingArticle(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const loadArticles = async (page: number, query: string = "") => {
    if (page === 1) setLoadingArticles(true);
    else setLoadingMore(true);

    try {
      const data = await fetchSejarahArticles(page, query);
      if (page === 1) {
        setArticles(data.items);
      } else {
        setArticles(prev => {
          const ids = new Set(prev.map(a => a.id));
          const unique = data.items.filter(a => !ids.has(a.id));
          return [...prev, ...unique];
        });
      }
      setTotalPages(data.totalPages);
      setTotalCount(data.totalCount);
      setCurrentPage(page);
    } catch (err) {
      console.error("Error loading sejarah articles:", err);
    } finally {
      setLoadingArticles(false);
      setLoadingMore(false);
    }
  };

  const handleSwitchTab = (tab: SejarahSubmenu) => {
    setActiveArticle(null);
    setShowFullPeradaban(null);
    setSearchParams({ tab });
  };

  const handleOpenArticle = (item: SejarahArticleItem) => {
    setSearchParams({ tab: "artikel", slug: item.slug });
    if (!item.contentHtml || item.contentHtml.length < 200) {
      handleNavigateSlug(item.slug, false);
    } else {
      setActiveArticle(item);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBackToArticles = () => {
    setActiveArticle(null);
    setSearchParams({ tab: "artikel" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest("a");
    if (!target) return;
    const slug = target.getAttribute("data-slug") || 
      (target.getAttribute("href")?.includes("slug=") 
        ? new URL(target.href, window.location.origin).searchParams.get("slug") 
        : null);

    if (slug) {
      e.preventDefault();
      handleNavigateSlug(slug, true);
    }
  };

  const handleToggleBookmark = (id: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    toggleSejarahBookmark(id);
    setBookmarkedIds(getSejarahBookmarkedIds());
  };

  const handleCopyText = () => {
    if (!activeArticle) return;
    const parser = new DOMParser();
    const doc = parser.parseFromString(activeArticle.contentHtml, "text/html");
    const text = doc.body.textContent || doc.body.innerText || "";
    const formatted = `${activeArticle.title}\n\n${text}`;
    navigator.clipboard.writeText(formatted);
    setCopyToast(true);
    setTimeout(() => setCopyToast(false), 2500);
  };

  const handleShare = async () => {
    if (!activeArticle) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: activeArticle.title,
          text: `Artikel Sejarah: ${activeArticle.title}`,
          url: window.location.href
        });
      } catch {
        // cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopyToast(true);
      setTimeout(() => setCopyToast(false), 2500);
    }
  };

  const filteredArticles = useMemo(() => {
    return articles.filter(a => {
      if (showOnlyBookmarks && !bookmarkedIds.includes(a.id)) {
        return false;
      }
      return true;
    });
  }, [articles, showOnlyBookmarks, bookmarkedIds]);

  const activePeradabanSection = peradabanSections.find(s => s.id === showFullPeradaban);

  return (
    <div className="space-y-6 w-full max-w-full min-w-0 overflow-x-hidden">
      {/* 1. Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 text-white p-4 sm:p-6 md:p-8 shadow-xl relative overflow-hidden w-full max-w-full min-w-0">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-semibold mb-3">
            <History size={14} />
            <span>Khazanah Peradaban & Tarikh Islam</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            Sejarah
          </h1>

          <p className="text-emerald-100/90 text-sm md:text-base mt-2 leading-relaxed">
            Menelusuri jejak peradaban Islam dari masa kenabian, kepemimpinan para sahabat, 
            perkembangan dinasti ilmu pengetahuan, hingga artikel sejarah pilihan terpercaya.
          </p>

          {/* Submenu Navigation Tabs */}
          <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row gap-2 sm:gap-2.5 w-full max-w-full min-w-0">
            <button
              onClick={() => handleSwitchTab("artikel")}
              className={cn(
                "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl text-xs md:text-sm font-bold transition shadow-sm w-full sm:w-auto",
                currentTab === "artikel"
                  ? "bg-amber-400 text-emerald-950 shadow-md scale-102"
                  : "bg-emerald-900/60 hover:bg-emerald-800 text-emerald-100 hover:text-white border border-emerald-700/60"
              )}
            >
              <ScrollText size={16} />
              <span>Artikel Sejarah (Dakwah.id)</span>
              {totalCount > 0 && (
                <span className={cn(
                  "px-2 py-0.5 rounded-full text-[11px] font-extrabold",
                  currentTab === "artikel" ? "bg-emerald-900 text-amber-300" : "bg-emerald-800 text-emerald-200"
                )}>
                  {totalCount}
                </span>
              )}
            </button>

            <button
              onClick={() => handleSwitchTab("peradaban")}
              className={cn(
                "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl text-xs md:text-sm font-bold transition shadow-sm w-full sm:w-auto",
                currentTab === "peradaban"
                  ? "bg-amber-400 text-emerald-950 shadow-md scale-102"
                  : "bg-emerald-900/60 hover:bg-emerald-800 text-emerald-100 hover:text-white border border-emerald-700/60"
              )}
            >
              <Landmark size={16} />
              <span>Submenu: Sejarah Islam</span>
            </button>
          </div>
        </div>

        <div className="absolute -right-8 -bottom-10 opacity-10 pointer-events-none text-white">
          <History size={240} />
        </div>
      </div>

      {/* 2. SUBMENU 1: Artikel Sejarah dari dakwah.id */}
      {currentTab === "artikel" && (
        <div className="space-y-6 w-full max-w-full min-w-0">
          {/* Reader View Mode (if an article is selected) */}
          {activeArticle ? (
            <div ref={readerTopRef} className="space-y-4 w-full max-w-full min-w-0">
              {/* Reader Control Bar */}
              <div className="sticky top-16 lg:top-4 z-30 bg-white/95 backdrop-blur-md border border-emerald-100 rounded-2xl p-2.5 sm:p-3 shadow-md flex items-center justify-between gap-2 no-print w-full max-w-full min-w-0">

                <button
                  onClick={handleBackToArticles}
                  className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 px-3 py-2 rounded-xl transition"
                >
                  <ArrowLeft size={16} />
                  <span>Daftar Artikel Sejarah</span>
                </button>

                {/* Font Size & Actions */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl text-xs">
                    <button
                      onClick={() => setFontSize("normal")}
                      className={cn(
                        "px-2.5 py-1 rounded-lg font-bold transition",
                        fontSize === "normal" ? "bg-white text-emerald-800 shadow-xs" : "text-gray-600 hover:text-gray-900"
                      )}
                      title="Ukuran Normal"
                    >
                      A
                    </button>
                    <button
                      onClick={() => setFontSize("large")}
                      className={cn(
                        "px-2.5 py-1 rounded-lg font-bold transition",
                        fontSize === "large" ? "bg-white text-emerald-800 shadow-xs" : "text-gray-600 hover:text-gray-900"
                      )}
                      title="Ukuran Besar"
                    >
                      A+
                    </button>
                  </div>

                  <button
                    onClick={() => handleToggleBookmark(activeArticle.id)}
                    className={cn(
                      "p-2 rounded-xl transition border",
                      bookmarkedIds.includes(activeArticle.id)
                        ? "bg-amber-50 text-amber-600 border-amber-300"
                        : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                    )}
                    title="Simpan Artikel"
                  >
                    <Bookmark size={18} className={bookmarkedIds.includes(activeArticle.id) ? "fill-amber-500" : ""} />
                  </button>

                  <button
                    onClick={handleCopyText}
                    className="p-2 rounded-xl bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 border border-gray-200 transition"
                    title="Salin Teks"
                  >
                    <Copy size={18} />
                  </button>

                  <button
                    onClick={() => window.print()}
                    className="p-2 rounded-xl bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 border border-gray-200 transition"
                    title="Cetak Artikel"
                  >
                    <Printer size={18} />
                  </button>

                  <button
                    onClick={handleShare}
                    className="p-2 rounded-xl bg-emerald-700 text-white hover:bg-emerald-800 transition shadow-xs"
                    title="Bagikan"
                  >
                    <Share2 size={18} />
                  </button>
                </div>
              </div>

              {/* Toast Notification */}
              {copyToast && (
                <div className="fixed bottom-24 right-6 z-50 bg-emerald-950 text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-semibold animate-bounce">
                  <CheckCircle2 size={16} className="text-amber-400" />
                  <span>Teks artikel berhasil disalin!</span>
                </div>
              )}

              {/* Article Content Container */}
              <article className="bg-white rounded-3xl border border-emerald-100 shadow-lg p-4 sm:p-6 md:p-10 khutbah-print-card w-full max-w-full min-w-0 overflow-hidden break-words">
                <header className="border-b border-emerald-100 pb-6 mb-8 text-center max-w-2xl mx-auto w-full min-w-0">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-3">
                    <History size={14} />
                    <span>Artikel Sejarah Islam</span>
                  </div>

                  <h1 className={cn(
                    "font-extrabold text-emerald-950 leading-tight break-words min-w-0",
                    fontSize === "normal" ? "text-xl md:text-3xl" : "text-2xl md:text-4xl"
                  )}>
                    {activeArticle.title}
                  </h1>

                  <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500">
                    <span>{new Date(activeArticle.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
                    <span>•</span>
                    <span className="text-gray-500 font-medium">Dakwah.id</span>
                  </div>
                </header>

                {/* Loading state if fetching article */}
                {loadingArticle && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex items-center justify-center gap-3 animate-pulse no-print">
                    <Loader2 size={18} className="animate-spin text-emerald-700" />
                    <span className="text-xs font-semibold text-emerald-900">Memuat materi sejarah lengkap...</span>
                  </div>
                )}

                {activeArticle.featuredImage && (
                  <div className="max-w-2xl mx-auto mb-8 rounded-2xl overflow-hidden shadow-sm no-print w-full min-w-0">
                    <img
                      src={activeArticle.featuredImage}
                      alt={activeArticle.title}
                      className="w-full h-auto object-cover max-h-96"
                      loading="lazy"
                    />
                  </div>
                )}

                <div 
                  onClick={handleContentClick}
                  className={cn(
                    "khutbah-content prose max-w-none text-slate-800 break-words w-full max-w-full min-w-0 overflow-hidden",
                    fontSize === "normal" ? "text-base" : "text-lg md:text-xl font-medium leading-relaxed"
                  )}
                  dangerouslySetInnerHTML={{ __html: activeArticle.contentHtml }}
                />

                <footer className="mt-12 pt-6 border-t border-emerald-100 flex items-center justify-between text-xs text-gray-500">
                  <span>Materi disadur dari <strong>Dakwah.id (Kategori Sejarah)</strong> untuk edukasi umat Islam.</span>
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    Tarbiyah Digital
                  </span>
                </footer>
              </article>
            </div>
          ) : (
            /* Articles Grid List */
            <div className="space-y-6 w-full max-w-full min-w-0">
              {/* Search & Filter Bar */}
              <div className="bg-white rounded-2xl border border-emerald-100 p-3 sm:p-4 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full max-w-full min-w-0 overflow-hidden">
                <div className="relative flex-1 min-w-0">
                  <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari peristiwa atau tokoh sejarah (Abu Bakar, Madinah, Tabuk)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-14 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-xs sm:text-sm min-w-0"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full"
                    >
                      Hapus
                    </button>
                  )}
                </div>

                <button
                  onClick={() => setShowOnlyBookmarks(!showOnlyBookmarks)}
                  className={cn(
                    "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition shrink-0",
                    showOnlyBookmarks
                      ? "bg-amber-400 text-emerald-950 border-amber-400 font-bold shadow-xs"
                      : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-emerald-50"
                  )}
                >
                  <Bookmark size={15} className={showOnlyBookmarks ? "fill-emerald-950" : ""} />
                  <span>Tersimpan ({bookmarkedIds.length})</span>
                </button>
              </div>

              {/* Status Header */}
              <div className="flex items-center justify-between text-xs text-gray-500 px-1">
                <span>
                  Menampilkan <strong>{filteredArticles.length}</strong> artikel sejarah
                  {totalCount > 0 ? ` (dari total ~${totalCount} artikel)` : ""}
                </span>
                {searchQuery && (
                  <span className="text-emerald-700 font-medium">
                    Hasil untuk: "{searchQuery}"
                  </span>
                )}
              </div>

              {/* Cards Grid */}
              {loadingArticles ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-white rounded-2xl p-5 border border-emerald-100 animate-pulse space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                    </div>
                  ))}
                </div>
              ) : filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 w-full max-w-full min-w-0">
                  {filteredArticles.map((article) => {
                    const isBookmarked = bookmarkedIds.includes(article.id);
                    return (
                      <div
                        key={article.id}
                        onClick={() => handleOpenArticle(article)}
                        className="bg-white rounded-2xl border border-emerald-100 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer hover:border-emerald-300 w-full max-w-full min-w-0 overflow-hidden break-words"
                      >
                        <div className="w-full min-w-0">
                          {article.featuredImage && (
                            <div className="w-full h-36 rounded-xl overflow-hidden mb-3 bg-emerald-50">
                              <img
                                src={article.featuredImage}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                              />
                            </div>
                          )}

                          <div className="flex items-start justify-between gap-2 mb-2">
                            <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                              Kisah & Tarikh
                            </span>
                            <button
                              onClick={(e) => handleToggleBookmark(article.id, e)}
                              className={cn(
                                "p-1.5 rounded-lg transition",
                                isBookmarked
                                  ? "text-amber-500 bg-amber-50"
                                  : "text-gray-300 hover:text-amber-400"
                              )}
                              title="Simpan Artikel"
                            >
                              <Bookmark size={18} className={isBookmarked ? "fill-amber-400" : ""} />
                            </button>
                          </div>

                          <h3 className="font-bold text-base md:text-lg text-emerald-950 group-hover:text-emerald-700 leading-snug line-clamp-2 transition-colors break-words min-w-0">
                            {article.title}
                          </h3>

                          {article.excerpt && (
                            <p className="text-xs text-gray-600 mt-2 line-clamp-3 leading-relaxed break-words min-w-0">
                              {article.excerpt}
                            </p>
                          )}
                        </div>

                        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                          <span>
                            {new Date(article.date).toLocaleDateString("id-ID", {
                              day: "numeric",
                              month: "short",
                              year: "numeric"
                            })}
                          </span>

                          <div className="flex items-center gap-1 font-bold text-emerald-700 group-hover:text-emerald-900 group-hover:translate-x-0.5 transition-all">
                            <span>Baca Artikel</span>
                            <ChevronRight size={15} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white rounded-3xl border border-emerald-100 p-12 text-center shadow-xs">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <History size={32} />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">Artikel Tidak Ditemukan</h3>
                  <p className="text-sm text-gray-500 max-w-md mx-auto mt-1">
                    {showOnlyBookmarks 
                      ? "Belum ada artikel sejarah yang tersimpan di favorit Anda." 
                      : "Coba gunakan kata kunci pencarian yang lain."}
                  </p>
                  {(searchQuery || showOnlyBookmarks) && (
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setShowOnlyBookmarks(false);
                      }}
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-semibold shadow hover:bg-emerald-800 transition"
                    >
                      <RefreshCw size={14} />
                      <span>Reset Pencarian</span>
                    </button>
                  )}
                </div>
              )}

              {/* Load More Pagination */}
              {!loadingArticles && currentPage < totalPages && !showOnlyBookmarks && (
                <div className="text-center pt-4">
                  <button
                    onClick={() => loadArticles(currentPage + 1, searchQuery)}
                    disabled={loadingMore}
                    className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs md:text-sm px-6 py-3 rounded-2xl shadow-sm transition disabled:opacity-50"
                  >
                    {loadingMore ? (
                      <>
                        <RefreshCw size={16} className="animate-spin" />
                        <span>Memuat Artikel Sejarah...</span>
                      </>
                    ) : (
                      <>
                        <RefreshCw size={16} />
                        <span>Muat Artikel Sejarah Berikutnya (Halaman {currentPage + 1} dari {totalPages})</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 3. SUBMENU 2: Sejarah Islam (Modul Peradaban Klasik Sebelumnya) */}
      {currentTab === "peradaban" && (
        <div className="space-y-6">
          <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-700 text-amber-300 shrink-0">
              <Landmark size={22} />
            </div>
            <div>
              <h3 className="font-bold text-sm text-emerald-950">Submenu: Sejarah Islam (Era Peradaban)</h3>
              <p className="text-xs text-emerald-800">
                Dokumentasi terstruktur perkembangan Islam dari masa turunnya wahyu, kepemimpinan Khulafaur Rasyidin, Dinasti Islam, hingga penyebaran di Nusantara.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {peradabanSections.map((section) => (
              <motion.div
                key={section.id}
                layout
                className={cn(
                  "bg-white rounded-2xl border border-emerald-100 shadow-sm overflow-hidden transition-all",
                  activePeradabanId === section.id ? "ring-2 ring-emerald-500 shadow-md" : "hover:bg-emerald-50/30"
                )}
              >
                <button
                  onClick={() => setActivePeradabanId(activePeradabanId === section.id ? null : section.id)}
                  className="w-full p-5 md:p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-100 text-emerald-800 rounded-2xl shrink-0">
                      <section.icon size={22} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60 inline-block mb-1">
                        {section.era}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-emerald-950 leading-snug">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronRight 
                    className={cn("text-emerald-400 transition-transform", activePeradabanId === section.id && "rotate-90")} 
                  />
                </button>

                <AnimatePresence>
                  {activePeradabanId === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6"
                    >
                      <div className="pt-4 border-t border-emerald-50">
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          {section.content}
                        </p>
                        <button 
                          onClick={() => setShowFullPeradaban(section.id)}
                          className="mt-4 inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-900 font-bold text-sm bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-xl transition"
                        >
                          <span>Baca Materi Lengkap</span>
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Full Content Modal for Peradaban Module */}
          <AnimatePresence>
            {showFullPeradaban && activePeradabanSection && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/70 backdrop-blur-sm">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-emerald-100"
                >
                  <div className="p-6 border-b border-emerald-100 flex justify-between items-center bg-emerald-50/50">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-emerald-700 text-amber-300 rounded-xl">
                        <activePeradabanSection.icon size={20} />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">Submenu: Sejarah Islam</span>
                        <h3 className="text-xl md:text-2xl font-bold text-emerald-950">{activePeradabanSection.title}</h3>
                      </div>
                    </div>
                    <button 
                      onClick={() => setShowFullPeradaban(null)}
                      className="p-2 hover:bg-emerald-100 rounded-full transition-colors text-emerald-700"
                    >
                      <X size={22} />
                    </button>
                  </div>
                  
                  <div className="p-6 md:p-8 overflow-y-auto flex-1 khutbah-content prose prose-emerald max-w-none text-slate-800">
                    <div 
                      className="space-y-4 text-sm md:text-base leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: activePeradabanSection.fullContent }}
                    />
                  </div>
                  
                  <div className="p-4 border-t border-emerald-100 bg-gray-50 flex justify-end">
                    <button 
                      onClick={() => setShowFullPeradaban(null)}
                      className="px-6 py-2.5 bg-emerald-700 text-white rounded-xl font-bold hover:bg-emerald-800 transition-colors text-sm shadow-sm"
                    >
                      Tutup
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
