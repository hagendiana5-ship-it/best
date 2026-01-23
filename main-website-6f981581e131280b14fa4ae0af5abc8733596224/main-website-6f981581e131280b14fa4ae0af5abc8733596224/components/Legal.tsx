import React, { useState } from 'react';

const Legal = () => {
  const [lang, setLang] = useState('de');

  const content = {
    de: { title: "Rechtliches", impressum: "Impressum", privacy: "Datenschutz", text: "Angaben gemäß gesetzlicher Anforderungen..." },
    en: { title: "Legal", impressum: "Legal Notice", privacy: "Privacy Policy", text: "Information according to legal requirements..." },
    es: { title: "Aviso Legal", impressum: "Aviso Legal", privacy: "Política de Privacidad", text: "Información conforme a los requisitos legales..." }
  };

  const current = content[lang as keyof typeof content];

  return (
    <div className="py-32 px-4 max-w-4xl mx-auto text-white">
      <div className="flex justify-center gap-4 mb-8">
        <button onClick={() => setLang('de')} className="font-bold">DE</button>
        <button onClick={() => setLang('en')} className="font-bold">EN</button>
        <button onClick={() => setLang('es')} className="font-bold">ES</button>
      </div>
      <h1 className="text-4xl font-black mb-8">{current.title}</h1>
      <h2 className="text-2xl font-bold mb-4">{current.impressum}</h2>
      <p className="text-gray-400 mb-8">{current.text}</p>
      <h2 className="text-2xl font-bold mb-4">{current.privacy}</h2>
      <p className="text-gray-400">GDPR / RGPD compliant.</p>
    </div>
  );
};

export default Legal;