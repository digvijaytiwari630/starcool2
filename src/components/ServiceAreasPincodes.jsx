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
            Fast doorstep AC, Washing Machine and Refrigerator repair service across Mumbai Western Suburbs & Mira-Bhayandar with prompt 30-45 minute technician arrival.
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
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeZone === zone
                    ? 'bg-gold text-midnight-dark shadow-md'
                    : 'bg-midnight-card border border-gold/25 text-slate-300 hover:border-gold hover:text-white'
                }`}
              >
                {zone === 'All' ? 'All Mumbai Areas (29)' : zone}
              </button>
            ))}
          </div>
        </div>

        {/* Service Verification Callout if searching */}
        {searchTerm && filteredAreas.length > 0 && (
          <div className="max-w-3xl mx-auto mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-center animate-fade-in">
            <p className="text-emerald-400 text-sm font-bold flex items-center justify-center gap-2">
              <i className="fa-solid fa-circle-check text-base"></i>
              <span>Doorstep Service Available for "{searchTerm}"! Technician arrives within 30-45 minutes.</span>
            </p>
          </div>
        )}

        {/* PIN Code Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {filteredAreas.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 rounded-2xl gold-border-glow flex flex-col justify-between group hover:border-gold transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {item.zone}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 text-[11px] font-extrabold border border-cyan-500/30">
                    PIN {item.pincode}
                  </span>
                </div>
                <h3 className="font-extrabold text-white text-base group-hover:text-gold transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-map-pin text-gold text-xs"></i>
                  <span>{item.area}</span>
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                  <i className="fa-solid fa-bolt text-[9px]"></i> 30-Mins Arrival
                </span>
                <a
                  href="#book-service"
                  onClick={() => onSelectAreaPincode && onSelectAreaPincode(item.area, item.pincode)}
                  className="text-xs font-bold text-gold hover:underline flex items-center gap-1"
                >
                  <span>Book Here</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note */}
        <div className="max-w-4xl mx-auto p-4 rounded-2xl bg-midnight-dark border border-gold/25 text-xs text-slate-400 leading-relaxed text-center">
          <p>
            <strong className="text-gold">Note:</strong> Large areas may have more than one PIN code. Confirm the exact PIN code using your building or road address before technician dispatch. PIN codes are listed as a practical area-level reference; individual post-office boundaries may differ.
          </p>
        </div>

      </div>
    </section>
  );
}
