import React from 'react';
import Biography from './Biography';
import Skills from './Skills';
import Experience from './Experience';
import { useAbout } from './useAbout';
import images from '../assets/images';

const Body = () => {
  const { bioData, skillsData, experienceData } = useAbout();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-50 py-12">
      <div id="Body_2" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="Body_3" className="text-center mb-12">
          <h1 id="Body_4" className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p id="Body_5" className="text-lg text-gray-600">Learn more about my journey, skills, and experience</p>
        </div>
        <div id="Body_6" className="grid gap-12">
          <Biography data={bioData} />
          <Skills data={skillsData} />
          <Experience data={experienceData} />
        </div>
      </div>
    </div>
  );
};

export default Body;