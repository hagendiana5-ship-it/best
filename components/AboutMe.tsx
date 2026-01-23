import React from 'react';

interface AboutMeProps {
  currentLang: 'de' | 'en' | 'es';
}

const content = {
  de: {
    title: "Über mich",
    p1: "Ich bin Diana – deine Partnerin für den digitalen Auftritt. Mein Ziel ist es, Klein- und Kleinstunternehmen den Weg ins Internet so einfach und ehrlich wie möglich zu machen.",
    p2: "In Marbella ansässig, unterstütze ich Unternehmen sowohl lokal als auch international dabei, mit modernem Design und ehrlicher Beratung zu wachsen. Keine komplizierten Prozesse, sondern Ergebnisse auf Augenhöhe.",
    badge: "Persönlich & Direkt"
  },
  en: {
    title: "About Me",
    p1: "I'm Diana – your partner for your digital presence. My goal is to make the path to the internet as simple and honest as possible for small and micro-businesses.",
    p2: "Based in Marbella, I support businesses both locally and internationally to grow with modern design and honest consulting. No complicated processes, just results at eye level.",
    badge: "Personal & Direct"
  },
  es: {
    title: "Sobre mí",
    p1: "Soy Diana, tu socia para tu presencia digital. Mi objetivo es facilitar al máximo el camino hacia internet para las pequeñas y microempresas de forma sencilla y honesta.",
    p2: "Afincada en Marbella, apoyo a empresas tanto locales como internacionales a crecer con un diseño moderno y una consultoría honesta. Sin procesos complicados, solo resultados de tú a tú.",
    badge: "Personal y Directo"
  }
};

const AboutMe: React.FC<AboutMeProps> = ({ currentLang }) => {
  const t = content[currentLang];

  return (
    <section id="über-mich" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-white/5 backdrop-blur-2xl p-12 md:p-16 rounded-[40px] border border-white/10 shadow-2xl relative">
          <div className="absolute -top-6 -right-6 bg-gradient-to-br from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl">
            {t.badge}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-10 text-white tracking-tighter">
            {t.title}
          </h2>
          
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium">
              {t.p1}
            </p>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
              {t.p2}
            </p>
          </div>

          <div className="mt-12 pt-10 border-t border-white/5 flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center text-2xl">
              ✨
            </div>
            <div className="text-gray-400 text-sm font-bold uppercase tracking-[0.2em]">
              Design with Passion & Strategy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;