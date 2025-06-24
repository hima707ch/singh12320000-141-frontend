import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import FeaturedProperties from './FeaturedProperties';
import CTASection from './CTASection';
import Footer from './Footer';
import images from '../assets/images';

const Body = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Hero />
      <AboutUs />
      <FeaturedProperties />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Body;