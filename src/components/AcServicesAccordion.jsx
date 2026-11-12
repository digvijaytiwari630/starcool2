import React, { useState } from 'react';

const AC_CATEGORIES = [
  {
    id: 'split-ac',
    title: 'Split AC Repair & Service',
    icon: 'fa-fan',
    color: 'text-gold',
    image: '/assets/ac-service-cleaning.png',
    desc: 'All Split AC types — Inverter, Non-Inverter, Dual Inverter',
    subServices: [
      { title: 'Split AC Not Cooling', desc: 'Gas low, dirty coil, sensor fault — full diagnosis & fix.' },
      { title: 'Split AC Jet Service', desc: 'High-pressure foam jet wash, blower cleaning, drain clear.' },
      { title: 'Gas Charging (R32/R410A)', desc: 'Leak detection, nitrogen test, genuine gas refilling.' },
      { title: 'Fan Motor Replacement', desc: 'Indoor & outdoor fan motor replacement for all brands.' },
      { title: 'Capacitor Replacement', desc: 'Start/run capacitor & compressor capacitor replacement.' },
      { title: 'Installation & Uninstall', desc: 'Wall mounting, copper piping, vacuuming & testing.' },
    ]
  },
  {
    id: 'window-ac',
    title: 'Window AC Repair & Service',
    icon: 'fa-window-maximize',
    color: 'text-cyan-400',
    image: '/assets/ac-pcb-repair.jpg',
    desc: 'All Window AC models — 0.75 Ton to 2 Ton',
    subServices: [
      { title: 'Window AC Not Cooling', desc: 'Compressor check, thermostat fault, gas refilling.' },
      { title: 'Window AC Deep Service', desc: 'Full unit chemical wash, filter, coil & drain cleaning.' },
      { title: 'Compressor Replacement', desc: 'Genuine compressor fitting with warranty.' },
      { title: 'Thermostat Repair', desc: 'Thermostat & temperature sensor replacement.' },
      { title: 'Noise & Vibration Fix', desc: 'Fan blade balance, motor bearing replacement.' },
      { title: 'Installation & Removal', desc: 'Wooden frame, bracket fitting & safe removal.' },
    ]
  },
  {
    id: 'cassette-ac',
    title: 'Cassette AC Repair & Service',
    icon: 'fa-border-all',
    color: 'text-gold',
    image: '/assets/ac-cassette-unit.jpg',
    desc: '4-Way Ceiling Cassette — All commercial brands',
    subServices: [
      { title: 'Cassette AC Repair', desc: 'Drain pump failure, water drip from ceiling, error codes.' },
      { title: 'Cassette AC Service', desc: 'Ceiling panel removal, filter, coil & drain pan cleaning.' },
      { title: 'PCB & Controller Repair', desc: 'Cassette AC PCB, remote receiver, display panel fix.' },
      { title: 'Drain Pump Replacement', desc: 'Drain pump motor & float switch replacement.' },
      { title: 'Gas Refilling', desc: 'R410A/R32 gas charging with leak test.' },
      { title: 'Installation', desc: 'Flush ceiling mount, pipe routing & commissioning.' },
    ]
  },
  {
    id: 'ductable-ac',
    title: 'Ductable AC Repair & Service',
    icon: 'fa-wind',
    color: 'text-cyan-400',
    image: '/assets/ac-compressor-repair.png',
    desc: 'Commercial & Villa Ductable AC systems',
    subServices: [
      { title: 'Ductable AC Repair', desc: 'AHU, FCU, damper, controller & airflow issue fix.' },
      { title: 'Duct Cleaning', desc: 'Air duct, grill, diffuser & AHU coil servicing.' },
      { title: 'Filter Replacement', desc: 'G4, F7, HEPA filter replacement for clean air.' },
      { title: 'VRV/VRF Repair', desc: 'Multi-split VRF/VRV system diagnosis & repair.' },
      { title: 'Gas Charging', desc: 'R410A refilling with manifold pressure check.' },
      { title: 'AMC Contract', desc: 'Annual preventive maintenance for commercial spaces.' },
    ]
  },
  {
    id: 'central-ac',
    title: 'Central & Commercial AC Repair',
    icon: 'fa-building',
    color: 'text-gold',
    image: '/assets/ac-outdoor-gas.png',
    desc: 'Chiller plant, large office & industrial AC',
    subServices: [
      { title: 'Chiller Plant Repair', desc: 'Screw & scroll chiller troubleshooting & repair.' },
      { title: 'AHU Service', desc: 'Air Handling Unit coil wash, motor & belt service.' },
      { title: 'Cooling Tower Service', desc: 'Fill media, fan motor, pump & pipe maintenance.' },
      { title: 'BMS/Controls Repair', desc: 'Control panel, DDC controller & thermostat fix.' },
      { title: 'Refrigerant Leak Fix', desc: 'Chiller pipe welding, Schrader valve & seal fix.' },
      { title: 'AMC Services', desc: 'Monthly/quarterly preventive maintenance contracts.' },
    ]
  },
  {
    id: 'portable-tower-ac',
    title: 'Portable & Tower AC Repair',
    icon: 'fa-temperature-low',
    color: 'text-cyan-400',
    image: '/assets/ac-service-cleaning.png',
    desc: 'Portable, Tower & Floor Standing AC units',
    subServices: [
      { title: 'Portable AC Repair', desc: 'Compressor, fan motor, thermostat & PCB repair.' },
      { title: 'Tower AC Service', desc: 'Filter clean, coil wash & drainage fix.' },
      { title: 'Floor Standing AC', desc: 'All floor standing inverter AC repair & service.' },
      { title: 'Gas Refilling', desc: 'R22/R32/R410A gas charging for portable units.' },
      { title: 'Display & Remote Fix', desc: 'IR receiver, display panel & remote control fix.' },
      { title: 'Noise & Leakage Fix', desc: 'Drain pan, water tray & vibration noise repair.' },
    ]
  },
  {
    id: 'pcb-parts',
    title: 'All AC Parts Repair & Replacement',
    icon: 'fa-microchip',
    color: 'text-gold',
    image: '/assets/ac-pcb-repair.jpg',
    desc: 'Every AC part repaired or replaced — genuine spares',
    subServices: [
      { title: 'PCB Board Repair', desc: 'Inverter & non-inverter PCB repairing & replacement.' },
      { title: 'Compressor Replacement', desc: 'All ton range compressors — genuine & warranty.' },
      { title: 'Fan Motor Replacement', desc: 'Indoor blower motor & outdoor condenser fan motor.' },
      { title: 'Capacitor Replacement', desc: 'Start/run capacitor for compressor & fan motor.' },
      { title: 'Expansion Valve (EEV)', desc: 'Electronic expansion valve replacement & calibration.' },
      { title: 'Thermistor / Sensor', desc: 'Room, coil & discharge temperature sensor replacement.' },
    ]
  },
  {
    id: 'all-brands',
    title: 'All AC Brands Serviced',
    icon: 'fa-star',
    color: 'text-cyan-400',
    image: '/assets/ac-service-cleaning.png',
    desc: 'Every major AC brand — domestic & commercial',
    subServices: [
      { title: 'Voltas, Blue Star', desc: 'India\'s top brands — all models serviced.' },
      { title: 'LG, Samsung', desc: 'Dual inverter, Smart AI AC repair experts.' },
      { title: 'Daikin, Hitachi', desc: 'Japanese brand AC — VRF, split & cassette.' },
      { title: 'O-General, Mitsubishi', desc: 'Premium imported AC service & repair.' },
      { title: 'Carrier, Panasonic', desc: 'All Carrier & Panasonic models serviced.' },
      { title: 'Godrej, Whirlpool, Lloyd', desc: 'Budget & mid-range AC repair experts.' },
    ]
  }
];

