import React from 'react';

export default function WhyChooseUs() {
  const cards = [
    { icon: 'fa-bolt', color: 'text-gold', bg: 'bg-gold/10', title: 'Fast Response', desc: 'Prompt technician dispatch to your location within 30 to 60 minutes.' },
    { icon: 'fa-user-gear', color: 'text-electric', bg: 'bg-electric/10', title: 'Experienced Technicians', desc: 'Certified professionals trained on multi-brand complex HVAC & appliance logic.' },
    { icon: 'fa-hand-holding-dollar', color: 'text-gold', bg: 'bg-gold/10', title: 'Transparent Service', desc: 'Clear upfront rate quotes with no hidden charges or unexpected fees.' },
    { icon: 'fa-shield-check', color: 'text-electric', bg: 'bg-electric/10', title: 'Genuine Quality Parts', desc: '100% authentic spare parts with manufacturer compatibility assurance.' },
  ];

  return (
    <section id="why-choose-us" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-2">UNMATCHED STANDARDS</h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-white">Why Choose AC Seva?</p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold to-electric mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl gold-border-glow">
              <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.color} flex items-center justify-center text-xl mb-4`}>
                <i className={`fa-solid ${c.icon}`}></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
              <p className="text-xs text-slate-300">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
