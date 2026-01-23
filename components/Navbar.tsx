import React from 'react';

interface NavbarProps {
  onHomeClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick }) => {
  const handleStartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onHomeClick();
    setTimeout(() => {
      const element = document.getElementById('kontaktformular');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleLinkClick = (id: string) => {
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
    <nav className="sticky top-0 z-50 bg-[#0f172a]/70 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group"
            onClick={() => handleLinkClick('top')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Design by Diana</span>
          </div>
          <div className="hidden md:flex space-x-8 lg:space-x-10">
            {[
              { label: 'Startseite', id: 'top' },
              { label: 'Leistungen', id: 'leistungen' },
              { label: 'Preismodelle', id: 'preise' },
              { label: 'Über mich', id: 'über-mich' }
            ].map((item) => (
              <a 
                key={item.id}
                href={item.id === 'top' ? '#' : `#${item.id}`} 
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div>
            <a 
              href="#kontaktformular" 
              onClick={handleStartClick}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2.5 rounded-full font-bold hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all"
            >
              Jetzt starten
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;