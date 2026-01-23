import React, { useState } from 'react';

const Navbar = () => {
  const [lang, setLang] = useState('de');
  const content = {
    de: { links: ["Services", "KI-Tools", "Kontakt"] },
    en: { links: ["Services", "AI-Tools", "Contact"] },
    es: { links: ["Servicios", "IA-Tools", "Contacto"] }
  };
  const current = content[lang as keyof typeof content];

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-black text-white">LOGO</div>
        <div className="hidden md:flex gap-8 text-white/70">
          {current.links.map(link => <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-white">{link}</a>)}
        </div>
        <div className="flex gap-3 text-white font-bold bg-white/10 px-3 py-1 rounded-full text-sm">
          <button onClick={() => setLang('de')} className={lang === 'de' ? 'text-white' : 'text-white/40'}>DE</button>
          <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-white' : 'text-white/40'}>EN</button>
          <button onClick={() => setLang('es')} className={lang === 'es' ? 'text-white' : 'text-white/40'}>ES</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;