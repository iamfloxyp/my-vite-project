import React, { useState } from 'react';
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/Logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Top Line */}
      <div className="top-line"></div>

      {/* Header Content */}
      <div className="header-content">
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt=" Logo" />
        </div>

        {/* Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>

        {/* Navigation Links */}
        <nav className={`navigation ${menuOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact Us</a>
          <div className="btn">
            <button className="register-btn">
              Register <FontAwesomeIcon className="icon" icon={faArrowRight} />
            </button>
          </div>
        </nav>
      </div>

      {/* Bottom Line */}
      <div className="bottom-line"></div>
    </header>
  );
};

export default Header;

