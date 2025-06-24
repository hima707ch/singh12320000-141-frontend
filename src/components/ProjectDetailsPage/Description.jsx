import React from 'react';
import images from '../assets/images';

const Description = ({ description }) => {
  return (
    <div id="Description_1" className="my-12">
      <h2 id="Description_2" className="text-2xl font-semibold mb-6">Project Description</h2>
      <div id="Description_3" className="prose max-w-none">
        <p id="Description_4" className="text-gray-700 leading-relaxed mb-6">
          {description || 'This project represents an innovative approach to solving modern challenges. Through careful planning and execution, we were able to deliver exceptional results that exceeded expectations.'}
        </p>
        <div id="Description_5" className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div id="Description_6" className="bg-gray-50 p-6 rounded-lg">
            <h3 id="Description_7" className="text-xl font-semibold mb-4">Challenges</h3>
            <ul id="Description_8" className="list-disc pl-4 text-gray-700">
              <li className="mb-2">Complex integration requirements</li>
              <li className="mb-2">Performance optimization</li>
              <li className="mb-2">Scalability considerations</li>
            </ul>
          </div>
          <div id="Description_9" className="bg-gray-50 p-6 rounded-lg">
            <h3 id="Description_10" className="text-xl font-semibold mb-4">Outcomes</h3>
            <ul id="Description_11" className="list-disc pl-4 text-gray-700">
              <li className="mb-2">Improved user experience</li>
              <li className="mb-2">Enhanced performance metrics</li>
              <li className="mb-2">Successful deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;