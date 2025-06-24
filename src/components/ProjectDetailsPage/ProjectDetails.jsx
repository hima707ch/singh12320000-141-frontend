import React from 'react';
import images from '../assets/images';

const ProjectDetails = ({ project }) => {
  return (
    <div id="ProjectDetails_1" className="mb-12">
      <h1 id="ProjectDetails_2" className="text-4xl font-bold mb-4">{project?.title || 'Project Title'}</h1>
      <div id="ProjectDetails_3" className="flex flex-wrap gap-4 mb-6">
        <span id="ProjectDetails_4" className="px-4 py-2 bg-gray-100 rounded-full">{project?.category || 'Category'}</span>
        <span id="ProjectDetails_5" className="px-4 py-2 bg-gray-100 rounded-full">{project?.date || 'Date'}</span>
      </div>
      <img 
        id="ProjectDetails_6"
        src={images[0]} 
        alt="Project Header"
        className="w-full h-[400px] object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

export default ProjectDetails;