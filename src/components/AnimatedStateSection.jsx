import React, { useEffect, useState } from "react";
import "../style.css";
import BackgroundImage from "../images/BackgroundImage.png";
import LogoBackground from "../images/LogoBackground.png";
import ArrowRight from "../images/ArrowRight.png";

const AnimatedStateSection = () => {
  const states = ["Kaduna", "Kano", "Abuja"];
  const [currentState, setCurrentState] = useState(states[0]);
  const [animationClass, setAnimationClass] = useState("slide-up");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      const nextIndex = (index + 1) % states.length;
      const nextState = states[nextIndex];

      // Set animation direction dynamically
      if (nextState === "Abuja") {
        setAnimationClass("slide-down");
      } else {
        setAnimationClass("slide-up");
      }

      setCurrentState(nextState);
      index = nextIndex;
    }, 2000); // Change state every 3 seconds

    return () => clearInterval(interval);
  }, [states]);

  return (
    <div
      className="animated-section"
      style={{ backgroundImage: `url(${BackgroundImage}) `}}
    >
      <div className="overlay-container">
        <div className="overlay">
          <h1>
            Founders Friday is coming to{" "}
            <span className={`state-name ${animationClass}`}>
              {currentState}
            </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
            dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
            suscipit id.
          </p>
          <button className="see-details-button">
            See Details <img src={ArrowRight} alt="Arrow" />
          </button>
        </div>
        <div className="image-container">
          <img
            src={LogoBackground}
            alt="Decorative Element"
            className="overlay-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedStateSection;