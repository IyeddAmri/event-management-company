import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EventCategories() {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState({ 
        name: '', 
        description: '', 
        age_restriction: '', 
        target_demographic: '', 
        season: '' 
    });
    const [editCategory, setEditCategory] = useState(null);

    // Fetch categories from the backend when the component mounts
    useEffect(() => {
        fetchCategories();
    }, []);

    // Fetch categories from the backend
    function fetchCategories() {
        axios.get('http://localhost:3000/api/event-categories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }

    // Add a new category
    function addCategory() {
        axios.post('http://localhost:3000/api/event-categories', newCategory)
            .then(response => {
                console.log('Category added successfully:', response.data);
                fetchCategories(); // Refresh category list
            })
            .catch(error => {
                console.error('Error adding category:', error);
            });
    }

    // Update an existing category
    function updateCategory(category) {
        axios.put(`http://localhost:3000/api/event-categories/${category.id}`, category)
            .then(response => {
                console.log('Category updated successfully:', response.data);
                fetchCategories(); // Refresh category list
                setEditCategory(null); // Clear edit mode
            })
            .catch(error => {
                console.error('Error updating category:', error);
            });
    }

    // Delete a category
    function deleteCategory(categoryId) {
        axios.delete(`http://localhost:3000/api/event-categories/${categoryId}`)
            .then(response => {
                console.log('Category deleted successfully:', categoryId);
                fetchCategories(); // Refresh category list
            })
            .catch(error => {
                console.error('Error deleting category:', error);
            });
    }

    // Toggle edit mode for a category
    function toggleEditMode(category) {
        setEditCategory(category);
        // Set the newCategory state to the selected category for editing
        setNewCategory({ ...category });
    }

    return (
        <div>
            <h2>Event Categories</h2>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        {editCategory === category ? (
                            <div>
                                <input type="text" value={newCategory.name} onChange={e => setNewCategory({ ...newCategory, name: e.target.value })} />
                                {/* Add input fields for other properties */}
                                <button onClick={() => updateCategory(newCategory)}>Save</button>
                                <button onClick={() => setEditCategory(null)}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                {/* Display all category properties */}
                                <div>{`Name: ${category.name}`}</div>
                                <div>{`Description: ${category.description}`}</div>
                                <div>{`Age Restriction: ${category.age_restriction}`}</div>
                                <div>{`Target Demographic: ${category.target_demographic}`}</div>
                                <div>{`Season: ${category.season}`}</div>
                                <button onClick={() => toggleEditMode(category)}>Edit</button>
                                <button onClick={() => deleteCategory(category.id)}>Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <div>
                <h2>Add New Category</h2>
                <input type="text" value={newCategory.name} onChange={e => setNewCategory({ ...newCategory, name: e.target.value })} placeholder="Name" />
                {/* Add input fields for other properties */}
                <button onClick={addCategory}>Add Category</button>
            </div>
        </div>
    );
}

export default EventCategories;
