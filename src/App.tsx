import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { OfflineIndicator } from "./components/OfflineIndicator";
import { PWAInstallPromptModal } from "./components/PWAInstallPromptModal";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Quran = lazy(() => import("./pages/Quran"));
const AI = lazy(() => import("./pages/AI"));
const Doa = lazy(() => import("./pages/Doa"));
const Tauhid = lazy(() => import("./pages/Tauhid"));
const Sejarah = lazy(() => import("./pages/Sejarah"));
const Peristiwa = lazy(() => import("./pages/Peristiwa"));
const Timeline = lazy(() => import("./pages/Timeline"));
const Ilmuwan = lazy(() => import("./pages/Ilmuwan"));
const Hadits = lazy(() => import("./pages/Hadits"));
const Pedoman = lazy(() => import("./pages/Pedoman"));
const Roadmap = lazy(() => import("./pages/Roadmap"));
const Zakat = lazy(() => import("./pages/Zakat"));
const Tracker = lazy(() => import("./pages/Tracker"));

const Loading = () => (
  <div className="flex items-center justify-center h-screen bg-white">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-700"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar />
        <main className="flex-1 lg:ml-64 pt-16 lg:pt-0 flex flex-col">
          <div className="flex-1">
            <Suspense fallback={<Loading />}>
              <div className="max-w-5xl mx-auto p-4 md:p-8">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/quran" element={<Quran />} />
                  <Route path="/ai" element={<AI />} />
                  <Route path="/doa" element={<Doa />} />
                  <Route path="/tauhid" element={<Tauhid />} />
                  <Route path="/sejarah" element={<Sejarah />} />
                  <Route path="/peristiwa" element={<Peristiwa />} />
                  <Route path="/timeline" element={<Timeline />} />
                  <Route path="/ilmuwan" element={<Ilmuwan />} />
                  <Route path="/hadits" element={<Hadits />} />
                  <Route path="/pedoman" element={<Pedoman />} />
                  <Route path="/roadmap" element={<Roadmap />} />
                  <Route path="/zakat" element={<Zakat />} />
                  <Route path="/tracker" element={<Tracker />} />
                </Routes>
              </div>
            </Suspense>
          </div>
          <footer className="py-8 text-center text-gray-500 text-sm border-t border-emerald-100 bg-white/50">
            <p>© 2026 Tarbiyah Digital. Dibuat Oleh : R14N</p>
          </footer>
        </main>
        <OfflineIndicator />
        <PWAInstallPromptModal />
      </div>
    </Router>
  );
}
