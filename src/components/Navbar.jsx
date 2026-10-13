import React, { useState } from 'react';

export default function Navbar({ theme = 'dark', onToggleTheme }) {
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
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-200">
          <a href="#hero" className="hover:text-gold transition-colors">Home</a>
          <a href="#ac-services" className="hover:text-gold transition-colors">AC Services</a>
          <a href="#ac-services" className="hover:text-gold transition-colors">AC Installation</a>
          <a href="#washing-machine-service" className="hover:text-gold transition-colors">Washing Machine</a>
          <a href="#refrigerator-service" className="hover:text-gold transition-colors">Refrigerator</a>
          <a href="#ac-brands" className="hover:text-gold transition-colors">Brands</a>
          <a href="#service-areas" className="hover:text-gold transition-colors">Service Areas</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </nav>

        {/* Action Buttons & Theme Switcher (Desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Dark and White Mode"
            title={theme === 'dark' ? 'Switch to White Mode' : 'Switch to Dark Mode'}
            className="px-3.5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 border shadow-md hover:scale-105"
            style={{
              backgroundColor: theme === 'dark' ? '#0B1A38' : '#FFFFFF',
              borderColor: theme === 'dark' ? 'rgba(229, 193, 88, 0.5)' : '#CBD5E1',
              color: theme === 'dark' ? '#E5C158' : '#0F172A'
            }}
          >
            <i className={`fa-solid ${theme === 'dark' ? 'fa-sun text-amber-400' : 'fa-moon text-indigo-600'} text-sm`}></i>
            <span className="hidden xl:inline">{theme === 'dark' ? 'White Mode' : 'Dark Mode'}</span>
          </button>

          <a href="tel:+918471084775" className="px-5 py-2.5 rounded-full text-xs font-bold bg-midnight-card border border-gold/50 text-gold hover:bg-gold hover:text-midnight-dark transition-all flex items-center gap-2 shadow-lg shadow-gold/10">
            <i className="fa-solid fa-phone text-sm"></i>
            <span>Call 8471084775</span>
          </a>
          <a href="https://wa.me/918471084775" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/30">
            <i className="fa-brands fa-whatsapp text-base"></i>
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Header Buttons (Theme Toggle + Hamburger) */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Mode"
            title={theme === 'dark' ? 'Switch to White Mode' : 'Switch to Dark Mode'}
            className="p-2.5 rounded-xl border transition-colors flex items-center justify-center text-sm shadow-md"
            style={{
              backgroundColor: theme === 'dark' ? '#0B1A38' : '#FFFFFF',
              borderColor: theme === 'dark' ? 'rgba(229, 193, 88, 0.5)' : '#CBD5E1',
              color: theme === 'dark' ? '#E5C158' : '#0F172A'
            }}
          >
            <i className={`fa-solid ${theme === 'dark' ? 'fa-sun text-amber-400' : 'fa-moon text-indigo-600'}`}></i>
          </button>

          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open Navigation Menu"
            className="p-2.5 text-gold hover:text-white rounded-xl bg-midnight-card border border-gold/40 focus:outline-none shadow-md"
          >
            <i className="fa-solid fa-bars-staggered text-xl"></i>
          </button>
        </div>
      </div>

      {/* Dark Overlay Backdrop when mobile menu is open */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-[60] bg-black/75 backdrop-blur-sm lg:hidden transition-opacity"
        ></div>
      )}

      {/* Mobile Solid Navigation Drawer (Pure White Background + Black Text) */}
      <div
        id="mobile-nav-drawer"
        className={`fixed inset-y-0 right-0 z-[70] w-80 !bg-white border-l border-slate-200 p-6 flex flex-col justify-between shadow-[0_0_50px_rgba(0,0,0,0.35)] transition-transform duration-300 lg:hidden overflow-y-auto ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <img src="/assets/logo.jpg" alt="AC Seva" className="h-10 w-auto rounded-lg border border-slate-200 shadow-sm" />
              <div>
                <span className="font-extrabold text-slate-900 text-xl tracking-tight block">AC SEVA</span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-cyan-700 uppercase -mt-0.5 block">FAST SERVICE</span>
              </div>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close Navigation Menu"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-black flex items-center justify-center transition-colors"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>

          {/* Mode Switcher Banner Inside Drawer */}
          <div className="mb-4 p-2.5 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <i className={`fa-solid ${theme === 'dark' ? 'fa-moon text-indigo-600' : 'fa-sun text-amber-500'}`}></i>
              <span>{theme === 'dark' ? 'Dark Mode' : 'White Mode'}</span>
            </div>
            <button
              onClick={onToggleTheme}
              className="px-3 py-1 rounded-lg bg-white border border-slate-300 text-xs font-bold text-slate-900 hover:bg-slate-50 transition-colors shadow-sm"
            >
              Switch to {theme === 'dark' ? '☀️ White' : '🌙 Dark'}
            </button>
          </div>

          {/* Navigation Links with Black Text */}
          <nav className="flex flex-col gap-1 text-sm font-bold text-slate-900">
            <a href="#hero" onClick={() => setMobileOpen(false)} className="text-slate-900 hover:text-amber-600 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors border-b border-slate-100 flex items-center justify-between">
              <span>Home</span>
              <i className="fa-solid fa-chevron-right text-xs text-slate-400"></i>
            </a>
            <a href="#ac-services" onClick={() => setMobileOpen(false)} className="text-slate-900 hover:text-amber-600 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors border-b border-slate-100 flex items-center justify-between">
              <span>AC Services</span>
              <i className="fa-solid fa-chevron-right text-xs text-slate-400"></i>
            </a>
            <a href="#ac-services" onClick={() => setMobileOpen(false)} className="text-slate-900 hover:text-amber-600 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors border-b border-slate-100 flex items-center justify-between">
              <span>AC Installation</span>
              <i className="fa-solid fa-chevron-right text-xs text-slate-400"></i>
            </a>
            <a href="#washing-machine-service" onClick={() => setMobileOpen(false)} className="text-slate-900 hover:text-amber-600 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors border-b border-slate-100 flex items-center justify-between">
              <span>Washing Machine</span>
              <i className="fa-solid fa-chevron-right text-xs text-slate-400"></i>
            </a>
            <a href="#refrigerator-service" onClick={() => setMobileOpen(false)} className="text-slate-900 hover:text-amber-600 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors border-b border-slate-100 flex items-center justify-between">
              <span>Refrigerator</span>
              <i className="fa-solid fa-chevron-right text-xs text-slate-400"></i>
            </a>
            <a href="#ac-brands" onClick={() => setMobileOpen(false)} className="text-slate-900 hover:text-amber-600 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors border-b border-slate-100 flex items-center justify-between">
              <span>Brands</span>
              <i className="fa-solid fa-chevron-right text-xs text-slate-400"></i>
            </a>
            <a href="#service-areas" onClick={() => setMobileOpen(false)} className="text-slate-900 hover:text-amber-600 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors border-b border-slate-100 flex items-center justify-between">
              <span>Mumbai Areas & PINs</span>
              <i className="fa-solid fa-chevron-right text-xs text-slate-400"></i>
            </a>
            <a href="#why-choose-us" onClick={() => setMobileOpen(false)} className="text-slate-900 hover:text-amber-600 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors border-b border-slate-100 flex items-center justify-between">
              <span>Why Choose Us</span>
              <i className="fa-solid fa-chevron-right text-xs text-slate-400"></i>
            </a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="text-slate-900 hover:text-amber-600 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between">
              <span>Contact Us</span>
              <i className="fa-solid fa-chevron-right text-xs text-slate-400"></i>
            </a>
          </nav>
        </div>

        {/* Drawer Action Buttons */}
        <div className="flex flex-col gap-3 pt-5 mt-4 border-t border-slate-200">
          <a
            href="tel:+918471084775"
            className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-center font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
          >
            <i className="fa-solid fa-phone"></i>
            <span>Call 8471084775</span>
          </a>
          <a
            href="https://wa.me/918471084775"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-center font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            <span>WhatsApp Booking</span>
          </a>
        </div>
      </div>
    </header>
  );
}
