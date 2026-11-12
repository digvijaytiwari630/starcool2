import React from 'react';

const COMMON_ISSUES = [
  {
    title: 'AC Not Cooling or Blowing Warm Air',
    symptoms: 'Fan is running but room is not getting cool, warm air from vent, AC takes hours to drop temperature.',
    causes: 'Refrigerant gas leakage, clogged air filters, dirty outdoor condenser coils, faulty compressor or defective capacitor.',
    solution: 'Pressure testing with nitrogen, gas refilling (R32 / R410A / R22), chemical foam jet coil washing, and capacitor replacement.'
  },
  {
    title: 'AC Water Leakage & Dripping (Indoor Unit)',
    symptoms: 'Water dripping from front panel or running down the indoor wall, water pooling on floor.',
    causes: 'Choked condensate drain pipe, algae/dust blockage, cracked drain tray, frozen evaporator coils due to low gas.',
    solution: 'High-pressure drain line flush, drain pipe repositioning/replacement, drain tray cleaning, and ice thawing & gas check.'
  },
  {
    title: 'AC Making Loud Humming or Rattling Noise',
    symptoms: 'Vibrating sound from indoor unit, loud metal rattling or buzzing from outdoor unit, screeching noise.',
    causes: 'Loose fan blower bearings, worn-out fan motor, unlevel outdoor unit mounting, foreign debris in outdoor fan blade.',
    solution: 'Blower balancing, motor lubrication/replacement, heavy-duty anti-vibration rubber pad fitting, and bracket tightening.'
  },
  {
    title: 'AC Tripping MCB or Electric Breaker',
    symptoms: 'Power cuts out as soon as AC turns on or after 2-3 minutes when compressor starts.',
    causes: 'Short-circuited compressor windings, burnt capacitor, short circuit on PCB inverter board, or overloaded wiring.',
    solution: 'Megger insulation test of compressor, dual run capacitor replacement, circuit board trace repair, and safe rewiring.'
  },
  {
    title: 'Foul Smell or Musty Odor from AC',
    symptoms: 'Pungent, damp, or burning smell when AC starts running in the room.',
    causes: 'Fungal/mold build-up on moist cooling coil fins, dead pests in drain pan, overheated electrical terminal wires.',
    solution: 'Antimicrobial deep foam jet cleaning, drain pan disinfection, coil sanitization, and terminal wire inspection.'
  },
  {
    title: 'AC Remote Not Responding / Error Codes Displayed',
    symptoms: 'Indoor display blinking error code (E1, E2, E5, F3, CH05, etc.), remote commands not registering.',
    causes: 'Faulty IR receiver sensor on display board, communication error between indoor and outdoor PCB, thermistor failure.',
    solution: 'Sensor board replacement, communication wire check, room/pipe temperature sensor replacement, and PCB diagnosis.'
  }
];

const COMPONENT_SERVICES = [
  {
    name: 'AC PCB Board Repair & Replacement',
    icon: 'fa-microchip',
    desc: 'Component-level repair of inverter and non-inverter motherboard PCBs, IPM modules, microcontroller circuits, and sensor inputs for all major brands.',
    priceHint: '₹2,500 - ₹4,500'
  },
  {
    name: 'AC Compressor Replacement',
    icon: 'fa-gears',
    desc: 'Original rotary and inverter compressors for 1 Ton, 1.5 Ton, 2 Ton & commercial models. Complete installation with nitrogen vacuuming and gas refill.',
    priceHint: 'Genuine OEM Parts'
  },
  {
    name: 'AC Capacitor Replacement',
    icon: 'fa-bolt-lightning',
    desc: 'Replacement of faulty start and run dual capacitors (25µF to 60µF) to restore instant compressor kicking and smooth fan motor spinning.',
    priceHint: 'Same-Day Replacement'
  },
  {
    name: 'AC Fan & Blower Motor Repair',
    icon: 'fa-fan',
    desc: 'Indoor cross-flow blower motor and outdoor condenser fan motor replacement, bearing renewal, and speed capacitor testing.',
    priceHint: '₹1,800 - ₹3,000'
  },
  {
    name: 'Condenser & Cooling Coil Repair',
    icon: 'fa-cubes-stacked',
    desc: 'Copper cooling coil leak detection, brazing & gas leak brazing, anti-corrosion blue-fin coating application, and full coil replacement.',
    priceHint: 'Leak-Tested Guarantee'
  },
  {
    name: 'Thermostat & Temperature Sensor Fix',
    icon: 'fa-temperature-half',
    desc: 'Calibration and replacement of ambient room temperature sensors and copper tube thermistors to ensure accurate temperature cut-off.',
    priceHint: 'Original Sensors'
  }
];

