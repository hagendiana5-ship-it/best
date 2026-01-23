import React, { useState } from 'react';

const Contact = () => {
  const [lang, setLang] = useState('de');

  const content = {
    de: {
      title: "Kontaktieren Sie uns",
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      send: "Nachricht senden"
    },
    en: {
      title: "Contact Us",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message"
    },
    es: {
      title: "Contáctenos",
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      send: "Enviar mensaje"
    }
  };

  const current = content[lang as keyof typeof content];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="flex justify-center gap-4 mb-8">
        <button onClick={() => setLang('de')} className="text-xs font-bold">DE</button>
        <button onClick={() => setLang('en')} className="text-xs font-bold">EN</button>
        <button onClick={() => setLang('es')} className="text-xs font-bold">ES</button>
      </div>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{current.title}</h2>
        <form className="space-y-6">
          <input type="text" placeholder={current.name} className="w-full p-4 rounded-lg border border-gray-300" />
          <input type="email" placeholder={current.email} className="w-full p-4 rounded-lg border border-gray-300" />
          <textarea placeholder={current.message} rows={4} className="w-full p-4 rounded-lg border border-gray-300"></textarea>
          <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors">
            {current.send}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;