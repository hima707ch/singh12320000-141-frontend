import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative overflow-hidden bg-gradient-to-r from-red-500 to-red-700 py-32">
      <div className="absolute inset-0">
        <svg className="absolute left-0 top-0 opacity-20" viewBox="0 0 200 200">
          <path fill="#FFFFFF" d="M42.7,-73.2C55.9,-67.3,67.7,-57.1,75.6,-44.2C83.5,-31.3,87.6,-15.7,86.8,-0.4C86.1,14.8,80.5,29.6,72.5,42.9C64.5,56.2,54,68,41.2,74.4C28.4,80.8,14.2,81.8,-0.7,83C-15.6,84.2,-31.2,85.6,-44.3,79.7C-57.4,73.8,-68,60.7,-74.9,46.1C-81.8,31.4,-85,15.7,-84.7,0.2C-84.4,-15.4,-80.6,-30.8,-73.1,-44.2C-65.6,-57.6,-54.5,-69,-41.4,-74.8C-28.3,-80.6,-14.2,-80.8,0.6,-81.8C15.3,-82.8,30.6,-84.6,42.7,-73.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 id="Hero_2" className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Find Your Dream
              Home Today
            </h1>
            <p id="Hero_3" className="text-blue-100 text-xl mb-8">Discover the perfect property that matches your lifestyle and dreams.</p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300 transform hover:scale-105">Get Started</button>
          </div>
          <div className="w-full lg:w-1/2 animate-float">
            <img src={images[0] || 'https://example.com/house.jpg'} alt="Modern Home" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;