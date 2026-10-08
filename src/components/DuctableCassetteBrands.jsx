import React from 'react';

export default function DuctableCassetteBrands() {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cassette AC Real Unit Banner */}
        <div className="mb-12 rounded-2xl glass-panel p-4 gold-border-glow overflow-hidden relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 h-56 rounded-xl overflow-hidden border border-gold/30 relative">
              <img
                src="/assets/ac-cassette-unit.jpg"
                alt="Cassette & Commercial Ductable AC Unit"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark via-transparent to-transparent"></div>
              <span className="absolute bottom-3 left-3 bg-midnight-dark/90 px-3 py-1 rounded-full text-xs font-bold text-gold border border-gold/30">
                Commercial Ceiling System
              </span>
            </div>
            <div className="md:col-span-7 flex flex-col justify-center px-2">
              <h3 className="text-2xl font-extrabold text-white mb-2">
                Commercial <span className="gold-gradient-text">Ductable & Cassette</span> AC Specialists
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Expert installation, chemical jet cleaning, and refrigerant gas refilling for 4-way ceiling cassette units and central ductable AC systems in offices, showrooms, banquets, and villas.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-midnight-dark border border-gold/40 text-gold text-xs font-bold">
                  <i className="fa-solid fa-check mr-1.5"></i> Multi-Brand Support
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-midnight-dark border border-gold/40 text-gold text-xs font-bold">
                  <i className="fa-solid fa-check mr-1.5"></i> 24/7 Priority Dispatch
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Ductable AC Brands */}
          <div id="ductable-brands" className="glass-panel p-8 rounded-2xl gold-border-glow">
            <div className="flex items-center gap-3 mb-6">
              <i className="fa-solid fa-wind text-gold text-2xl"></i>
              <div>
                <h3 className="text-xl font-bold text-white">Ductable AC Brands We Service</h3>
                <p className="text-xs text-slate-400">Specialized HVAC engineering for central ducting</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 bg-midnight-dark rounded-xl border border-gold/20 text-center font-bold text-xs text-slate-200">Daikin Ductable</div>
              <div className="p-3 bg-midnight-dark rounded-xl border border-gold/20 text-center font-bold text-xs text-slate-200">LG Ductable</div>
              <div className="p-3 bg-midnight-dark rounded-xl border border-gold/20 text-center font-bold text-xs text-slate-200">Carrier Ductable</div>
              <div className="p-3 bg-midnight-dark rounded-xl border border-gold/20 text-center font-bold text-xs text-slate-200">Blue Star Ductable</div>
              <div className="p-3 bg-midnight-dark rounded-xl border border-gold/20 text-center font-bold text-xs text-slate-200">Samsung Ductable</div>
              <div className="p-3 bg-midnight-dark rounded-xl border border-gold/20 text-center font-bold text-xs text-slate-200">O General Ductable</div>
              <div className="p-3 bg-midnight-dark rounded-xl border border-gold/20 text-center font-bold text-xs text-slate-200">Mitsubishi Ductable</div>
              <div className="p-3 bg-midnight-dark rounded-xl border border-gold/20 text-center font-bold text-xs text-slate-200">Voltas Ductable</div>
            </div>
          </div>

          {/* Cassette AC Brands */}
          <div id="cassette-brands" className="glass-panel p-8 rounded-2xl gold-border-glow">
            <div className="flex items-center gap-3 mb-6">
              <i className="fa-solid fa-border-all text-cyan-400 text-2xl"></i>
              <div>
                <h3 className="text-xl font-bold text-white">Cassette AC Brands We Service</h3>
                <p className="text-xs text-slate-400">Ceiling Cassette Specialists for Offices & Showrooms</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-midnight-dark rounded-xl border border-cyan-400/20 text-center font-bold text-xs text-slate-200">Voltas Cassette AC</div>
              <div className="p-3 bg-midnight-dark rounded-xl border border-cyan-400/20 text-center font-bold text-xs text-slate-200">LG Cassette AC</div>
              <div className="p-3 bg-midnight-dark rounded-xl border border-cyan-400/20 text-center font-bold text-xs text-slate-200">Samsung Cassette AC</div>
              <div className="p-3 bg-midnight-dark rounded-xl border border-cyan-400/20 text-center font-bold text-xs text-slate-200">O General Cassette AC</div>
              <div className="p-3 bg-midnight-dark rounded-xl border border-cyan-400/20 text-center font-bold text-xs text-slate-200">Daikin Cassette AC</div>
              <div className="p-3 bg-midnight-dark rounded-xl border border-gold/30 text-center font-bold text-xs text-gold flex items-center justify-center gap-1">
                <i className="fa-solid fa-circle-check"></i> Genuine Parts
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
