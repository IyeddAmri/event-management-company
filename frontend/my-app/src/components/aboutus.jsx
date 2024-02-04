import React from 'react';
import '../about.css'; // Import the external CSS file

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="container">
        <h2 className="about-us-title">About Us</h2>
        <div className="about-us-content">
          <div className="about-us-text">
            <p>What is the description of an event company?
            An event management company is a professional service that specializes in planning, organizing, and executing various events on behalf of its clients. The company may specialize in a particular type of event, such as weddings or corporate events, or they may offer a variety of event planning services.</p>
            <p></p>
          </div>
          <div className="about-us-image">
            <img src="https://c0.wallpaperflare.com/preview/764/602/552/business-professional-sign.jpg" alt="About Us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
