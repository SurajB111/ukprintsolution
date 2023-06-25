import React from 'react'
import { motion } from 'framer-motion';
// import { type } from '@testing-library/user-event/dist/type';

const Wrapper = ({children}) => {
  return (
    <motion.div
    initial={{y:100}}
    whileInView={{y:0}}
    // viewport={{once:true}}
    transition={{duration:0.5, type:'spring'}}
    >
        {children}
    </motion.div>
  )
}

export default Wrapper;