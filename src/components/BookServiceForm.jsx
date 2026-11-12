import React, { useState, useEffect } from 'react';
import { MUMBAI_PINCODE_LIST } from '../seoData';

const SERVICES_MAP = {
  'Split AC': [
    'Split AC Repair & Troubleshooting',
    'Split AC Deep Jet Foam Cleaning',
    'Split AC Gas Refilling (R32 / R410A)',
    'Split AC Installation & Uninstallation',
    'Split AC PCB Circuit Board Repair',
    'Split AC Compressor Replacement',
    'Split AC Water Leakage Repair',
    'Split AC Fan Motor Replacement',
    'Split AC AMC (Annual Maintenance)'
  ],
  'Window AC': [
    'Window AC Repair & Troubleshooting',
    'Window AC Deep Chemical Servicing',
    'Window AC Gas Refilling (R22 / R32)',
    'Window AC Installation & Bracket Fitting',
    'Window AC Compressor Repair',
    'Window AC Fan Motor & Capacitor Fix',
    'Window AC Noise & Vibration Fix'
  ],
  'Inverter AC': [
    'Inverter AC Repair & Error Code Diagnosis',
    'Inverter AC PCB Board Repair',
    'Inverter AC IPM Module Replacement',
    'Inverter AC Gas Charging & Leak Test',
    'Inverter AC Deep Jet Servicing',
    'Inverter Sensor & Thermistor Fix'
  ],
  'Cassette AC': [
    'Cassette AC Repair & Troubleshooting',
    'Cassette AC Jet Cleaning & Filter Wash',
    'Cassette AC Drain Pump Repair / Replacement',
    'Cassette AC PCB & Remote Sensor Fix',
    'Cassette AC Refrigerant Gas Refilling',
    'Cassette AC Installation & Commissioning'
  ],
  'Ductable AC': [
    'Ductable AC Central Cooling Diagnosis',
    'Ductable AC Gas Charging & Vacuuming',
    'Ductable AC Blower Motor & Belt Check',
    'Ductable AC Thermostat & Damper Service',
    'Ductable AC Coil Chemical Cleaning',
    'Ductable AC Commercial AMC Contract'
  ],
  'Tower / Commercial AC': [
    'Tower AC Repair & Maintenance',
    'Commercial AC Jet Servicing',
    'Commercial AC Gas Refilling',
    'Electrical Control Panel & PCB Repair',
    'Compressor Replacement (Commercial)'
  ]
};

export default function BookServiceForm({
  selectedAppliance,
  selectedService,
  selectedPincode,
  selectedArea,
  onApplianceChange
}) {
  const defaultType = selectedAppliance && SERVICES_MAP[selectedAppliance] ? selectedAppliance : 'Split AC';
  const [acType, setAcType] = useState(defaultType);
  const [service, setService] = useState(selectedService || 'Split AC Repair & Troubleshooting');
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
    if (selectedAppliance && SERVICES_MAP[selectedAppliance]) {
      setAcType(selectedAppliance);
    }
    if (selectedService) {
      setService(selectedService);
    }
  }, [selectedAppliance, selectedService]);

  useEffect(() => {
    if (selectedArea && selectedPincode) {
      setPincodeArea(`${selectedArea} (${selectedPincode})`);
    } else if (selectedPincode) {
      setPincodeArea(selectedPincode);
    }
  }, [selectedPincode, selectedArea]);

  const handleAcTypeSelect = (val) => {
    setAcType(val);
    if (SERVICES_MAP[val] && SERVICES_MAP[val].length > 0) {
      setService(SERVICES_MAP[val][0]);
    } else {
      setService('');
    }
    if (onApplianceChange) {
      onApplianceChange(val);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `*New AC Service Booking - Star Cool Air Con*\n\n` +
      `👤 *Customer Name:* ${name}\n` +
      `📞 *Phone Number:* ${phone}\n` +
      `❄️ *AC Type:* ${acType}\n` +
      `🛠️ *Service Required:* ${service}\n` +
      `📍 *Mumbai Area / PIN:* ${pincodeArea || 'Mumbai'}\n` +
      `🏠 *Address:* ${address}\n` +
      `📅 *Preferred Date:* ${date || 'Earliest available'}\n` +
      `⏰ *Time Slot:* ${time}\n` +
      `⚠️ *Problem Description:* ${problem || 'General Service / Diagnosis'}\n\n` +
      `_Sent from website booking portal (starcoolaircon.in)_`
    );

    const waUrl = `https://wa.me/918108437170?text=${text}`;

    setShowModal(true);
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="book-service" className="py-16 bg-navy/80 relative border-t border-gold/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Form Title */}
        <div className="text-center mb-10">
          <span className="px-3.5 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-bold uppercase tracking-wider inline-block mb-3">
            INSTANT DOORSTEP BOOKING
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Book <span className="gold-gradient-text">AC Repair & Service</span> in Mumbai
          </h2>
          <p className="text-slate-300 text-sm mt-3">
            Fill the form below for instant technician assignment. Same-day service available across all Mumbai zones.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Booking Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl gold-border-glow shadow-2xl relative">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gold uppercase mb-2">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-3 rounded-xl custom-input text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gold uppercase mb-2">Mobile Number (WhatsApp) *</label>
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

            {/* AC Type & Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gold uppercase mb-2">Select AC Type *</label>
                <select
                  value={acType}
                  onChange={(e) => handleAcTypeSelect(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl custom-input text-sm"
                >
                  <option value="Split AC">Split AC (Inverter / Non-Inverter)</option>
                  <option value="Window AC">Window AC</option>
                  <option value="Inverter AC">Inverter AC</option>
                  <option value="Cassette AC">Cassette AC (Commercial Ceiling)</option>
                  <option value="Ductable AC">Ductable AC (Central Cooling)</option>
                  <option value="Tower / Commercial AC">Tower / Commercial AC</option>
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
                  {acType && SERVICES_MAP[acType] ? (
                    SERVICES_MAP[acType].map((srv, idx) => (
                      <option key={idx} value={srv}>
                        {srv}
                      </option>
                    ))
                  ) : (
                    <option value="AC Repair & Troubleshooting">AC Repair & Troubleshooting</option>
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
              <label className="block text-xs font-bold text-gold uppercase mb-2">Problem / Symptoms (Optional)</label>
              <textarea
                rows="3"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="Describe your AC problem (e.g. AC not cooling, water leakage from indoor unit, strange sound, PCB error code, low gas)..."
                className="w-full px-4 py-3 rounded-xl custom-input text-sm"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                type="submit"
                className="flex-1 py-4 rounded-xl btn-gold-gradient font-extrabold text-base tracking-wide flex items-center justify-center gap-2"
              >
                <i className="fa-brands fa-whatsapp text-2xl"></i>
                <span>Book AC Service Now (Direct WhatsApp)</span>
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
              Your booking details have been sent to our WhatsApp hotline (8108437170). Our technician will contact you shortly.
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
