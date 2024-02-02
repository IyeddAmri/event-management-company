import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <div className='success-event'>
        {data.map((element) => (
          <div key={element.id}>
            <img src={element.image} alt={element.name} />
            <h1>{element.name}</h1>
            <h2>{element.country}</h2>
            <h3>{element.date}</h3>
            <h4>{element.concept}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuccessEvent;
