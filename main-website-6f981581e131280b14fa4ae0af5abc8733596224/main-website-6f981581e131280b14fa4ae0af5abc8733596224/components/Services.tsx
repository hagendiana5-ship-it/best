import React, { useState } from 'react';
import { Anchor, Ban, Clock, Coins } from 'lucide-react';

const Services = () => {
  const [lang, setLang] = useState('de');

  const translations = {
    de: {
      heading: "Unsere Leistungen",
      subheading: "Wir setzen Ihre Rechte auf See durch.",
      items: [
        { title: "Verspätungen", desc: "Ab 60 Minuten Verspätung haben Sie Recht auf Entschädigung." },
        { title: "Annullierungen", desc: "Fähre ausgefallen? Wir fordern Ihre Rückerstattung." },
        { title: "Kosten", desc: "Wir holen Kosten für Verpflegung oder Hotels zurück." },
        { title: "Alle Linien", desc: "Egal welche Fährlinie – wir vertreten Sie weltweit." }
      ]
    },
    en: {
      heading: "Our Services",
      subheading: "We enforce your rights at sea.",
      items: [
        { title: "Delays", desc: "From 60 minutes delay you are entitled to compensation." },
        { title: "Cancellations", desc: "Ferry cancelled? We claim your refund." },
        { title: "Costs", desc: "We recover costs for meals or hotels for you." },
        { title: "All Lines", desc: "No matter which ferry line – we represent you worldwide." }
      ]
    },
    es: {
      heading: "Nuestros Servicios",
      subheading: "Hacemos valer sus derechos en el mar.",
      items: [
        { title: "Retrasos", desc: "A partir de 60 minutos tiene derecho a indemnización." },
        { title: "Cancelaciones", desc: "¿Ferri cancelado? Reclamamos su reembolso." },
        { title: "Gastos", desc: "Recuperamos los gastos de comida u hotel para usted." },
        { title: "Todas las líneas", desc: "No importa la línea de ferri – le representamos a nivel mundial." }
      ]
    }
  };

  const icons = [<Clock size={32}/>, <Ban size={32}/>, <Coins size={32}/>, <Anchor size={32}/>];
  const current = translations[lang as keyof typeof translations];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="flex justify-center gap-4 mb-8">
        <button onClick={() => setLang('de')} className={`px-2 py-1 rounded ${lang === 'de' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>DE</button>
        <button onClick={() => setLang('en')} className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>EN</button>
        <button onClick={() => setLang('es')} className={`px-2 py-1 rounded ${lang === 'es' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>ES</button>
      </div>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">{current.heading}</h2>
        <p className="text-xl text-gray-600 mb-16">{current.subheading}</p>
        <div className="grid md:grid-cols-4 gap-8">
          {current.items.map((item, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-blue-600 mb-6 flex justify-center">{icons[i]}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;