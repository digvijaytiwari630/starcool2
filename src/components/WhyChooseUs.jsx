import React from 'react';

export default function WhyChooseUs() {
  const cards = [
    { icon: 'fa-bolt', color: 'text-gold', bg: 'bg-gold/10', title: 'Fast 30-45 Min Arrival', desc: 'Rapid technician dispatch across Kandivali, Borivali, Andheri, Malad, Bandra and all Mumbai localities.' },
    { icon: 'fa-user-gear', color: 'text-cyan-400', bg: 'bg-cyan-400/10', title: 'Certified AC Technicians', desc: 'Professionally trained engineers experienced with inverter logic, PCB boards, and commercial ductable systems.' },
    { icon: 'fa-hand-holding-dollar', color: 'text-gold', bg: 'bg-gold/10', title: 'Transparent Honest Pricing', desc: 'Clear upfront rate quotes before work begins with zero hidden charges or surprise diagnostic fees.' },
    { icon: 'fa-shield-check', color: 'text-cyan-400', bg: 'bg-cyan-400/10', title: '100% Genuine Parts', desc: 'Original compressors, fan motors, run capacitors, copper coils, and sensors backed by warranty.' },
    { icon: 'fa-snowflake', color: 'text-gold', bg: 'bg-gold/10', title: 'All AC Types Serviced', desc: 'Specialized diagnostic tools for Split AC, Window AC, Inverter, 4-Way Cassette, and Concealed Ductable units.' },
    { icon: 'fa-tags', color: 'text-cyan-400', bg: 'bg-cyan-400/10', title: 'Multi-Brand Expertise', desc: 'Authorized service methods for Voltas, Daikin, LG, Blue Star, Lloyd, Carrier, Samsung, O General & 20+ brands.' },
    { icon: 'fa-map-location-dot', color: 'text-gold', bg: 'bg-gold/10', title: 'Mumbai-Wide Coverage', desc: 'Doorstep service covering Western Suburbs, South Mumbai, Central Suburbs, and Mira-Bhayandar.' },
    { icon: 'fa-clock-rotate-left', color: 'text-cyan-400', bg: 'bg-cyan-400/10', title: '24/7 Emergency Support', desc: 'Round-the-clock emergency AC breakdown support for residences, clinics, servers, and corporate offices.' },
  ];

  return (
    <section id="why-choose-us" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-2">UNMATCHED STANDARDS</h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-white">Why Choose Star Cool Air Con?</p>
          <p className="text-slate-400 text-sm mt-2">Mumbai's trusted choice for quality, affordability and prompt cooling solutions</p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl gold-border-glow hover:scale-[1.02] transition-transform">
              <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.color} flex items-center justify-center text-xl mb-4`}>
                <i className={`fa-solid ${c.icon}`}></i>
              </div>
              <h3 className="text-base font-bold text-white mb-2">{c.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
