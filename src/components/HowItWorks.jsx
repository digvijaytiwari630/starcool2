import React from 'react';

export default function HowItWorks() {
  const steps = [
    { num: 1, title: 'Contact Us', desc: 'Call 8471084775 or fill our instant booking form online.' },
    { num: 2, title: 'Share Your Problem', desc: 'Specify your appliance type, brand, and problem symptoms.' },
    { num: 3, title: 'Technician Visits', desc: 'Our expert arrives at your doorstep for thorough diagnostic.' },
    { num: 4, title: 'Repair Completed', desc: 'Quality repair done, verified testing, and job warranty provided.' }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-navy/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-2">SIMPLE 4-STEP PROCESS</h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-white">How It Works</p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold to-electric mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map((st) => (
            <div key={st.num} className="glass-panel p-6 rounded-2xl gold-border-glow relative text-center">
              <div className="w-10 h-10 rounded-full bg-gold text-navy-dark font-black flex items-center justify-center mx-auto mb-4 text-base shadow-lg">
                {st.num}
              </div>
              <h3 className="font-bold text-white text-base mb-2">{st.title}</h3>
              <p className="text-xs text-slate-300">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
