import React from "react";
import "../style.css"; 
import MenListening from "../images/MenListening.png"
import ArrowRight from "../images/ArrowRight.png"


const Friday = () => {
  return (
    <div className="friday-container">
      {/* Image Section */}
      <div className="friday-image">
        <img src= {MenListening} alt="Every Friday Event" />
      </div>

      {/* Content Section */}
      <div className="friday-content">
        <h1 className="friday-header">At Founder’s Friday, Every Friday Is a Learning <br></br>Experience!</h1>
        <p className="friday-description">
          Join us in our mission to transform ideas into impact and shape the
          future of <br></br> Nigeria's startup landscape.
        </p>
        <button  className="friday-register-button">
            Register <img src={ArrowRight} alt="" />
        </button>
       
      </div>
    </div>
  );
};

export default Friday;