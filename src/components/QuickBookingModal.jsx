import React from 'react';

export default function QuickBookingModal({ isOpen, serviceName, appliance, onClose, onFillForm }) {
  if (!isOpen) return null;

  const whatsappText = encodeURIComponent(`Hi Star Cool Air Con, I want to book *${serviceName || 'Appliance Repair'}* service for my ${appliance || 'home'}. Please share technician timing.`);
  const whatsappUrl = `https://wa.me/918108437170?text=${whatsappText}`;

  return (
    <div className="fixed inset-0 z-[130] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel p-6 sm:p-8 rounded-3xl max-w-md w-full border border-gold/50 text-center relative animate-fade-in bg-midnight-dark">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>

        <div className="w-14 h-14 rounded-2xl bg-gold/10 text-gold flex items-center justify-center text-2xl mx-auto mb-4 border border-gold/40 shadow-lg">
          <i className="fa-solid fa-calendar-check"></i>
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1">Book Service</h3>
        <p className="text-xs text-gold font-bold mb-6 uppercase tracking-wider">{serviceName || 'Home Appliance Care'}</p>
        
        <p className="text-xs text-slate-300 mb-6">Choose how you would like to connect with our technician:</p>

        <div className="space-y-3 mb-6">
          {/* WhatsApp Direct */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-3 shadow-xl transition-transform hover:scale-[1.02]"
          >
            <i className="fa-brands fa-whatsapp text-2xl"></i>
            <span>Chat on WhatsApp (8108437170)</span>
          </a>

          {/* Call Direct */}
          <a
            href="tel:+918108437170"
            onClick={onClose}
            className="w-full py-3.5 px-4 rounded-xl btn-gold-gradient font-extrabold text-sm flex items-center justify-center gap-3 shadow-xl transition-transform hover:scale-[1.02]"
          >
            <i className="fa-solid fa-phone text-lg"></i>
            <span>Call Now (8108437170)</span>
          </a>

          {/* Fill Form */}
          <button
            onClick={() => {
              onClose();
              if (onFillForm) onFillForm(appliance, serviceName);
            }}
            className="w-full py-3 px-4 rounded-xl bg-midnight-card border border-gold/40 text-slate-200 hover:text-white hover:border-gold font-bold text-xs flex items-center justify-center gap-2 transition-all"
          >
            <i className="fa-solid fa-file-pen text-gold"></i>
            <span>Fill Detailed Booking Form</span>
          </button>
        </div>

        <p className="text-[11px] text-slate-400">Fast 30-Minute technician dispatch guarantee</p>
      </div>
    </div>
  );
}

