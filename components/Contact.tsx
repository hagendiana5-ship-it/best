import React from 'react';

interface ContactProps {
  currentLang: 'de' | 'en' | 'es';
}

const content = {
  de: {
    title: "Gratis Design-Entwurf",
    desc: "Sichere dir jetzt einen unverbindlichen Design-Entwurf für dein Projekt. Lass uns gemeinsam etwas Großes schaffen.",
    placeholder: "Deine E-Mail-Adresse",
    button: "Jetzt mein gratis Website-Sample anfordern",
    available: "Verfügbar für neue Projekte"
  },
  en: {
    title: "Free Design Draft",
    desc: "Get a non-binding design draft for your project now. Let's create something great together.",
    placeholder: "Your email address",
    button: "Request my free website sample now",
    available: "Available for new projects"
  },
  es: {
    title: "Boceto de Diseño Gratis",
    desc: "Consigue ahora un boceto de diseño sin compromiso para tu proyecto. Creemos algo grande juntos.",
    placeholder: "Tu correo electrónico",
    button: "Solicitar mi muestra de web gratuita ahora",
    available: "Disponible para nuevos proyectos"
  }
};

const Contact: React.FC<ContactProps> = ({ currentLang }) => {
  const t = content[currentLang];

  return (
    <section id="kontaktformular" className="py-20 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl relative overflow-hidden group">
          
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">{t.title}</h2>
              <p className="text-gray-400 font-light leading-relaxed">
                {t.desc}
              </p>
            </div>

            <div className="lg:w-2/3 w-full">
              <form className="grid gap-4">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder={t.placeholder} 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all text-sm"
                    required
                  />
                </div>

                <button type="submit" className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-bold text-sm hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:scale-[1.02] transition-all duration-300">
                  {t.button}
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center lg:justify-end">
             <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
               <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
               {t.available}
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;