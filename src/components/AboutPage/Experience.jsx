import React from 'react';
import images from '../assets/images';

const Experience = ({ data }) => {
  const defaultExperience = [
    {
      company: 'Tech Solutions Inc.',
      role: 'Senior Developer',
      period: '2020 - Present',
      description: 'Led development of enterprise applications and mentored junior developers.'
    },
    {
      company: 'Digital Innovations',
      role: 'Full Stack Developer',
      period: '2018 - 2020',
      description: 'Developed and maintained multiple client projects using modern web technologies.'
    }
  ];

  const experience = data || defaultExperience;

  return (
    <div id="Experience_1" className="bg-white rounded-lg shadow-lg p-8">
      <h2 id="Experience_2" className="text-2xl font-bold text-gray-900 mb-6 text-center">Professional Experience</h2>
      <div id="Experience_3" className="space-y-6">
        {experience.map((exp, index) => (
          <div key={index} id={`Experience_${index + 4}`} className="border-l-4 border-blue-500 pl-4 py-2">
            <div id={`Experience_${index + 7}`} className="flex justify-between items-start mb-2">
              <h3 id={`Experience_${index + 10}`} className="text-xl font-semibold text-gray-800">{exp.company}</h3>
              <span id={`Experience_${index + 13}`} className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <p id={`Experience_${index + 16}`} className="text-lg text-gray-700 mb-1">{exp.role}</p>
            <p id={`Experience_${index + 19}`} className="text-gray-600">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;