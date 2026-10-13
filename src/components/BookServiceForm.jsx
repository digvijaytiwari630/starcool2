import React, { useState, useEffect } from 'react';
import { MUMBAI_PINCODE_LIST } from '../seoData';

const SERVICES_MAP = {
  AC: [
    'AC Repair & Service',
    'AC Installation',
    'Split AC Repair',
    'Window AC Repair',
    'Ductable AC Repair',
    'Cassette AC Repair',
    'AC Gas Charging',
    'AC Maintenance / AMC'
  ],
  Refrigerator: [
    'Refrigerator Repair',
    'Refrigerator Service',
    'Cooling Problem Fix',
    'Fridge Gas Charging',
    'Compressor Repair',
    'Water Leakage Fix',
    'Ice Formation Problem',
    'Door Gasket Replacement'
  ],
  'Washing Machine': [
    'Washing Machine Repair',
    'Washing Machine Service',
    'Washing Machine Installation',
    'Drainage Problem Fix',
    'Not Starting Repair',
    'Water Leakage Fix',
    'Spin & Noise Problem'
  ]
};

export default function BookServiceForm({
  selectedAppliance,
  selectedService,
  selectedPincode,
  selectedArea,
  onApplianceChange
}) {
  const [appliance, setAppliance] = useState(selectedAppliance || 'AC');
  const [service, setService] = useState(selectedService || 'AC Repair & Service');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pincodeArea, setPincodeArea] = useState(
    selectedArea && selectedPincode ? `${selectedArea} (${selectedPincode})` : ''
  );
  const [date, setDate] = useState('');
  const [time, setTime] = useState('Morning (09:00 AM - 12:00 PM)');
  const [address, setAddress] = useState('');
  const [problem, setProblem] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (selectedAppliance) setAppliance(selectedAppliance);
    if (selectedService) setService(selectedService);
  }, [selectedAppliance, selectedService]);

  useEffect(() => {
    if (selectedArea && selectedPincode) {
      setPincodeArea(`${selectedArea} (${selectedPincode})`);
    } else if (selectedPincode) {
      setPincodeArea(selectedPincode);
    }
  }, [selectedPincode, selectedArea]);

  const handleApplianceSelect = (val) => {
    setAppliance(val);
    if (SERVICES_MAP[val] && SERVICES_MAP[val].length > 0) {
      setService(SERVICES_MAP[val][0]);
    } else {
      setService('');
    }
    if (onApplianceChange) onApplianceChange(val);
  };

  const sendToWhatsApp = () => {
    if (!name.trim()) {
      alert('Please enter your full name.');
      return;
    }
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length !== 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!pincodeArea.trim()) {
      alert('Please select or enter your Area & PIN code.');
      return;
    }
    if (!address.trim()) {
      alert('Please enter your service address.');
      return;
    }

    const messageText = 
