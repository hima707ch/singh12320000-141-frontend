import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import images from '../assets/images';
import { useContact } from './useContact';

const Body = () => {
  const { handleSubmit, loading, error, success } = useContact();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div id="Body_2" className="max-w-7xl mx-auto">
        <div id="Body_3" className="text-center mb-12">
          <h1 id="Body_4" className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p id="Body_5" className="text-lg text-gray-600">Have a question or want to work together?</p>
        </div>
        <div id="Body_6" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInfo />
          <ContactForm onSubmit={handleSubmit} loading={loading} error={error} success={success} />
        </div>
      </div>
    </div>
  );
};

export default Body;