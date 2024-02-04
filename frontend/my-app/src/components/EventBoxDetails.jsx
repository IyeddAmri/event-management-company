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
       
        <div className="event-info">
          <h3 className="event-name">Event Name</h3>
          <p className="event-description">Tomorrowland.</p>
          <button className="toggle-button" onClick={toggleDetails}>
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
          {showDetails && (
            <div className="event-details">
              <p><strong>Description:</strong> Tomorrowland is a large-scale annual electronic dance music festival held in Boom, Belgium.</p>
              <p><strong>Date:</strong>Fri, Jul 19, 2024 – Sun, Jul 28, 2024.</p>
              <p><strong>Consumption:</strong>VIP Pass required to enter event area.</p>
              <p><strong>Location:</strong> belguim.</p>
              <p><strong>Category:</strong> entertainment</p>
            </div>
          )}
        </div>
      </div>
      {/* Add more event boxes as needed */}
    </div>
  );
};

export default EventBoxDetails;
