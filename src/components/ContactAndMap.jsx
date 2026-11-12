import React from 'react';

export default function ContactAndMap() {
  const mapShareLink = "https://maps.app.goo.gl/gZq9DaXhMifz9gaK9";
  // Exact coordinate embed with Star Cool Air Con pin name
  const embedMapUrl = "https://maps.google.com/maps?q=19.201748,72.831420+(Star+Cool+Air+Con)&t=&z=17&ie=UTF8&iwloc=B&output=embed";

  return (
    <section id="contact" className="py-16 bg-midnight/60 border-t border-gold/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-2 block">DIRECT CONTACT</span>
              <h2 className="text-3xl font-extrabold text-white mb-6">Get In Touch With Us</h2>
              <p className="text-slate-300 text-sm mb-5 leading-relaxed">
                Have an urgent AC breakdown or need same-day servicing? Contact Star Cool Air Con directly for quick response and technician dispatch across Mumbai.
              </p>

              {/* Shop Address */}
              <div className="glass-panel p-4 rounded-xl border border-gold/30 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Official Workshop & Office Address</p>
                    <p className="text-sm font-bold text-white leading-snug">NAV UTTAR BHARAT SEVA SOC, CHOUHAN COMPO, LAL TIWARI MARG, KANDIVALI (WEST) DURGA CHAWL, SANJAY NGR, CHARKOP, MUMBAI 400067</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <a href="mailto:starcoolaircon61@gmail.com" className="glass-panel p-4 rounded-xl flex items-center justify-between border border-gold/30 hover:border-gold transition-all mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center font-bold">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Email Us</p>
                    <p className="text-sm font-bold text-white">starcoolaircon61@gmail.com</p>
                  </div>
                </div>
                <span className="px-3.5 py-1 rounded-full bg-gold/20 text-gold font-bold text-xs">Email</span>
              </a>

              <div className="space-y-4 mb-8">
                {/* Phone 1 */}
                <a href="tel:+918108437170" className="glass-panel p-4 rounded-xl flex items-center justify-between border border-gold/30 hover:border-gold transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center font-bold">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Primary Contact (Call / Booking)</p>
                      <p className="text-base font-bold text-white">8108437170</p>
                    </div>
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-gold/20 text-gold font-bold text-xs">Call Now</span>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/918108437170" target="_blank" rel="noopener noreferrer" className="glass-panel p-4 rounded-xl flex items-center justify-between border border-emerald-500/40 hover:border-emerald-500 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl">
                      <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">WhatsApp 24/7 Hotline</p>
                      <p className="text-base font-bold text-white">8108437170</p>
                    </div>
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs">Chat Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Star Cool Air Con Google Map Section */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 rounded-3xl gold-border-glow h-full flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-location-dot text-gold text-xl"></i>
                    <h3 className="text-xl font-bold text-white">Star Cool Air Con Workshop Location</h3>
                  </div>
                  <a
                    href={mapShareLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl btn-gold-gradient text-midnight-dark font-extrabold text-xs flex items-center justify-center gap-2 shadow-md hover:scale-105 transition-transform"
                  >
                    <i className="fa-solid fa-diamond-turn-right"></i>
                    <span>Get Driving Directions</span>
                  </a>
                </div>
                <p className="text-xs text-slate-300 mb-4">
                  Official Google Map Link:{' '}
                  <a href={mapShareLink} target="_blank" rel="noopener noreferrer" className="text-gold underline font-bold">
                    {mapShareLink}
                  </a>
                </p>
              </div>

              {/* Embedded Google Map iframe */}
              <div className="w-full h-[340px] rounded-2xl overflow-hidden border-2 border-gold/40 bg-midnight-dark relative shadow-2xl">
                <iframe
                  title="Star Cool Air Con Google Map Location"
                  src={embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[5%] contrast-[105%]"
                ></iframe>
                
                {/* Overlay Badge to open exact link */}
                <a
                  href={mapShareLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 left-3 bg-midnight-dark/95 px-3.5 py-1.5 rounded-full border border-gold/40 shadow-xl flex items-center gap-2 hover:bg-gold hover:text-midnight-dark text-gold font-bold text-xs transition-all"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  <span>Star Cool Air Con Google Map Pin</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
