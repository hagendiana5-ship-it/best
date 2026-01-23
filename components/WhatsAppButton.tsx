import React from 'react';

interface WhatsAppProps {
  currentLang: 'de' | 'en' | 'es';
}

const content = {
  de: { label: "Fragen? Schreib mir!", msg: "Hallo Diana, ich habe deine Website gesehen und interessiere mich für ein gratis Sample!" },
  en: { label: "Questions? Text me!", msg: "Hi Diana, I saw your website and I'm interested in a free sample!" },
  es: { label: "¿Preguntas? ¡Escríbeme!", msg: "¡Hola Diana! He visto tu web y me interesa una muestra gratuita." }
};

const WhatsAppButton: React.FC<WhatsAppProps> = ({ currentLang }) => {
  const t = content[currentLang];
  const phoneNumber = "34603361949";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(t.msg)}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-[100] group flex items-center gap-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-xl text-sm font-bold opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-2xl pointer-events-none">
        {t.label}
      </div>
      <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.3)] group-hover:scale-110 transition-transform duration-300">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.376-.05-.576-.149-.297-1.164-2.802-1.595-3.834-.413-1.01-.84-.872-1.164-.888-.27-.013-.578-.016-.888-.016-.31 0-.814.116-1.24.576-.426.46-1.626 1.592-1.626 3.88s1.67 4.496 1.9 4.808c.23.312 3.28 5.01 7.94 7.02 1.108.478 1.972.764 2.648.978 1.112.353 2.126.303 2.926.183.89-.134 2.738-1.118 3.12-2.144.382-1.026.382-1.906.268-2.09-.114-.184-.422-.294-.72-.443z"/>
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppButton;