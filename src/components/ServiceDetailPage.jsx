import React, { useEffect } from 'react';
import Navbar from './Navbar';
import BookServiceForm from './BookServiceForm';
import ContactAndMap from './ContactAndMap';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';
import QuickBookingModal from './QuickBookingModal';
import { SERVICE_PAGES_DATA } from '../servicePagesData';

export default function ServiceDetailPage({
  pageData,
  theme,
  onToggleTheme
}) {
  const [quickModalOpen, setQuickModalOpen] = React.useState(false);

  useEffect(() => {
    // Dynamic SEO title & description update for Google Search Console & crawlers
    if (pageData) {
      document.title = pageData.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', pageData.metaDesc);
      }
      window.scrollTo(0, 0);
    }
  }, [pageData]);

  if (!pageData) return null;

  const allOtherPages = Object.values(SERVICE_PAGES_DATA).filter(
    (p) => p.slug !== pageData.slug
  );

  return (
    <div className={`${theme === 'light' ? 'light-mode bg-[#F8FAFC] text-slate-900' : 'dark-mode bg-[#020611] text-slate-100'} min-h-screen font-sans selection:bg-gold selection:text-midnight-dark transition-colors duration-300`}>
      
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />

      {/* Breadcrumb Navigation */}
      <div className="bg-midnight-dark border-b border-gold/20 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-400">
          <a href="/" className="hover:text-gold transition-colors flex items-center gap-1">
            <i className="fa-solid fa-house text-[10px]"></i>
            <span>Home</span>
          </a>
          <span>/</span>
          <a href="/#main-services" className="hover:text-gold transition-colors">
            AC Services
          </a>
          <span>/</span>
          <span className="text-gold font-bold truncate">{pageData.h1}</span>
        </div>
      </div>

      {/* Service Hero */}
      <section className="relative pt-10 pb-16 lg:py-20 overflow-hidden bg-gradient-to-b from-midnight-dark via-navy/90 to-midnight">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gold/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight-card border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider mb-4 shadow">
                <i className="fa-solid fa-snowflake text-gold"></i>
                <span>STAR COOL AIR CON • MUMBAI DOORSTEP SERVICE</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-5">
                {pageData.h1}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl">
                {pageData.intro}
              </p>

              {/* Price Tag & Arrival Banner */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="px-4 py-2 rounded-xl bg-gold/15 border border-gold/40 text-gold font-extrabold text-sm flex items-center gap-2">
                  <i className="fa-solid fa-tag"></i>
                  <span>Estimated Pricing: {pageData.priceRange}</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 font-bold text-sm flex items-center gap-2">
                  <i className="fa-solid fa-clock-rotate-left"></i>
                  <span>30–45 Min Arrival Across Mumbai</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a
                  href="#book-service-dedicated"
                  className="px-8 py-4 rounded-xl btn-gold-gradient font-extrabold text-base tracking-wide flex items-center justify-center gap-3 shadow-xl"
                >
                  <i className="fa-solid fa-calendar-check text-lg"></i>
                  <span>Book This Service</span>
                </a>
                <a
                  href={`https://wa.me/918108437170?text=Hi%20Star%20Cool%20Air%20Con,%20I%20want%20to%20inquire%20about%20*${encodeURIComponent(pageData.h1)}*.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base tracking-wide shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-3 transition-transform hover:scale-105"
                >
                  <i className="fa-brands fa-whatsapp text-xl"></i>
                  <span>WhatsApp Inquiry</span>
                </a>
                <a
                  href="tel:+918108437170"
                  className="px-6 py-4 rounded-xl bg-midnight-card border border-gold/40 hover:border-gold text-gold font-bold text-sm flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-phone"></i>
                  <span>Call 8108437170</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="glass-panel p-6 rounded-3xl gold-border-glow bg-midnight-dark">
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-shield-halved text-gold"></i>
                  <span>Service Guarantee</span>
                </h3>
                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-emerald-400"></i>
                    <span>Certified & verified Mumbai technicians</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-emerald-400"></i>
                    <span>100% genuine spare parts guarantee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-emerald-400"></i>
                    <span>Transparent quotes before repair begins</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-emerald-400"></i>
                    <span>30-day to 90-day post-service warranty</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-emerald-400"></i>
                    <span>Cash, UPI, GPay & online payment accepted</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features & What's Included */}
      <section className="py-14 bg-navy/60 border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-gold uppercase mb-2 block">
              COMPREHENSIVE CHECKLIST
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              What Is Included In This Service?
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-gold to-cyan-400 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {pageData.features.map((feat, idx) => (
              <div key={idx} className="glass-panel p-5 rounded-xl border border-gold/25 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold/15 text-gold flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <p className="text-xs font-semibold text-slate-200 leading-snug">{feat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems We Fix */}
      <section className="py-14 relative border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-gold uppercase mb-2 block">
              DIAGNOSTIC EXPERTISE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Common Symptoms & Issues We Solve
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-gold to-cyan-400 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pageData.commonIssues.map((iss, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-gold/30">
                <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <i className="fa-solid fa-triangle-exclamation text-amber-400"></i>
                  <span>{iss.name}</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">{iss.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Booking Section Pre-filled */}
      <div id="book-service-dedicated">
        <BookServiceForm
          selectedAppliance={pageData.appliance}
          selectedService={pageData.serviceName}
        />
      </div>

      {/* Internal Linking: Other AC Services for Google Crawler */}
      <section className="py-14 bg-navy/40 border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Explore Other AC Services in Mumbai
            </h2>
            <p className="text-xs text-slate-400 mt-1">Complete cooling solutions by Star Cool Air Con</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {allOtherPages.map((oth, idx) => (
              <a
                key={idx}
                href={`/${oth.slug}`}
                className="glass-panel p-3.5 rounded-xl border border-gold/20 hover:border-gold transition-all text-xs font-bold text-slate-200 hover:text-gold flex items-center justify-between group"
              >
                <span className="truncate">{oth.h1}</span>
                <i className="fa-solid fa-arrow-right text-[10px] text-slate-500 group-hover:text-gold transition-transform group-hover:translate-x-1"></i>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-gold hover:underline"
            >
              <i className="fa-solid fa-arrow-left"></i>
              <span>Back to Star Cool Air Con Homepage</span>
            </a>
          </div>
        </div>
      </section>

      <ContactAndMap />
      <Footer />
      <FloatingButtons />

      <QuickBookingModal
        isOpen={quickModalOpen}
        serviceName={pageData.serviceName}
        appliance={pageData.appliance}
        onClose={() => setQuickModalOpen(false)}
      />
    </div>
  );
}
