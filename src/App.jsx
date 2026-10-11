import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GallerySection from './components/Gallery/GallerySection';
import PricingSection from './components/Pricing/PricingSection';
import Philosophy from './components/Philosophy';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg);
    scrollToSection('contact');
  };

  const handleInquireStyle = (photo) => {
    scrollToSection('contact');
  };

  return (
    <div className="app-root">
      {/* Navigation Header */}
      <Header onBookClick={() => scrollToSection('contact')} />

      {/* Main Content */}
      <main>
        <Hero 
          onExploreClick={() => scrollToSection('gallery')}
          onInquireClick={() => scrollToSection('contact')}
        />

        <GallerySection onInquireStyle={handleInquireStyle} />

        <PricingSection onSelectPackage={handleSelectPackage} />

        <Philosophy />

        <Testimonials />

        <ContactForm preselectedPackage={selectedPackage} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
