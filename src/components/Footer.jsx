import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-midnight-dark border-t-2 border-gold/40 text-slate-400 pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/starcool-logo.jpg" alt="Star Cool Air Con Logo" className="h-10 w-auto rounded border border-gold/40" />
              <div>
                <span className="text-lg font-black gold-gradient-text block">STAR COOL</span>
                <span className="text-[9px] font-bold text-cyan-400 tracking-[0.2em]">AIR CON</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Mumbai's trusted AC repair, servicing, installation and parts replacement experts. Certified doorstep service across Kandivali, Borivali, Andheri, Malad, Bandra & all Mumbai locations.
            </p>
            <div className="text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300">Timings: Mon - Sun (8:00 AM - 9:00 PM)</p>
              <p className="text-emerald-400 font-bold">24/7 Emergency AC Support Available</p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-gold pl-2">Quick Links</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#hero" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#main-services" className="hover:text-gold transition-colors">AC Services</a></li>
              <li><a href="#ac-services" className="hover:text-gold transition-colors">AC Types & Accordion</a></li>
              <li><a href="#ac-brands" className="hover:text-gold transition-colors">Brands We Repair</a></li>
              <li><a href="#why-choose-us" className="hover:text-gold transition-colors">Why Choose Us</a></li>
              <li><a href="#faq-section" className="hover:text-gold transition-colors">FAQ</a></li>
              <li><a href="#service-areas" className="hover:text-gold transition-colors">Service Areas & PIN Codes</a></li>
              <li><a href="#book-service" className="hover:text-gold transition-colors">Book Online</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: AC Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-gold pl-2">AC Services</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#ac-services" className="hover:text-gold transition-colors">Split AC Repair & Servicing</a></li>
              <li><a href="#ac-services" className="hover:text-gold transition-colors">Window AC Repair</a></li>
              <li><a href="#ac-services" className="hover:text-gold transition-colors">Inverter AC Diagnosis</a></li>
              <li><a href="#main-services" className="hover:text-gold transition-colors">AC Gas Refilling (R32, R410A)</a></li>
              <li><a href="#main-services" className="hover:text-gold transition-colors">AC PCB Board Repair</a></li>
              <li><a href="#main-services" className="hover:text-gold transition-colors">AC Compressor Replacement</a></li>
              <li><a href="#main-services" className="hover:text-gold transition-colors">AC Installation & Shifting</a></li>
              <li><a href="#ac-services" className="hover:text-gold transition-colors">Cassette & Ductable AC Service</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-gold pl-2">Connect With Us</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-gold"></i>
                <a href="tel:+918108437170" className="hover:text-gold transition-colors font-bold text-white">8108437170</a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-brands fa-whatsapp text-emerald-400"></i>
                <a href="https://wa.me/918108437170" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors font-bold">WhatsApp Hotline</a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-gold"></i>
                <a href="mailto:starcoolaircon61@gmail.com" className="hover:text-gold transition-colors">starcoolaircon61@gmail.com</a>
              </li>
              <li className="flex items-start gap-2 mt-2">
                <i className="fa-solid fa-location-dot text-gold mt-0.5"></i>
                <span className="leading-snug">NAV UTTAR BHARAT SEVA SOC, CHOUHAN COMPO, LAL TIWARI MARG, KANDIVALI (WEST) CHARKOP, MUMBAI 400067</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Star Cool Air Con. All Rights Reserved.</p>
          <p className="text-xs text-slate-500">Expert AC Repair & Service Across Mumbai</p>
        </div>
      </div>
    </footer>
  );
}
