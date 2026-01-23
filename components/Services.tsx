import React from 'react';

interface ServicesProps {
  currentLang: 'de' | 'en' | 'es';
}

const content = {
  de: {
    title: "Alles, was dein Business braucht",
    desc: "Vom ersten Pixel bis zum fertigen Druckerzeugnis – ich begleite dich bei jedem Schritt.",
    s1: { t: "Modernes Webdesign", d: "Mobil-optimierte Websites, die auf jedem Gerät glänzen." },
    s2: { t: "High-End Landingpages", d: "Verkaufsstarke Zielseiten, die Besucher in Kunden verwandeln." },
    s3: { t: "SEO-Optimierung", d: "Werde gefunden! Ich sorge dafür, dass Google dich liebt." },
    s4: { t: "Branding & Logo", d: "Ein unverwechselbares Gesicht für dein Business." },
    s5: { t: "Printmedien", d: "Visitenkarten, Flyer und Broschüren – Design zum Anfassen." },
    s6: { t: "Ehrliche Beratung", d: "Kein Fach-Chinesisch. Ich erkläre alles auf Augenhöhe." }
  },
  en: {
    title: "Everything your business needs",
    desc: "From the first pixel to the finished print product – I accompany you every step of the way.",
    s1: { t: "Modern Web Design", d: "Mobile-optimized websites that shine on every device." },
    s2: { t: "High-End Landingpages", d: "High-converting landing pages that turn visitors into customers." },
    s3: { t: "SEO Optimization", d: "Get found! I ensure that Google loves your site." },
    s4: { t: "Branding & Logo", d: "A unique and professional face for your business." },
    s5: { t: "Print Media", d: "Business cards, flyers, and brochures – design you can touch." },
    s6: { t: "Honest Consulting", d: "No tech jargon. I explain everything clearly and simply." }
  },
  es: {
    title: "Todo lo que tu negocio necesita",
    desc: "Desde el primer píxel hasta el producto impreso final: te acompaño en cada paso.",
    s1: { t: "Diseño Web Moderno", d: "Sitios web optimizados para móviles que brillan en cualquier dispositivo." },
    s2: { t: "Landing Pages de Alta Gama", d: "Páginas de destino de alta conversión que convierten visitas en clientes." },
    s3: { t: "Optimización SEO", d: "¡Hazte ver! Me aseguro de que Google te encuentre." },
    s4: { t: "Branding y Logo", d: "Una imagen única y profesional para tu negocio." },
    s5: { t: "Medios Impresos", d: "Tarjetas de visita, flyers y folletos: diseño que puedes tocar." },
    s6: { t: "Consultoría Honesta", d: "Sin tecnicismos. Te explico todo de forma clara y sencilla." }
  }
};

const Services: React.FC<ServicesProps> = ({ currentLang }) => {
  const t = content[currentLang];

  const services = [
    { title: t.s1.t, description: t.s1.d, icon: "💻", color: "from-purple-500 to-indigo-500" },
    { title: t.s2.t, description: t.s2.d, icon: "🚀", color: "from-cyan-500 to-blue-500" },
    { title: t.s3.t, description: t.s3.d, icon: "🔍", color: "from-pink-500 to-purple-500" },
    { title: t.s4.t, description: t.s4.d, icon: "🎨", color: "from-yellow-500 to-orange-500" },
    { title: t.s5.t, description: t.s5.d, icon: "🖨️", color: "from-green-500 to-cyan-500" },
    { title: t.s6.t, description: t.s6.d, icon: "🤝", color: "from-blue-500 to-purple-500" }
  ];

  return (
    <section id="leistungen" className="py-32 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">{t.title}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">{t.desc}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative p-[1px] rounded-3xl overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative bg-[#1e293b]/50 backdrop-blur-md p-10 rounded-[23px] h-full flex flex-col items-start hover:translate-y-[-5px] transition-transform duration-500">
                <div className="text-5xl mb-8 filter grayscale group-hover:grayscale-0 transition-all">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;