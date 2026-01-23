import React from 'react';

interface NavbarProps {
  onHomeClick: () => void;
  currentLang: 'de' | 'en' | 'es';
  setLang: (lang: 'de' | 'en' | 'es') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick, currentLang, setLang }) => {
  const labels = {
    de: { start: 'Startseite', services: 'Leistungen', pricing: 'Preise', about: 'Über mich', contact: 'Kontakt' },
    en: { start: 'Home', services: 'Services', pricing: 'Pricing', about: 'About Me', contact: 'Contact' },
    es: { start: 'Inicio', services: 'Servicios', pricing: 'Precios', about: 'Sobre mí', contact: 'Contacto' }
  };

  const t = labels[currentLang];

  const handleLinkClick = (id: string) => {
    onHomeClick();
    if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0f172a]/70 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleLinkClick('top')}>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-xl font-bold text-white">Design by Diana</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a onClick={() => handleLinkClick('top')} className="text-gray-300 hover:text-white cursor-pointer text-sm">{t.start}</a>
            <a onClick={() => handleLinkClick('leistungen')} className="text-gray-300 hover:text-white cursor-pointer text-sm">{t.services}</a>
            <a onClick={() => handleLinkClick('preise')} className="text-gray-300 hover:text-white cursor-pointer text-sm">{t.pricing}</a>
            
            {/* SPRACH-UMSCHALTER */}
            <div className="flex gap-2 ml-4 border-l border-white/20 pl-4">
              {(['de', 'en', 'es'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-xs font-bold px-2 py-1 rounded ${currentLang === l ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;