
import React from 'react';

const SorglosPaket: React.FC = () => {
  return (
    <section id="sorglos-paket" className="py-40 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-black mb-10 leading-[0.9] tracking-tighter text-white">
              Das Sorglos-Paket: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Du arbeitest, ich kümmere mich.</span>
            </h2>
            <p className="text-2xl text-gray-400 mb-12 font-light">
              Keine Lust auf Updates, Sicherheitslücken oder komplizierte Technik? Mein USP ist dein Vorteil: Ich übernehme die komplette Wartung.
            </p>
            <ul className="grid gap-6 mb-12">
              {[
                "Regelmäßige Sicherheits-Updates",
                "Backup-Management (Sicherung deiner Daten)",
                "Kleine Text- & Bildänderungen inklusive",
                "Persönliche Erreichbarkeit bei Fragen",
                "Maximaler Schutz vor Cyberangriffen"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-cyan-500/50 transition-colors backdrop-blur-sm">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-xl text-gray-300 font-light group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-[40px] opacity-10 blur-2xl"></div>
            <div className="bg-white/5 backdrop-blur-3xl p-12 rounded-[40px] border border-white/10 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                 <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"></path>
                 </svg>
               </div>
              <div className="text-center relative z-10">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-3xl mb-10 shadow-2xl shadow-cyan-900/50">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-white mb-6">100% Technik-Freiheit</h3>
                <p className="text-cyan-400 mb-10 italic text-lg leading-relaxed font-light">"Diana ist wie eine Mitarbeiterin, die ich nur dann bezahle, wenn ich sie brauche – nur günstiger!"</p>
                <div className="inline-block px-8 py-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                  <span className="text-4xl font-black text-white">Inklusive</span>
                </div>
                <p className="text-sm text-gray-500 mt-6 uppercase tracking-widest font-bold">in jedem Wartungs-Vertrag</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SorglosPaket;
