import React from 'react';
import ProjectDetails from './ProjectDetails';
import Gallery from './Gallery';
import Description from './Description';
import useProjectDetails from './useProjectDetails';
import images from '../assets/images';

const Body = () => {
  const { project, loading, error } = useProjectDetails();

  if (loading) return <div id="Body_1" className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center min-h-screen">Error: {error}</div>;

  return (
    <div id="Body_3" className="container mx-auto px-4 py-8">
      <ProjectDetails project={project} />
      <Gallery images={images.slice(0, 6)} />
      <Description description={project?.description} />
    </div>
  );
};

export default Body;