import React from "react";
import "../style.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Img1 from '../images/Img1.png'
import Img2 from '../images/Img2.png'
import Img3 from '../images/Img3.png'
import Img4 from '../images/Img4.png'
import Img5 from '../images/Img5.png'
import VideoImage from '../images/VideoImage.png'
import People from '../images/People.png'
import PeopleSitting from  '../images/PeopleSitting.png'
import Conference from '../images/Conference.png'
import Ellipse310 from '../images/Ellipse310.png'
import Play from '../images/Play.png'
import Rightarrow from '../images/Rightarrow.png'
import BoxArrowUpRight from '../images/BoxArrowUpRight.png'

const MainSection = () => {
  return (
    <div className="main-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="content">
            <div className="content-words">
                <div className="content-text">
                    <div className="content-text-heading">
            <p>Join our premier monthly meetup for startup and tech visionaries</p>
          <h1>Connect, Collaborate, Innovate!</h1>
          </div>
          <p>
            Every last Friday of the month, we bring together the brightest
            minds in our local tech ecosystem. Whether you're a seasoned
            entrepreneur or just starting your journey, Founder's Friday is
            your launchpad for new ideas, valuable connections, and
            game-changing opportunities.
          </p>
          </div>
          <div className="button-content">
          <button className="register-button">
            Register For Our Next Event 
            <img src={Rightarrow} alt="" />
          </button>
          <p className="meetup-details">
            Join us for our next meetup on the 26th of July 2024
          </p>
          </div>
          </div>
          <div className="icons-container">
          <div className="icons-row">
            <img src={Img1} alt="Partner 1" />
            <img src= {Img2} alt="Partner 2" />
            <img src= {Img3} alt="Partner 3" />
            <img src= {Img4} alt="Partner 4" />
            <img src={Img5} alt="Partner 5" />
          </div>
          <p className="collaborator-text">Become a collaborator today  <img src={BoxArrowUpRight}alt="" /></p>
          </div>
        </div>
      </div>

       {/* Right Section */}
       <div className="right-section">
        <div className="image-container">
          {/* First Image */}
          <div className="image-box shaded1 first-image">
            <img src={VideoImage} className="video1" alt="Founder's Friday 1" />
            <div className="video-inner">
                <img src= {Ellipse310} className="video2" alt="" />
                <img src= {Play} className="video3" alt="" />
            </div>
            <p>Founder's Friday</p>
          </div>

          {/* Second Image */}
          <div className="image-box shaded2 second-image">
            <img src= {People} alt="Founder's Friday 2" />
            <p>Founder's Friday</p>
          </div>

          {/* Third Image */}
          <div className="image-box third-image">
            <img src={PeopleSitting} alt="Founder's Friday 3" />
            <p>Founder's Friday</p>
          </div>

          {/* Fourth Image */}
          <div className="image-box fourth-image">
            <img src= {Conference} alt="Founder's Friday 4" />
            <p>Founder's Friday</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;