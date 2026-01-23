import React from 'react';

interface FooterProps {
  onLegalClick: () => void;
  onHomeClick: () => void;
  currentLang: 'de' | 'en' | 'es';
}

const content = {
  de: {
    services: "Leistungen",
    pricing: "Preise",
    about: "Über mich",
    legal: "Rechtliches",
    imprint: "Impressum",
    privacy: "Datenschutz",
    rights: "Alle Rechte vorbehalten."
  },
  en: {
    services: "Services",
    pricing: "Pricing",
    about: "About Me",
    legal: "Legal",
    imprint: "Imprint",
    privacy: "Privacy Policy",
    rights: "All rights reserved."
  },
  es: {
    services: "Servicios",
    pricing: "Precios",
    about: "Sobre mí",
    legal: "Legal",
    imprint: "Aviso Legal",
    privacy: "Privacidad",
    rights: "Todos los derechos reservados."
  }
};

const Footer: React.FC<FooterProps> = ({ onLegalClick, onHomeClick, currentLang }) => {
  const t = content[currentLang];

  const handleScrollTo = (id: string) => {
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
    <footer className="bg-[#0f172a] text-white py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8 cursor-pointer group" onClick={() => handleScrollTo('top')}>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-2xl font-black tracking-tighter">Design by Diana</span>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">Quicklinks</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li><button onClick={() => handleScrollTo('leistungen')} className="hover:text-cyan-400 transition-colors">{t.services}</button></li>
              <li><button onClick={() => handleScrollTo('preise')} className="hover:text-cyan-400 transition-colors">{t.pricing}</button></li>
              <li><button onClick={() => handleScrollTo('über-mich')} className="hover:text-cyan-400 transition-colors">{t.about}</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">{t.legal}</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li><button onClick={onLegalClick} className="hover:text-cyan-400 transition-colors">{t.imprint}</button></li>
              <li><button onClick={onLegalClick} className="hover:text-cyan-400 transition-colors">{t.privacy}</button></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 text-center text-gray-600 text-xs font-bold uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Design by Diana. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;