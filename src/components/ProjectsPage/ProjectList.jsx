import React from 'react';
import images from '../assets/images';

const ProjectList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="ProjectList_1">
      {projects.map((project, index) => (
        <div 
          key={project.id} 
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          id={`ProjectList_${index + 2}`}
        >
          <img
            src={images[index % images.length]}
            alt={project.title}
            className="w-full h-48 object-cover"
            id={`ProjectList_img_${index}`}
          />
          <div className="p-6" id={`ProjectList_content_${index}`}>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{project.category}</span>
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                onClick={() => window.location.href = `/project/${project.id}`}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;