
import React from 'react';

const services = [
  {
    title: "Modernes Webdesign",
    description: "Mobil-optimierte Websites, die auf jedem Gerät glänzen und deine Kunden überzeugen.",
    icon: "💻",
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "High-End Landingpages",
    description: "Exklusive, verkaufspsychologisch optimierte Zielseiten, die deine Marke im Premium-Segment positionieren und Besucher durch intelligentes Design in treue Kunden verwandeln.",
    icon: "🚀",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "SEO-Optimierung",
    description: "Werde gefunden! Ich sorge für die nötige Grundoptimierung, damit Google dich liebt.",
    icon: "🔍",
    color: "from-pink-500 to-purple-500"
  },
  {
    title: "Branding & Logo",
    description: "Ein unverwechselbares Gesicht für dein Business. Von Logos bis hin zu Farbschemata.",
    icon: "🎨",
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Printmedien",
    description: "Visitenkarten, Flyer und Broschüren. Hochwertiges Design auch zum Anfassen.",
    icon: "🖨️",
    color: "from-green-500 to-cyan-500"
  },
  {
    title: "Ehrliche Beratung",
    description: "Ich stehe dir als Partnerin zur Seite und helfe dir bei fairen Verträgen und Modellen.",
    icon: "🤝",
    color: "from-indigo-500 to-purple-500"
  }
];

const Services: React.FC = () => {
  return (
    <section id="leistungen" className="py-32 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Alles, was dein Business braucht</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">Vom ersten Pixel bis zum fertigen Druckerzeugnis – ich begleite dich bei jedem Schritt.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative p-[1px] rounded-3xl overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative bg-[#1e293b]/50 backdrop-blur-md p-10 rounded-[23px] h-full flex flex-col items-start hover:translate-y-[-5px] transition-transform duration-500">
                <div className="text-5xl mb-8 filter grayscale group-hover:grayscale-0 transition-all">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed font-light">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
