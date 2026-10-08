import React, { useState } from 'react';

const REFRIGERATOR_GALLERY = [
  {
    title: 'Compressor & Gas Charging',
    image: '/assets/fridge-compressor.jpg',
    tag: 'Compressor & Relay',
    desc: 'Back compressor motor repair, relay replacement & gas refilling.'
  },
  {
    title: 'Thermostat & Cooling Inspection',
    image: '/assets/fridge-inside-inspection.png',
    tag: 'Cooling & Thermostat',
    desc: 'Inside temperature sensor, defrost timer & cooling coil check.'
  },
  {
    title: 'Side-by-Side & Inverter Fridge',
    image: '/assets/fridge-side-byside.png',
    tag: 'Side-by-Side & Premium',
    desc: 'French Door, water dispenser & PCB inverter diagnostics.'
  }
];

export default function RefrigeratorService({ onBookClick }) {
  const [activeImg, setActiveImg] = useState(REFRIGERATOR_GALLERY[0]);

  return (
    <section id="refrigerator-service" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase mb-2">COOLING APPLIANCE CARE</h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-white">Refrigerator Repair & Maintenance</p>
          <p className="text-slate-400 text-sm mt-2">Single Door, Double Door, 3-Door & Side-by-Side Fridge Solutions</p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-gold mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 3 Real Work Photos Gallery Bar */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {REFRIGERATOR_GALLERY.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImg(item)}
              className={`glass-panel rounded-2xl overflow-hidden gold-border-glow cursor-pointer transition-all ${
                activeImg.title === item.title ? 'border-2 border-gold shadow-2xl scale-[1.02]' : 'opacity-90 hover:opacity-100'
              }`}
            >
              <div className="relative h-56 w-full bg-midnight-dark">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark via-midnight-dark/30 to-transparent"></div>
                <span className="absolute top-3 left-3 bg-midnight-dark/90 px-3 py-1 rounded-full text-[11px] font-extrabold text-gold border border-gold/40">
                  {item.tag}
                </span>
                <div className="absolute bottom-3 left-3 right-3">
                  <h4 className="font-extrabold text-white text-base leading-snug">{item.title}</h4>
                  <p className="text-[11px] text-slate-300 mt-1">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Showcase & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              All Brand <span className="cyan-gradient-text">Refrigerator Service</span> & Repair
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Our experts repair compressor failure, cooling problems, thermostat defects, ice formation faults, and refrigerant gas leaks for Single Door, Double Door, and Side-by-Side refrigerators using 100% genuine spare parts.
            </p>

            {/* Fridge Types */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 rounded-xl glass-panel border border-cyan-400/30 flex items-center gap-3">
                <i className="fa-solid fa-door-closed text-cyan-400 text-xl"></i>
                <div>
                  <h4 className="font-bold text-white text-xs">Single Door</h4>
                  <p className="text-[10px] text-slate-400">Direct Cool Models</p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl glass-panel border border-cyan-400/30 flex items-center gap-3">
                <i className="fa-solid fa-box text-cyan-400 text-xl"></i>
                <div>
                  <h4 className="font-bold text-white text-xs">Double Door</h4>
                  <p className="text-[10px] text-slate-400">Frost Free Models</p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl glass-panel border border-cyan-400/30 flex items-center gap-3">
                <i className="fa-solid fa-layer-group text-cyan-400 text-xl"></i>
                <div>
                  <h4 className="font-bold text-white text-xs">3 Door Fridge</h4>
                  <p className="text-[10px] text-slate-400">Triple Capacity</p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl glass-panel border border-cyan-400/30 flex items-center gap-3">
                <i className="fa-solid fa-table-columns text-cyan-400 text-xl"></i>
                <div>
                  <h4 className="font-bold text-white text-xs">Side-by-Side</h4>
                  <p className="text-[10px] text-slate-400">Inverter Fridge</p>
                </div>
              </div>
            </div>

            <a
              href="#book-service"
              onClick={() => onBookClick('Refrigerator', 'Refrigerator Repair')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-midnight-dark font-extrabold text-base shadow-xl shadow-cyan-500/30 hover:scale-105 transition-transform w-full sm:w-auto text-center"
            >
              <i className="fa-solid fa-temperature-arrow-down text-lg"></i>
              <span>Book Refrigerator Repair</span>
            </a>
          </div>

          {/* Active Featured Image Large View */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden glass-panel p-3 gold-border-glow shadow-2xl">
              <div className="rounded-xl overflow-hidden border border-gold/30 relative">
                <img
                  src={activeImg.image}
                  alt={activeImg.title}
                  className="w-full h-80 sm:h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-bold text-white">
                  <span className="bg-midnight-dark/90 px-3 py-1.5 rounded-full border border-gold/40 text-gold flex items-center gap-1.5 shadow">
                    <i className="fa-solid fa-wrench"></i> {activeImg.title}
                  </span>
                  <span className="bg-emerald-600/90 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                    <i className="fa-solid fa-gas-pump"></i> Genuine Service
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Refrigerator Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-midnight-dark rounded-xl border border-slate-800 flex items-center gap-3">
            <i className="fa-solid fa-temperature-arrow-up text-gold"></i>
            <span className="text-sm font-semibold text-slate-200">Cooling Failure Repair</span>
          </div>
          <div className="p-4 bg-midnight-dark rounded-xl border border-slate-800 flex items-center gap-3">
            <i className="fa-solid fa-gas-pump text-gold"></i>
            <span className="text-sm font-semibold text-slate-200">Gas Refilling & Leak Fix</span>
          </div>
          <div className="p-4 bg-midnight-dark rounded-xl border border-slate-800 flex items-center gap-3">
            <i className="fa-solid fa-microchip text-gold"></i>
            <span className="text-sm font-semibold text-slate-200">Compressor & Relay Fix</span>
          </div>
          <div className="p-4 bg-midnight-dark rounded-xl border border-slate-800 flex items-center gap-3">
            <i className="fa-solid fa-icicles text-gold"></i>
            <span className="text-sm font-semibold text-slate-200">Ice Formation & Defrost Fault</span>
          </div>
          <div className="p-4 bg-midnight-dark rounded-xl border border-slate-800 flex items-center gap-3">
            <i className="fa-solid fa-dungeon text-gold"></i>
            <span className="text-sm font-semibold text-slate-200">Door Gasket Replacement</span>
          </div>
          <div className="p-4 bg-midnight-dark rounded-xl border border-slate-800 flex items-center gap-3">
            <i className="fa-solid fa-wrench text-gold"></i>
            <span className="text-sm font-semibold text-slate-200">General Preventive Service</span>
          </div>
        </div>

      </div>
    </section>
  );
}
