import React, { useState } from 'react';

const AC_CATEGORIES = [
  {
    id: 'split-ac',
    title: 'Split AC Services',
    icon: 'fa-fan',
    color: 'text-gold',
    image: '/assets/ac-service-cleaning.png',
    desc: 'Repair, Jet Service, Installation, Gas Charging & Maintenance',
    subServices: [
      { title: '• Split AC Repair', desc: 'No cooling, error codes, water leaking inside, PCB repair.' },
      { title: '• Split AC Service', desc: 'High-pressure foam jet wash, filter cleaning, blower wash.' },
      { title: '• Split AC Installation', desc: 'Precision wall mounting, vacuuming, copper piping & testing.' },
      { title: '• Split AC Gas Charging', desc: 'Leak detection, nitrogen testing, 100% pure gas refill.' },
      { title: '• Split AC Maintenance', desc: 'Seasonal checkups, capacitor safety test & coil inspection.' }
    ]
  },
  {
    id: 'window-ac',
    title: 'Window AC Services',
    icon: 'fa-window-maximize',
    color: 'text-cyan-400',
    image: '/assets/ac-pcb-repair.jpg',
    desc: 'Repair, Deep Cleaning & Window Installation',
    subServices: [
      { title: '• Window AC Repair', desc: 'Compressor tripping, fan noise, thermostat failure repair.' },
      { title: '• Window AC Service', desc: 'Complete unit dismounting, chemical jet wash & coil clean.' },
      { title: '• Window AC Installation', desc: 'Wooden frame fixing, sealing, bracket mounting & testing.' }
    ]
  },
  {
    id: 'ductable-ac',
    title: 'Ductable AC Services',
    icon: 'fa-wind',
    color: 'text-gold',
    image: '/assets/ac-compressor-repair.png',
    desc: 'Commercial & Villa Ductable AC Maintenance & Repair',
    subServices: [
      { title: '• Ductable AC Repair', desc: 'Airflow restriction, duct noise, controller & damper issues.' },
      { title: '• Ductable AC Service', desc: 'Duct cleaning, grill washing, AHU coil servicing.' },
      { title: '• Ductable AC Installation', desc: 'Custom duct design, indoor unit fitting, outdoor commissioning.' },
      { title: '• Ductable AC Maintenance', desc: 'Periodic commercial AMC inspection & belt replacement.' }
    ]
  },
  {
    id: 'cassette-ac',
    title: 'Cassette AC Services',
    icon: 'fa-border-all',
    color: 'text-cyan-400',
    image: '/assets/ac-cassette-unit.jpg',
    desc: '4-Way Ceiling Cassette Repair & Maintenance',
    subServices: [
      { title: '• Cassette AC Repair', desc: 'Drain pump failure, ceiling water drip, error code diagnostic.' },
      { title: '• Cassette AC Service', desc: 'Ceiling panel wash, filter cleaning & coil descaling.' },
      { title: '• Cassette AC Installation', desc: 'False ceiling flush mounting, drain pipe routing.' }
    ]
  },
  {
    id: 'central-ac',
    title: 'Central AC Services',
    icon: 'fa-building',
    color: 'text-gold',
    image: '/assets/ac-outdoor-gas.png',
    desc: 'Large Facility & Commercial Central Plant Solutions',
    subServices: [
      { title: '• Central AC Repair', desc: 'Chiller plant troubleshooting, VRV/VRF unit diagnostic.' },
      { title: '• Central AC Service', desc: 'Condenser chemical flushing, oil level check & pressure balance.' },
      { title: '• Central AC Maintenance', desc: 'Comprehensive preventive maintenance contracts (AMC).' }
    ]
  },
  {
    id: 'heavy-duty-ac',
    title: 'Heavy Duty AC Services',
    icon: 'fa-industry',
    color: 'text-cyan-400',
    image: '/assets/ac-compressor-repair.png',
    desc: 'High Ton Capacity Industrial AC Systems',
    subServices: [
      { title: '• Heavy Duty AC Repair', desc: 'High tonnage compressor replacement & 3-phase electrical fixes.' },
      { title: '• Heavy Duty AC Service', desc: 'Industrial foam jet cleaning for heavy dust environments.' },
      { title: '• Heavy Duty AC Maintenance', desc: '24/7 priority response AMC for server rooms & factories.' }
    ]
  }
];

