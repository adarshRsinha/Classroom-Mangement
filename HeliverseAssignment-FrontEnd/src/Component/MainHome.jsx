import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import Features from './Features';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      {/* Header Component */}
      <Header />

      {/* Hero Section Component */}
      <HeroSection />

      {/* Features Section Component */}
      <Features />

      {/* Pricing Section Component */}
      <Pricing />

      {/* Testimonials Section Component */}
      <Testimonials />

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;