// Import necessary libraries
import React from 'react';

// Create the EventDetails component
const EventDetails = ({ eventDetails, onClose }) => {
  return (
    <div className="event-details-overlay">
      <div className="event-details-container">
        <button className="close-button" onClick={onClose}>Close</button>
        <h2>{eventDetails.eventName}</h2>
        <p><strong>Description:</strong> {eventDetails.description}</p>
        <p><strong>Date:</strong> {eventDetails.date}</p>
        <p><strong>Consumption:</strong> {eventDetails.consumption}</p>
        <p><strong>Location:</strong> {eventDetails.location}</p>
        <p><strong>Category:</strong> {eventDetails.category}</p>
      </div>
    </div>
  );
};

export default EventDetails;
