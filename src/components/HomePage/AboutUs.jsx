import React from 'react';
import images from '../assets/images';

const AboutUs = () => {
  return (
    <section id="AboutUs_1" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <img src={images[1] || 'https://example.com/team.jpg'} alt="Our Team" className="rounded-xl shadow-lg" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 id="AboutUs_2" className="text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
            <p id="AboutUs_3" className="text-gray-600 text-lg mb-6">With over 15 years of experience in real estate, we've helped thousands of families find their perfect home. Our commitment to excellence and customer satisfaction sets us apart in the industry.</p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">1500+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">2000+</h3>
                <p className="text-gray-600">Properties Sold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;