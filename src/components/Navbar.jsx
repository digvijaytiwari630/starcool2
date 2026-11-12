import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Navbar({ theme, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'AC Services', href: '#main-services' },
    { label: 'AC Installation', href: '#ac-services' },
    { label: 'All Brands AC Repair', href: '#ac-brands' },
    { label: 'AC Types (Split, Window, Cassette)', href: '#ac-services' },
    { label: 'AC Parts Repair (PCB, Gas, Motor)', href: '#ac-services' },
    { label: 'Mumbai Areas & PINs', href: '#service-areas' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Latest Updates Our Blog', href: '#blog' },
    { label: 'Got Questions? FAQ', href: '#faq-section' },
    { label: 'Contact Us', href: '#contact' }
  ];

  const handleLinkClick = (href) => {
    setMobileOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-midnight-dark/95 backdrop-blur-md border-b border-gold/40 shadow-xl transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="h-14 w-auto flex items-center justify-center p-1 rounded-xl bg-midnight-card border border-gold/40 shadow-lg group-hover:border-gold transition-all">
              <img src="/assets/starcool-logo.jpg" alt="Star Cool Air Con Logo" className="h-full w-auto object-contain rounded" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight gold-gradient-text">STAR COOL</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-400 uppercase -mt-1">AIR CON • AC REPAIR & SERVICES</span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-200">
            <a href="#hero" className="hover:text-gold transition-colors">Home</a>
            <a href="#main-services" className="hover:text-gold transition-colors">AC Services</a>
            <a href="#ac-services" className="hover:text-gold transition-colors">AC Types</a>
            <a href="#ac-brands" className="hover:text-gold transition-colors">Brands</a>
            <a href="#blog" className="hover:text-gold transition-colors">Blog</a>
            <a href="#why-choose-us" className="hover:text-gold transition-colors">Why Us</a>
            <a href="#faq-section" className="hover:text-gold transition-colors">FAQ</a>
            <a href="#service-areas" className="hover:text-gold transition-colors">Service Areas</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </nav>

          {/* Action Buttons & Theme Switcher (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
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

            <a href="tel:+918108437170" className="px-5 py-2.5 rounded-full text-xs font-bold bg-midnight-card border border-gold/50 text-gold hover:bg-gold hover:text-midnight-dark transition-all flex items-center gap-2 shadow-lg shadow-gold/10">
              <i className="fa-solid fa-phone text-sm"></i>
              <span>Call 8108437170</span>
            </a>
            <a
              href="https://wa.me/918108437170"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-xs font-extrabold bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/20"
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger & Mode Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle Mode"
              className="w-10 h-10 rounded-full flex items-center justify-center border shadow-sm"
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
              className="p-2.5 rounded-xl bg-midnight-card border border-gold/40 text-gold hover:text-white"
              aria-label="Open Mobile Menu"
            >
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Rendered via Portal Directly on document.body for 100% Reliable Screen Display */}
      {mounted && mobileOpen && createPortal(
        <div className="fixed inset-0 z-[9999] lg:hidden animate-fade-in flex justify-end">
          
          {/* Dark Backdrop Overlay */}
          <div 
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Drawer Dialog Panel (White background, high contrast rounded card matching user screenshot) */}
          <div 
            className="relative z-10 w-[88%] max-w-[340px] h-full bg-white text-slate-900 shadow-2xl flex flex-col justify-between p-5 overflow-y-auto"
            style={{ backgroundColor: '#FFFFFF', color: '#0F172A' }}
          >
            <div>
              {/* Header: Logo, Name & Close Button */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="h-10 w-10 rounded-lg bg-slate-900 p-0.5 flex items-center justify-center border border-amber-400 flex-shrink-0">
                    <img src="/assets/starcool-logo.jpg" alt="Star Cool Air Con" className="h-full w-auto object-contain rounded" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-black text-slate-900 tracking-tight leading-none">STAR COOL</span>
                    <span className="text-[9px] font-bold text-slate-500 tracking-widest mt-0.5">FAST SERVICE</span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Close menu"
                >
                  <i className="fa-solid fa-xmark text-sm"></i>
                </button>
              </div>

              {/* Theme Toggle Pill Bar (Matches uploaded screenshot) */}
              <div className="mb-4 p-1.5 rounded-xl bg-slate-100/90 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 pl-2">
                  <i className="fa-solid fa-sun text-amber-500 text-xs"></i>
                  <span>{theme === 'dark' ? 'Dark Mode' : 'White Mode'}</span>
                </div>
                <button
                  onClick={onToggleTheme}
                  className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-sm hover:bg-slate-50 flex items-center gap-1.5 transition-all"
                >
                  <span>Switch to</span>
                  <i className={`fa-solid ${theme === 'dark' ? 'fa-sun text-amber-500' : 'fa-moon text-indigo-600'} text-xs`}></i>
                  <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
                </button>
              </div>

              {/* Nav Menu Items List (With arrow chevrons matching screenshot) */}
              <nav className="flex flex-col divide-y divide-slate-100 text-[13px] font-bold text-slate-800">
                {navLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className="py-2.5 px-1 hover:text-amber-600 hover:bg-slate-50 rounded-md transition-colors flex items-center justify-between group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                    <i className="fa-solid fa-chevron-right text-[10px] text-slate-400 group-hover:text-amber-600"></i>
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Action CTAs (Large Orange Call + Green WhatsApp matching screenshot) */}
            <div className="flex flex-col gap-2.5 pt-4 mt-3 border-t border-slate-200">
              <a
                href="tel:+918108437170"
                className="w-full py-3.5 px-4 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-black text-center text-sm shadow-md flex items-center justify-center gap-2.5 transition-colors"
                style={{ backgroundColor: '#F59E0B', color: '#0F172A' }}
              >
                <i className="fa-solid fa-phone text-sm"></i>
                <span>Call 8108437170</span>
              </a>

              <a
                href="https://wa.me/918108437170"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-center text-sm shadow-md flex items-center justify-center gap-2.5 transition-colors"
                style={{ backgroundColor: '#059669', color: '#FFFFFF' }}
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>WhatsApp Booking</span>
              </a>

              <p className="text-[10px] text-center text-slate-400 font-medium pt-1">
                Kandivali West, Mumbai • 24/7 Doorstep Service
              </p>
            </div>

          </div>
        </div>,
        document.body
      )}
    </>
  );
}
