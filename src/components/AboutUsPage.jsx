import React from 'react'
import './AboutUsPage.css'
import HeroSection from './HeroSection'
import MachineImage from '../Images/machine.jpeg'
import OtherServices from './OtherServices'
import { useEffect } from 'react'
import Wrapper from './Wrapper'
import Komori from '../Images/Komori.jpg'
import Ryobi from '../Images/Komori2.jpg'

const AboutUsPage = () => {
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
    <h1 className='mainHeading'>ABOUT US</h1>
    </div>
    <div className='aboutUsPageMainDiv'>
      <Wrapper>
    <div className="cardHeading">
        <h1>Our Company</h1>
    </div>
    </Wrapper>
    <Wrapper>
    <div className="aboutUsPageImage">
        <img src={MachineImage} alt="imgg" />
    </div>
    </Wrapper>
    <div className="aboutUsPageDesc">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi itaque nulla amet? Mollitia voluptatum officiis, corporis modi magnam vitae a quibusdam saepe asperiores, ipsam consequatur natus dicta beatae illum quidem quos, labore ut ratione adipisci minus sapiente! Nemo, voluptas soluta amet delectus voluptatem modi excepturi voluptates. Vero, aliquid? Repellendus enim veniam, adipisci voluptatem maxime a officiis sit voluptatibus, soluta voluptas, similique ex quod veritatis fuga blanditiis rerum ab dolore voluptates esse. Maxime amet beatae esse suscipit necessitatibus quas! Facilis eius pariatur molestias rerum placeat error accusamus distinctio hic doloremque quos. Quaerat molestias distinctio omnis repellendus asperiores dolorum sit beatae unde?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi itaque nulla amet? Mollitia voluptatum officiis, corporis modi magnam vitae a quibusdam saepe asperiores, ipsam consequatur natus dicta beatae illum quidem quos, labore ut ratione adipisci minus sapiente! Nemo, voluptas soluta amet delectus voluptatem modi excepturi voluptates. Vero, aliquid? Repellendus enim veniam, adipisci voluptatem maxime a officiis sit voluptatibus, soluta voluptas, similique ex quod veritatis fuga blanditiis rerum ab dolore voluptates esse. Maxime amet beatae esse suscipit necessitatibus quas! Facilis eius pariatur molestias rerum placeat error accusamus distinctio hic doloremque quos. Quaerat molestias distinctio omnis repellendus asperiores dolorum sit beatae unde?</p>
    </div>
    </div>
    <OtherServices 
    heading="Services Provided"
    />
    </>
  )
}

export default AboutUsPage