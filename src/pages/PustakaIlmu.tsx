import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, BookOpen, Shield, Heart, History, Star, 
  Scale, Book, ChevronRight, X, Sparkles, Filter, 
  Bot, Clock, Trophy, Microscope, Milestone, Crown, 
  Compass, Hourglass, ShieldCheck, HeartHandshake, 
  Library, Brain, ScrollText, BookMarked, BookCheck, 
  BookOpenCheck, SpellCheck, ArrowUpRight, Copy, Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PUSTAKA_CATEGORIES, 
  PUSTAKA_TOPICS, 
  PUSTAKA_MODAL_CONTENTS, 
  PustakaTopic 
} from '../data/pustakaIlmuData';

export default function PustakaIlmu() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const [activeModalTopic, setActiveModalTopic] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [modalSearch, setModalSearch] = useState('');

  // Icon mapper helper
  const renderIcon = (name: string, className = "w-6 h-6") => {
    switch (name) {
      case "ShieldCheck": return <ShieldCheck className={className} />;
      case "HeartHandshake": return <HeartHandshake className={className} />;
      case "Library": return <Library className={className} />;
      case "Brain": return <Brain className={className} />;
      case "ScrollText": return <ScrollText className={className} />;
      case "BookMarked": return <BookMarked className={className} />;
      case "Milestone": return <Milestone className={className} />;
      case "Crown": return <Crown className={className} />;
      case "Bot": return <Bot className={className} />;
      case "History": return <History className={className} />;
      case "Trophy": return <Trophy className={className} />;
      case "Microscope": return <Microscope className={className} />;
      case "Sparkles": return <Sparkles className={className} />;
      case "Hourglass": return <Hourglass className={className} />;
      case "Compass": return <Compass className={className} />;
      case "BookCheck": return <BookCheck className={className} />;
      case "BookOpenCheck": return <BookOpenCheck className={className} />;
      case "Scale": return <Scale className={className} />;
      case "SpellCheck": return <SpellCheck className={className} />;
      case "Shield": return <Shield className={className} />;
      case "Heart": return <Heart className={className} />;
      case "Star": return <Star className={className} />;
      case "Book": return <Book className={className} />;
      default: return <BookOpen className={className} />;
    }
  };

  // Filter topics based on search & category
  const filteredTopics = useMemo(() => {
    return PUSTAKA_TOPICS.filter((topic) => {
      const matchCategory = selectedCategory === 'semua' || topic.categoryId === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || 
        topic.title.toLowerCase().includes(q) || 
        topic.subtitle.toLowerCase().includes(q) || 
        topic.category.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [searchQuery, selectedCategory]);

  const activeModalData = activeModalTopic ? PUSTAKA_MODAL_CONTENTS[activeModalTopic] : null;

  const handleCopySection = (textToCopy: string, index: number) => {
    navigator.clipboard.writeText(textToCopy);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full max-w-full min-w-0 overflow-x-hidden pb-32 lg:pb-8">
      {/* Hero Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 text-white p-6 sm:p-8 md:p-10 shadow-xl border border-emerald-600/30">
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <BookOpen size={240} />
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={14} className="text-amber-400" />
            <span>Katalog Khazanah Keislaman</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2 sm:mb-3">
            Pustaka Ilmu
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed max-w-2xl">
            Jelajahi berbagai cabang ilmu keislaman untuk memperdalam pemahaman Anda tentang akidah, Al-Qur'an, hadits, sirah, sejarah peradaban, dan pedoman hidup islami.
          </p>

          {/* Search Box */}
          <div className="mt-6 sm:mt-8 relative max-w-xl">
            <div className="relative flex items-center">
              <Search className="absolute left-4 text-emerald-800 pointer-events-none" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari kitab, topik, atau cabang ilmu..."
                className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white text-gray-900 placeholder-gray-400 font-medium text-sm sm:text-base shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-400/40 transition border-0"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 text-gray-400 hover:text-gray-600 p-1"
                  aria-label="Bersihkan pencarian"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-xs text-emerald-200 mt-2 pl-2">
                Ditemukan <span className="font-bold text-amber-300">{filteredTopics.length}</span> materi untuk pencarian "{searchQuery}"
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="mt-6 sm:mt-8">
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-emerald-700" />
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-900">
              Kategori Keilmuan
            </h2>
          </div>
          <span className="text-xs text-gray-500 font-medium">
            {filteredTopics.length} dari {PUSTAKA_TOPICS.length} topik
          </span>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar -mx-1 px-1">
          {PUSTAKA_CATEGORIES.map((cat) => {
            const count = cat.id === 'semua' 
              ? PUSTAKA_TOPICS.length 
              : PUSTAKA_TOPICS.filter(t => t.categoryId === cat.id).length;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                  isSelected
                    ? "bg-emerald-800 text-white shadow-md shadow-emerald-900/10 scale-102"
                    : "bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 border border-gray-200/80"
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isSelected ? "bg-amber-400 text-emerald-950" : "bg-gray-100 text-gray-600"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Topics Grid */}
      <div className="mt-6">
        {filteredTopics.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {filteredTopics.map((topic) => {
              const isExternalRoute = !!topic.route;

              const CardContent = (
                <div className="h-full flex flex-col justify-between p-5 bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                  {/* Decorative Corner Glow */}
                  <div className={`absolute -right-8 -top-8 w-24 h-24 rounded-full bg-gradient-to-br ${topic.gradient} opacity-10 group-hover:opacity-20 transition-all pointer-events-none`} />

                  <div>
                    {/* Top Header Row */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${topic.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0`}>
                        {renderIcon(topic.icon, "w-6 h-6")}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                        {topic.category}
                      </span>
                    </div>

                    {/* Topic Title */}
                    <h3 className="text-lg font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors flex items-center justify-between">
                      <span>{topic.title}</span>
                      {isExternalRoute ? (
                        <ArrowUpRight size={18} className="text-gray-300 group-hover:text-emerald-600 transition-colors shrink-0" />
                      ) : (
                        <ChevronRight size={18} className="text-gray-300 group-hover:text-emerald-600 transition-colors shrink-0" />
                      )}
                    </h3>

                    {/* Subtitle / Description */}
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                      {topic.subtitle}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-gray-500 group-hover:text-emerald-700 transition-colors">
                      {topic.badge || (isExternalRoute ? "Buka Modul" : "Baca Kajian")}
                    </span>
                    <span className={`text-xs font-bold ${topic.textColor} inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform`}>
                      <span>{isExternalRoute ? "Buka" : "Pelajari"}</span>
                      <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              );

              return isExternalRoute ? (
                <Link key={topic.id} to={topic.route!} className="block h-full">
                  {CardContent}
                </Link>
              ) : (
                <button
                  key={topic.id}
                  onClick={() => {
                    setActiveModalTopic(topic.modalId || null);
                    setModalSearch('');
                  }}
                  className="block w-full text-left h-full cursor-pointer"
                >
                  {CardContent}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-gray-200 mt-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-3">
              <Search size={28} />
            </div>
            <h3 className="font-bold text-lg text-emerald-950">Topik Tidak Ditemukan</h3>
            <p className="text-sm text-gray-500 mt-1 max-w-sm mx-auto">
              Tidak ada topik atau cabang ilmu yang cocok dengan "{searchQuery}". Silakan coba kata kunci lain atau pilih kategori Semua.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('semua');
              }}
              className="mt-4 px-4 py-2 bg-emerald-800 text-white rounded-xl text-xs font-semibold hover:bg-emerald-900 transition"
            >
              Reset Filter Pencarian
            </button>
          </div>
        )}
      </div>

      {/* Interactive Modal Reader for Comprehensive Topics */}
      <AnimatePresence>
        {activeModalTopic && activeModalData && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-3xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden border border-emerald-100"
            >
              {/* Modal Header Bar */}
              <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-800 to-teal-900 text-white flex items-start justify-between gap-4 shrink-0">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-emerald-950/50 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                    {activeModalData.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {activeModalData.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-emerald-100 mt-1 leading-relaxed">
                    {activeModalData.subtitle}
                  </p>
                </div>

                <button
                  onClick={() => setActiveModalTopic(null)}
                  className="p-2 rounded-full bg-emerald-950/40 hover:bg-emerald-950 text-white transition shrink-0"
                  aria-label="Tutup"
                >
                  <X size={20} />
                </button>
              </div>

              {/* In-Modal Search if many items (like glosarium or awwaliyat) */}
              <div className="px-5 py-3 border-b border-gray-100 bg-gray-50 flex items-center gap-2">
                <Search size={16} className="text-gray-400 shrink-0" />
                <input
                  type="text"
                  value={modalSearch}
                  onChange={(e) => setModalSearch(e.target.value)}
                  placeholder="Cari bagian atau istilah dalam materi ini..."
                  className="w-full bg-transparent text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                />
                {modalSearch && (
                  <button onClick={() => setModalSearch('')} className="text-gray-400 hover:text-gray-600">
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Modal Body Content */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
                {activeModalData.sections.map((section, idx) => {
                  // Filter items if searching inside modal
                  const query = modalSearch.toLowerCase().trim();
                  const filteredItems = section.items ? section.items.filter(item => 
                    !query || 
                    (item.term && item.term.toLowerCase().includes(query)) ||
                    (item.name && item.name.toLowerCase().includes(query)) ||
                    item.desc.toLowerCase().includes(query)
                  ) : null;

                  const textMatches = Array.isArray(section.content)
                    ? section.content.some(c => c.toLowerCase().includes(query))
                    : section.content.toLowerCase().includes(query);

                  if (query && !textMatches && (!filteredItems || filteredItems.length === 0)) {
                    return null;
                  }

                  return (
                    <div 
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:border-emerald-200 transition"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-emerald-950">
                            {section.heading}
                          </h3>
                          {section.subheading && (
                            <p className="text-xs text-emerald-700 font-medium mt-0.5">
                              {section.subheading}
                            </p>
                          )}
                        </div>

                        <button
                          onClick={() => {
                            const raw = `${section.heading}\n${section.subheading || ''}\n${
                              Array.isArray(section.content) ? section.content.join('\n') : section.content
                            }\n${section.items ? section.items.map(i => `${i.term || i.name}: ${i.desc}`).join('\n') : ''}`;
                            handleCopySection(raw, idx);
                          }}
                          className="p-1.5 rounded-lg text-gray-400 hover:text-emerald-700 hover:bg-emerald-50 transition shrink-0"
                          title="Salin Teks"
                        >
                          {copiedIndex === idx ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                        </button>
                      </div>

                      {/* Main Paragraphs */}
                      {Array.isArray(section.content) ? (
                        <div className="space-y-2.5 mt-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                          {section.content.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      ) : section.content ? (
                        <p className="mt-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                          {section.content}
                        </p>
                      ) : null}

                      {/* Itemized list if available */}
                      {filteredItems && filteredItems.length > 0 && (
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {filteredItems.map((item, itemIdx) => (
                            <div 
                              key={itemIdx}
                              className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-emerald-50/50 hover:border-emerald-100 transition"
                            >
                              <p className="font-bold text-xs sm:text-sm text-emerald-900 mb-1 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                                <span>{item.term || item.name}</span>
                              </p>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between text-xs text-gray-500 shrink-0">
                <span>Tarbiyah Digital • Pustaka Ilmu</span>
                <button
                  onClick={() => setActiveModalTopic(null)}
                  className="px-5 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold transition"
                >
                  Tutup Materi
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
