import React, { useState } from 'react';
import { FAQ_DATA } from '../seoData';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-16 bg-midnight-dark/80 relative border-t border-gold/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-2 block">EXPERT ANSWERS</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-sm mt-2">Genuine answers to common AC, Washing Machine & Refrigerator service queries</p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="glass-panel rounded-xl border border-gold/25 overflow-hidden">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-midnight-light/50 transition-colors"
                >
                  <h3 className="font-extrabold text-white text-base sm:text-lg pr-4">{item.q}</h3>
                  <i className={`fa-solid fa-chevron-down text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-300 text-sm leading-relaxed border-t border-gold/10 bg-midnight-card/50">
                    <p>{item.a}</p>
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
