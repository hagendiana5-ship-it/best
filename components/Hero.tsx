import React from 'react';

interface HeroProps {
  currentLang: 'de' | 'en' | 'es';
}

const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const content = {
    de: {
      title1: "Design by Diana",
      title2: "Digitalisierung für KMU",
      desc: "Ich helfe Kleinunternehmen dabei, den Schritt in die digitale Welt zu wagen. Ehrlich, persönlich und ohne kompliziertes Fach-Chinesisch.",
      cta1: "Angebot einholen",
      cta2: "Leistungen"
    },
    en: {
      title1: "Design by Diana",
      title2: "Digitalization for SMBs",
      desc: "I help small businesses take the step into the digital world. Honest, personal, and without complicated tech-jargon.",
      cta1: "Get a Quote",
      cta2: "Services"
    },
    es: {
      title1: "Design by Diana",
      title2: "Digitalización para PyMEs",
      desc: "Ayudo a pequeñas empresas a dar el paso al mundo digital. Honesta, personal y sin complicaciones técnicas.",
      cta1: "Solicitar presupuesto",
      cta2: "Servicios"
    }
  };

  const t = content[currentLang];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-40 overflow-hidden min-h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0 z-0 opacity-40">
        <video
          autoPlay loop muted playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
        >
          <source src="https://cdn.pixabay.com/video/2020/09/24/50535-462378877_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 hover:bg-white/10 transition-colors">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Available for new projects</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter text-white">
          {t.title1} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 animate-gradient">
            {t.title2}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          {t.desc}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
          <button 
            onClick={() => scrollToSection('kontaktformular')}
            className="px-12 py-5 bg-white text-black rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-white/10"
          >
            {t.cta1}
          </button>
          <button 
            onClick={() => scrollToSection('leistungen')}
            className="px-12 py-5 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-2xl font-black text-lg hover:bg-white/10 transition-all"
          >
            {t.cta2}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;