`*New Service Booking - AC Seva* 🛠️

👤 *Customer Name:* ${name.trim()}
📞 *Mobile Number:* ${cleanPhone}
🔌 *Appliance:* ${appliance}
🛠️ *Required Service:* ${service}
📍 *Area & PIN Code:* ${pincodeArea.trim()}
🏠 *Service Address:* ${address.trim()}
📅 *Preferred Date:* ${date || 'As soon as possible'}
⏰ *Preferred Time Slot:* ${time}
📝 *Problem Description:* ${problem.trim() || 'General Service & Diagnostic'}`;

    const whatsappUrl = `https://wa.me/918471084775?text=${encodeURIComponent(messageText)}`;
    
    // Open directly to owner's WhatsApp with noopener and noreferrer for tab security
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendToWhatsApp();
  };

  const closeModal = () => {
    setShowModal(false);
    setName('');
    setPhone('');
    setPincodeArea('');
    setDate('');
    setAddress('');
    setProblem('');
  };

  return (
    <section id="book-service" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-8 sm:p-10 rounded-3xl gold-border-glow shadow-2xl relative overflow-hidden bg-midnight-card/90">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center mb-8">
            <span className="px-4 py-1.5 rounded-full bg-midnight-dark border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider inline-block mb-3 shadow-md">
              DIRECT WHATSAPP BOOKING
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Book Appliance Service</h2>
            <p className="text-slate-300 text-sm mt-2">
              Serving Mumbai Western Suburbs & Mira-Bhayandar. Instant dispatch via WhatsApp hotline (8471084775).
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gold uppercase mb-2">Customer Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl custom-input text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gold uppercase mb-2">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-3 rounded-xl custom-input text-sm"
                />
              </div>
            </div>

            {/* Appliance & Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gold uppercase mb-2">Select Appliance *</label>
                <select
                  value={appliance}
                  onChange={(e) => handleApplianceSelect(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl custom-input text-sm"
                >
                  <option value="AC">Air Conditioner (AC)</option>
                  <option value="Refrigerator">Refrigerator</option>
                  <option value="Washing Machine">Washing Machine</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gold uppercase mb-2">Select Service *</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl custom-input text-sm"
                >
                  {appliance && SERVICES_MAP[appliance] ? (
                    SERVICES_MAP[appliance].map((srv, idx) => (
                      <option key={idx} value={srv}>
                        {srv}
                      </option>
                    ))
                  ) : (
                    <option value="">-- Select Appliance First --</option>
                  )}
                </select>
              </div>
            </div>

            {/* Area & PIN Code (Datalist Autocomplete) + Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gold uppercase mb-2">
                  Mumbai Area & PIN Code *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    list="mumbai-pincodes-list"
                    value={pincodeArea}
                    onChange={(e) => setPincodeArea(e.target.value)}
                    placeholder="Type or select Area / PIN (e.g. Kandivali West - 400067)"
                    className="w-full px-4 py-3 rounded-xl custom-input text-sm"
                  />
                  <datalist id="mumbai-pincodes-list">
                    {MUMBAI_PINCODE_LIST.map((loc, idx) => (
                      <option key={idx} value={`${loc.area} (${loc.pincode})`} />
                    ))}
                  </datalist>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Select your area or type your 6-digit PIN code
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-gold uppercase mb-2">Preferred Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl custom-input text-sm"
                />
              </div>
            </div>

            {/* Time Slot & Service Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gold uppercase mb-2">Preferred Time Slot</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl custom-input text-sm"
                >
                  <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                  <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                  <option value="Evening (04:00 PM - 08:00 PM)">Evening (04:00 PM - 08:00 PM)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gold uppercase mb-2">Service Address (Flat/Building/Street) *</label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Flat No, Wing, Building Name, Landmark"
                  className="w-full px-4 py-3 rounded-xl custom-input text-sm"
                />
              </div>
            </div>

            {/* Problem Details */}
            <div>
              <label className="block text-xs font-bold text-gold uppercase mb-2">Problem / Work Details</label>
              <textarea
                rows="3"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="Describe your appliance problem or service requirements (e.g., AC not cooling, washing machine noise)..."
                className="w-full px-4 py-3 rounded-xl custom-input text-sm"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                type="submit"
                className="flex-1 py-4 rounded-xl btn-gold-gradient font-extrabold text-base tracking-wide flex items-center justify-center gap-2"
              >
                <i className="fa-brands fa-whatsapp text-2xl"></i>
                <span>Book Service Now (Direct WhatsApp)</span>
              </button>
            </div>

          </form>

        </div>

      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel p-8 rounded-3xl max-w-md w-full border border-gold/50 text-center relative animate-fade-in bg-midnight-dark">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 text-3xl flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-2">WhatsApp Redirected!</h3>
            <p className="text-sm text-slate-300 mb-6">
              Your booking details have been sent to our WhatsApp hotline (8471084775). Our technician will contact you shortly.
            </p>
            <button onClick={closeModal} className="w-full py-3 rounded-xl btn-gold-gradient font-bold text-sm shadow-lg">
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
