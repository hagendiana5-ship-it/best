import React from 'react';

interface PricingProps {
  currentLang: 'de' | 'en' | 'es';
}

const content = {
  de: {
    title: "Preismodelle",
    setupLabel: "Einmalige Einrichtung",
    monthlyLabel: "mtl. Wartung & Hosting",
    btnText: "Plan anfragen",
    waMsg: "Hallo Diana, ich interessiere mich für das ",
    waSuffix: " und würde gerne mehr darüber erfahren!",
    trustText: "Bereits über 40 Kleinunternehmen vertrauen auf Diana.",
    plans: [
      {
        name: "Standardpaket",
        setup: "ab 499 €",
        monthly: "49 €",
        desc: "Der ideale digitale Start für Kleinstunternehmen.",
        features: ["1-3 Seiten Design", "Mobil-optimiert", "SEO-Grundoptimierung", "Kontaktformular", "Wartung inkl."]
      },
      {
        name: "Business-Premium",
        setup: "ab 699 €",
        monthly: "69 €",
        desc: "Mehr Power für dein Wachstum.",
        recommended: true,
        features: ["Bis 7 Seiten Design", "Terminbuchungssystem", "Erweiterte SEO-Strategie", "Blog-Bereich", "Priority Support"]
      }
    ]
  },
  en: {
    title: "Pricing Plans",
    setupLabel: "One-time Setup",
    monthlyLabel: "monthly Maintenance",
    btnText: "Inquire Plan",
    waMsg: "Hi Diana, I am interested in the ",
    waSuffix: " and would like to learn more!",
    trustText: "Over 40 small businesses already trust Diana.",
    plans: [
      {
        name: "Standard Package",
        setup: "from 499 €",
        monthly: "49 €",
        desc: "The ideal digital start for micro-businesses.",
        features: ["1-3 Pages Design", "Mobile-optimized", "Basic SEO", "Contact Form", "Maintenance incl."]
      },
      {
        name: "Business Premium",
        setup: "from 699 €",
        monthly: "69 €",
        desc: "More power for your growth.",
        recommended: true,
        features: ["Up to 7 Pages Design", "Booking System", "Advanced SEO Strategy", "Blog Section", "Priority Support"]
      }
    ]
  },
  es: {
    title: "Planes de Precios",
    setupLabel: "Configuración única",
    monthlyLabel: "mantenimiento mensual",
    btnText: "Solicitar Plan",
    waMsg: "Hola Diana, estoy interesada en el ",
    waSuffix: " y me gustaría saber más.",
    trustText: "Más de 40 pequeñas empresas ya confían en Diana.",
    plans: [
      {
        name: "Paquete Estándar",
        setup: "desde 499 €",
        monthly: "49 €",
        desc: "El inicio digital ideal para microempresas.",
        features: ["Diseño 1-3 páginas", "Optimizado para móvil", "SEO básico", "Formulario de contacto", "Mantenimiento incl."]
      },
      {
        name: "Business Premium",
        setup: "desde 699 €",
        monthly: "69 €",
        desc: "Más potencia para tu crecimiento.",
        recommended: true,
        features: ["Hasta 7 páginas", "Sistema de reservas", "Estrategia SEO avanzada", "Sección de blog", "Soporte prioritario"]
      }
    ]
  }
};

const Pricing: React.FC<PricingProps> = ({ currentLang }) => {
  const t = content[currentLang];
  const phoneNumber = "34603361949";

  return (
    <section id="preise" className="py-40 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-center text-5xl md:text-7xl font-black text-white mb-24 tracking-tighter italic">{t.title}</h2>
        
        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {t.plans.map((plan, i) => (
            <div key={i} className={`relative p-10 rounded-[40px] border ${plan.recommended ? 'border-purple-500 bg-white/5' : 'border-white/10 bg-white/[0.02]'} backdrop-blur-3xl overflow-hidden group`}>
              {plan.recommended && <div className="absolute top-0 right-10 bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-b-2xl">Recommended</div>}
              <h3 className="text-3xl font-black text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-8 font-light">{plan.desc}</p>
              <div className="mb-8">
                <div className="text-sm text-gray-500 uppercase font-bold tracking-widest mb-1">{t.setupLabel}</div>
                <div className="text-5xl font-black text-white">{plan.setup}</div>
                <div className="text-purple-400 font-bold mt-2">{plan.monthly} / {t.monthlyLabel}</div>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-300 font-medium text-sm">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 text-[10px]">✔</div>
                    {f}
                  </li>
                ))}
              </ul>
              <a 
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(t.waMsg + plan.name + t.waSuffix)}`}
                target="_blank" rel="noopener noreferrer"
                className={`block text-center w-full py-5 rounded-[20px] font-black text-xl transition-all ${plan.recommended ? 'bg-white text-black hover:scale-[1.03]' : 'bg-white/5 text-white hover:bg-white/10'}`}
              >
                {t.btnText}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
            <p className="text-gray-300 font-light text-lg italic">{t.trustText}</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;