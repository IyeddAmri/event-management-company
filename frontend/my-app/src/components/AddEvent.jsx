import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

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
    <div>
      <h2>Add your event</h2>
      <form onSubmit={submitEvent} className="page">
        <div className="field field_v1">
          <label htmlFor="event-name" className="ha-screen-reader">
            Event Name
          </label>
          <input
            id="event-name"
            className="field__input"
            placeholder="Enter Event Name"
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
         
        </div>
        <div className="field field_v2">
          <label htmlFor="event-description" className="ha-screen-reader">
            Event Description
          </label>
          <input
            id="event-description"
            className="field__input"
            placeholder="Enter Event Description"
            type="text"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
          />
        
        </div>
        <div className="field field_v3">
          <label htmlFor="event-location" className="ha-screen-reader">
            Event Location
          </label>
          <input
            id="event-location"
            className="field__input"
            placeholder="Enter Event Location"
            type="text"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            required
          />
         
        </div>
        <div className="field field_v3">
          <label htmlFor="event-startTime" className="ha-screen-reader">
            Start Time
          </label>
          <input
            id="event-startTime"
            className="field__input"
            placeholder="Enter Start Time"
            type="text"
            value={eventStartTime}
            onChange={(e) => setEventStartTime(e.target.value)}
            required
          />
         
        </div>
        <div className="field field_v3">
          <label htmlFor="event-endTime" className="ha-screen-reader">
            End Time
          </label>
          <input
            id="event-endTime"
            className="field__input"
            placeholder="Enter End Time"
            type="text"
            value={eventEndTime}
            onChange={(e) => setEventEndTime(e.target.value)}
            required
          />
        
        </div>

        <button type="submit">Add your event</button>
      </form>
    </div>
  );
}

export default AddEvent;
