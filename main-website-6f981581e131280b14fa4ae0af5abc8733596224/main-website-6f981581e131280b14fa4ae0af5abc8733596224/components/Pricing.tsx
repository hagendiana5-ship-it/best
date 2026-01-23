import React, { useState } from 'react';

const Pricing = () => {
  const [lang, setLang] = useState('de');

  const content = {
    de: {
      title: "Unsere Pakete",
      standard: "Standardpaket",
      premium: "Business-Premium",
      price_monthly: "49 € / Monat",
      button: "Plan anfragen"
    },
    en: {
      title: "Our Packages",
      standard: "Standard Package",
      premium: "Business Premium",
      price_monthly: "49 € / month",
      button: "Inquire Plan"
    },
    es: {
      title: "Nuestros Paquetes",
      standard: "Paquete Estándar",
      premium: "Business Premium",
      price_monthly: "49 € / mes",
      button: "Consultar plan"
    }
  };

  const current = content[lang as keyof typeof content];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="flex justify-center gap-4 mb-8">
        <button onClick={() => setLang('de')} className="font-bold">DE</button>
        <button onClick={() => setLang('en')} className="font-bold">EN</button>
        <button onClick={() => setLang('es')} className="font-bold">ES</button>
      </div>
      <h2 className="text-3xl font-bold text-center mb-10">{current.title}</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        <div className="p-8 border rounded-2xl w-80 text-center">
          <h3 className="text-xl font-bold">{current.standard}</h3>
          <p className="text-blue-600 font-bold my-4">{current.price_monthly}</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full">{current.button}</button>
        </div>
        <div className="p-8 border-2 border-blue-600 rounded-2xl w-80 text-center relative">
          <h3 className="text-xl font-bold">{current.premium}</h3>
          <p className="text-blue-600 font-bold my-4">69 €</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full">{current.button}</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;