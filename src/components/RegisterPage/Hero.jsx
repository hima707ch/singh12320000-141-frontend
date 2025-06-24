import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 py-16" id="Hero_1">
      <div className="container mx-auto px-4 text-center" id="Hero_2">
        <h1 className="text-4xl font-bold text-white mb-4" id="Hero_3">
          Create Your Account
        </h1>
        <p className="text-xl text-white opacity-90" id="Hero_4">
          Join our community and discover amazing properties
        </p>
      </div>
    </div>
  );
};

export default Hero;