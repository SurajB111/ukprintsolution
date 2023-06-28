import React from 'react'
import { Machines } from './Machines'
import CardItem from './CardItem'
import './Cards.css';
import Wrapper from './Wrapper';
import { motion } from 'framer-motion';

const Cards = () => {
  return (
    <div className='mainCardContainer'>
      <Wrapper>
        <div className="cardHeading">
            <h1>Featured Machines</h1>
        </div>
        </Wrapper>
        {/* <Wrapper> */}
        <div className='machineRapper'>
        {Machines.map((machine,index)=>{
           return ( 
           <motion.div key = {index} 
               initial={{ y: 100 }}
               whileInView={{ y: 0 }}
               viewport={{once: true}}
               whileHover={{scale:1.1}}
               transition={{ duration: 0.1, type: 'spring' }}
           className="outsideCardContainer">
            <div
            style={{
              backgroundColor: 'red',
              position: 'absolute',
              color: 'white',
              borderRadius:'10px',
            padding:'5px'}}
            >{machine.condition}</div>
           <CardItem
            id={machine.id}
            image={machine.img}
            title={machine.name}
            desc={machine.description}
            />
             </motion.div>
            )
            
        })}
        </div>
        {/* </Wrapper> */}
        
    </div>
  )
}

export default Cards