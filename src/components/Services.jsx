import React from 'react'
import './Services.css'
import HeroSection from './HeroSection'
import OtherServices from './OtherServices'
import { useEffect } from 'react'
import MachineImage from '../Images/machine.jpeg'
import Komori from '../Images/Komori.jpg'
import Ryobi from '../Images/Komori2.jpg'

const Services = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
},[]);
  return (
    <>
    <HeroSection
    image1={MachineImage}
    image2={Komori}
    image3={Ryobi}
    />
    <div className="headingContainer">
    <h1 className='mainHeading'>Services</h1>
    </div>
    <OtherServices heading='Services'/>
    <OtherServices heading='Services Provided'/>
    </>
  )
}

export default Services