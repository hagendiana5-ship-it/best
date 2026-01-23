import React, { useState } from 'react';

const SorglosPaket = () => {
  const [lang, setLang] = useState('de');

  const content = {
    de: { title: "Das Sorglos-Paket", desc: "Du arbeitest, ich kümmere mich um die Technik." },
    en: { title: "The Carefree Package", desc: "You work, I take care of the technology." },
    es: { title: "El Paquete Sin Preocupaciones", desc: "Usted trabaja, ich me ocupo de la tecnología." }
  };

  const current = content[lang as keyof typeof content];

  return (
    <section className="py-20 bg-blue-900 text-white text-center">
      <div className="flex justify-center gap-4 mb-8">
        <button onClick={() => setLang('de')}>DE</button>
        <button onClick={() => setLang('en')}>EN</button>
        <button onClick={() => setLang('es')}>ES</button>
      </div>
      <h2 className="text-4xl font-bold mb-4">{current.title}</h2>
      <p className="text-xl text-blue-200">{current.desc}</p>
    </section>
  );
};

export default SorglosPaket;