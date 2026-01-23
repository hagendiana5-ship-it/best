import React, { useState } from 'react';

const AboutMe = () => {
  const [lang, setLang] = useState('de');

  const content = {
    de: { title: "Über Mich", text: "Ich stehe für Qualität und echte persönliche Erreichbarkeit." },
    en: { title: "About Me", text: "I stand for quality and genuine personal availability." },
    es: { title: "Sobre Mí", text: "Apuesto por la calidad y una disponibilidad personal real." }
  };

  const current = content[lang as keyof typeof content];

  return (
    <section className="py-20 bg-gray-50">
      <div className="flex justify-center gap-4 mb-8">
        <button onClick={() => setLang('de')}>DE</button>
        <button onClick={() => setLang('en')}>EN</button>
        <button onClick={() => setLang('es')}>ES</button>
      </div>
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6">{current.title}</h2>
        <p className="text-xl italic">"{current.text}"</p>
      </div>
    </section>
  );
};

export default AboutMe;