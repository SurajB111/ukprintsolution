import React from 'react';
import './AboutUs.css'; // Import the CSS file for the component
import aboutImage from '../Images/machine.jpeg';
import Wrapper from './Wrapper';

const AboutUs = () => {
  return (
    <div className="about-us">
      <Wrapper>
        <div className="cardHeading">
      <h2 className="about-us-heading">About Us</h2>
      </div>
      </Wrapper>
      <div className='aboutUsParallel'>
        <Wrapper>
      <div className="about-us-content">
        <p className="about-us-description">Nullam at scelerisque tortor. Phasellus cursus efficitur rutrum. Ut id tortor blandit, efficitur sem id, cursus purus. Ut vulputate erat nec nisi vestibulum interdum.
          Sed aliquam interdum mauris, sit amet interdum turpis interdum at. Phasellus at felis enim.
          In non metus vitae lorem varius auctor id in tellus  kfjkfdk fdl gjren fgkj gr nrk g renk gnkren grei ngrle glr;e.</p>
      </div>
      </Wrapper>
      <div className="about-us-image-container">
        <Wrapper>
        <div className="about-us-image-wrapper">
          <img className="about-us-image" src={aboutImage} alt="About Us" />
        </div>
        </Wrapper>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
