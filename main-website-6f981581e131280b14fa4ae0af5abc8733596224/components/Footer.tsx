import React from 'react';

interface FooterProps {
  onLegalClick: () => void;
  onHomeClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onLegalClick, onHomeClick }) => {
  const handleScrollTo = (id: string) => {
    onHomeClick();
    if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-[#0f172a] text-white py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-2">
            <div 
              className="flex items-center gap-3 mb-8 cursor-pointer group"
              onClick={() => handleScrollTo('top')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">Design by Diana</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-10 leading-relaxed font-light text-lg">
              Deine Partnerin für Digitalisierung auf Augenhöhe. Ich helfe kleinen Unternehmen, den digitalen Schritt zu wagen – mit Herz und Verstand.
            </p>
            <div className="flex gap-6">
              {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-white/10 transition group">
                  <span className="sr-only">{social}</span>
                  <div className="w-6 h-6 bg-gray-600 rounded-sm group-hover:bg-cyan-400 transition-colors"></div>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">Navigation</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li><button onClick={() => handleScrollTo('top')} className="hover:text-cyan-400 transition-colors text-left">Startseite</button></li>
              <li><button onClick={() => handleScrollTo('leistungen')} className="hover:text-cyan-400 transition-colors text-left">Leistungen</button></li>
              <li><button onClick={() => handleScrollTo('preise')} className="hover:text-cyan-400 transition-colors text-left">Preismodelle</button></li>
              <li><button onClick={() => handleScrollTo('über-mich')} className="hover:text-cyan-400 transition-colors text-left">Über mich</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">Rechtliches</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li><button onClick={onLegalClick} className="hover:text-cyan-400 transition-colors text-left">Impressum</button></li>
              <li><button onClick={onLegalClick} className="hover:text-cyan-400 transition-colors text-left">Datenschutz</button></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">AGB</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Widerruf</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 text-center text-gray-600 text-xs font-bold uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Design by Diana. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;