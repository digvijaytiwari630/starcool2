import React from 'react';

const SERVICES = [
  {
    title: 'AC Repair & Service',
    icon: 'fa-snowflake',
    image: '/assets/ac-service-cleaning.png',
    desc: 'Deep foam jet cleaning, cooling problem diagnosis, filter washing, coil cleaning, and performance tuning for all AC brands and models.',
    appliance: 'AC', service: 'AC Repair & Service'
  },
  {
    title: 'AC Installation & Mounting',
    icon: 'fa-wrench',
    image: '/assets/ac-compressor-repair.png',
    desc: 'Professional Split, Cassette & Ductable AC installation with copper piping, wall bracket fitting, outdoor unit mounting, and gas vacuuming.',
    appliance: 'AC', service: 'AC Installation'
  },
  {
    title: 'AC Gas Refilling & Leak Fix',
    icon: 'fa-gas-pump',
    image: '/assets/ac-outdoor-gas.png',
    desc: '100% genuine refrigerant gas refilling (R22, R32, R410A) with nitrogen pressure test, coil welding, valve and pipe leak repair.',
    appliance: 'AC', service: 'AC Gas Charging'
  },
  {
    title: 'PCB & Electrical Repair',
    icon: 'fa-microchip',
    image: '/assets/ac-pcb-repair.jpg',
    desc: 'Expert repair of PCB circuit boards, inverter modules, capacitors, sensors, relays, thermistors, and all electrical faults in AC units.',
    appliance: 'AC', service: 'AC PCB Repair'
  },
  {
    title: 'Compressor Replacement',
    icon: 'fa-gear',
    image: '/assets/ac-compressor-repair.png',
    desc: 'Genuine compressor replacement for all AC brands. Inverter & non-inverter compressor fitting, gas charging, and performance testing.',
    appliance: 'AC', service: 'AC Compressor Repair'
  },
  {
    title: 'AC Relocation & Uninstallation',
    icon: 'fa-truck-moving',
    image: '/assets/ac-outdoor-gas.png',
    desc: 'Safe AC shifting, uninstallation and reinstallation at new locations. Copper pipe extension, fresh gas charging, and full testing.',
    appliance: 'AC', service: 'AC Relocation'
  }
];

export default function MainServices({ onSelectService }) {
  return (
    <section id="main-services" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-2">COMPLETE AC SOLUTIONS</h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-white">Our AC Repair Services</p>
          <p className="text-slate-400 text-sm mt-3">All types of AC • All parts • All brands — Same day doorstep service</p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold via-amber-400 to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => (
            <div key={idx} className="glass-panel rounded-2xl overflow-hidden gold-border-glow flex flex-col justify-between group">
              <div className="relative h-52 w-full overflow-hidden border-b border-gold/30 bg-midnight-dark">
                <img src={srv.image} alt={srv.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-card via-midnight-card/30 to-transparent"></div>
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-midnight-dark/90 border border-gold/40 flex items-center justify-center text-gold text-lg shadow-lg">
                  <i className={`fa-solid ${srv.icon}`}></i>
                </div>
                <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-emerald-500/90 text-white font-bold text-[11px] backdrop-blur-md shadow-md">
                  <i className="fa-solid fa-circle-check mr-1"></i> Genuine Service
                </span>
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{srv.title}</h3>
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">{srv.desc}</p>
                </div>
                <div className="flex gap-2">
                  <a href="https://wa.me/918108437170" target="_blank" rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-extrabold text-center transition-all flex items-center justify-center gap-2">
                    <i className="fa-brands fa-whatsapp"></i><span>WhatsApp</span>
                  </a>
                  <a href="tel:+918108437170"
                    className="flex-1 py-3 rounded-xl bg-midnight-dark border border-gold/40 hover:bg-gold hover:text-midnight-dark text-gold text-sm font-extrabold text-center transition-all flex items-center justify-center gap-2">
                    <i className="fa-solid fa-phone"></i><span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
