import { useState, useEffect } from 'react';

const useProjects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online shopping platform with payment integration',
      category: 'web',
      status: 'completed',
      date: '2023-01-15'
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      description: 'Mobile application for tracking workouts and nutrition',
      category: 'mobile',
      status: 'ongoing',
      date: '2023-03-20'
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      description: 'Complete brand identity design including logo and guidelines',
      category: 'design',
      status: 'completed',
      date: '2023-02-10'
    },
  ]);

  const [filters, setFilters] = useState({
    category: '',
    status: ''
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const sortProjects = (sortType) => {
    const sortedProjects = [...projects];
    switch (sortType) {
      case 'newest':
        sortedProjects.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'oldest':
        sortedProjects.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'name':
        sortedProjects.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }
    setProjects(sortedProjects);
  };

  const filteredProjects = projects.filter(project => {
    if (filters.category && project.category !== filters.category) return false;
    if (filters.status && project.status !== filters.status) return false;
    return true;
  });

  return {
    projects: filteredProjects,
    filters,
    handleFilterChange,
    sortProjects
  };
};

export default useProjects;