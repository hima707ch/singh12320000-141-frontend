import React from 'react';
import images from '../assets/images';

const FilterOptions = ({ filters, onFilterChange, onSort }) => {
  return (
    <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4" id="FilterOptions_1">
      <div className="flex gap-4" id="FilterOptions_2">
        <select
          className="bg-white border border-gray-300 rounded-md px-4 py-2"
          value={filters.category}
          onChange={(e) => onFilterChange('category', e.target.value)}
          id="FilterOptions_3"
        >
          <option value="">All Categories</option>
          <option value="web">Web Development</option>
          <option value="mobile">Mobile Apps</option>
          <option value="design">Design</option>
        </select>

        <select
          className="bg-white border border-gray-300 rounded-md px-4 py-2"
          value={filters.status}
          onChange={(e) => onFilterChange('status', e.target.value)}
          id="FilterOptions_4"
        >
          <option value="">All Status</option>
          <option value="completed">Completed</option>
          <option value="ongoing">Ongoing</option>
        </select>
      </div>

      <div className="flex gap-4" id="FilterOptions_5">
        <select
          className="bg-white border border-gray-300 rounded-md px-4 py-2"
          onChange={(e) => onSort(e.target.value)}
          id="FilterOptions_6"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="name">Name A-Z</option>
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;