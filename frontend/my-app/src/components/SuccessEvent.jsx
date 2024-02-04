import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index4.css'; // Import CSS file for component styling

function SuccessEvent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/get');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="success-event-container">
      <h1 className="success-event-title">Success Events</h1>
      <div className="success-event-grid">
        {data.map((element) => (
          <div key={element.id} className="success-event-card">
            <img src={element.image} alt={element.name} className="success-event-image" />
            <div className="success-event-details">
              <h2 className="success-event-name">{element.name}</h2>
              <p className="success-event-country">{element.country}</p>
              <p className="success-event-date">{element.date}</p>
              <p className="success-event-concept">{element.concept}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuccessEvent;
