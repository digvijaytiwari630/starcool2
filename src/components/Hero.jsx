import React from 'react';

export default function Hero({ onBookClick }) {
  return (
    <section id="hero" className="relative pt-8 pb-16 lg:py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gold/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-midnight-card border border-gold/50 text-gold text-xs font-bold uppercase tracking-wider mb-6 shadow-md shadow-gold/10">
              <i className="fa-solid fa-bolt text-gold"></i>
              <span>FAST SERVICE • SAME DAY APPOINTMENT</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Fast & Reliable <span className="gold-gradient-text">AC Repair</span> & Home Appliance Service
            </h1>

            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-2xl">
              Expert AC, refrigerator and washing machine repair services with quick response and certified professional technicians at your doorstep.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#book-service"
                onClick={() => onBookClick('AC', 'AC Repair & Service')}
                className="px-8 py-4 rounded-xl btn-gold-gradient font-extrabold text-base tracking-wide flex items-center justify-center gap-3"
              >
                <i className="fa-solid fa-calendar-check text-lg"></i>
                <span>Book Service</span>
              </a>
              <a
                href="https://wa.me/918471084775"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base tracking-wide shadow-xl shadow-emerald-600/30 hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                <span>WhatsApp Now</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full border-t border-slate-800/80 pt-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <i className="fa-solid fa-circle-check text-gold text-sm"></i>
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <i className="fa-solid fa-circle-check text-gold text-sm"></i>
                <span>Expert Technicians</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <i className="fa-solid fa-circle-check text-gold text-sm"></i>
                <span>Genuine Parts</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <i className="fa-solid fa-circle-check text-gold text-sm"></i>
                <span>Reliable Service</span>
              </div>
            </div>
          </div>

          {/* Right Showcase Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl glass-panel p-4 gold-border-glow shadow-2xl overflow-hidden space-y-4">
              
              {/* 3D Metallic Logo Banner */}
              <div className="relative rounded-xl overflow-hidden bg-midnight-dark border-2 border-gold/40">
                <img
                  src="/assets/logo.jpg"
                  alt="AC Seva 3D Metallic Banner"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500 shadow-xl"
                />
              </div>

              {/* Real AC Repair Technician Image Overlay Card */}
              <div className="relative rounded-xl overflow-hidden border border-gold/30 bg-midnight-dark">
                <img
                  src="/assets/ac-repair.png"
                  alt="AC Repair Technician On Work"
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark via-midnight-dark/40 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-bold text-white">
                  <span className="bg-midnight-dark/95 px-3 py-1 rounded-full border border-gold/40 text-gold flex items-center gap-1.5 shadow">
                    <i className="fa-solid fa-snowflake"></i> Live AC Repair
                  </span>
                  <span className="bg-cyan-500/90 text-midnight-dark px-3 py-1 rounded-full font-extrabold flex items-center gap-1.5 shadow">
                    <i className="fa-solid fa-truck-fast"></i> 30-Min Arrival
                  </span>
                </div>
              </div>

              {/* Appliance Status Pills */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-midnight-dark/90 border border-gold/20">
                  <p className="text-[11px] font-bold text-slate-200">AC Repair</p>
                  <span className="text-[10px] text-emerald-400 font-bold">Active</span>
                </div>
                <div className="p-2.5 rounded-xl bg-midnight-dark/90 border border-gold/20">
                  <p className="text-[11px] font-bold text-slate-200">Washing Machine</p>
                  <span className="text-[10px] text-emerald-400 font-bold">Active</span>
                </div>
                <div className="p-2.5 rounded-xl bg-midnight-dark/90 border border-gold/20">
                  <p className="text-[11px] font-bold text-slate-200">Refrigerator</p>
                  <span className="text-[10px] text-emerald-400 font-bold">Active</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
