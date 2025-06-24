import React from 'react';
import images from '../assets/images';

const Skills = ({ data }) => {
  const defaultSkills = {
    technical: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Python'],
    soft: ['Communication', 'Leadership', 'Problem Solving', 'Team Collaboration'],
    tools: ['Git', 'Docker', 'AWS', 'VS Code', 'Figma']
  };

  const skills = data || defaultSkills;

  return (
    <div id="Skills_1" className="bg-white rounded-lg shadow-lg p-8">
      <h2 id="Skills_2" className="text-2xl font-bold text-gray-900 mb-6 text-center">Skills & Expertise</h2>
      <div id="Skills_3" className="grid md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], index) => (
          <div key={category} id={`Skills_${index + 4}`} className="bg-gray-50 rounded-lg p-6">
            <h3 id={`Skills_${index + 7}`} className="text-xl font-semibold text-gray-800 mb-4 capitalize">{category}</h3>
            <ul id={`Skills_${index + 10}`} className="space-y-2">
              {items.map((skill, idx) => (
                <li key={skill} id={`Skills_${index + idx + 13}`} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;