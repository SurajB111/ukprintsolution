import React from 'react'
import './CardItem.css'
import { Link } from 'react-router-dom'

const CardItem = ({id,image,title,desc}) => {
  return (
    <Link className='cardLink ' to ={`/machine/${id}`}>
     <div className='mainCardItemContainer'> 
        <div className='cardImageDiv'>
          <img src={image} alt="img" />
          {/* <div
          style={{backgroundColor:'blue'
        ,position:'absolute',
        right:'0',
        left:'0',
        }}
          >Ready to Deliver</div> */}
        </div>
        <div className='cardTitle'>
          <h4>{title}</h4>
          <p>{desc.slice(0,80)} ...<b>Read more</b></p>
        </div>
     </div>
     </Link>
        
  )
}

export default CardItem