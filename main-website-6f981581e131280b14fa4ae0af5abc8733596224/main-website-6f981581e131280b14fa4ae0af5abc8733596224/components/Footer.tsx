import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-white text-xl font-bold mb-4">FerryFight</h3>
        <p className="mb-8">DE: Ihr Recht auf See. | EN: Your rights at sea. | ES: Sus derechos en el mar.</p>
        <div className="border-t border-gray-800 pt-8 text-sm">
          <p>&copy; 2026 FerryFight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;