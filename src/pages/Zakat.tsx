import React, { useState, useEffect } from "react";
import { Calculator, Info, Coins, Briefcase, TrendingUp, Users, X, ExternalLink, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const ZAKAT_ORGS = [
  {
    name: "BAZNAS (Badan Amil Zakat Nasional)",
    description: "Lembaga resmi pemerintah yang mengelola zakat secara nasional.",
    url: "https://baznas.go.id/bayarzakat",
    logo: "https://baznas.go.id/assets/img/logo/logo-baznas.png"
  },
  {
    name: "Dompet Dhuafa",
    description: "Lembaga filantropi Islam yang berkhidmat memberdayakan kaum dhuafa.",
    url: "https://donasi.dompetdhuafa.org/zakat/",
    logo: "https://www.dompetdhuafa.org/wp-content/uploads/2022/05/Logo-DD-Horizontal.png"
  },
  {
    name: "Rumah Zakat",
    description: "Lembaga amil zakat nasional yang berfokus pada pemberdayaan masyarakat.",
    url: "https://www.rumahzakat.org/donasi/zakat",
    logo: "https://www.rumahzakat.org/wp-content/uploads/2021/02/logo-rz-new.png"
  },
  {
    name: "LAZISMU (Muhammadiyah)",
    description: "Lembaga zakat tingkat nasional yang berkhidmat dalam pemberdayaan masyarakat.",
    url: "https://lazismu.org/zakat",
    logo: "https://lazismu.org/images/logo.png"
  },
  {
    name: "LAZISNU (NU Care)",
    description: "Lembaga pengelola zakat, infak, dan sedekah di bawah naungan Nahdlatul Ulama.",
    url: "https://nucare.id/program/zakat",
    logo: "https://nucare.id/assets/img/logo_nucare.png"
  }
];

export default function Zakat() {
  const [harta, setHarta] = useState<number>(0);
  const [jumlahOrang, setJumlahOrang] = useState<number>(1);
  const [zakatType, setZakatType] = useState<"maal" | "emas" | "penghasilan" | "perdagangan" | "fitrah">("maal");
  const [result, setResult] = useState<number>(0);
  const [showOrgs, setShowOrgs] = useState(false);

  const NISAB_EMAS = 85; // gram
  const HARGA_EMAS = 1200000; // per gram (asumsi)
  const NISAB_MAAL = NISAB_EMAS * HARGA_EMAS;
  const HARGA_BERAS = 15000; // per kg (asumsi untuk fitrah)
  const FITRAH_PER_ORANG = 3.5 * HARGA_BERAS; // 3.5 liter atau setara 2.5kg - 3kg

  useEffect(() => {
    let calculated = 0;
    if (zakatType === "fitrah") {
      calculated = jumlahOrang * 45000; // Asumsi rata-rata Rp 45.000 per jiwa
    } else if (zakatType === "penghasilan") {
      calculated = harta * 0.025;
    } else {
      if (harta >= NISAB_MAAL) {
        calculated = harta * 0.025;
      }
    }
    setResult(calculated);
  }, [harta, zakatType, jumlahOrang]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
          <Calculator size={32} />
        </div>
        <h2 className="text-3xl font-bold text-emerald-800">Kalkulator Zakat</h2>
        <p className="text-gray-500 mt-2">Hitung kewajiban zakatmu dengan mudah dan akurat sesuai syariat.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-emerald-50 space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { id: "fitrah", label: "Zakat Fitrah", icon: Users },
                { id: "maal", label: "Zakat Maal", icon: Coins },
                { id: "emas", label: "Zakat Emas", icon: TrendingUp },
                { id: "penghasilan", label: "Zakat Profesi", icon: Briefcase },
                { id: "perdagangan", label: "Zakat Dagang", icon: TrendingUp },
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setZakatType(type.id as any)}
                  className={cn(
                    "flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all",
                    zakatType === type.id 
                      ? "bg-emerald-700 text-white border-emerald-700 shadow-lg" 
                      : "bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100"
                  )}
                >
                  <type.icon size={20} />
                  <span className="text-[10px] sm:text-xs font-bold text-center leading-tight">{type.label}</span>
                </button>
              ))}
            </div>

            {zakatType === "fitrah" ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-emerald-900">Jumlah Jiwa (Orang)</label>
                  <input
                    type="number"
                    min="1"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xl font-bold text-emerald-900"
                    value={jumlahOrang}
                    onChange={(e) => setJumlahOrang(Math.max(1, Number(e.target.value)))}
                  />
                </div>
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <p className="text-xs text-emerald-800">
                    * Estimasi Zakat Fitrah Rp 45.000,- per jiwa (setara 2.5kg / 3.5 liter beras).
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <label className="text-sm font-bold text-emerald-900">Jumlah Harta / Penghasilan (Rp)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">Rp</span>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xl font-bold text-emerald-900"
                    value={harta || ""}
                    onChange={(e) => setHarta(Number(e.target.value))}
                  />
                </div>
              </div>
            )}

            {zakatType !== "fitrah" && (
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3 items-start">
                <Info className="text-amber-600 shrink-0 mt-1" size={18} />
                <div className="text-xs text-amber-800 leading-relaxed">
                  <p className="font-bold mb-1">Informasi Nisab:</p>
                  <p>Nisab Zakat Maal setara dengan 85 gram emas. Jika harga emas Rp {formatCurrency(HARGA_EMAS)}/gram, maka nisabnya adalah {formatCurrency(NISAB_MAAL)}.</p>
                </div>
              </div>
            )}
          </div>

          {/* Quran Quote Section */}
          <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 relative overflow-hidden">
            <Quote className="absolute -top-2 -left-2 text-emerald-200/50" size={80} />
            <div className="relative z-10 text-center">
              <p className="text-emerald-900 font-arabic text-2xl mb-4 leading-loose">
                وَأَقِيمُوا۟ ٱلصَّلَوٰةَ وَءَاتُوا۟ ٱلزَّكَوٰةَ وَٱرْكَعُوا۟ مَعَ ٱلرَّٰكِعِينَ
              </p>
              <p className="text-emerald-800 italic mb-2">
                "Dan dirikanlah shalat, tunaikanlah zakat dan ruku'lah beserta orang-orang yang ruku'."
              </p>
              <p className="text-emerald-600 font-bold text-xs uppercase tracking-widest">
                — QS. Al-Baqarah: 43
              </p>
            </div>
          </div>
        </div>

        {/* Result Section */}
        <div className="space-y-6">
          <div className="bg-emerald-800 rounded-3xl p-8 text-white shadow-xl text-center flex flex-col justify-center h-full min-h-[400px]">
            <h4 className="text-emerald-200 font-bold mb-2">Total Zakat Wajib</h4>
            <div className="text-4xl font-bold text-amber-400 mb-4">
              {formatCurrency(result)}
            </div>
            <p className="text-xs text-emerald-100 opacity-80 leading-relaxed px-4">
              {zakatType === "fitrah" 
                ? `Zakat Fitrah untuk ${jumlahOrang} jiwa.`
                : "Berdasarkan tarif zakat 2.5% dari total harta yang telah mencapai nisab dan haul."}
            </p>
            <button 
              onClick={() => setShowOrgs(true)}
              className="mt-8 w-full py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-bold transition-all shadow-lg shadow-amber-500/20 active:scale-95"
            >
              Bayar Zakat Sekarang
            </button>
          </div>
        </div>
      </div>

      {/* Organizations Modal */}
      <AnimatePresence>
        {showOrgs && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[2.5rem] shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col"
            >
              <div className="p-6 border-b border-emerald-50 flex justify-between items-center bg-emerald-50/50">
                <h3 className="text-2xl font-bold text-emerald-900">Lembaga Amil Zakat Terpercaya</h3>
                <button 
                  onClick={() => setShowOrgs(false)}
                  className="p-2 hover:bg-emerald-100 rounded-full transition-colors text-emerald-700"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 overflow-y-auto flex-1 space-y-4 custom-scrollbar">
                <p className="text-gray-600 text-sm mb-6">
                  Silakan pilih salah satu lembaga amil zakat resmi dan terpercaya di Indonesia untuk menyalurkan zakat Anda secara online:
                </p>
                {ZAKAT_ORGS.map((org, idx) => (
                  <a
                    key={idx}
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl border border-emerald-50 hover:border-emerald-200 hover:bg-emerald-50 transition-all group"
                  >
                    <div className="w-16 h-16 bg-white rounded-xl border border-gray-100 flex items-center justify-center p-2 shrink-0">
                      <img src={org.logo} alt={org.name} className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors">{org.name}</h4>
                      <p className="text-xs text-gray-500">{org.description}</p>
                    </div>
                    <ExternalLink size={18} className="text-emerald-300 group-hover:text-emerald-600 transition-colors" />
                  </a>
                ))}
              </div>

              <div className="p-6 border-t border-emerald-50 bg-gray-50 flex justify-center">
                <p className="text-[10px] text-gray-400 text-center italic">
                  * Klik pada lembaga untuk diarahkan ke halaman pembayaran zakat resmi mereka.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
