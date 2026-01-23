import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="kontaktformular" className="py-20 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl relative overflow-hidden group">
          {/* Subtiler Glow-Effekt im Hintergrund der Card */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full group-hover:bg-cyan-500/20 transition-colors duration-700"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full group-hover:bg-purple-500/20 transition-colors duration-700"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">Gratis Design-Entwurf</h2>
              <p className="text-gray-400 font-light leading-relaxed">
                Ich erstelle dir unverbindlich ein erstes Sample deiner neuen Website.
              </p>
            </div>

            <div className="flex-grow w-full">
              <form 
                action="DEIN-LINK-HIER" 
                method="POST" 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                <div className="relative">
                  <input 
                    type="text" 
                    name="branche"
                    placeholder="Branche (z.B. Coaching)" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all text-sm"
                    required
                  />
                </div>
                
                <div className="relative">
                  <select 
                    name="seitenanzahl"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all text-sm appearance-none cursor-pointer"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled className="bg-[#0f172a] text-gray-500">Anzahl der Seiten</option>
                    <option value="1" className="bg-[#0f172a]">One-Page (1 Seite)</option>
                    <option value="2-3" className="bg-[#0f172a]">2 bis 3 Seiten</option>
                    <option value="4-7" className="bg-[#0f172a]">4 bis 7 Seiten</option>
                    <option value="8+" className="bg-[#0f172a]">Mehr als 7 Seiten</option>
                  </select>
                  {/* Custom Arrow for Select */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>

                <div className="relative">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Deine E-Mail-Adresse" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all text-sm"
                    required
                  />
                </div>

                <button type="submit" className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-bold text-sm hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:scale-[1.02] transition-all duration-300">
                  Jetzt mein gratis Website-Sample anfordern
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center lg:justify-end">
             <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
               <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
               Persönliche Bearbeitung innerhalb von 24h
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;