export default function AcServicesAccordion() {
  const [openId, setOpenId] = useState('split-ac');

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="ac-services" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-2">COMPLETE HVAC CATALOG</h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-white">Comprehensive AC Service Categories</p>
          <p className="text-slate-400 text-sm mt-2">Click any category below to view specific service offerings and real technician work photos</p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Real Work Gallery Showcase Bar */}
        <div className="mb-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          <div className="relative h-28 rounded-xl overflow-hidden border border-gold/30 group">
            <img src="/assets/ac-service-cleaning.png" alt="AC Jet Wash" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark via-transparent to-transparent"></div>
            <span className="absolute bottom-2 left-2 text-[10px] font-extrabold text-gold">Jet Service</span>
          </div>

          <div className="relative h-28 rounded-xl overflow-hidden border border-gold/30 group">
            <img src="/assets/ac-pcb-repair.jpg" alt="AC PCB Repair" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark via-transparent to-transparent"></div>
            <span className="absolute bottom-2 left-2 text-[10px] font-extrabold text-gold">PCB Repair</span>
          </div>

          <div className="relative h-28 rounded-xl overflow-hidden border border-gold/30 group">
            <img src="/assets/ac-outdoor-gas.png" alt="AC Gas Charging" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark via-transparent to-transparent"></div>
            <span className="absolute bottom-2 left-2 text-[10px] font-extrabold text-gold">Gas Refilling</span>
          </div>

          <div className="relative h-28 rounded-xl overflow-hidden border border-gold/30 group">
            <img src="/assets/ac-compressor-repair.png" alt="Compressor Fitting" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark via-transparent to-transparent"></div>
            <span className="absolute bottom-2 left-2 text-[10px] font-extrabold text-gold">Compressor Repair</span>
          </div>

          <div className="relative h-28 rounded-xl overflow-hidden border border-gold/30 group col-span-2 sm:col-span-1">
            <img src="/assets/ac-cassette-unit.jpg" alt="Cassette AC System" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark via-transparent to-transparent"></div>
            <span className="absolute bottom-2 left-2 text-[10px] font-extrabold text-gold">Cassette AC</span>
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {AC_CATEGORIES.map((cat) => {
            const isOpen = openId === cat.id;
            return (
              <div key={cat.id} className="glass-panel rounded-xl border border-gold/30 overflow-hidden">
                <button
                  onClick={() => toggle(cat.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-midnight-light/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg bg-gold/10 ${cat.color} flex items-center justify-center font-bold`}>
                      <i className={`fa-solid ${cat.icon}`}></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                      <p className="text-xs text-slate-400">{cat.desc}</p>
                    </div>
                  </div>
                  <i className={`fa-solid fa-chevron-down text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
                </button>

                {isOpen && (
                  <div className="p-6 bg-midnight-dark/95 border-t border-gold/20 grid grid-cols-1 md:grid-cols-12 gap-6 animate-fade-in">
                    {/* Category Work Photo */}
                    <div className="md:col-span-4 h-48 rounded-xl overflow-hidden border border-gold/30 relative">
                      <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark via-transparent to-transparent"></div>
                      <span className="absolute bottom-3 left-3 text-xs font-bold text-gold bg-midnight-dark/90 px-3 py-1 rounded-full border border-gold/30">
                        Work Inspection Photo
                      </span>
                    </div>

                    {/* Category Sub-Services */}
                    <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {cat.subServices.map((sub, sIdx) => (
                        <div key={sIdx} className="p-3.5 rounded-lg bg-midnight-card border border-slate-800">
                          <h4 className="font-bold text-gold text-sm mb-1">{sub.title}</h4>
                          <p className="text-xs text-slate-300">{sub.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
