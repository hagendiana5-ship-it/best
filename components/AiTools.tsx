import React, { useState } from 'react';

interface AiToolsProps {
  currentLang: 'de' | 'en' | 'es';
}

const content = {
  de: {
    title: "KI-Design Werkzeuge",
    subtitle: "Inspiration durch künstliche Intelligenz",
    inputPlaceholder: "Beschreibe dein Wunschbild...",
    btnGenerate: "Design generieren",
    inspirationTitle: "💡 Inspirations-Prompts für deine Webseite",
    takeText: "Text übernehmen",
    prompts: [
      {
        title: "Hero-Bereich (Modern)",
        text: "Nahaufnahme eines hochwertigen Designer-Arbeitsplatzes mit Laptop, warmes Morgenlicht, minimalistisch, 4k."
      },
      {
        title: "Service (Persönlich)",
        text: "Freundliche Frau erklärt einem Handwerker ein digitales Konzept in einer Werkstatt, authentisch, helle Farben."
      },
      {
        title: "Branding (Kreativ)",
        text: "Abstrakte Visualisierung der digitalen Transformation: leuchtende Linien verbinden Visitenkarte mit Smartphone."
      }
    ]
  },
  en: {
    title: "AI Design Tools",
    subtitle: "Inspiration through Artificial Intelligence",
    inputPlaceholder: "Describe your desired image...",
    btnGenerate: "Generate Design",
    inspirationTitle: "💡 Inspiration Prompts for your Website",
    takeText: "Use this text",
    prompts: [
      {
        title: "Hero Section (Modern)",
        text: "Close-up of a high-quality designer workplace with a laptop, warm morning light, minimalist, 4k."
      },
      {
        title: "Service (Personal)",
        text: "Friendly woman explaining a digital concept to a craftsman in a workshop, authentic, bright colors."
      },
      {
        title: "Branding (Creative)",
        text: "Abstract visualization of digital transformation: glowing lines connecting a business card to a smartphone."
      }
    ]
  },
  es: {
    title: "Herramientas de IA",
    subtitle: "Inspiración a través de la Inteligencia Artificial",
    inputPlaceholder: "Describe la imagen que deseas...",
    btnGenerate: "Generar diseño",
    inspirationTitle: "💡 Prompts de inspiración para tu web",
    takeText: "Usar este texto",
    prompts: [
      {
        title: "Sección Hero (Moderno)",
        text: "Primer plano de un lugar de trabajo de diseño de alta calidad con portátil, luz matutina cálida, minimalista, 4k."
      },
      {
        title: "Servicio (Personal)",
        text: "Mujer amable explicando un concepto digital a un artesano en un taller, auténtico, colores brillantes."
      },
      {
        title: "Branding (Creativo)",
        text: "Visualización abstracta de la transformación digital: líneas brillantes que conectan una tarjeta de visita con un móvil."
      }
    ]
  }
};

const AiTools: React.FC<AiToolsProps> = ({ currentLang }) => {
  const t = content[currentLang];
  const [prompt, setPrompt] = useState('');

  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{t.title}</h2>
          <p className="text-xl text-gray-400">{t.subtitle}</p>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-[40px] backdrop-blur-xl mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="text" 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={t.inputPlaceholder}
              className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 px-8 py-4 rounded-2xl font-bold hover:bg-purple-500 transition-all">
              {t.btnGenerate}
            </button>
          </div>
        </div>

        <div className="bg-indigo-900/10 p-8 rounded-[40px] border border-white/5">
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
            {t.inspirationTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {t.prompts.map((p, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-3xl border border-white/10 flex flex-col">
                <p className="text-xs font-bold text-purple-400 mb-3 uppercase tracking-widest">{p.title}</p>
                <p className="text-sm text-gray-300 mb-6 flex-grow italic">"{p.text}"</p>
                <button 
                  onClick={() => setPrompt(p.text)}
                  className="text-white text-xs font-bold py-2 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
                >
                  {t.takeText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiTools;