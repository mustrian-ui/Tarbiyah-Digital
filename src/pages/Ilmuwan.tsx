import React, { useState, useMemo, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Microscope,
  Search,
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  BookOpen,
  Award,
  Clock,
  MapPin,
  Quote,
  Sparkles,
  X,
  Copy,
  Share2,
  CheckCircle2,
  Filter,
  BookMarked,
  Layers
} from "lucide-react";
import { cn } from "../lib/utils";
import {
  ILMUWAN_MUSLIM_DATA,
  ILMUWAN_CATEGORIES,
  IlmuwanCategory
} from "../data/ilmuwanData";

export default function Ilmuwan() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = searchParams.get("tokoh");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"semua" | IlmuwanCategory>("semua");
  const [fontSize, setFontSize] = useState<"normal" | "large">("normal");
  const [copyToast, setCopyToast] = useState(false);

  const readerTopRef = useRef<HTMLDivElement>(null);

  const activeScientist = useMemo(() => {
    if (!selectedId) return null;
    return ILMUWAN_MUSLIM_DATA.find((s) => s.id === selectedId) || null;
  }, [selectedId]);

  const activeIndex = useMemo(() => {
    if (!activeScientist) return -1;
    return ILMUWAN_MUSLIM_DATA.findIndex((s) => s.id === activeScientist.id);
  }, [activeScientist]);

  const filteredScientists = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return ILMUWAN_MUSLIM_DATA.filter((s) => {
      const matchCategory = selectedCategory === "semua" || s.category === selectedCategory;
      const matchSearch =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.fullName.toLowerCase().includes(q) ||
        s.title.toLowerCase().includes(q) ||
        s.field.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q) ||
        s.works.some((w) => w.title.toLowerCase().includes(q)) ||
        s.sections.some(
          (sec) =>
            sec.heading.toLowerCase().includes(q) ||
            sec.paragraphs.some((p) => p.toLowerCase().includes(q))
        );
      return matchCategory && matchSearch;
    });
  }, [searchQuery, selectedCategory]);

  useEffect(() => {
    if (activeScientist) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeScientist]);

  const handleSelectScientist = (id: string) => {
    setSearchParams({ tokoh: id });
  };

  const handleBackToList = () => {
    setSearchParams({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setSearchParams({ tokoh: ILMUWAN_MUSLIM_DATA[activeIndex - 1].id });
    }
  };

  const handleNext = () => {
    if (activeIndex >= 0 && activeIndex < ILMUWAN_MUSLIM_DATA.length - 1) {
      setSearchParams({ tokoh: ILMUWAN_MUSLIM_DATA[activeIndex + 1].id });
    }
  };

  const handleCopyArticle = () => {
    if (!activeScientist) return;
    const sectionsText = activeScientist.sections
      .map((sec) => `${sec.heading}\n${sec.paragraphs.join("\n\n")}`)
      .join("\n\n");
    const contributionsText = activeScientist.keyContributions
      .map((c, idx) => `${idx + 1}. ${c}`)
      .join("\n");
    const worksText = activeScientist.works
      .map((w) => `- ${w.title}: ${w.description}`)
      .join("\n");

    const fullText = [
      `${activeScientist.name} (${activeScientist.arabicName})`,
      activeScientist.title,
      `Nama Lengkap: ${activeScientist.fullName}`,
      `Masa Hidup: ${activeScientist.lifespan} | Kelahiran: ${activeScientist.birthPlace}`,
      `Bidang Keilmuan: ${activeScientist.field}`,
      "",
      activeScientist.summary,
      "",
      sectionsText,
      "",
      "Kontribusi Ilmiah Utama:",
      contributionsText,
      "",
      "Karya Monumental:",
      worksText
    ].join("\n");

    navigator.clipboard.writeText(fullText);
    setCopyToast(true);
    setTimeout(() => setCopyToast(false), 2500);
  };

  const handleShareArticle = async () => {
    if (!activeScientist) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${activeScientist.name} — Ilmuwan Muslim Terkemuka`,
          text: activeScientist.summary,
          url: window.location.href
        });
      } catch {
        // User cancelled share
      }
    } else {
      handleCopyArticle();
    }
  };

  return (
    <div className="w-full max-w-full min-w-0 overflow-x-hidden pb-32 lg:pb-8">
      {/* 1. Hero Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-950 text-white p-6 sm:p-8 md:p-10 shadow-xl border border-emerald-700/40">
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <Microscope size={240} />
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Link
              to="/pustaka-ilmu"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/50 hover:bg-emerald-950/80 border border-emerald-400/30 text-emerald-100 text-xs font-semibold transition"
            >
              <ArrowLeft size={13} />
              <span>Pustaka Ilmu</span>
            </Link>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={13} className="text-amber-400" />
              <span>Khazanah Cendekiawan Muslim</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            Ilmuwan Muslim Terkemuka
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed max-w-2xl">
            Menelusuri biografi lengkap, metodologi riset, penemuan revolusioner, dan karya monumental para tokoh cendekiawan Muslim yang membangun fondasi ilmu pengetahuan modern.
          </p>

          {/* Search box in list view */}
          {!activeScientist && (
            <div className="mt-6 sm:mt-8 relative max-w-xl">
              <div className="relative flex items-center">
                <Search className="absolute left-4 text-emerald-800 pointer-events-none" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari tokoh, bidang, atau kitab (Ibnu Sina, Aljabar, Al-Qanun)..."
                  className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white text-gray-900 placeholder-gray-400 font-medium text-sm sm:text-base shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-400/40 transition border-0"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 text-gray-400 hover:text-gray-600 p-1"
                    aria-label="Bersihkan pencarian"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="text-xs text-emerald-200 mt-2 pl-2">
                  Ditemukan <span className="font-bold text-amber-300">{filteredScientists.length}</span> tokoh untuk pencarian "{searchQuery}"
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 2. In-Page Complete Article Reader (No floating modal) */}
      {activeScientist ? (
        <div ref={readerTopRef} className="mt-6 space-y-6">
          {/* Sticky Action Bar */}
          <div className="sticky top-16 lg:top-4 z-30 bg-white/95 backdrop-blur-md border border-emerald-100 rounded-2xl p-3 shadow-md flex items-center justify-between gap-2">
            <button
              onClick={handleBackToList}
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2 rounded-xl transition cursor-pointer"
            >
              <ArrowLeft size={16} />
              <span>Daftar Ilmuwan</span>
            </button>

            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-gray-600">
              <button
                onClick={handlePrev}
                disabled={activeIndex <= 0}
                className="p-1.5 rounded-lg border border-gray-200 hover:bg-emerald-50 hover:text-emerald-800 disabled:opacity-40 disabled:pointer-events-none transition cursor-pointer"
                title="Tokoh Sebelumnya"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-emerald-900 font-bold">
                Tokoh ke-{activeIndex + 1} dari {ILMUWAN_MUSLIM_DATA.length}
              </span>
              <button
                onClick={handleNext}
                disabled={activeIndex >= ILMUWAN_MUSLIM_DATA.length - 1}
                className="p-1.5 rounded-lg border border-gray-200 hover:bg-emerald-50 hover:text-emerald-800 disabled:opacity-40 disabled:pointer-events-none transition cursor-pointer"
                title="Tokoh Selanjutnya"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl text-xs">
                <button
                  onClick={() => setFontSize("normal")}
                  className={cn(
                    "px-2.5 py-1 rounded-lg font-bold transition cursor-pointer",
                    fontSize === "normal"
                      ? "bg-white text-emerald-800 shadow-xs"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                  title="Ukuran Teks Normal"
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize("large")}
                  className={cn(
                    "px-2.5 py-1 rounded-lg font-bold transition cursor-pointer",
                    fontSize === "large"
                      ? "bg-white text-emerald-800 shadow-xs"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                  title="Ukuran Teks Besar"
                >
                  A+
                </button>
              </div>

              <button
                onClick={handleCopyArticle}
                className="p-2 rounded-xl bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 border border-gray-200 transition cursor-pointer"
                title="Salin Artikel Lengkap"
              >
                <Copy size={18} />
              </button>

              <button
                onClick={handleShareArticle}
                className="p-2 rounded-xl bg-emerald-700 text-white hover:bg-emerald-800 transition shadow-xs cursor-pointer"
                title="Bagikan Artikel"
              >
                <Share2 size={18} />
              </button>
            </div>
          </div>

          {copyToast && (
            <div className="fixed bottom-24 right-6 z-50 bg-emerald-950 text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-semibold">
              <CheckCircle2 size={16} className="text-amber-400" />
              <span>Artikel lengkap {activeScientist.name} berhasil disalin!</span>
            </div>
          )}

          {/* Full In-Page Article Container */}
          <article className="bg-white rounded-3xl border border-emerald-100 shadow-lg p-5 sm:p-8 md:p-12 overflow-hidden">
            {/* Article Header */}
            <div className="border-b border-emerald-100 pb-6 mb-8">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
                  <Layers size={13} className="text-emerald-700" />
                  <span>{activeScientist.category}</span>
                </span>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold">
                    <Clock size={13} className="text-amber-600" />
                    <span>{activeScientist.lifespan}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                    <MapPin size={13} className="text-emerald-700" />
                    <span>{activeScientist.birthPlace}</span>
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
                <div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight">
                    {activeScientist.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                    Nama Lengkap: <span className="text-gray-800 font-semibold">{activeScientist.fullName}</span>
                  </p>
                </div>
                <p className="text-2xl sm:text-3xl font-serif text-emerald-800/80 md:text-right" dir="rtl">
                  {activeScientist.arabicName}
                </p>
              </div>

              <p className="text-amber-700 font-bold text-sm sm:text-base mt-3">
                {activeScientist.title}
              </p>

              {/* Metadata Cards */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-0.5">
                    Era Peradaban
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-950">
                    {activeScientist.era}
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-100">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-teal-700 mb-0.5">
                    Disiplin Keilmuan
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-teal-950">
                    {activeScientist.field}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm sm:text-base text-gray-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                {activeScientist.summary}
              </p>
            </div>

            {/* Famous Quote / Hikmah Box */}
            {activeScientist.quote && (
              <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50/40 border border-emerald-200/80 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wider mb-2">
                  <Quote size={16} className="text-amber-500" />
                  <span>Kalam Hikmah & Prinsip Ilmiah</span>
                </div>
                <p className="text-sm sm:text-base italic text-emerald-950 leading-relaxed font-serif">
                  "{activeScientist.quote.text}"
                </p>
                {activeScientist.quote.context && (
                  <p className="text-xs font-bold text-amber-700 mt-2 text-right">
                    — {activeScientist.quote.context}
                  </p>
                )}
              </div>
            )}

            {/* Full Narrative Sections */}
            <div className="space-y-8">
              {activeScientist.sections.map((section, sIdx) => (
                <section key={sIdx} className="space-y-3.5">
                  <h3 className="text-lg sm:text-xl font-extrabold text-emerald-900 border-l-4 border-amber-500 pl-3.5">
                    {section.heading}
                  </h3>
                  <div
                    className={cn(
                      "space-y-4 text-gray-800 leading-relaxed font-sans",
                      fontSize === "normal"
                        ? "text-base sm:text-[17px]"
                        : "text-lg sm:text-xl leading-loose"
                    )}
                  >
                    {section.paragraphs.map((para, pIdx) => (
                      <p key={pIdx} className="text-justify">
                        {para}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Key Scientific Contributions */}
            <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100">
              <h3 className="text-base sm:text-lg font-extrabold text-emerald-950 flex items-center gap-2 mb-4">
                <Award size={20} className="text-amber-600 shrink-0" />
                <span>Ringkasan Kontribusi & Terobosan Utama</span>
              </h3>
              <ul className="space-y-2.5">
                {activeScientist.keyContributions.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm sm:text-base text-gray-800 leading-relaxed"
                  >
                    <span className="w-6 h-6 rounded-full bg-emerald-800 text-amber-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Monumental Works */}
            <div className="mt-8">
              <h3 className="text-base sm:text-lg font-extrabold text-emerald-950 flex items-center gap-2 mb-4">
                <BookMarked size={20} className="text-emerald-700 shrink-0" />
                <span>Karya Monumental & Kitab Rujukan</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeScientist.works.map((work, wIdx) => (
                  <div
                    key={wIdx}
                    className="p-4 rounded-2xl bg-white border border-gray-200 hover:border-emerald-300 transition shadow-xs"
                  >
                    <h4 className="font-bold text-sm sm:text-base text-emerald-900 mb-1.5">
                      {work.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {work.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="mt-12 pt-6 border-t border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={handlePrev}
                disabled={activeIndex <= 0}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-emerald-200 bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-xs sm:text-sm disabled:opacity-40 disabled:pointer-events-none transition shadow-xs cursor-pointer"
              >
                <ChevronLeft size={18} />
                <span>
                  {activeIndex > 0 ? ILMUWAN_MUSLIM_DATA[activeIndex - 1].name : "Sebelumnya"}
                </span>
              </button>

              <button
                onClick={handleBackToList}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-900 px-4 py-2 cursor-pointer"
              >
                Kembali ke Daftar Ilmuwan
              </button>

              <button
                onClick={handleNext}
                disabled={activeIndex >= ILMUWAN_MUSLIM_DATA.length - 1}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm disabled:opacity-40 disabled:pointer-events-none transition shadow-sm cursor-pointer"
              >
                <span>
                  {activeIndex < ILMUWAN_MUSLIM_DATA.length - 1
                    ? ILMUWAN_MUSLIM_DATA[activeIndex + 1].name
                    : "Selanjutnya"}
                </span>
                <ChevronRight size={18} />
              </button>
            </div>
          </article>
        </div>
      ) : (
        /* 3. List Grid View */
        <div className="mt-6 sm:mt-8 space-y-6">
          {/* Category Filter Tabs */}
          <div>
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <Filter size={16} className="text-emerald-700" />
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-900">
                  Bidang Keilmuan
                </h2>
              </div>
              <span className="text-xs text-gray-500 font-medium">
                Menampilkan {filteredScientists.length} dari {ILMUWAN_MUSLIM_DATA.length} tokoh
              </span>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar -mx-1 px-1">
              {ILMUWAN_CATEGORIES.map((cat) => {
                const count =
                  cat.id === "semua"
                    ? ILMUWAN_MUSLIM_DATA.length
                    : ILMUWAN_MUSLIM_DATA.filter((s) => s.category === cat.id).length;
                const isSelected = selectedCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      "px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 cursor-pointer",
                      isSelected
                        ? "bg-emerald-800 text-white shadow-md shadow-emerald-900/10"
                        : "bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 border border-gray-200/80"
                    )}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={cn(
                        "text-[10px] px-2 py-0.5 rounded-full font-bold",
                        isSelected
                          ? "bg-amber-400 text-emerald-950"
                          : "bg-gray-100 text-gray-600"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Scientists Grid */}
          {filteredScientists.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {filteredScientists.map((s) => {
                const originalIndex = ILMUWAN_MUSLIM_DATA.findIndex((item) => item.id === s.id);
                return (
                  <button
                    key={s.id}
                    onClick={() => handleSelectScientist(s.id)}
                    className="text-left bg-white rounded-2xl border border-gray-100 hover:border-emerald-300 p-5 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
                  >
                    <div className="absolute top-2 right-3 font-extrabold text-3xl text-emerald-950/5 group-hover:text-emerald-700/10 transition-colors pointer-events-none">
                      #{originalIndex + 1}
                    </div>

                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                          {s.category}
                        </span>
                        <span className="text-[11px] font-semibold text-gray-500">
                          {s.lifespan}
                        </span>
                      </div>

                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="text-lg font-extrabold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                          {s.name}
                        </h3>
                        <span className="text-sm font-serif text-emerald-700/70 shrink-0" dir="rtl">
                          {s.arabicName}
                        </span>
                      </div>

                      <p className="text-xs font-bold text-amber-700 mt-1">
                        {s.title}
                      </p>

                      <p className="text-xs sm:text-sm text-gray-600 mt-2.5 line-clamp-3 leading-relaxed">
                        {s.summary}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold">
                      <span className="text-gray-500 inline-flex items-center gap-1.5">
                        <BookOpen size={14} className="text-emerald-600" />
                        <span>{s.sections.length} Bagian • {s.works.length} Karya</span>
                      </span>
                      <span className="text-emerald-700 group-hover:text-emerald-900 inline-flex items-center gap-1 font-bold">
                        <span>Baca Artikel</span>
                        <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 px-4 bg-white rounded-3xl border border-gray-200">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                <Search size={28} />
              </div>
              <h3 className="font-bold text-lg text-emerald-950">Tokoh Tidak Ditemukan</h3>
              <p className="text-sm text-gray-500 mt-1 max-w-sm mx-auto">
                Tidak ada ilmuwan atau kata kunci yang cocok dengan pencarian "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("semua");
                }}
                className="mt-4 px-4 py-2 bg-emerald-800 text-white rounded-xl text-xs font-semibold hover:bg-emerald-900 transition cursor-pointer"
              >
                Reset Filter Pencarian
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
