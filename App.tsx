
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutMe from './components/AboutMe';
import SorglosPaket from './components/SorglosPaket';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Legal from './components/Legal';
import WhatsAppButton from './components/WhatsAppButton';
import { useLanguage } from './contexts/LanguageContext';
import { Language } from './translations';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'legal'>('home');
  const { language, setLanguage } = useLanguage();

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen text-white selection:bg-purple-500/30 relative">
      <style dangerouslySetInnerHTML={{ __html: `
        /* DYNAMISCHER HINTERGRUND */
        .bg-glow {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;
            filter: blur(120px); opacity: 0.4;
            pointer-events: none;
        }
        .orb {
            position: absolute; border-radius: 50%;
            animation: orb-move 25s infinite alternate ease-in-out;
        }
        @keyframes orb-move {
            0% { transform: translate(-10%, -10%); }
            100% { transform: translate(50%, 30%); }
        }

        /* TEXT-EFFEKT */
        .grad-text {
            background: linear-gradient(90deg, var(--primary), var(--secondary), var(--primary));
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: text-flow 4s linear infinite;
        }
        @keyframes text-flow { to { background-position: 200% center; } }

        /* Glassmorphism Adjustment */
        .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }
      `}} />

      {/* Hintergrund Layer */}
      <div className="bg-glow">
          <div className="orb" style={{ width: '600px', height: '600px', background: 'var(--primary)', top: '-5%', left: '-5%' }}></div>
          <div className="orb" style={{ width: '500px', height: '500px', background: 'var(--secondary)', bottom: '-10%', right: '5%', animationDelay: '-10s' }}></div>
      </div>

      {/* Language Switcher */}
      <div className="fixed top-24 right-4 z-50 flex gap-2 bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-full p-1">
        {(['de', 'en', 'es'] as Language[]).map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
              language === lang
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>

      <Navbar onHomeClick={() => setView('home')} />
      <main className="relative z-10">
        {view === 'home' ? (
          <>
            <Hero />
            <Services />
            <AboutMe />
            <SorglosPaket />
            <Pricing />
            <Contact />
          </>
        ) : (
          <Legal />
        )}
      </main>
      <Footer onLegalClick={() => setView('legal')} onHomeClick={() => setView('home')} />
      <WhatsAppButton />
    </div>
  );
};

export default App;
