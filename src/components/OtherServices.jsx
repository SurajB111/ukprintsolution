import React from 'react';
import './OtherServices.css';
import MachineImage from '../Images/machine.jpeg' // Import the CSS file for the component
import Wrapper from './Wrapper';

const OtherServices = ({heading}) => {
  // Array of objects representing services
  const services = [
    {
      id: 1,
      title: 'Service 1',
      imageUrl: MachineImage,
    },
    {
      id: 2,
      title: 'Service 2',
      imageUrl: MachineImage,
    },
    {
      id: 3,
      title: 'Service 3',
      imageUrl: MachineImage,
    },
    {
      id: 4,
      title: 'Service 4',
      imageUrl: MachineImage,
    },
    {
      id: 5,
      title: 'Service 4',
      imageUrl: MachineImage,
    },
    // Add more service objects as needed
  ];

  return (
    <section className="other-services">
      <Wrapper>
        <div className="cardHeading">
      <h1 className="other-services-heading">{heading}</h1>
      </div>
      </Wrapper>
      <div className="card-container">
        {services.map(service => (
          <Wrapper key={service.id}>
          <Card key={service.id} title={service.title} imageUrl={service.imageUrl} />
          </Wrapper>
        ))}
      </div>
    </section>
  );
};

const Card = ({ title, imageUrl }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img className="card-image" src={imageUrl} alt={title} />
      </div>
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

export default OtherServices;
