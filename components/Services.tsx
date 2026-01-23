
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();
  
  const services = t('services.items');
  return (
    <section id="leistungen" className="py-32 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">{t('services.title')}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">{t('services.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any, index: number) => {
            const colors = ["from-purple-500 to-indigo-500", "from-cyan-500 to-blue-500", "from-pink-500 to-purple-500", "from-yellow-500 to-orange-500", "from-green-500 to-cyan-500", "from-indigo-500 to-purple-500"];
            const icons = ["💻", "🚀", "🔍", "🎨", "🖨️", "🤝"];
            return (
              <div key={index} className="group relative p-[1px] rounded-3xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${colors[index]} opacity-10 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative bg-[#1e293b]/50 backdrop-blur-md p-10 rounded-[23px] h-full flex flex-col items-start hover:translate-y-[-5px] transition-transform duration-500">
                  <div className="text-5xl mb-8 filter grayscale group-hover:grayscale-0 transition-all">{icons[index]}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed font-light">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
