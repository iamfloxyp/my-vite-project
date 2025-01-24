import React from 'react';
import '../style.css';
import Line2 from'../images/Line2.png'
import Instagram from '../images/Instagram.png'
import Facebook from '../images/Facebook.png'
import Twitter from '../images/Twitter.png'
import Logo2 from '../images/Logo2.png'
import Rightarrow from '../images/Rightarrow.png'



const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-logo-section">
        <img src={Logo2} alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-content">
        <h2 className="footer-header">Want To Be A Part Of Abuja’s Biggest Tech <br></br>Community?</h2>
        <button className="footer-button">
          Register For Our Next Event <img src={Rightarrow} alt="Arrow" />
        </button>
      </div>
      <img src={Line2} alt="Line" className="footer-line" />
      <div className='footer-social-links'>
      <div className="footer-socials">
        <img src={Facebook} alt="Facebook" className="social-icon" />
        <img src={Instagram} alt="Instagram" className="social-icon" />
        <img src={Twitter} alt="Close" className="social-icon" />
      </div>
      <div className="footer-links">
        <a href="#home" className="footer-link">Home</a>
        <a href="#about-us" className="footer-link">About Us</a>
        <a href="#gallery" className="footer-link">Gallery</a>
        <a href="#contact-us" className="footer-link">Contact Us</a>
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;