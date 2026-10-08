import React, { useState } from 'react';
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
import BookServiceForm from './components/BookServiceForm';
import ContactAndMap from './components/ContactAndMap';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import QuickBookingModal from './components/QuickBookingModal';

export default function App() {
  const [splashFinished, setSplashFinished] = useState(false);
  const [selectedAppliance, setSelectedAppliance] = useState('AC');
  const [selectedService, setSelectedService] = useState('AC Repair & Service');

  // Quick Action Modal State
  const [quickModalOpen, setQuickModalOpen] = useState(false);
  const [modalServiceName, setModalServiceName] = useState('');
  const [modalAppliance, setModalAppliance] = useState('');

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

  return (
    <div className="bg-[#020611] text-slate-100 min-h-screen font-sans selection:bg-gold selection:text-midnight-dark">
      {!splashFinished && (
        <SplashScreen onFinish={() => setSplashFinished(true)} />
      )}

      <Navbar />
      
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
      <BookServiceForm
        selectedAppliance={selectedAppliance}
        selectedService={selectedService}
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
