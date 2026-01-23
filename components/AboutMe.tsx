import React from 'react';

const AboutMe: React.FC = () => {
  const phoneNumber = "34603361949";
  const message = encodeURIComponent("Hallo Diana, ich möchte dich gerne kennenlernen und mehr über ein Website-Projekt erfahren!");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section id="über-mich" className="py-32 bg-[#1e293b]/20 backdrop-blur-sm relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
          <div className="relative mb-20 lg:mb-0 flex justify-center">
            {/* Subtiler Glow-Effekt im Hintergrund */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full transform scale-75"></div>
            
            <div className="relative w-80 h-80 md:w-96 md:h-96 group">
              {/* Äußerer Ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-full blur-sm transition-opacity duration-700"></div>
              
              {/* Image Container ohne Upload-Funktion */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400/20 shadow-2xl">
                <img 
                  src="/foto.jpeg" 
                  alt="Diana Hagen" 
                  className="w-full h-full object-cover transition duration-1000 scale-105 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
          
          <div className="text-left">
            <span className="text-purple-400 font-black uppercase tracking-[0.3em] text-xs mb-6 block">Wer steckt dahinter?</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tight leading-tight">Deine Partnerin auf Augenhöhe</h2>
            <div className="space-y-8 text-lg text-gray-300 font-light leading-relaxed">
              <p>
                Hallo, ich bin Diana. Ich weiß, dass die digitale Welt für viele Klein- und Kleinstunternehmen erst einmal einschüchternd wirken kann. Unklare Kosten, komplizierte Fachbegriffe und anonyme Agenturen machen den ersten Schritt oft schwer.
              </p>
              <p>
                Genau deshalb habe ich <strong>Design by Diana</strong> gegründet. Mein Ziel ist es, deine Partnerin an deiner Seite zu sein, die komplizierte Technik einfach macht. Ich begleite dich persönlich vom ersten Entwurf deiner "digitalen Visitenkarte" bis hin zur fertigen SEO-Optimierung.
              </p>
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden group backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="italic text-white relative z-10 text-xl font-medium">
                  "Ich stehe für Qualität, faire Modelle ohne Knebelverträge und echte persönliche Erreichbarkeit. Wenn du Fragen hast, rufst du mich an – kein Callcenter, keine Warteschleife."
                </p>
              </div>
              <p>
                Ob Handwerksbetrieb, kleines Café oder aufstrebendes Startup: Du verdienst eine Webpräsenz, die dich widerspiegelt und deine Kunden begeistert. Lass uns gemeinsam den Schritt in die Digitalisierung gehen – motiviert, ehrlich und erfolgreich.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-8 items-center">
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-2xl font-black shadow-xl shadow-cyan-900/20 hover:scale-105 transition-all"
              >
                Kennenlernen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;