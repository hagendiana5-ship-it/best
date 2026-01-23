import React, { useState } from 'react';

const WhatsAppButton = () => {
  const [lang, setLang] = useState('de');
  const content = {
    de: "Fragen? Schreib mir!",
    en: "Questions? Write to me!",
    es: "¿Preguntas? ¡Escríbeme!"
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] group flex items-center gap-4">
      <div className="flex gap-2 bg-black/50 p-2 rounded-lg text-xs text-white">
        <button onClick={() => setLang('de')}>DE</button>
        <button onClick={() => setLang('en')}>EN</button>
        <button onClick={() => setLang('es')}>ES</button>
      </div>
      <div className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-bold">
        {content[lang as keyof typeof content]}
      </div>
      <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg cursor-pointer">
        <span className="text-white font-bold text-2xl">WA</span>
      </div>
    </div>
  );
};

export default WhatsAppButton;