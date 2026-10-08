import React from 'react';

export default function BrandSupport() {
  const brands = [
    'Samsung', 'LG', 'Whirlpool', 'Haier', 'Godrej', 'IFB', 'Bosch',
    'Panasonic', 'Voltas', 'Blue Star', 'Carrier', 'Daikin', 'O General', 'Lloyd'
  ];

  return (
    <section id="brand-support" className="py-12 bg-navy/80 border-y border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-gold tracking-widest uppercase mb-1">UNIVERSAL BRAND SUPPORT</p>
          <h3 className="text-xl font-extrabold text-white">Service Available for Major Brands</h3>
          <p className="text-xs text-slate-400 mt-1">We service all popular Indian and international appliance brands</p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-bold text-slate-300">
          {brands.map((b, idx) => (
            <span key={idx} className="px-4 py-2 bg-navy-dark rounded-lg border border-slate-800 hover:border-gold/50 transition-colors">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
