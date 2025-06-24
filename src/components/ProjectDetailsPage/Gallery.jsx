import React, { useState } from 'react';
import images from '../assets/images';

const Gallery = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div id="Gallery_1" className="my-12">
      <h2 id="Gallery_2" className="text-2xl font-semibold mb-6">Project Gallery</h2>
      <div id="Gallery_3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index}
            id={`Gallery_image_${index}`}
            className="relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setActiveImage(index)}
          >
            <img 
              src={image} 
              alt={`Project image ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;