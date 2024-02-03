import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; // Import the external CSS file

const EventCategory = () => {
  const [eventCategories, setEventCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    age_restriction: '',
    target_demographic: '',
    season: '',
    extra_information: ''
  });
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [createFormVisible, setCreateFormVisible] = useState(false);

  useEffect(() => {
    fetchEventCategories();
  }, []);

  const fetchEventCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/event-categories');
      setEventCategories(response.data);
    } catch (error) {
      console.error('Error fetching event categories:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedCategoryId) {
        await axios.put(`http://localhost:3000/api/event-categories/${selectedCategoryId}`, formData);
        const updatedCategories = eventCategories.map(category => {
          if (category.id === selectedCategoryId) {
            return { ...category, ...formData };
          }
          return category;
        });
        setEventCategories(updatedCategories);
        setSelectedCategoryId(null);
      } else {
        const response = await axios.post('http://localhost:3000/api/event-categories', formData);
        setEventCategories([...eventCategories, response.data]);
      }
      setFormData({ 
        name: '',
        description: '',
        age_restriction: '',
        target_demographic: '',
        season: '',
        extra_information: ''
      });
      setCreateFormVisible(false); // Hide the create form after submission
    } catch (error) {
      console.error('Error creating/updating event category:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/event-categories/${id}`);
      setEventCategories(eventCategories.filter(category => category.id !== id));
    } catch (error) {
      console.error('Error deleting event category:', error);
    }
  };

  const handleEdit = (id) => {
    const categoryToEdit = eventCategories.find(category => category.id === id);
    setSelectedCategoryId(id);
    setFormData(categoryToEdit);
    setCreateFormVisible(true); // Show the create form when editing
  };

  return (
    <div className="event-category-container">
      <h1>Event Categories</h1>
      <button className="event-create-button" onClick={() => setCreateFormVisible(!createFormVisible)}>
        {createFormVisible ? 'Hide Form' : 'Show Form'}
      </button>
      {createFormVisible && (
        <form onSubmit={handleSubmit} className="event-form">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required></textarea>
          <input type="text" name="age_restriction" value={formData.age_restriction} onChange={handleChange} placeholder="Age Restriction" />
          <input type="text" name="target_demographic" value={formData.target_demographic} onChange={handleChange} placeholder="Target Demographic" />
          <input type="text" name="season" value={formData.season} onChange={handleChange} placeholder="Season" />
          <input type="text" name="extra_information" value={formData.extra_information} onChange={handleChange} placeholder="Extra Information" />
          <button type="submit">{selectedCategoryId ? 'Update' : 'Create'}</button>
        </form>
      )}
      <ul className="event-category-list">
        {eventCategories.map(category => (
          <li key={category.id} className="category-item">
            <div className="category-info">
              <div><strong>Name:</strong> {category.name}</div>
              <div><strong>Description:</strong> {category.description}</div>
              <div><strong>Age Restriction:</strong> {category.age_restriction}</div>
              <div><strong>Target Demographic:</strong> {category.target_demographic}</div>
              <div><strong>Season:</strong> {category.season}</div>
              <div><strong>Extra Information:</strong> {category.extra_information}</div>
            </div>
            <div className="category-actions">
              <button onClick={() => handleEdit(category.id)}>Edit</button>
              <button onClick={() => handleDelete(category.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventCategory;
