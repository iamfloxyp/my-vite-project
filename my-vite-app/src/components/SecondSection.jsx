import React from "react";
import "../style.css";
import ThreePeople from '../images/ThreePeople.png'
import Vector1 from '../images/Vector1.png'
import Line1 from '../images/line1.png'
import ArrowRight from '../images/ArrowRight.png'
import MoneyBag from '../images/MoneyBag.png'


const SecondSection = () => {
  return (
    <div className="second-section">
      <div className="image-container">
        <img
          className="main-image"
          src={ThreePeople}
          alt="Founders Friday"
        />
      </div>
      <div className="line">
        <img src={Line1} alt="" />
      </div>
      <div className="content-container">
        <h2>Who Are We?</h2>
        <p>
          Born from the vibrant startup ecosystem of Abuja, we recognized the
          need for a consistent, high-quality networking platform where
          founders, innovators, and tech enthusiasts could connect, share
          ideas, and foster collaboration.
        </p>
        <div className="buttons">
          <button className="register-button2">Register <img src= {ArrowRight} alt="" /></button>
          <button className="donate-button">Donate <img src= {MoneyBag} alt="" /></button>
        </div>
        <p className="bottom-text">
          Founder's Friday is more than just a meetup — it's a movement.
        </p>
      </div>
      <img
        className="line-image"
        src={Vector1}
        alt="Decorative Line"
      />
    </div>
  );
};

export default SecondSection;