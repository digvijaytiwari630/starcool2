import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import HeaderBadgeBar from './components/HeaderBadgeBar';
import Hero from './components/Hero';
import MainServices from './components/MainServices';
import AcServicesAccordion from './components/AcServicesAccordion';
import BrandsFilter from './components/BrandsFilter';
import DuctableCassetteBrands from './components/DuctableCassetteBrands';
import WashingMachineService from './components/WashingMachineService';
import RefrigeratorService from './components/RefrigeratorService';
import SecondHandFridgeSection from './components/SecondHandFridgeSection';
import BrandSupport from './components/BrandSupport';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import FaqSection from './components/FaqSection';
import ServiceAreasPincodes from './components/ServiceAreasPincodes';
import BookServiceForm from './components/BookServiceForm';
import ContactAndMap from './components/ContactAndMap';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import QuickBookingModal from './components/QuickBookingModal';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlTheme = urlParams.get('theme');
      if (urlTheme === 'light' || urlTheme === 'white') return 'light';
      if (urlTheme === 'dark') return 'dark';
    }
    return localStorage.getItem('acseva_theme') || 'dark';
  });
  const [splashFinished, setSplashFinished] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('nosplash') === 'true' || urlParams.get('menu') === 'open';
    }
    return false;
  });
  const [selectedAppliance, setSelectedAppliance] = useState('AC');
  const [selectedService, setSelectedService] = useState('AC Repair & Service');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedPincode, setSelectedPincode] = useState('');

  // Quick Action Modal State
  const [quickModalOpen, setQuickModalOpen] = useState(false);
  const [modalServiceName, setModalServiceName] = useState('');
  const [modalAppliance, setModalAppliance] = useState('');

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    } else {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('acseva_theme', nextTheme);
      return nextTheme;
    });
  };

  const handleSelectService = (appliance, serviceName) => {
    setModalAppliance(appliance);
    setModalServiceName(serviceName);
    setSelectedAppliance(appliance);
    setSelectedService(serviceName);
    setQuickModalOpen(true);
  };

  const handleFillFormDirect = (appliance, serviceName) => {
    setSelectedAppliance(appliance);
    setSelectedService(serviceName);
    const bookSec = document.getElementById('book-service');
    if (bookSec) {
      bookSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectAreaPincode = (area, pincode) => {
    setSelectedArea(area);
    setSelectedPincode(pincode);
    const bookSec = document.getElementById('book-service');
    if (bookSec) {
      bookSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`${theme === 'light' ? 'light-mode bg-[#F8FAFC] text-slate-900' : 'dark-mode bg-[#020611] text-slate-100'} min-h-screen font-sans selection:bg-gold selection:text-midnight-dark transition-colors duration-300`}>
      {!splashFinished && (
        <SplashScreen onFinish={() => setSplashFinished(true)} />
      )}

      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      
      {/* 3D Metallic Quick Badges bar below sticky header */}
      <HeaderBadgeBar onSelectBadge={handleSelectService} />

      <Hero onBookClick={handleSelectService} />
      <MainServices onSelectService={handleSelectService} />
      <AcServicesAccordion />
      <BrandsFilter onBookClick={handleSelectService} />
      <DuctableCassetteBrands />
      <WashingMachineService onBookClick={handleSelectService} />
      <RefrigeratorService onBookClick={handleSelectService} />
      <SecondHandFridgeSection onBookClick={handleSelectService} />
      <BrandSupport />
      <WhyChooseUs />
      <HowItWorks />
      <FaqSection />
      <ServiceAreasPincodes onSelectAreaPincode={handleSelectAreaPincode} />
      <BookServiceForm
        selectedAppliance={selectedAppliance}
        selectedService={selectedService}
        selectedArea={selectedArea}
        selectedPincode={selectedPincode}
        onApplianceChange={(app) => setSelectedAppliance(app)}
      />
      <ContactAndMap />
      <Footer />
      <FloatingButtons />

      {/* Quick Call / WhatsApp Booking Modal */}
      <QuickBookingModal
        isOpen={quickModalOpen}
        serviceName={modalServiceName}
        appliance={modalAppliance}
        onClose={() => setQuickModalOpen(false)}
        onFillForm={handleFillFormDirect}
      />
    </div>
  );
}
