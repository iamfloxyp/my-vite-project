import React from "react";
import "../style.css"; // Ensure your CSS styles are included here
import Vector2 from "../images/Vector2.png";
import Blackguy from "../images/Blackguy.png";
import ArrowRight3 from "../images/ArrowRight3.png"

const CommunityRegister = () => {
  return (
    <div className="community-container">
      <div className="community-text">
        <h1 className="community-header">Register And Be Part of Our Community</h1>
        <p className="community-subheader">
          Join our community of over 1000+ founders, developers, and tech junkies in general.
          <p className="subheader">Be inspired by people who live to inspire!</p>
          
        </p>
      </div>
      <div className="timeline-container">
        <img src={Vector2} alt="Zigzag Line" className="zigzag-line" />
        <div className="avatar-container" >
          <img src={Blackguy} alt="Avatar" className="avatar" />
        </div>
        <div className="avatar-container" >
          <img src={Blackguy} alt="Avatar" className="avatar" />
        </div>
        <div className="avatar-container" >
          <img src={Blackguy} alt="Avatar" className="avatar" />
        </div>
        <div className="avatar-container" >
          <img src={Blackguy} alt="Avatar" className="avatar" />
        </div>
        <div className="avatar-container" >
          <img src={Blackguy} alt="Avatar" className="avatar" />
        </div>
        <div className="avatar-container" >
          <img src={Blackguy} alt="Avatar" className="avatar" />
        </div>
        <div className="avatar-container" >
          <img src={Blackguy} alt="Avatar" className="avatar" />
        </div>
      </div>
      <button className="communityButton">Register
        <img src={ArrowRight3} className="arrow" alt="" />
      </button>
    </div>
  );
};

export default CommunityRegister;