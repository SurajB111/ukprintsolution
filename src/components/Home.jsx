import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import './Home.css'
import Cards from './Cards'
import OtherServices from './OtherServices'
import AboutUs from './AboutUs'
import MachineImage from '../Images/machine.jpeg'
import Komori from '../Images/Komori.jpg'
import Ryobi from '../Images/Komori2.jpg'
// import Footer from './Footer'

const Home = () => {
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
    {/* <Wrapper> */}

    <div className="headingContainer">
    <h1 className='mainHeading'>Offset Printing Machines </h1>
    </div>
    {/* </Wrapper> */}

    {/* cardsection */}
    <Cards/>

    {/* other services */}
    <OtherServices
    heading='Other Services'
    />

    {/* about us */}
    <AboutUs/>
    
    {/* footer */}
    {/* <Footer/> */}



    </>
  )
}

export default Home