export default function AcServicesAccordion() {
  const [openId, setOpenId] = useState('split-ac');

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section id="ac-services" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-2">COMPLETE AC REPAIR CATALOG</h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-white">All Types • All Parts • All Brands</p>
          <p className="text-slate-400 text-sm mt-2">Click any category to see detailed services</p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Brands Strip */}
        <div className="mb-10 p-5 glass-panel rounded-2xl border border-gold/30">
          <p className="text-xs font-bold text-gold uppercase tracking-widest mb-4 text-center">Brands We Service</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Voltas','Blue Star','LG','Samsung','Daikin','Hitachi','O-General','Mitsubishi','Carrier','Panasonic','Whirlpool','Lloyd','Godrej','Haier','Onida','Videocon','Toshiba','Fujitsu','Bluestar','Symphonaire','Croma','Realme AC','TCL'].map((brand) => (
              <span key={brand} className="px-3 py-1 rounded-full bg-midnight-dark border border-gold/30 text-gold text-xs font-bold">
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Work Gallery */}
        <div className="mb-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {[
            { img: '/assets/ac-service-cleaning.png', label: 'Jet Service' },
            { img: '/assets/ac-pcb-repair.jpg', label: 'PCB Repair' },
            { img: '/assets/ac-outdoor-gas.png', label: 'Gas Refilling' },
            { img: '/assets/ac-compressor-repair.png', label: 'Compressor' },
            { img: '/assets/ac-cassette-unit.jpg', label: 'Cassette AC' },
          ].map((item, i) => (
            <div key={i} className={`relative h-28 rounded-xl overflow-hidden border border-gold/30 group ${i === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
              <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark via-transparent to-transparent"></div>
              <span className="absolute bottom-2 left-2 text-[10px] font-extrabold text-gold">{item.label}</span>
            </div>
          ))}
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
                  <div className="p-6 bg-midnight-dark/95 border-t border-gold/20 grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-4 h-48 rounded-xl overflow-hidden border border-gold/30 relative">
                      <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark via-transparent to-transparent"></div>
                      <span className="absolute bottom-3 left-3 text-xs font-bold text-gold bg-midnight-dark/90 px-3 py-1 rounded-full border border-gold/30">
                        Star Cool Air Con
                      </span>
                    </div>
                    <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {cat.subServices.map((sub, sIdx) => (
                        <div key={sIdx} className="p-3.5 rounded-lg bg-midnight-card border border-slate-800">
                          <h4 className="font-bold text-gold text-sm mb-1">{sub.title}</h4>
                          <p className="text-xs text-slate-300">{sub.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="md:col-span-12 flex gap-3 mt-2">
                      <a href="https://wa.me/918108437170" target="_blank" rel="noopener noreferrer"
                        className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm text-center flex items-center justify-center gap-2 transition-all">
                        <i className="fa-brands fa-whatsapp text-lg"></i> WhatsApp Now
                      </a>
                      <a href="tel:+918108437170"
                        className="flex-1 py-3 rounded-xl btn-gold-gradient text-midnight-dark font-extrabold text-sm text-center flex items-center justify-center gap-2 transition-all">
                        <i className="fa-solid fa-phone"></i> Call 8108437170
                      </a>
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
