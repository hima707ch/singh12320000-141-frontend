import React from 'react';
import RegistrationForm from './RegistrationForm';
import Hero from './Hero';
import images from '../assets/images';

const Body = () => {
  return (
    <div className="min-h-screen bg-gray-50" id="Body_1">
      <Hero />
      <div className="container mx-auto px-4 py-8" id="Body_2">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Body;