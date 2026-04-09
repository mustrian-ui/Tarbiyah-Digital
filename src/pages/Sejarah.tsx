import React, { useState } from "react";
import { History, ChevronRight, BookOpen, Map, Landmark, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const historySections = [
  {
    id: "quran",
    title: "Sejarah Turunnya Al-Qur'an",
    icon: BookOpen,
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
      <p><em>Referensi: zakat.or.id</em></p>
    `
  },
  {
    id: "khulafaur",
    title: "Sejarah Khulafaur Rasyidin",
    icon: Landmark,
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
      <p>Sepupu sekaligus menantu Nabi. Masa kepemimpinannya diwarnai dengan tantangan internal yang besar (fitnah). Meskipun terjadi konflik seperti Perang Jamal dan Perang Siffin, Ali tetap dikenal sebagai pemimpin yang sangat cerdas, adil, dan teguh dalam memegang prinsip agama.</p>
      <p><em>Referensi: islam.nu.or.id</em></p>
    `
  },
  {
    id: "umayyah",
    title: "Sejarah Dinasti Umayyah",
    icon: Map,
    content: "Dinasti pertama setelah masa Khulafaur Rasyidin, berpusat di Damaskus. Berperan besar dalam perluasan wilayah Islam hingga ke Spanyol (Andalusia).",
    fullContent: `
      <h3>Sejarah Bani Umayyah</h3>
      <p>Bani Umayyah adalah kekhalifahan Islam pertama setelah berakhirnya masa Khulafaur Rasyidin. Didirikan oleh Muawiyah bin Abu Sufyan pada tahun 661 M setelah peristiwa Amul Jama'ah (Tahun Persatuan).</p>
      
      <h4>Sistem Pemerintahan</h4>
      <p>Dinasti Umayyah mengubah sistem kepemimpinan dari pemilihan (syura) menjadi sistem monarki atau turun-temurun. Pusat pemerintahan dipindahkan dari Madinah ke Damaskus, Suriah.</p>
      
      <h4>Masa Kejayaan</h4>
      <p>Masa kejayaan dicapai pada masa Khalifah Al-Walid bin Abdul Malik dan Umar bin Abdul Aziz. Wilayah Islam meluas hingga ke India di timur dan Andalusia (Spanyol) di barat. Perkembangan terjadi di berbagai bidang:</p>
      <ul>
        <li><strong>Arsitektur:</strong> Pembangunan Masjid Agung Damaskus dan Kubah Shakhrah (Dome of the Rock).</li>
        <li><strong>Administrasi:</strong> Penggunaan bahasa Arab sebagai bahasa resmi administrasi dan pencetakan mata uang dinar/dirham Islam.</li>
        <li><strong>Ilmu Pengetahuan:</strong> Dimulainya penerjemahan karya-karya ilmiah dan perkembangan ilmu hadits serta fiqih.</li>
      </ul>
      
      <h4>Keruntuhan</h4>
      <p>Dinasti ini runtuh pada tahun 750 M akibat ketidakpuasan masyarakat terhadap kebijakan yang dianggap diskriminatif terhadap kaum Mawali (Muslim non-Arab) dan perlawanan dari gerakan Bani Abbasiyah.</p>
      <p><em>Referensi: ruangguru.com</em></p>
    `
  },
  {
    id: "abbasiyah",
    title: "Sejarah Dinasti Abbasiyah",
    icon: Landmark,
    content: "Masa keemasan ilmu pengetahuan Islam (Golden Age of Islam). Berpusat di Baghdad, melahirkan banyak ilmuwan besar seperti Al-Khwarizmi dan Ibnu Sina.",
    fullContent: `
      <h3>Sejarah Dinasti Abbasiyah</h3>
      <p>Dinasti Abbasiyah didirikan oleh Abu al-Abbas as-Saffah pada tahun 750 M setelah menggulingkan Dinasti Umayyah. Dinasti ini berkuasa selama lebih dari lima abad dengan pusat pemerintahan di Baghdad, Irak.</p>
      
      <h4>Zaman Keemasan Islam (The Golden Age)</h4>
      <p>Puncak kejayaan terjadi pada masa Khalifah Harun al-Rasyid dan putranya, Al-Ma'mun. Baghdad menjadi pusat peradaban dunia. Salah satu warisan terbesarnya adalah <strong>Bayt al-Hikmah</strong> (Rumah Kebijaksanaan), sebuah perpustakaan dan pusat riset raksasa.</p>
      
      <h4>Kontribusi Ilmu Pengetahuan</h4>
      <p>Pada masa ini, ilmu pengetahuan berkembang pesat melalui gerakan penerjemahan besar-besaran karya Yunani, Persia, dan India. Lahirlah ilmuwan-ilmuwan legendaris seperti:</p>
      <ul>
        <li><strong>Al-Khwarizmi:</strong> Penemu Aljabar dan algoritma.</li>
        <li><strong>Ibnu Sina (Avicenna):</strong> Bapak Kedokteran Modern.</li>
        <li><strong>Al-Biruni:</strong> Ahli astronomi dan geodesi.</li>
        <li><strong>Jabir bin Hayyan:</strong> Bapak Kimia Islam.</li>
      </ul>
      
      <h4>Keruntuhan</h4>
      <p>Kemunduran dimulai akibat perebutan kekuasaan internal dan serangan luar. Puncaknya adalah serangan bangsa Mongol di bawah pimpinan Hulagu Khan pada tahun 1258 M yang menghancurkan Baghdad dan membakar jutaan buku di Bayt al-Hikmah.</p>
      <p><em>Referensi: ruangguru.com</em></p>
    `
  },
  {
    id: "indonesia",
    title: "Sejarah Islam di Indonesia",
    icon: Map,
    content: "Islam masuk ke Nusantara melalui jalur perdagangan dan dakwah damai oleh para pedagang Arab, Gujarat, dan Persia. Peran Wali Songo sangat krusial dalam penyebaran Islam di tanah Jawa.",
    fullContent: `
      <h3>Sejarah Islam di Indonesia</h3>
      <p>Islam masuk ke wilayah Nusantara melalui proses yang damai dan bertahap, menjadikannya agama mayoritas dengan corak budaya yang unik dan toleran.</p>
      
      <h4>Teori Masuknya Islam</h4>
      <ul>
        <li><strong>Teori Gujarat:</strong> Islam dibawa oleh pedagang dari Gujarat, India pada abad ke-13.</li>
        <li><strong>Teori Makkah:</strong> Islam masuk langsung dari Arab pada abad ke-7 (masa sahabat Nabi).</li>
        <li><strong>Teori Persia:</strong> Islam masuk melalui pengaruh budaya Persia pada abad ke-13.</li>
      </ul>
      
      <h4>Peran Wali Songo</h4>
      <p>Di Pulau Jawa, penyebaran Islam tidak lepas dari peran sembilan wali (Wali Songo). Mereka menggunakan pendekatan dakwah yang santun, menyesuaikan dengan budaya lokal (akulturasi), seperti melalui wayang, gamelan, dan tradisi masyarakat tanpa menghilangkan esensi ajaran tauhid.</p>
      
      <h4>Kerajaan-Kerajaan Islam</h4>
      <p>Penyebaran Islam semakin kuat dengan berdirinya kesultanan-kesultanan Islam seperti:</p>
      <ul>
        <li><strong>Samudera Pasai:</strong> Kerajaan Islam pertama di Aceh.</li>
        <li><strong>Kesultanan Demak:</strong> Pelopor kerajaan Islam di Jawa.</li>
        <li><strong>Mataram Islam:</strong> Kerajaan besar yang menyatukan sebagian besar Jawa.</li>
        <li><strong>Gowa-Tallo:</strong> Pusat Islam di Sulawesi.</li>
        <li><strong>Ternate & Tidore:</strong> Pusat Islam di Maluku.</li>
      </ul>
      
      <h4>Karakteristik Islam Nusantara</h4>
      <p>Islam di Indonesia dikenal dengan istilah "Islam Nusantara" yang moderat (wasathiyah), menghargai keberagaman, dan mampu hidup berdampingan dengan tradisi lokal. Hal ini menjadikan Indonesia sebagai negara dengan penduduk Muslim terbesar di dunia yang tetap menjunjung tinggi persatuan.</p>
      <p><em>Referensi: AI Generated</em></p>
    `
  }
];

export default function Sejarah() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [showFullContent, setShowFullContent] = useState<string | null>(null);

  const activeSection = historySections.find(s => s.id === showFullContent);

  return (
    <div className="space-y-8">
      <div className="bg-emerald-800 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">Sejarah Islam</h2>
          <p className="text-emerald-100 text-lg leading-relaxed">
            Menelusuri jejak peradaban Islam dari masa kenabian hingga penyebarannya ke seluruh penjuru dunia.
          </p>
        </div>
        <History size={200} className="absolute top-0 right-0 -mr-12 -mt-12 opacity-10" />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {historySections.map((section) => (
          <motion.div
            key={section.id}
            layout
            className={cn(
              "bg-white rounded-2xl border border-emerald-50 shadow-sm overflow-hidden transition-all",
              activeId === section.id ? "ring-2 ring-emerald-500" : "hover:bg-emerald-50/30"
            )}
          >
            <button
              onClick={() => setActiveId(activeId === section.id ? null : section.id)}
              className="w-full p-6 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
                  <section.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-emerald-900">{section.title}</h3>
              </div>
              <ChevronRight 
                className={cn("text-emerald-300 transition-transform", activeId === section.id && "rotate-90")} 
              />
            </button>

            <AnimatePresence>
              {activeId === section.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="pt-4 border-t border-emerald-50">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {section.content}
                    </p>
                    <button 
                      onClick={() => setShowFullContent(section.id)}
                      className="mt-4 text-emerald-700 font-bold flex items-center gap-1 hover:underline"
                    >
                      Baca Selengkapnya <ChevronRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Full Content Modal */}
      <AnimatePresence>
        {showFullContent && activeSection && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            >
              <div className="p-6 border-b border-emerald-50 flex justify-between items-center bg-emerald-50/30">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
                    <activeSection.icon size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-900">{activeSection.title}</h3>
                </div>
                <button 
                  onClick={() => setShowFullContent(null)}
                  className="p-2 hover:bg-emerald-100 rounded-full transition-colors text-emerald-700"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-8 overflow-y-auto flex-1 prose prose-emerald max-w-none">
                <div 
                  className="text-gray-700 leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{ __html: activeSection.fullContent }}
                />
              </div>
              
              <div className="p-6 border-t border-emerald-50 bg-gray-50 flex justify-end">
                <button 
                  onClick={() => setShowFullContent(null)}
                  className="px-6 py-2 bg-emerald-700 text-white rounded-xl font-bold hover:bg-emerald-800 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
