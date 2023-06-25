import React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HeroSection.css'; // Create a CSS file for styling
// import Navbar from './Navbar';

const HeroSection = ({image1,image2,image3}) => {
  const images = [
    image1,image2,image3,
  ];
  return (
    <div className="hero-section">
      {/* <Navbar
      /> */}
      
     
      <Carousel autoPlay infiniteLoop showThumbs={false} interval={3000} showStatus={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
