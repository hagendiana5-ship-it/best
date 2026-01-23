import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing: React.FC = () => {
  const { t } = useLanguage();
  const phoneNumber = "34603361949";
  const plans = t('pricing.plans');

  const getWhatsAppUrl = (planName: string) => {
    const message = encodeURIComponent(t('pricing.whatsappMessage').replace('{planName}', planName));
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <section id="preise" className="py-40 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">{t('pricing.title')}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">{t('pricing.subtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-[#1e293b]/60 backdrop-blur-xl p-12 rounded-[40px] border transition-all duration-700 hover:scale-[1.02] ${plan.recommended ? 'border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.1)] ring-1 ring-purple-500/20' : 'border-white/5'}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-xl">
                  Beliebteste Wahl
                </div>
              )}
              <div className="mb-10 text-center lg:text-left">
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight">{plan.name}</h3>
                <p className="text-gray-400 font-light text-lg">{plan.description}</p>
              </div>
              <div className="mb-12 text-center lg:text-left border-b border-white/5 pb-10">
                <div className="flex items-baseline gap-3 justify-center lg:justify-start">
                  <span className="text-5xl md:text-6xl font-black text-white tracking-tighter whitespace-nowrap">{plan.setupPrice}</span>
                  <span className="text-gray-500 font-bold uppercase text-xs tracking-widest">{t('pricing.setup')}</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-cyan-400 font-bold text-lg justify-center lg:justify-start">
                  <span className="h-px w-8 bg-cyan-400/30 hidden lg:block"></span>
                  <span>+ {plan.monthlyPrice} {t('pricing.monthly')}</span>
                </div>
              </div>
              <ul className="space-y-6 mb-12">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300 font-light text-lg group">
                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href={getWhatsAppUrl(plan.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center w-full py-5 rounded-[20px] font-black text-xl transition-all shadow-2xl ${plan.recommended ? 'bg-white text-black hover:scale-[1.03]' : 'bg-white/5 text-white hover:bg-white/10'}`}
              >
                Plan anfragen
              </a>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-10 bg-white/5 backdrop-blur-md p-8 rounded-[30px] border border-white/5">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img key={i} className="w-12 h-12 rounded-full border-2 border-[#0f172a] object-cover" src={`https://picsum.photos/seed/user${i}/100`} alt="" />
              ))}
            </div>
            <p className="text-gray-300 font-light text-lg">{t('pricing.trust')}</p>
            <div className="h-10 w-[1px] bg-white/10 hidden sm:block"></div>
            <p className="text-purple-400 font-black uppercase tracking-widest text-sm">{t('pricing.cancelable')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;