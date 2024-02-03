import React from 'react';
import '../about.css'; // Import the external CSS file

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="container">
        <h2 className="about-us-title">About Us</h2>
        <div className="about-us-content">
          <div className="about-us-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim suscipit elit, nec accumsan libero convallis eget. Nulla nec varius purus. Integer bibendum euismod leo, a cursus libero aliquet nec. Duis condimentum malesuada mauris, non rhoncus lorem ultricies nec. Curabitur dapibus metus vitae urna pharetra, ac dapibus risus ultricies.</p>
            <p>Integer bibendum euismod leo, a cursus libero aliquet nec. Duis condimentum malesuada mauris, non rhoncus lorem ultricies nec. Curabitur dapibus metus vitae urna pharetra, ac dapibus risus ultricies. Fusce sit amet sapien nisl.</p>
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
