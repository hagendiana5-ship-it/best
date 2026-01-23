import React from 'react';

interface SorglosPaketProps {
  currentLang: 'de' | 'en' | 'es';
}

const content = {
  de: {
    title: "Das Sorglos-Paket:",
    highlight: "Du arbeitest, ich kümmere mich.",
    description: "Keine Lust auf Updates, Sicherheitslücken oder komplizierte Technik? Mein USP ist dein Vorteil: Ich übernehme die komplette Wartung.",
    features: [
      "Regelmäßige Sicherheits-Updates",
      "Backup-Management (Sicherung deiner Daten)",
      "Kleine Text- & Bildänderungen inklusive",
      "Persönliche Erreichbarkeit bei Fragen",
      "Maximaler Schutz vor Cyberangriffen"
    ],
    cardTitle: "100% Technik-Freiheit",
    cardDesc: "Konzentriere dich voll auf dein Kerngeschäft, während ich im Hintergrund für Sicherheit und Performance sorge."
  },
  en: {
    title: "The Carefree Package:",
    highlight: "You work, I take care of the rest.",
    description: "No interest in updates, security vulnerabilities, or complicated tech? My USP is your advantage: I handle the entire maintenance.",
    features: [
      "Regular security updates",
      "Backup management (data protection)",
      "Minor text & image changes included",
      "Personal availability for questions",
      "Maximum protection against cyber attacks"
    ],
    cardTitle: "100% Tech Freedom",
    cardDesc: "Focus fully on your core business while I ensure security and performance in the background."
  },
  es: {
    title: "El Paquete Sin Preocupaciones:",
    highlight: "Tú trabajas, yo me encargo.",
    description: "¿No quieres saber nada de actualizaciones, brechas de seguridad o técnica complicada? Mi propuesta es tu ventaja: yo me encargo de todo el mantenimiento.",
    features: [
      "Actualizaciones de seguridad periódicas",
      "Gestión de copias de seguridad (backups)",
      "Pequeños cambios de texto e imagen incluidos",
      "Disponibilidad personal para consultas",
      "Máxima protección contra ciberataques"
    ],
    cardTitle: "Libertad técnica al 100%",
    cardDesc: "Concéntrate plenamente en tu negocio principal mientras yo me encargo de la seguridad y el rendimiento en segundo plano."
  }
};

const SorglosPaket: React.FC<SorglosPaketProps> = ({ currentLang }) => {
  const t = content[currentLang];

  return (
    <section id="sorglos-paket" className="py-40 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-black mb-10 leading-[0.9] tracking-tighter text-white">
              {t.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{t.highlight}</span>
            </h2>
            <p className="text-2xl text-gray-400 mb-12 font-light">
              {t.description}
            </p>
            <ul className="grid gap-6 mb-12">
              {t.features.map((item, i) => (
                <li key={i} className="flex items-center gap-5 group">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-lg text-gray-300 font-medium group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-20 lg:mt-0">
            <div className="absolute -inset-10 bg-cyan-500/20 blur-[120px] rounded-full"></div>
            <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-12 rounded-[48px] overflow-hidden group">
              <div className="text-center relative z-10">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-3xl mb-10 shadow-2xl shadow-cyan-900/50">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-white mb-6">{t.cardTitle}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{t.cardDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SorglosPaket;