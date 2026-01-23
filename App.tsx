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

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'legal'>('home');
  // HIER wird die Sprache gespeichert (Standard: Deutsch)
  const [lang, setLang] = useState<'de' | 'en' | 'es'>('de');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen text-white selection:bg-purple-500/30 relative">
      <style dangerouslySetInnerHTML={{ __html: `
        .bg-glow { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; filter: blur(120px); opacity: 0.4; pointer-events: none; }
        .orb { position: absolute; border-radius: 50%; animation: orb-move 25s infinite alternate ease-in-out; }
        @keyframes orb-move { 0% { transform: translate(-10%, -10%); } 100% { transform: translate(10%, 10%); } }
        .glass-card { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(24px); border: 1px solid rgba(255, 255, 255, 0.08); }
      `}} />

      <div className="bg-glow">
          <div className="orb" style={{ width: '600px', height: '600px', background: '#3b82f6', top: '-5%', left: '-5%' }}></div>
          <div className="orb" style={{ width: '500px', height: '500px', background: '#a855f7', bottom: '-10%', right: '5%', animationDelay: '-10s' }}></div>
      </div>

      {/* Die Navbar bekommt jetzt die Sprache und die Funktion zum Ändern */}
      <Navbar 
        onHomeClick={() => setView('home')} 
        currentLang={lang} 
        setLang={setLang} 
      />

      <main className="relative z-10">
        {view === 'home' ? (
          <>
            {/* Wir geben die Sprache 'lang' an alle Bausteine weiter */}
            <Hero currentLang={lang} />
            <Services currentLang={lang} />
            <AboutMe currentLang={lang} />
            <SorglosPaket currentLang={lang} />
            <Pricing currentLang={lang} />
            <Contact currentLang={lang} />
          </>
        ) : (
          <Legal currentLang={lang} />
        )}
      </main>

      <WhatsAppButton currentLang={lang} />
      <Footer onLegalClick={() => setView('legal')} onHomeClick={() => setView('home')} currentLang={lang} />
    </div>
  );
};

export default App;