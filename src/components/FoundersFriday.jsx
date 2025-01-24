import React from "react";
import "../style.css";
import PeopleListening from '../images/PeopleListening.png'
import WomenTalking from '../images/WomenTalking.png'
import Vector3 from '../images/Vector3.png'
import ArrowRight2 from '../images/ArrowRight2.png'

const FoundersFriday = () => {
    return (
      <div className="founders-friday-section">
        {/* Text and Line Section */}
        <div className="founders-text-line">
          {/* Vertical Line */}
          <img
            src= {Vector3}
            alt="Vertical Line"
            className="founders-vertical-line"
          />
  
          {/* Content */}
          <div className="founders-content">
            <p className="founders-subtitle">Founders Friday</p>
            <h2 className="founders-heading">What Happens At Founders Friday</h2>
            <p className="founders-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              rutrum felis. Nulla nibh lorem, facilisis vel at, vehicula
              dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
              suscipit id.
            </p>
            <button className="founders-learn-more">Learn More <img src= {ArrowRight2} alt="" /></button>
          </div>
        </div>
  
        {/* Images Section */}
        <div className="founders-images">
          <img
            src= {PeopleListening}
            alt="Founders Friday Main"
            className="founders-main-image"
          />
          <div className="founders-stacked-images">
            <img
              src={WomenTalking}
              alt="Founders Friday 1"
              className="stacked-image"
            />
            <img
              src={PeopleListening}
              alt="Founders Friday 2"
              className="stacked-image"
            />
            <img
              src= {WomenTalking}
              alt="Founders Friday 3"
              className="stacked-image"
            />
           
          </div>
        </div>
      </div>
    );
  };
  
  export default FoundersFriday;