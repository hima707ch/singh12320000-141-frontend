import React from 'react';
import ProjectList from './ProjectList';
import FilterOptions from './FilterOptions';
import useProjects from './useProjects';
import images from '../assets/images';

const Body = () => {
  const { projects, filters, handleFilterChange, sortProjects } = useProjects();

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8" id="Body_1">
      <div className="max-w-7xl mx-auto" id="Body_2">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center" id="Body_3">
          Our Projects
        </h1>
        <FilterOptions 
          filters={filters}
          onFilterChange={handleFilterChange}
          onSort={sortProjects}
        />
        <ProjectList projects={projects} />
      </div>
    </div>
  );
};

export default Body;