import React from "react";
import "../style.css";
import ArrowRight from '../images/ArrowRight.png'

const SponsorComponent = () => {
  return (
    <div className="sponsor-container">
      <div className="sponsor-header">
        <h1 className="sponsor-header-hone"> 
            <span className="hone">Why Sponsor</span>
            <span className="htwo">Founders Friday?</span>
        </h1>
      </div>
      <div className="sponsor-content">
        <div className="sponsor-left">
          <h2>Sponsor The Next Friday</h2>
          <div className="sponsor-benefits">
            <div className="benefit1">
              <h3>Networking Opportunities</h3>
              <p>Connect with industry leaders, founders, and potential partners.</p>
            </div>
            <div className="benefit2">
              <h3>Community Impact</h3>
              <p>Support the growth and development of the startup ecosystem.</p>
            </div>
            <div className="benefit3">
              <h3>Brand Association</h3>
              <p>Align your brand with innovation and entrepreneurial success.</p>
            </div>
            <div className="benefit4">
              <h3>Visibility</h3>
              <p>Gain exposure to a targeted audience of young professionals and entrepreneurs.</p>
            </div>
          </div>
        </div>
        <div className="sponsor-right">
          <h2>How To Sponsor</h2>
          <h4>Ready to make an impact?</h4>
          <p>

          Fill out the form below or contact us at [contact email/phone number] to learn more about how you can sponsor the next Founders Friday
          </p>
          <form className="sponsor-form">
            <div className="form-group">
                <div className="form-input">
                <label>Name</label>
                <input type="text" placeholder="" required />
                </div>
                
              <div className="form-input">
              <label >Company(optional)</label>
              <input type="text" placeholder="Company name (optional)" />
              </div>
            </div>
            <div className="form-group">
                <div className="form-input">
                <label>Email</label>
                <input type="email" placeholder="Email address" required />
                </div>
                <div className="form-input">
                <label>Phone</label>
                <input type="text" placeholder="Phone number" required />
                </div>
            </div>
            <button type="submit" className="sponsor-button">
              Sponsor <img src= {ArrowRight} alt="" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SponsorComponent;