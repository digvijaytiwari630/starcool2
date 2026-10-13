import React, { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3.5 group">
          <div className="h-12 w-auto p-1 bg-midnight-card border-2 border-gold/60 rounded-xl group-hover:border-gold transition-colors overflow-hidden shadow-xl shadow-gold/15">
            <img src="/assets/logo.jpg" alt="AC Seva Logo" className="h-full w-auto object-contain rounded" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight gold-gradient-text">AC SEVA</span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-cyan-400 uppercase -mt-1">FAST SERVICE</span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-200">
          <a href="#hero" className="hover:text-gold transition-colors">Home</a>
          <a href="#ac-services" className="hover:text-gold transition-colors">AC Services</a>
          <a href="#ac-services" className="hover:text-gold transition-colors">AC Installation</a>
          <a href="#washing-machine-service" className="hover:text-gold transition-colors">Washing Machine</a>
          <a href="#refrigerator-service" className="hover:text-gold transition-colors">Refrigerator</a>
          <a href="#ac-brands" className="hover:text-gold transition-colors">Brands</a>
          <a href="#service-areas" className="hover:text-gold transition-colors">Service Areas</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a href="tel:+918471084775" className="px-5 py-2.5 rounded-full text-xs font-bold bg-midnight-card border border-gold/50 text-gold hover:bg-gold hover:text-midnight-dark transition-all flex items-center gap-2 shadow-lg shadow-gold/10">
            <i className="fa-solid fa-phone text-sm"></i>
            <span>Call 8471084775</span>
          </a>
          <a href="https://wa.me/918471084775" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/30">
            <i className="fa-brands fa-whatsapp text-base"></i>
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open Navigation Menu"
          className="lg:hidden p-2.5 text-gold hover:text-white rounded-xl bg-midnight-card border border-gold/40 focus:outline-none"
        >
          <i className="fa-solid fa-bars-staggered text-xl"></i>
        </button>
      </div>

      {/* Dark Overlay Backdrop when mobile menu is open */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm lg:hidden transition-opacity"
        ></div>
      )}

      {/* Mobile Solid Navigation Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-[70] w-80 bg-[#040E1E] border-l border-gold/50 p-6 flex flex-col justify-between shadow-[0_0_50px_rgba(0,0,0,0.9)] transition-transform duration-300 lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gold/30">
            <div className="flex items-center gap-2.5">
              <img src="/assets/logo.jpg" alt="AC Seva" className="h-10 w-auto rounded-lg border border-gold/40" />
              <span className="font-extrabold gold-gradient-text text-xl">AC SEVA</span>
            </div>
            <button onClick={() => setMobileOpen(false)} aria-label="Close Navigation Menu" className="p-2 text-slate-300 hover:text-gold">
              <i className="fa-solid fa-xmark text-2xl"></i>
            </button>
          </div>
          <nav className="flex flex-col gap-4 text-base font-semibold text-white">
            <a href="#hero" onClick={() => setMobileOpen(false)} className="hover:text-gold transition-colors py-2 border-b border-slate-800">Home</a>
            <a href="#ac-services" onClick={() => setMobileOpen(false)} className="hover:text-gold transition-colors py-2 border-b border-slate-800">AC Services</a>
            <a href="#ac-services" onClick={() => setMobileOpen(false)} className="hover:text-gold transition-colors py-2 border-b border-slate-800">AC Installation</a>
            <a href="#washing-machine-service" onClick={() => setMobileOpen(false)} className="hover:text-gold transition-colors py-2 border-b border-slate-800">Washing Machine</a>
            <a href="#refrigerator-service" onClick={() => setMobileOpen(false)} className="hover:text-gold transition-colors py-2 border-b border-slate-800">Refrigerator</a>
            <a href="#ac-brands" onClick={() => setMobileOpen(false)} className="hover:text-gold transition-colors py-2 border-b border-slate-800">Brands</a>
            <a href="#service-areas" onClick={() => setMobileOpen(false)} className="hover:text-gold transition-colors py-2 border-b border-slate-800">Service Areas</a>
            <a href="#why-choose-us" onClick={() => setMobileOpen(false)} className="hover:text-gold transition-colors py-2 border-b border-slate-800">Why Choose Us</a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="hover:text-gold transition-colors py-2">Contact Us</a>
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-6 border-t border-gold/30">
          <a href="tel:+918471084775" className="w-full py-3.5 rounded-xl bg-gold text-[#040E1E] text-center font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg">
            <i className="fa-solid fa-phone"></i>
            Call 8471084775
          </a>
          <a href="https://wa.me/918471084775" target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-xl bg-emerald-600 text-white text-center font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg">
            <i className="fa-brands fa-whatsapp text-lg"></i>
            WhatsApp Booking
          </a>
        </div>
      </div>
    </header>
  );
}
