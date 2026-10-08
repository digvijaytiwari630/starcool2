import React from 'react';

const SERVICES = [
  {
    title: '1. AC Repair & Service',
    icon: 'fa-snowflake',
    image: '/assets/ac-service-cleaning.png',
    desc: 'Comprehensive deep foam jet cleaning, cooling problem resolution, filter washing, and performance tuning for all AC models.',
    appliance: 'AC',
    service: 'AC Repair & Service'
  },
  {
    title: '2. AC Installation & Mounting',
    icon: 'fa-wrench',
    image: '/assets/ac-compressor-repair.png',
    desc: 'Professional Split & Window AC uninstallation, new installation, wall mounting, outdoor bracket fitting, copper piping, and safety vacuuming.',
    appliance: 'AC',
    service: 'AC Installation'
  },
  {
    title: '3. AC Gas Charging & Leak Repair',
    icon: 'fa-gas-pump',
    image: '/assets/ac-outdoor-gas.png',
    desc: '100% genuine refrigerant gas refilling (R32, R410A, R22) with nitrogen pressure test, coil welding, and valve leak repair.',
    appliance: 'AC',
    service: 'AC Gas Charging'
  },
  {
    title: '4. AC PCB & Electrical Repair',
    icon: 'fa-microchip',
    image: '/assets/ac-pcb-repair.jpg',
    desc: 'Expert diagnostic for PCB circuit boards, inverter module failure, sensor replacement, capacitor replacement, and wiring faults.',
    appliance: 'AC',
    service: 'AC Repair & Service'
  },
  {
    title: '5. Washing Machine Repair',
    icon: 'fa-arrows-spin',
    image: '/assets/washing-repair.png',
    desc: 'Expert fixes for Front Load, Top Load & Automatic machines: motor replacement, spin issues, noise & water leakage.',
    appliance: 'Washing Machine',
    service: 'Washing Machine Repair'
  },
  {
    title: '6. Refrigerator Repair',
    icon: 'fa-temperature-arrow-down',
    image: '/assets/refrigerator-repair.png',
    desc: 'Single, Double door & Side-by-Side fridge repair. Gas refill, thermostat replacement, compressor troubleshooting & ice issues.',
    appliance: 'Refrigerator',
    service: 'Refrigerator Repair'
  }
];

export default function MainServices({ onSelectService }) {
  return (
    <section id="main-services" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-2">PROMINENT HOME APPLIANCE CARE</h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-white">Our Primary Repair Services</p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold via-amber-400 to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => (
            <div key={idx} className="glass-panel rounded-2xl overflow-hidden gold-border-glow flex flex-col justify-between group">
              
              {/* Service Technician Image */}
              <div className="relative h-52 w-full overflow-hidden border-b border-gold/30 bg-midnight-dark">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-card via-midnight-card/30 to-transparent"></div>
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-midnight-dark/90 border border-gold/40 flex items-center justify-center text-gold text-lg shadow-lg">
                  <i className={`fa-solid ${srv.icon}`}></i>
                </div>
                <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-emerald-500/90 text-white font-bold text-[11px] backdrop-blur-md shadow-md">
                  <i className="fa-solid fa-circle-check mr-1"></i> Genuine Service
                </span>
              </div>

              {/* Service Details */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{srv.title}</h3>
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
                <a
                  href="#book-service"
                  onClick={() => onSelectService(srv.appliance, srv.service)}
                  className="w-full py-3 rounded-xl bg-midnight-dark border border-gold/40 hover:bg-gold hover:text-midnight-dark text-gold text-sm font-extrabold text-center transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Book Service</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
