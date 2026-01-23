
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-40 overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Subtileres Video Overlay um die neuen Orbs nicht zu verdecken */}
      <div className="absolute inset-0 z-0 opacity-40">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
        >
          <source 
            src="https://cdn.pixabay.com/video/2020/09/24/50535-462378877_large.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 text-xs font-bold tracking-[0.2em] text-cyan-300 uppercase bg-cyan-400/10 border border-cyan-400/20 rounded-full backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          {t('hero.badge')}
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tighter drop-shadow-2xl">
          {t('hero.title')}<br />
          <span className="grad-text">{t('hero.titleHighlight')}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-lg">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
          <button 
            onClick={() => scrollToSection('kontaktformular')}
            className="px-12 py-5 bg-white text-black rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-white/10"
          >
            {t('hero.ctaPrimary')}
          </button>
          <button 
            onClick={() => scrollToSection('leistungen')}
            className="px-12 py-5 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-2xl font-black text-lg hover:bg-white/10 transition-all"
          >
            {t('hero.ctaSecondary')}
          </button>
        </div>

        <div className="relative max-w-4xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
            alt="Design Preview" 
            className="relative rounded-3xl shadow-2xl border border-white/10 object-cover w-full aspect-[21/9] grayscale-[20%] group-hover:grayscale-0 transition duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
