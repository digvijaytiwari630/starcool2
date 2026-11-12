import React, { useState } from 'react';
import { MUMBAI_PINCODE_LIST } from '../seoData';

export default function ServiceAreasPincodes({ onSelectAreaPincode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeZone, setActiveZone] = useState('All');

  const filteredAreas = MUMBAI_PINCODE_LIST.filter((item) => {
    const matchesSearch =
      item.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.pincode.includes(searchTerm);
    const matchesZone = activeZone === 'All' || item.zone === activeZone;
    return matchesSearch && matchesZone;
  });

  return (
    <section id="service-areas" className="py-16 bg-midnight/70 relative border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="px-3.5 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-bold uppercase tracking-wider inline-block mb-3">
            MUMBAI SERVICE COVERAGE
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Areas & <span className="gold-gradient-text">PIN Code Coverage</span> in Mumbai
          </h2>
          <p className="text-slate-300 text-sm mt-3 leading-relaxed">
            Star Cool Air Con provides expert doorstep AC repair, servicing, installation, and gas refilling across Mumbai Western Suburbs, South Mumbai & Mira-Bhayandar with prompt 30–45 minute technician arrival.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="max-w-3xl mx-auto mb-8 space-y-4">
          <div className="relative">
            <i className="fa-solid fa-location-dot absolute left-4 top-1/2 -translate-y-1/2 text-gold text-lg"></i>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Area or PIN Code (e.g. 400067, 400092, Borivali, Andheri, Bandra)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl custom-input text-sm shadow-xl"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['All', 'Western Suburbs', 'Mira-Bhayandar'].map((zone) => (
              <button
                key={zone}
                onClick={() => setActiveZone(zone)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                  activeZone === zone
                    ? 'bg-gold text-midnight-dark border-gold shadow-lg shadow-gold/20'
                    : 'bg-midnight-card/80 text-slate-300 border-gold/30 hover:border-gold hover:text-white'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between max-w-5xl mx-auto mb-4 px-2 text-xs text-slate-400">
          <span>
            Showing <strong className="text-gold">{filteredAreas.length}</strong> active Mumbai service areas
          </span>
          <span className="hidden sm:inline">Click any area to book AC service</span>
        </div>

        {/* Area Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">
          {filteredAreas.map((loc, idx) => (
            <button
              key={idx}
              onClick={() => onSelectAreaPincode(loc.area, loc.pincode)}
              className="glass-panel p-3.5 rounded-xl border border-gold/20 hover:border-gold/80 hover:bg-gold/10 transition-all text-left group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-bold text-gold bg-gold/10 px-2 py-0.5 rounded border border-gold/30 group-hover:bg-gold group-hover:text-midnight-dark transition-colors">
                    {loc.pincode}
                  </span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[9px] text-slate-500 group-hover:text-gold transition-colors"></i>
                </div>
                <h3 className="text-xs font-extrabold text-white group-hover:text-gold transition-colors truncate">
                  {loc.area}
                </h3>
              </div>
              <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                <span className="truncate">{loc.zone}</span>
                <span className="text-emerald-400 font-bold whitespace-nowrap">Active</span>
              </div>
            </button>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-400">
            Don't see your specific locality? We cover all of Greater Mumbai!{' '}
            <a
              href="https://wa.me/918108437170?text=Hi%20Star%20Cool%20Air%20Con,%20is%20AC%20repair%20service%20available%20in%20my%20area?"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-bold underline hover:text-cyan-400 transition-colors"
            >
              Check Availability on WhatsApp
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
