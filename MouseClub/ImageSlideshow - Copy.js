// src/components/ImageSlideshow.js
import React, { useState, useEffect } from 'react';
import jersey from '../assets/images/jersey.jpeg';
import jerseyy from '../assets/images/jerseyy.jpeg';
import jersey2 from '../assets/images/jersey2.jpeg';
import './Style.css';

const images = [jersey, jerseyy, jersey2];

const ImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageSlideshow;
