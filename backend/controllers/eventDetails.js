const eventsDetails = require('../models/eventDetails.js');

// Get all events
exports.getAllEvents = async (req, res) => {
  try {
    const result = await eventsDetails.getAll();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one event by ID
exports.getOneEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const result = await eventsDetails.getOne(eventId);
    if (!result) {
      res.status(404).json({ message: 'Event not found' });
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new event
exports.createEvent = async (req, res) => {
  try {
    const result = await eventsDetails.create(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// Remove an event by ID
exports.deleteEvent = async (req, res) => {
  try {
    await eventsDetails.remove(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update an event by ID
exports.updateEvent = async (req, res) => {
  try {
    const result = await eventsDetails.update(req.params.id, req.body);
    if (!result) {
      res.status(404).json({ message: 'Event is not found' });
    } else {
      res.status(200).send();
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
