import React, { useState } from 'react';
import axios from 'axios';
import '../index5.css'; // Import CSS file for component styling

function AddEvent({ onEventAdded }) {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventStartTime, setEventStartTime] = useState('');
  const [eventEndTime, setEventEndTime] = useState('');

  const submitEvent = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/events', {
        name: eventName,
        description: eventDescription,
        location: eventLocation,
        date: eventDate,
        start_time: eventStartTime,
        end_time: eventEndTime,
      });

      const newEvent = response.data;
      console.log('Event added:', newEvent);

      // Reset the form fields after successful submission
      setEventName('');
      setEventDescription('');
      setEventLocation('');
      setEventDate('');
      setEventStartTime('');
      setEventEndTime('');

      // Trigger the callback to update the list of events
      if (onEventAdded) {
        onEventAdded();
      }
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <div className="add-event-container">
      <h2 className="add-event-title">Let's talk about your event!</h2>
      <form onSubmit={submitEvent} className="add-event-form">
        <div className="add-event-field">
          <label htmlFor="event-name" className="add-event-label">Event Name:</label>
          <input
            id="event-name"
            className="add-event-input"
            placeholder="Enter Event Name"
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>
        <div className="add-event-field">
          <label htmlFor="event-description" className="add-event-label">Event Description:</label>
          <input
            id="event-description"
            className="add-event-input"
            placeholder="Enter Event Description"
            type="text"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
          />
        </div>
        <div className="add-event-field">
          <label htmlFor="event-location" className="add-event-label">Event Location:</label>
          <input
            id="event-location"
            className="add-event-input"
            placeholder="Enter Event Location"
            type="text"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            required
          />
        </div>
        <div className="add-event-field">
          <label htmlFor="event-startTime" className="add-event-label">Start Time:</label>
          <input
            id="event-startTime"
            className="add-event-input"
            placeholder="Enter Start Time"
            type="text"
            value={eventStartTime}
            onChange={(e) => setEventStartTime(e.target.value)}
            required
          />
        </div>
        <div className="add-event-field">
          <label htmlFor="event-endTime" className="add-event-label">End Time:</label>
          <input
            id="event-endTime"
            className="add-event-input"
            placeholder="Enter End Time"
            type="text"
            value={eventEndTime}
            onChange={(e) => setEventEndTime(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="add-event-button">Add Your Event</button>
      </form>
    </div>
  );
}

export default AddEvent;
