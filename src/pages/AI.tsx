import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, Trash2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from "motion/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "../lib/utils";

let aiInstance: any = null;

const getAI = () => {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "undefined" || apiKey === "") {
      throw new Error("API Key tidak ditemukan");
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
};

export default function AI() {
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "undefined" || apiKey === "") {
      setMessages(prev => [...prev, { role: "user", text: input.trim() }]);
      setMessages(prev => [...prev, { 
        role: "bot", 
        text: "⚠️ API Key tidak ditemukan. Pastikan Anda telah menambahkan GEMINI_API_KEY ke Environment Variables di Vercel." 
      }]);
      setInput("");
      return;
    }

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMessage }]);
    setLoading(true);

    try {
      const ai = getAI();
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview", // Use correct model alias from skill
        contents: userMessage,
        config: {
          systemInstruction: `Anda adalah asisten AI konsultasi Islami yang bijaksana, ramah, dan berpengetahuan luas. 
          Tugas Anda adalah memberikan jawaban berdasarkan referensi terpercaya seperti:
          - sunnah.com
          - muslim.or.id
          - islamqa.info
          - seekersguidance.org
          - yaqeeninstitute.org
          - nu.or.id
          
          Berikan jawaban yang menyejukkan, moderat, dan selalu sertakan dalil (Al-Qur'an atau Hadits) jika relevan. 
          Gunakan bahasa Indonesia yang baik dan benar. 
          
          PENTING: Gunakan format Markdown untuk membuat jawaban Anda terstruktur dan mudah dibaca:
          - Gunakan **tebal** untuk poin penting atau istilah kunci.
          - Gunakan daftar (bullet points atau numbered lists) untuk langkah-langkah atau daftar informasi.
          - Gunakan kutipan (blockquotes) untuk ayat Al-Qur'an atau Hadits.
          - Gunakan judul (headings) jika jawaban cukup panjang.
          
          Jika pertanyaan tidak relevan dengan Islam, ingatkan pengguna dengan sopan bahwa Anda adalah asisten khusus konsultasi Islami.`,
        },
      });

      const botText = response.text || "Maaf, saya tidak dapat memproses permintaan Anda saat ini.";
      setMessages(prev => [...prev, { role: "bot", text: botText }]);
    } catch (err: any) {
      console.error("AI Error:", err);
      let errorMessage = "Terjadi kesalahan saat menghubungi asisten AI. Silakan coba lagi nanti.";
      
      if (err?.message?.includes("API key not found") || err?.message?.includes("invalid API key")) {
        errorMessage = "⚠️ API Key tidak valid atau tidak ditemukan. Periksa konfigurasi GEMINI_API_KEY Anda.";
      } else if (err?.message) {
        errorMessage = `Terjadi kesalahan: ${err.message}`;
      }
      
      setMessages(prev => [...prev, { role: "bot", text: errorMessage }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] max-h-[800px] bg-white rounded-3xl shadow-xl border border-emerald-100 overflow-hidden">
      {/* Header */}
      <div className="bg-emerald-800 p-6 text-white flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center border border-emerald-600">
            <Bot size={24} className="text-amber-400" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Konsultasi AI Islami</h2>
            <p className="text-xs text-emerald-200 flex items-center gap-1">
              <Sparkles size={10} /> Online & Siap Membantu
            </p>
          </div>
        </div>
        <button 
          onClick={() => setMessages([])}
          className="p-2 hover:bg-emerald-700 rounded-lg transition-colors text-emerald-200"
          title="Hapus Percakapan"
        >
          <Trash2 size={20} />
        </button>
      </div>

      {/* Chat Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50"
      >
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-50">
            <Bot size={64} className="text-emerald-800" />
            <div>
              <p className="text-xl font-bold text-emerald-900">Assalamu'alaikum!</p>
              <p className="text-gray-600">Apa yang ingin Anda tanyakan hari ini?</p>
            </div>
          </div>
        )}

        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={cn(
                "flex gap-3 max-w-[85%]",
                msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1",
                msg.role === "user" ? "bg-amber-500" : "bg-emerald-800"
              )}>
                {msg.role === "user" ? <User size={16} className="text-white" /> : <Bot size={16} className="text-amber-400" />}
              </div>
              <div className={cn(
                "p-4 rounded-2xl text-sm leading-relaxed shadow-sm",
                msg.role === "user" 
                  ? "bg-amber-500 text-white rounded-tr-none" 
                  : "bg-white text-gray-800 border border-emerald-100 rounded-tl-none"
              )}>
                {msg.role === "bot" ? (
                  <div className="markdown-content prose prose-sm max-w-none prose-emerald">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {msg.text}
                    </ReactMarkdown>
                  </div>
                ) : (
                  msg.text
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {loading && (
          <div className="flex gap-3 mr-auto max-w-[85%] animate-pulse">
            <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center shrink-0">
              <Bot size={16} className="text-amber-400" />
            </div>
            <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-emerald-100 space-y-2 w-32">
              <div className="h-2 bg-emerald-100 rounded w-full"></div>
              <div className="h-2 bg-emerald-100 rounded w-2/3"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-emerald-50">
        <div className="flex gap-2 bg-slate-100 p-2 rounded-2xl border border-emerald-50 focus-within:ring-2 focus-within:ring-emerald-500 transition-all">
          <input
            type="text"
            placeholder="Tanyakan sesuatu tentang Islam..."
            className="flex-1 bg-transparent px-4 py-2 focus:outline-none text-gray-800"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className={cn(
              "p-3 rounded-xl transition-all",
              input.trim() && !loading 
                ? "bg-emerald-700 text-white hover:bg-emerald-800 shadow-lg" 
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            )}
          >
            <Send size={20} />
          </button>
        </div>
        <p className="text-[10px] text-center text-gray-400 mt-2">
          Jawaban AI mungkin tidak selalu akurat. Konsultasikan dengan Ulama untuk masalah hukum yang kompleks.
        </p>
      </div>
    </div>
  );
}
