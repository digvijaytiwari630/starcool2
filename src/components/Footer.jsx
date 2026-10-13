import React from 'react';

export default function Footer() {
  const instagramUrl = "https://www.instagram.com/acseva.in_fast_service?utm_source=qr&stkn=MXFoYWdjbnlidDZtMA==";
  const youtubeUrl = "https://youtube.com/@acseva786?si=pt23h-KZ-OkGo4XN";

  return (
    <footer className="bg-midnight-dark border-t-2 border-gold/40 text-slate-400 pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/logo.jpg" alt="AC Seva" className="h-10 w-auto rounded border border-gold/40" />
              <div>
                <span className="text-lg font-black gold-gradient-text block">AC SEVA</span>
                <span className="text-[9px] font-bold text-cyan-400 tracking-[0.2em]">FAST SERVICE</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Premium Indian home appliance repair and AC service company. Committed to fast response, authentic spare parts, and certified technician care.
            </p>
            <p className="text-xs font-bold text-gold">Website: <a href="https://acseva.in" className="hover:underline">ACseva.in</a></p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-gold pl-2">Quick Links</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#hero" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#ac-services" className="hover:text-gold transition-colors">AC Services</a></li>
              <li><a href="#ac-services" className="hover:text-gold transition-colors">Installation</a></li>
              <li><a href="#washing-machine-service" className="hover:text-gold transition-colors">Washing Machine</a></li>
              <li><a href="#refrigerator-service" className="hover:text-gold transition-colors">Refrigerator</a></li>
              <li><a href="#ac-brands" className="hover:text-gold transition-colors">Brands</a></li>
              <li><a href="#service-areas" className="hover:text-gold transition-colors">Service Areas & PIN Codes</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-gold pl-2">Services</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#ac-services" className="hover:text-gold transition-colors">AC Repair</a></li>
              <li><a href="#ac-services" className="hover:text-gold transition-colors">AC Installation</a></li>
              <li><a href="#washing-machine-service" className="hover:text-gold transition-colors">Washing Machine Repair</a></li>
              <li><a href="#refrigerator-service" className="hover:text-gold transition-colors">Refrigerator Repair</a></li>
              <li><a href="#ac-services" className="hover:text-gold transition-colors">AC Gas Charging</a></li>
              <li><a href="#ac-services" className="hover:text-gold transition-colors">AC AMC Maintenance</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Official Social */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-gold pl-2">Connect With Us</h4>
            <ul className="space-y-2 text-xs mb-6">
              <li className="flex items-center gap-2"><i className="fa-solid fa-phone text-gold"></i> <span>8471084775</span></li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-mobile text-gold"></i> <span>8934831264</span></li>
              <li className="flex items-center gap-2"><i className="fa-brands fa-whatsapp text-emerald-400"></i> <span>8471084775</span></li>
            </ul>

            {/* Official Instagram & YouTube Buttons */}
            <div className="flex flex-col gap-2.5">
              {/* Instagram */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow AC Seva on Instagram (@acseva.in_fast_service)"
                className="group relative p-0.5 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-lg shadow-rose-500/20 hover:scale-105 transition-transform"
              >
                <div className="px-3.5 py-2 rounded-[10px] bg-midnight-dark group-hover:bg-transparent transition-colors flex items-center gap-2 text-white font-bold text-xs">
                  <i className="fa-brands fa-instagram text-lg text-pink-500 group-hover:text-white transition-colors"></i>
                  <span>Instagram</span>
                </div>
              </a>

              {/* YouTube */}
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Subscribe to AC Seva YouTube Channel (@acseva786)"
                className="group relative p-0.5 rounded-xl bg-red-600 shadow-lg shadow-red-600/20 hover:scale-105 transition-transform"
              >
                <div className="px-3.5 py-2 rounded-[10px] bg-midnight-dark group-hover:bg-transparent transition-colors flex items-center gap-2 text-white font-bold text-xs">
                  <i className="fa-brands fa-youtube text-lg text-red-500 group-hover:text-white transition-colors"></i>
                  <span>YouTube Channel</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 AC Seva. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-pink-400 flex items-center gap-1.5 transition-colors"
            >
              <i className="fa-brands fa-instagram text-pink-500"></i>
              <span>@acseva.in_fast_service</span>
            </a>
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-red-400 flex items-center gap-1.5 transition-colors"
            >
              <i className="fa-brands fa-youtube text-red-500"></i>
              <span>@acseva786</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
