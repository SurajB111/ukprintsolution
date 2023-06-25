import React, { useEffect } from 'react'
import './MachineDetail.css'
import { Link, useParams } from 'react-router-dom'
import {Machines} from './Machines'
import { motion } from 'framer-motion'
import Wrapper from './Wrapper'
import HeroSection from './HeroSection'

const MachineDetail = () => {
    const {id} =useParams();
    const selectedMachine =Machines.find((machine)=>machine.id === parseInt(id));
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
    if(!selectedMachine){
        return <h1>Machine not found</h1>
    }

  return (
    <div className='machineDetailDiv' style={{overflowX:'hidden'}}>
        <div className='machineDetailImageDiv'>
            {/* <motion.img
            initial={{x:800}}
            animate={{x:0}}
            transition={{duration:0.8,type:'spring' ,bounce:0.4}}
            src={selectedMachine.img} alt='imagelogo' /> */}
            <HeroSection
            image1={selectedMachine.OtherImages[0]}
            image2={selectedMachine.OtherImages[1]}
            image3={selectedMachine.OtherImages[2]}
            />
            
            <motion.h1
            initial={{x:-800}}
            animate={{x:0}}
            transition={{duration:0.7,type:'spring' ,bounce:0.4}}
            >{selectedMachine.name}</motion.h1>
        </div>
        <div className='machineDetailDescDiv'>
            {/* <div className="allDescDiv"> */}
            <Wrapper>
            <h1
            style={{ margin: '30px',
                padding:'10px',
                background:'linear-gradient(to right,#f7a35d,#fc4a1a)',
                borderRadius:'10px',
                letterSpacing:'2px',
                color: 'white'}}
            >Description</h1>
            </Wrapper>
            <Wrapper>
            <p
            style={{
                          margin: '20px',
                          letterSpacing: '2px',
                          wordSpacing: '5px',
                          fontWeight: '700',
                          color: 'grey',
                          marginLeft: '10%',
                          marginRight: '10%',
            }}
            >{selectedMachine.description}</p>
            </Wrapper>
            {/* </div> */}
            {/* <div className="allDetailDiv"> */}
            {/* <Wrapper>
            <h1
            style={{ margin: '30px',
            padding:'10px',
            background:'linear-gradient(to right,#f7a35d,#fc4a1a)',
            borderRadius:'10px',
            letterSpacing:'2px',
            color: 'white'}}
            >Full Details</h1>
            </Wrapper>
            <Wrapper>
            <p
            style={{
                margin: '20px',
                letterSpacing: '2px',
                wordSpacing: '5px',
                fontWeight: '700',
                color: 'grey',
                marginLeft: '10%',
                marginRight: '10%',
  }}
            >{selectedMachine.details}</p
            >
            </Wrapper> */}
            {/* </div> */}
            <Link to ='/contact'>
            <button type="button" className="machineButton">Contact Us</button>
            </Link>
        </div>
    </div>
  )
}

export default MachineDetail