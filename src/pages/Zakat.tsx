import React, { useState, useEffect } from "react";
import { Calculator, Info, Coins, Briefcase, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

export default function Zakat() {
  const [harta, setHarta] = useState<number>(0);
  const [zakatType, setZakatType] = useState<"maal" | "emas" | "penghasilan" | "perdagangan">("maal");
  const [result, setResult] = useState<number>(0);

  const NISAB_EMAS = 85; // gram
  const HARGA_EMAS = 1200000; // per gram (asumsi)
  const NISAB_MAAL = NISAB_EMAS * HARGA_EMAS;

  useEffect(() => {
    let calculated = 0;
    if (zakatType === "penghasilan") {
      // Zakat penghasilan biasanya 2.5% jika mencapai nisab (setara 522kg beras atau 85g emas per tahun)
      calculated = harta * 0.025;
    } else {
      // Zakat maal, emas, perdagangan 2.5%
      if (harta >= NISAB_MAAL) {
        calculated = harta * 0.025;
      }
    }
    setResult(calculated);
  }, [harta, zakatType]);

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
        <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calculator size={32} />
        </div>
        <h2 className="text-3xl font-bold text-emerald-800">Kalkulator Zakat</h2>
        <p className="text-gray-500 mt-2">Hitung kewajiban zakatmu dengan mudah dan akurat.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-emerald-50 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
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
                  <span className="text-xs font-bold">{type.label}</span>
                </button>
              ))}
            </div>

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

            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3 items-start">
              <Info className="text-amber-600 shrink-0 mt-1" size={18} />
              <div className="text-xs text-amber-800 leading-relaxed">
                <p className="font-bold mb-1">Informasi Nisab:</p>
                <p>Nisab Zakat Maal setara dengan 85 gram emas. Jika harga emas Rp {formatCurrency(HARGA_EMAS)}/gram, maka nisabnya adalah {formatCurrency(NISAB_MAAL)}.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Result Section */}
        <div className="space-y-6">
          <div className="bg-emerald-800 rounded-3xl p-8 text-white shadow-xl text-center flex flex-col justify-center h-full">
            <h4 className="text-emerald-200 font-bold mb-2">Total Zakat Wajib</h4>
            <div className="text-4xl font-bold text-amber-400 mb-4">
              {formatCurrency(result)}
            </div>
            <p className="text-xs text-emerald-100 opacity-80">
              Berdasarkan tarif zakat 2.5% dari total harta yang telah mencapai nisab dan haul.
            </p>
            <button className="mt-8 w-full py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-bold transition-all shadow-lg">
              Bayar Zakat Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
