import React from 'react';
import '../features.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <h2 className="features-title">Why Choose Us?</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3 className="feature-title">Customized Event Planning</h3>
            <p className="feature-description">We tailor our event planning services to suit your specific needs, ensuring a unique and memorable experience for every occasion.</p>
          </div>
          <div className="feature-item">
            <h3 className="feature-title">Expert Consultation</h3>
            <p className="feature-description">Our team of experienced event planners provides expert consultation and guidance at every step of the planning process, from concept to execution.</p>
          </div>
          <div className="feature-item">
            <h3 className="feature-title">Attention to Detail</h3>
            <p className="feature-description">We pay meticulous attention to detail to ensure that every aspect of your event, no matter how small, is flawlessly executed and exceeds your expectations.</p>
          </div>
          <div className="feature-item">
            <h3 className="feature-title">Seamless Execution</h3>
            <p className="feature-description">With our seamless event execution process, you can relax and enjoy your event while we take care of all the logistics and coordination behind the scenes.</p>
          </div>
          <div className="feature-item">
            <h3 className="feature-title">Exceptional Customer Service</h3>
            <p className="feature-description">Customer satisfaction is our top priority, and we strive to provide exceptional service and support to ensure that your event is a resounding success.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
