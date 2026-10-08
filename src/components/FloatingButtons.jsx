import React from 'react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/918471084775"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp AC Seva"
        className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center text-2xl shadow-2xl shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-transform pulse-glow"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      <a
        href="tel:+918471084775"
        aria-label="Call AC Seva"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-navy-dark flex items-center justify-center text-xl shadow-2xl shadow-gold/40 hover:scale-110 active:scale-95 transition-transform"
      >
        <i className="fa-solid fa-phone"></i>
      </a>
    </div>
  );
}