export default function LocalSeoContent() {
  return (
    <section className="py-16 bg-navy/40 relative border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3.5 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-bold uppercase tracking-wider inline-block mb-3">
            MUMBAI'S TRUSTED HVAC SPECIALISTS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            Complete AC Repair, Servicing & <span className="gold-gradient-text">Parts Replacement in Mumbai</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            From high-rise apartments in Andheri and Bandra to residential societies in Kandivali, Borivali, and Malad — Star Cool Air Con delivers certified doorstep AC repairs for Split, Window, Inverter, Cassette, and Ductable AC systems.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Common AC Problems & Diagnosis */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold flex items-center justify-center text-lg">
              <i className="fa-solid fa-stethoscope"></i>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Common AC Issues We Diagnose & Fix</h3>
              <p className="text-xs text-slate-400">Quick identification and same-day solution for all cooling issues</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMON_ISSUES.map((issue, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl gold-border-glow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-full bg-gold/20 text-gold text-xs font-black flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h4 className="text-base font-bold text-white">{issue.title}</h4>
                  </div>
                  
                  <div className="space-y-2.5 text-xs text-slate-300 mb-4">
                    <p>
                      <strong className="text-amber-400">Symptoms:</strong> {issue.symptoms}
                    </p>
                    <p>
                      <strong className="text-slate-400">Likely Cause:</strong> {issue.causes}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-xs text-cyan-300">
                  <strong>Our Fix:</strong> {issue.solution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AC Parts & Component Repair Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-400/15 text-cyan-400 flex items-center justify-center text-lg">
              <i className="fa-solid fa-toolbox"></i>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">AC Parts Repair & Genuine Replacement</h3>
              <p className="text-xs text-slate-400">100% authentic spare parts with post-repair warranty</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPONENT_SERVICES.map((comp, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-gold/30 hover:border-gold transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-midnight-dark border border-gold/40 text-gold flex items-center justify-center text-xl mb-4 shadow">
                    <i className={`fa-solid ${comp.icon}`}></i>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{comp.name}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{comp.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                  <span className="text-[11px] font-bold text-amber-400">{comp.priceHint}</span>
                  <a
                    href="https://wa.me/918108437170?text=Hi%20Star%20Cool%20Air%20Con,%20I%20need%20inquiry%20for%20AC%20parts%20repair."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                  >
                    <span>Inquire</span>
                    <i className="fa-solid fa-chevron-right text-[10px]"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Residential vs Commercial HVAC Banner */}
        <div className="rounded-3xl glass-panel p-8 gold-border-glow bg-gradient-to-r from-midnight-dark via-navy/90 to-midnight-dark border border-gold/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold tracking-widest text-gold uppercase mb-2 block">
                FULL SPECTRUM HVAC SOLUTIONS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Residential & Commercial AC Services Across Mumbai
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Whether you need a quick Split AC gas top-up for your bedroom, annual maintenance (AMC) for a commercial showroom, or emergency chiller/ductable repair for an office in BKC, Andheri MIDC, or Malad Mindspace, our certified team is equipped with modern pressure gauges, vacuum pumps, and genuine replacement components.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-200">
                <span className="px-3 py-1 rounded-full bg-midnight-card border border-gold/30">✓ Split AC (1 to 2 Ton)</span>
                <span className="px-3 py-1 rounded-full bg-midnight-card border border-gold/30">✓ Window AC</span>
                <span className="px-3 py-1 rounded-full bg-midnight-card border border-gold/30">✓ Dual Inverter AC</span>
                <span className="px-3 py-1 rounded-full bg-midnight-card border border-gold/30">✓ 4-Way Cassette AC</span>
                <span className="px-3 py-1 rounded-full bg-midnight-card border border-gold/30">✓ Concealed Ductable AC</span>
                <span className="px-3 py-1 rounded-full bg-midnight-card border border-gold/30">✓ Tower AC</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <a
                href="tel:+918108437170"
                className="w-full py-4 rounded-xl btn-gold-gradient text-midnight-dark font-extrabold text-center text-sm flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-transform"
              >
                <i className="fa-solid fa-phone text-base"></i>
                <span>Call Technician: 8108437170</span>
              </a>
              <a
                href="https://wa.me/918108437170?text=Hi%20Star%20Cool%20Air%20Con,%20I%20need%20emergency%20AC%20repair%20service%20in%20Mumbai."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-center text-sm flex items-center justify-center gap-2 shadow-xl transition-transform hover:scale-105"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
