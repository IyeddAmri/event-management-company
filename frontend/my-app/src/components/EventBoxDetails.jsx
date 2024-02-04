import React, { useState } from 'react';
import '../box.css'; // Import the external CSS file for this component

const EventBoxDetails = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="event-box-details-container">
      <div className={`event-box ${showDetails ? 'expanded' : ''}`}>
        <div className="event-image"></div>
        <div className="event-info">
          <h3 className="event-name">Event Name</h3>
          <p className="event-description">Event description goes here.</p>
          <button className="toggle-button" onClick={toggleDetails}>
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
          {showDetails && (
            <div className="event-details">
              <p><strong>Description:</strong> Event description goes here.</p>
              <p><strong>Date:</strong> Event date goes here.</p>
              <p><strong>Consumption:</strong> Event consumption goes here.</p>
              <p><strong>Location:</strong> Event location goes here.</p>
              <p><strong>Category:</strong> Event category goes here.</p>
            </div>
          )}
        </div>
      </div>
      {/* Add more event boxes as needed */}
    </div>
  );
};

export default EventBoxDetails;
