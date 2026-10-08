import React from 'react';

export default function SecondHandFridgeSection({ onBookClick }) {
  return (
    <section id="second-hand-fridge" className="py-16 bg-midnight/80 border-t border-gold/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-8 sm:p-10 rounded-3xl gold-border-glow relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="px-3.5 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-bold uppercase tracking-wider inline-block w-fit mb-3">
                TECHNICAL VERIFICATION SUPPORT
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
                Second Hand Refrigerator <span className="gold-gradient-text">Inspection & Support</span>
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Looking to buy or sell a used refrigerator? AC Seva provides expert technician health-checkup services for second-hand fridges. Our technicians inspect compressor health, gas pressure level, door gasket seal condition, and cooling performance so you make a confident decision.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3 bg-midnight-dark rounded-xl border border-gold/25 text-xs text-slate-200 font-semibold flex items-center gap-2">
                  <i className="fa-solid fa-microchip text-gold"></i>
                  <span>Compressor Health Check</span>
                </div>
                <div className="p-3 bg-midnight-dark rounded-xl border border-gold/25 text-xs text-slate-200 font-semibold flex items-center gap-2">
                  <i className="fa-solid fa-gas-pump text-gold"></i>
                  <span>Gas Pressure Leak Test</span>
                </div>
                <div className="p-3 bg-midnight-dark rounded-xl border border-gold/25 text-xs text-slate-200 font-semibold flex items-center gap-2">
                  <i className="fa-solid fa-clipboard-check text-gold"></i>
                  <span>Pre-Purchase Diagnostic</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/918471084775?text=Hi%20AC%20Seva,%20I%20need%20second%20hand%20refrigerator%20inspection/service%20support."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs tracking-wide flex items-center justify-center gap-2 shadow-lg"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span>WhatsApp Used Fridge Query</span>
                </a>
                <a
                  href="#book-service"
                  onClick={() => onBookClick('Refrigerator', 'Refrigerator Service')}
                  className="px-6 py-3.5 rounded-xl btn-gold-gradient text-midnight-dark font-extrabold text-xs tracking-wide flex items-center justify-center gap-2 shadow-lg"
                >
                  <i className="fa-solid fa-wrench"></i>
                  <span>Book Technician Inspection</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border-2 border-gold/40 relative shadow-2xl">
                <img
                  src="/assets/fridge-side-byside.png"
                  alt="Second Hand Refrigerator Inspection"
                  className="w-full h-72 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 bg-midnight-dark/95 px-3 py-1 rounded-full text-xs font-bold text-gold border border-gold/40">
                  Technician Verified Inspection
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
