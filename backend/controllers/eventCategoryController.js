// controllers/eventCategoryController.js
const EventCategory = require('../models/eventCategoryModel');

// Create a new event category
exports.createEventCategory = async (req, res) => {
  try {
    const category = await EventCategory.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all event categories
exports.getAllEventCategories = async (req, res) => {
  try {
    const categories = await EventCategory.getAll();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get event category by ID
exports.getEventCategoryById = async (req, res) => {
  try {
    const category = await EventCategory.getById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Event category not found' });
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update an event category
exports.updateEventCategory = async (req, res) => {
  try {
    const category = await EventCategory.update(req.params.id, req.body);
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete an event category
exports.deleteEventCategory = async (req, res) => {
  try {
    await EventCategory.delete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
