import React, { useState } from "react";
import { Heart, Search, ChevronRight, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { DOA_HARIAN } from "../constants/data";
import { cn } from "../lib/utils";

export default function Doa() {
  const [search, setSearch] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredDoa = DOA_HARIAN.filter(d => 
    d.title.toLowerCase().includes(search.toLowerCase()) ||
    d.translation.toLowerCase().includes(search.toLowerCase())
  );

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-emerald-800">Doa Harian</h2>
          <p className="text-gray-500">Kumpulan doa sehari-hari untuk keberkahan aktivitasmu.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Cari Doa..."
            className="pl-10 pr-4 py-2 rounded-xl border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full md:w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Doa List */}
      <div className="grid grid-cols-1 gap-6">
        <AnimatePresence>
          {filteredDoa.map((doa, index) => (
            <motion.div
              key={doa.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-emerald-50 hover:shadow-md transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                    <Heart size={20} className="fill-emerald-700" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900">{doa.title}</h3>
                </div>
                <button 
                  onClick={() => copyToClipboard(`${doa.arabic}\n\n${doa.latin}\n\nArtinya: ${doa.translation}`, doa.id)}
                  className="p-2 rounded-lg hover:bg-emerald-50 text-gray-400 hover:text-emerald-600 transition-colors"
                >
                  {copiedId === doa.id ? <Check size={20} className="text-emerald-600" /> : <Copy size={20} />}
                </button>
              </div>

              <div className="space-y-6">
                <p className="text-right font-arabic text-3xl leading-loose text-emerald-900">
                  {doa.arabic}
                </p>
                <div className="space-y-3">
                  <p className="text-emerald-700 font-medium italic text-lg">{doa.latin}</p>
                  <div className="p-4 bg-slate-50 rounded-2xl border-l-4 border-emerald-500">
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-bold text-emerald-800">Artinya: </span>
                      {doa.translation}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredDoa.length === 0 && (
          <div className="text-center py-20 opacity-50">
            <Heart size={64} className="mx-auto mb-4 text-emerald-200" />
            <p className="text-xl font-bold text-emerald-900">Doa tidak ditemukan</p>
            <p className="text-gray-600">Coba kata kunci lain.</p>
          </div>
        )}
      </div>
    </div>
  );
}
