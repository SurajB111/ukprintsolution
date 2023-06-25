import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
              libero. Sed cursus ante dapibus diam.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Address</h3>
            <ul>
              <li>123 Street, City</li>
              <li>Email: info@example.com</li>
              <li>Phone: +1 234 56789</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Connect with Us</h3>
            <h4 style={{marginBottom:'7px'}}>Phone: 8290380063 , 8201-182922</h4>
            <div className="social-icons">
              <a href="http://www.google.com" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="http://www.google.com" className="social-icon">
                <FaInstagram />
              </a>
              <a href="http://www.google.com" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="http://www.google.com" className="social-icon">
                <FaGithub />
              </a>
              <a href="http://www.google.com" className="social-icon">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="footer-text">© UK Print Solution All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
