import React from 'react';

const BADGES = [
  { id: 'ac-sales', title: 'AC SALES', icon: 'fa-snowflake', color: 'text-cyan-400', appliance: 'AC', service: 'AC Repair & Service' },
  { id: 'ac-service', title: 'AC SERVICE', icon: 'fa-wrench', color: 'text-gold', appliance: 'AC', service: 'AC Repair & Service' },
  { id: 'ac-repair', title: 'AC REPAIR', icon: 'fa-gear', color: 'text-gold', appliance: 'AC', service: 'AC Repair & Service' },
  { id: 'ac-install', title: 'AC INSTALLATION', icon: 'fa-user-gear', color: 'text-cyan-400', appliance: 'AC', service: 'AC Installation' },
  { id: 'fridge-service', title: 'FRIDGE SERVICE', icon: 'fa-temperature-arrow-down', color: 'text-gold', appliance: 'Refrigerator', service: 'Refrigerator Repair' },
  { id: 'washing-service', title: 'WASHING MACHINE SERVICE', icon: 'fa-arrows-spin', color: 'text-cyan-400', appliance: 'Washing Machine', service: 'Washing Machine Repair' },
  { id: 'amc-support', title: 'AMC & SUPPORT', icon: 'fa-handshake-angle', color: 'text-gold', appliance: 'AC', service: 'AC Maintenance / AMC' },
];

export default function HeaderBadgeBar({ onSelectBadge }) {
  return (
    <div className="bg-midnight-dark/95 border-b border-gold/30 py-3 px-4 overflow-x-auto scrollbar-none sticky top-20 z-40 shadow-2xl backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between min-w-max gap-3 sm:gap-4 px-2">
        {BADGES.map((badge) => (
          <button
            key={badge.id}
            onClick={() => onSelectBadge(badge.appliance, badge.service)}
            className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-midnight-card/90 border border-gold/35 hover:border-gold hover:bg-gold/15 text-white transition-all transform hover:scale-105 group shadow-md"
          >
            <div className={`w-7 h-7 rounded-full bg-midnight-dark border border-gold/40 flex items-center justify-center text-xs ${badge.color} group-hover:scale-110 transition-transform shadow-inner`}>
              <i className={`fa-solid ${badge.icon}`}></i>
            </div>
            <span className="text-[11px] font-extrabold tracking-wider group-hover:text-gold transition-colors uppercase whitespace-nowrap">
              {badge.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
