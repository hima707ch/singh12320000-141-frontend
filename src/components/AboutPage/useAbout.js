import { useState, useEffect } from 'react';

export const useAbout = () => {
  const [bioData, setBioData] = useState(null);
  const [skillsData, setSkillsData] = useState(null);
  const [experienceData, setExperienceData] = useState(null);

  useEffect(() => {
    // Here you would typically fetch data from an API
    // For now, we'll use static data
    setBioData({
      description: 'A passionate developer with over 5 years of experience in web development, specializing in creating innovative and user-friendly applications.'
    });

    setSkillsData({
      technical: ['React', 'JavaScript', 'Node.js', 'Python', 'SQL'],
      frameworks: ['Next.js', 'Express', 'Django', 'TailwindCSS'],
      tools: ['Git', 'Docker', 'AWS', 'VS Code']
    });

    setExperienceData([
      {
        company: 'Tech Innovators',
        role: 'Senior Frontend Developer',
        period: '2021 - Present',
        description: 'Leading frontend development team and implementing modern web solutions.'
      },
      {
        company: 'Digital Solutions',
        role: 'Full Stack Developer',
        period: '2019 - 2021',
        description: 'Developed full-stack applications using React and Node.js.'
      }
    ]);
  }, []);

  return {
    bioData,
    skillsData,
    experienceData
  };
};