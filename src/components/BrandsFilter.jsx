import React, { useState } from 'react';

const BRANDS = [
  { name: 'Voltas', letter: 'V', tag: 'Split, Window & Cassette', color: 'text-gold', bg: 'bg-gold/10' },
  { name: 'LG', letter: 'LG', tag: 'Dual Inverter Specialists', color: 'text-electric', bg: 'bg-electric/10' },
  { name: 'Lloyd', letter: 'L', tag: 'Full Range Service', color: 'text-gold', bg: 'bg-gold/10' },
  { name: 'Daikin', letter: 'D', tag: 'Inverter & Ductable', color: 'text-electric', bg: 'bg-electric/10' },
  { name: 'Samsung', letter: 'S', tag: 'WindFree & Inverter AC', color: 'text-gold', bg: 'bg-gold/10' },
  { name: 'Mitsubishi Heavy Duty', letter: 'M', tag: 'Heavy Duty Commercial', color: 'text-electric', bg: 'bg-electric/10' },
  { name: 'Blue Star', letter: 'BS', tag: 'Precision Cooling', color: 'text-gold', bg: 'bg-gold/10' },
  { name: 'Carrier', letter: 'C', tag: 'Split & Ductable Repairs', color: 'text-electric', bg: 'bg-electric/10' },
  { name: 'O General', letter: 'OG', tag: 'Extreme Tropical ACs', color: 'text-gold', bg: 'bg-gold/10' },
  { name: 'Haier', letter: 'H', tag: 'Triple Inverter AC', color: 'text-electric', bg: 'bg-electric/10' },
];

export default function BrandsFilter({ onBookClick }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(null);

  const filteredBrands = BRANDS.filter((b) =>
    b.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="ac-brands" className="py-16 bg-navy/60 border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-2">BRAND EXPERTISE</h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-white">AC Brands We Repair & Service</p>
          <p className="text-slate-400 text-sm mt-2">Filter or search by brand to inspect tailored services</p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold to-electric mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gold"></i>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search AC brand (e.g. Voltas, Daikin, LG)..."
              className="w-full pl-11 pr-4 py-3 rounded-xl custom-input text-sm"
            />
          </div>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {filteredBrands.map((brand, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedBrand(brand.name)}
              className="glass-panel p-5 rounded-xl text-center gold-border-glow hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-full ${brand.bg} ${brand.color} font-black flex items-center justify-center mx-auto mb-3 text-lg`}>
                {brand.letter}
              </div>
              <h3 className="font-bold text-white text-base">{brand.name}</h3>
              <p className={`text-[11px] ${brand.color} mt-1`}>{brand.tag}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Brand Modal */}
      {selectedBrand && (
        <div className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel p-8 rounded-3xl max-w-lg w-full border border-gold/50 relative">
            <button
              onClick={() => setSelectedBrand(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
            <h3 className="text-2xl font-extrabold text-gold mb-1">{selectedBrand} Service & Repair</h3>
            <p className="text-xs text-slate-300 mb-6">Expert repairs & certified maintenance for this brand</p>
            
            <div className="space-y-3 mb-6">
              <div className="p-3 bg-navy-dark rounded-xl border border-gold/20 flex items-center justify-between text-xs text-white">
                <span>{selectedBrand} Split AC Repair & Service</span>
                <span className="text-gold font-bold">Available</span>
              </div>
              <div className="p-3 bg-navy-dark rounded-xl border border-gold/20 flex items-center justify-between text-xs text-white">
                <span>{selectedBrand} Ductable AC Service</span>
                <span className="text-gold font-bold">Available</span>
              </div>
              <div className="p-3 bg-navy-dark rounded-xl border border-gold/20 flex items-center justify-between text-xs text-white">
                <span>{selectedBrand} Cassette AC Maintenance</span>
                <span className="text-gold font-bold">Available</span>
              </div>
              <div className="p-3 bg-navy-dark rounded-xl border border-gold/20 flex items-center justify-between text-xs text-white">
                <span>{selectedBrand} Window AC Installation</span>
                <span className="text-gold font-bold">Available</span>
              </div>
              <div className="p-3 bg-navy-dark rounded-xl border border-gold/20 flex items-center justify-between text-xs text-white">
                <span>{selectedBrand} Gas Charging & Leak Repair</span>
                <span className="text-gold font-bold">Available</span>
              </div>
            </div>

            <a
              href="#book-service"
              onClick={() => {
                onBookClick('AC', `${selectedBrand} AC Repair`);
                setSelectedBrand(null);
              }}
              className="w-full py-3 rounded-xl bg-gold text-navy-dark font-bold text-sm block text-center shadow-lg"
            >
              Book Service For This Brand
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
