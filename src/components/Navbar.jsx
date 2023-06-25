import React, { useState ,useEffect,useRef} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import logo from "../Images/logo.png";
// import Header from './Header';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
// import { motion } from 'framer-motion';

const Navbar = ({toogle}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const elementRef=useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const disablee=()=>{
    setIsMenuOpen(false);
  }
 

  return (
    <>
    <div className='main'>
    {windowWidth>770?(
    <div className="navbar">
      <div className='navbarLogo' style={{marginLeft:'20px'}}>
      <Link to='/'  >
        {/* <img onClick={disablee} src={logo} alt="logo" className='navbarImage' /> */}
        <h1 className='navbarHeading' style ={{fontSize:'2rem'}}>UK PRINT SOLUTION</h1>
        {/* <h4>Print Solution</h4> */}
      </Link>
      </div>
      <div className="navbarItem">
        <Link to='/'>
          <p className='navbarItems'>Home</p>
        </Link>
        <Link to='/about'>
          <p className='navbarItems'>About</p>
        </Link>
        <Link to='/services'>
          <p className='navbarItems'>Services</p>
        </Link>
        <Link to='/contact'>
          <p className='navbarItems'>Contact Us</p>
        </Link>
      
      </div>

    </div>):(<div className="navbar">
      <div className='navbarLogo'>
      <Link to='/' >
        {/* <img src={logo} onClick={disablee} alt="logo" className='navbarImage' /> */}
        <h1 className='navbarHeading'  style={{fontSize:'1.5rem'}}>UK PRINT SOLUTION</h1>
        {/* <p>Print Solution</p> */}
      </Link>
      </div>
      <div className="navbarItem" >
        <div>
      {/* <img  src={logo} alt="logo" className='navbarImage' onClick={handleMenuToggle} /> */}
      {isMenuOpen?(<RxCross1 style={{height:'30px'}} onClick={handleMenuToggle} className='navbarImage'/>):(<GiHamburgerMenu style={{height:'30px'}} onClick={handleMenuToggle} className='navbarImage'/>)}
      </div>
      </div>
      

    </div>)}
      
    </div>
    {isMenuOpen?(
      <div className='smallDiv ' ref={elementRef}>
        <div className="smallNavbarItems">
        <Link to='/'>
          <p className='navbarItems newClass' onClick={disablee}>Home</p>
        </Link>
        <Link to='/about'>
          <p className='navbarItems newClass' onClick={disablee}>About</p>
        </Link>
        <Link to='/services'>
          <p className='navbarItems newClass' onClick={disablee}>Services</p>
        </Link>
        <Link to='/contact'>
          <p className='navbarItems newClass' onClick={disablee}>Contact Us</p>
        </Link>
      
      </div>
      </div>):(<div></div>)}
    </>


    
  );
};

export default Navbar;
