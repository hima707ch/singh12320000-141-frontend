import React from 'react';
import images from '../assets/images';

const CTASection = () => {
  return (
    <section id="CTA_1" className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-6 text-center">
        <h2 id="CTA_2" className="text-4xl font-bold text-white mb-6">Ready to Find Your Dream Home?</h2>
        <p id="CTA_3" className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">Let us help you navigate the real estate market and find the perfect property that matches your needs and budget.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">Contact Us</button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition duration-300">Browse Properties</button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;