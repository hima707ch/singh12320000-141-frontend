import React from 'react';
import images from '../assets/images';

const Biography = ({ data }) => {
  return (
    <div id="Biography_1" className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-lg p-8">
      <div id="Biography_2" className="md:w-1/3">
        <img
          id="Biography_3"
          src={images[0]}
          alt="Profile"
          className="rounded-full w-48 h-48 object-cover mx-auto"
        />
      </div>
      <div id="Biography_4" className="md:w-2/3">
        <h2 id="Biography_5" className="text-2xl font-bold text-gray-900 mb-4">My Story</h2>
        <p id="Biography_6" className="text-gray-600 leading-relaxed">
          {data?.description || 'I am a passionate developer with years of experience in creating innovative solutions. My journey in technology began with a curiosity about how things work, which evolved into a career dedicated to building impactful digital experiences.'}
        </p>
      </div>
    </div>
  );
};

export default Biography;