import React, { useState } from 'react';

const Hero = () => {
  const [lang, setLang] = useState('de');

  const content = {
    de: {
      title: "FerryFight – Ihr Recht auf See",
      subtitle: "Fähre verspätet oder ausgefallen? Wir holen Ihnen bis zu 600€ Entschädigung zurück.",
      button: "Jetzt Anspruch prüfen"
    },
    en: {
      title: "FerryFight – Your Rights at Sea",
      subtitle: "Ferry delayed or cancelled? We get you up to €600 in compensation.",
      button: "Check claim now"
    },
    es: {
      title: "FerryFight – Sus derechos en el mar",
      subtitle: "¿Ferri retrasado o cancelado? Le conseguimos hasta 600€ de indemnización.",
      button: "Verificar reclamo"
    }
  };

  const current = content[lang as keyof typeof content];

  return (
    <div className="relative h-screen flex items-center justify-center bg-slate-900 text-white overflow-hidden">
      <div className="absolute top-24 right-8 z-20 flex gap-2">
        <button onClick={() => setLang('de')} className={`px-2 py-1 rounded ${lang === 'de' ? 'bg-blue-600' : 'bg-gray-700'}`}>DE</button>
        <button onClick={() => setLang('en')} className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-blue-600' : 'bg-gray-700'}`}>EN</button>
        <button onClick={() => setLang('es')} className={`px-2 py-1 rounded ${lang === 'es' ? 'bg-blue-600' : 'bg-gray-700'}`}>ES</button>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">{current.title}</h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">{current.subtitle}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-xl">
          {current.button}
        </button>
      </div>
    </div>
  );
};

export default Hero;