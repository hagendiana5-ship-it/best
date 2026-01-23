import React, { useState } from 'react';

const AiTools = () => {
  const [lang, setLang] = useState('de');
  const content = {
    de: { title: "KI-Tools", desc: "Erstelle Bilder und Videos mit künstlicher Intelligenz." },
    en: { title: "AI Tools", desc: "Create images and videos with artificial intelligence." },
    es: { title: "Herramientas de IA", desc: "Crea imágenes y vídeos con inteligencia artificial." }
  };
  const current = content[lang as keyof typeof content];

  return (
    <section className="py-20 bg-indigo-900 text-white text-center">
      <div className="flex justify-center gap-4 mb-8">
        <button onClick={() => setLang('de')} className="font-bold border px-2 py-1 rounded">DE</button>
        <button onClick={() => setLang('en')} className="font-bold border px-2 py-1 rounded">EN</button>
        <button onClick={() => setLang('es')} className="font-bold border px-2 py-1 rounded">ES</button>
      </div>
      <h2 className="text-3xl font-bold mb-4">{current.title}</h2>
      <p className="text-indigo-200">{current.desc}</p>
    </section>
  );
};

export default AiTools;