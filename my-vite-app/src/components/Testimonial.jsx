import React from "react";
import Blackguy from "../images/Blackguy.png"; 
import "../style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    name: "Mr Belba Ngoy",
    comment: "Always a remarkable experience for my team and myself",
    image: Blackguy,
  },
  {
    name: "Mr Belba Ngoy",
    comment: "Always a remarkable experience for my team and myself",
    image: Blackguy,
  },
  {
    name: "Mr Belba Ngoy",
    comment: "Always a remarkable experience for my team and myself",
    image: Blackguy,
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-header">What Do Our Attendees Have To Say?</h2>
      <p className="testimonial-subheader">Well See For Yourself!</p>
      <div className="testimonial-carousel">
        <button className="arrow left-arrow">
          <div className="icon-wrapper">
        <FontAwesomeIcon  icon={faArrowLeft} />
          </div>
        
        </button>
        <button className="arrow left-arrow">
          <div className="icon-wrapper">
        <FontAwesomeIcon  icon={faArrowRight} />
          </div>
        
        </button>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <div className="testimonial-avatar">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-comment">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;