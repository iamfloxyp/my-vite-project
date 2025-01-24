import React, { useState } from 'react';
import "../style.css";
import Vector from "../images/Vector.png";

const FAQSection = () => {
    const faqs = [
      { question: "Lorem ipsum dolor sit amet?" },
      { question: "Lorem ipsum dolor sit amet?" },
      { question: "Lorem ipsum dolor sit amet?" },
      { question: "Lorem ipsum dolor sit amet?" },
      { question: "Lorem ipsum dolor sit amet?" },
      { question: "Lorem ipsum dolor sit amet?" },
    ];
  
    return (
      <div className="faq-container">
        <h2 className="faq-header">FAQs</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question">
                {faq.question}
                <img
                  src={Vector}
                  alt="Arrow Down"
                  className="faq-icon"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FAQSection;