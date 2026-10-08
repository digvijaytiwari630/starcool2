import React, { useState } from 'react';

const WASHING_GALLERY = [
  {
    title: 'Doorstep Verified Service',
    image: '/assets/washing-repair-thumbsup.png',
    tag: 'Quick Inspection',
    desc: 'Certified technician visit with toolkit for fast diagnosis & doorstep fix.'
  },
  {
    title: 'Door Lock & Rubber Seal Repair',
    image: '/assets/washing-door-seal.png',
    tag: 'Door Latch & Seal',
    desc: 'Fixing door lock error codes, rubber gasket leakage & glass door alignment.'
  },
  {
    title: 'Drum Tub & Motor Overhaul',
    image: '/assets/washing-tub-motor.jpg',
    tag: 'Motor & Bearing',
    desc: 'Complete drum tub repair, bearing replacement, belt tightening & spin noise fix.'
  }
];

export default function WashingMachineService({ onBookClick }) {
  const [activeImg, setActiveImg] = useState(WASHING_GALLERY[0]);

  return (
    <section id="washing-machine-service" className="py-16 bg-midnight/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-2">LAUNDRY APPLIANCE EXPERTS</h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-white">Washing Machine Repair & Service</p>
          <p className="text-slate-400 text-sm mt-2">Comprehensive repair for Front Load, Top Load, Automatic & Semi-Automatic Machines</p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 3 Real Work Photos Gallery Bar */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {WASHING_GALLERY.map((item, idx) => (
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

        {/* Feature Showcase Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
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
                    <i className="fa-solid fa-user-check"></i> {activeImg.title}
                  </span>
                  <span className="bg-emerald-600/90 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                    <i className="fa-solid fa-shield-halved"></i> Genuine Parts
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Expert Repairs For All <span className="gold-gradient-text">Washing Machines</span>
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Our certified technicians resolve motor breakdowns, drum noise, water leakage, door seal problems, and PCB faults for Front Load and Top Load fully automatic machines right at your doorstep with 100% genuine spare parts.
            </p>

            {/* Machine Types Pills */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="px-4 py-2 rounded-full bg-midnight-dark border border-gold/30 text-gold font-bold text-xs"><i className="fa-solid fa-check mr-1.5"></i> Front Load</span>
              <span className="px-4 py-2 rounded-full bg-midnight-dark border border-gold/30 text-gold font-bold text-xs"><i className="fa-solid fa-check mr-1.5"></i> Top Load</span>
              <span className="px-4 py-2 rounded-full bg-midnight-dark border border-gold/30 text-gold font-bold text-xs"><i className="fa-solid fa-check mr-1.5"></i> Fully Automatic</span>
              <span className="px-4 py-2 rounded-full bg-midnight-dark border border-gold/30 text-gold font-bold text-xs"><i className="fa-solid fa-check mr-1.5"></i> Semi Automatic</span>
            </div>

            <a
              href="#book-service"
              onClick={() => onBookClick('Washing Machine', 'Washing Machine Repair')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl btn-gold-gradient font-extrabold text-base shadow-xl hover:scale-105 transition-transform w-full sm:w-auto text-center"
            >
              <i className="fa-solid fa-arrows-spin text-lg"></i>
              <span>Book Washing Machine Repair</span>
            </a>
          </div>
        </div>

        {/* Common Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl glass-panel border border-gold/30 flex items-start gap-3">
            <i className="fa-solid fa-droplet-slash text-gold text-xl mt-1"></i>
            <div>
              <h4 className="font-bold text-white text-sm">Drainage Problem</h4>
              <p className="text-xs text-slate-400 mt-1">Pump clog, pipe block, water non-drainage issues.</p>
            </div>
          </div>
          <div className="p-5 rounded-xl glass-panel border border-gold/30 flex items-start gap-3">
            <i className="fa-solid fa-power-off text-gold text-xl mt-1"></i>
            <div>
              <h4 className="font-bold text-white text-sm">Machine Not Starting</h4>
              <p className="text-xs text-slate-400 mt-1">PCB electrical fault, fuse blow, door switch error.</p>
            </div>
          </div>
          <div className="p-5 rounded-xl glass-panel border border-gold/30 flex items-start gap-3">
            <i className="fa-solid fa-water text-gold text-xl mt-1"></i>
            <div>
              <h4 className="font-bold text-white text-sm">Water Leakage</h4>
              <p className="text-xs text-slate-400 mt-1">Tub seal crack, inlet valve leak, pipe detachment.</p>
            </div>
          </div>
          <div className="p-5 rounded-xl glass-panel border border-gold/30 flex items-start gap-3">
            <i className="fa-solid fa-rotate text-gold text-xl mt-1"></i>
            <div>
              <h4 className="font-bold text-white text-sm">Spin & Noise Problem</h4>
              <p className="text-xs text-slate-400 mt-1">Drum bearing wear, belt slip, excessive vibration.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
