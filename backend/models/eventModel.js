// models/eventModel.js
const db = require('../database-mysql');

// Create a new event
exports.create = async (eventData) => {
  const [result] = await db.query('INSERT INTO events SET ?', eventData);
  return { id: result.insertId, ...eventData };
};

// Get all events
exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM events');
  return rows;
};

// Get event by ID
exports.getById = async (eventId) => {
  const [rows] = await db.query('SELECT * FROM events WHERE id = ?', [eventId]);
  return rows[0];
};

// Update an event
exports.update = async (eventId, eventData) => {
  await db.query('UPDATE events SET ? WHERE id = ?', [eventData, eventId]);
  return { id: eventId, ...eventData };
};

// Delete an event
exports.delete = async (eventId) => {
  await db.query('DELETE FROM events WHERE id = ?', [eventId]);
};
