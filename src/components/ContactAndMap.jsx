import React from 'react';

export default function ContactAndMap() {
  const mapShareLink = "https://maps.app.goo.gl/jzqsiHD1Nru5PBGX6";
  const embedMapUrl = "https://maps.google.com/maps?q=19.2017478,72.8314203+(AC%20Seva%20-%20Sameer%20Enterprise)&t=&z=17&ie=UTF8&iwloc=B&output=embed";
  const instagramUrl = "https://www.instagram.com/acseva.in_fast_service?utm_source=qr&stkn=MXFoYWdjbnlidDZtMA==";
  const youtubeUrl = "https://youtube.com/@acseva786?si=pt23h-KZ-OkGo4XN";

  return (
    <section id="contact" className="py-16 bg-midnight/60 border-t border-gold/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-2 block">DIRECT CONTACT</span>
              <h2 className="text-3xl font-extrabold text-white mb-6">Get In Touch With Us</h2>
              <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                Have an urgent AC breakdown or appliance issue? Reach out to our hotline numbers directly for instant booking and technician dispatch.
              </p>

              <div className="space-y-4 mb-8">
                {/* Phone 1 */}
                <a href="tel:+918471084775" className="glass-panel p-4 rounded-xl flex items-center justify-between border border-gold/30 hover:border-gold transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center font-bold">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Primary Contact</p>
                      <p className="text-base font-bold text-white">8471084775</p>
                    </div>
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-gold/20 text-gold font-bold text-xs">Call Now</span>
                </a>

                {/* Phone 2 */}
                <a href="tel:+918934831264" className="glass-panel p-4 rounded-xl flex items-center justify-between border border-gold/30 hover:border-gold transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-400/10 text-cyan-400 flex items-center justify-center font-bold">
                      <i className="fa-solid fa-mobile-screen-button"></i>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Secondary Contact</p>
                      <p className="text-base font-bold text-white">8934831264</p>
                    </div>
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-cyan-400/20 text-cyan-400 font-bold text-xs">Call Now</span>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/918471084775" target="_blank" rel="noopener noreferrer" className="glass-panel p-4 rounded-xl flex items-center justify-between border border-emerald-500/40 hover:border-emerald-500 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl">
                      <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">WhatsApp Hotline</p>
                      <p className="text-base font-bold text-white">8471084775</p>
                    </div>
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs">Chat Now</span>
                </a>

                {/* Official Instagram Page */}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-4 rounded-xl flex items-center justify-between border border-pink-500/40 hover:border-pink-500 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center text-xl shadow-md">
                      <i className="fa-brands fa-instagram"></i>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Official Instagram</p>
                      <p className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors">@acseva.in_fast_service</p>
                    </div>
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-pink-500/20 text-pink-400 font-bold text-xs">Follow Us</span>
                </a>

                {/* Official YouTube Channel */}
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-4 rounded-xl flex items-center justify-between border border-red-500/40 hover:border-red-500 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center text-xl shadow-md">
                      <i className="fa-brands fa-youtube"></i>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Official YouTube Channel</p>
                      <p className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">@acseva786</p>
                    </div>
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-red-500/20 text-red-400 font-bold text-xs">Subscribe</span>
                </a>

              </div>
            </div>
          </div>

          {/* Exact Provided Google Map Section */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 rounded-3xl gold-border-glow h-full flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-location-dot text-gold text-xl"></i>
                    <h3 className="text-xl font-bold text-white">Visit Our Shop Location</h3>
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
                  Official Location Pin: <a href={mapShareLink} target="_blank" rel="noopener noreferrer" className="text-gold underline font-bold">{mapShareLink}</a>
                </p>
              </div>

              {/* Embedded Google Map iframe using exact coordinates 19.2017478, 72.8314203 */}
              <div className="w-full h-[340px] rounded-2xl overflow-hidden border-2 border-gold/40 bg-midnight-dark relative shadow-2xl">
                <iframe
                  title="AC Seva Sameer Enterprise Google Map Pin"
                  src={embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[10%] contrast-[105%]"
                ></iframe>
                
                {/* Overlay Badge to open exact link */}
                <a
                  href={mapShareLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 left-3 bg-midnight-dark/95 px-3.5 py-1.5 rounded-full border border-gold/40 shadow-xl flex items-center gap-2 hover:bg-gold hover:text-midnight-dark text-gold font-bold text-xs transition-all"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  <span>Sameer Enterprise (AC Seva) Pin</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
