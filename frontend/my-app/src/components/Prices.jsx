import React from 'react';
import '../index1.css'; // You can define your own styles in a separate CSS file

const Prices = () => {
  return (
    <div className="prices-section">
      <div className="container">
        <h2 className="section-title">Our Pricing Plans</h2>
        <div className="price-cards">
          <div className="price-card">
            <h3>Basic Package</h3>
            <p className="price-description">Perfect for small events or gatherings.</p>
            <ul className="price-features">
              <li>Event planning assistance</li>
              <li>Venue coordination</li>
              <li>Vendor referrals</li>
              <li>On-site management</li>
            </ul>
            <p className="price">$500</p>
          </div>
          <div className="price-card">
            <h3>Premium Package</h3>
            <p className="price-description">Comprehensive event management services.</p>
            <ul className="price-features">
              <li>Custom event design</li>
              <li>Full-service coordination</li>
              <li>Entertainment booking</li>
              <li>Post-event follow-up</li>
            </ul>
            <p className="price">$1500</p>
          </div>
          <div className="price-card custom-package">
            <h3>Custom Package</h3>
            <p className="price-description">Tailored to your specific needs and budget.</p>
            <p className="contact-text">Contact us for a personalized quote.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
