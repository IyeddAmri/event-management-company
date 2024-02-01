const connection = require('../database-mysql/index.js');

// Get all events
const getAll = async () => {
  try {
    const [rows] = await connection.query('SELECT * FROM events');
    return rows;
  } catch (error) {
    throw error;
  }
};

// Get one event by ID
const getOne = async (id) => {
  try {
    const [rows] = await connection.query('SELECT * FROM events WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

// Create a new event
const create = async (eventsData) => {
  try {
    const [result] = await connection.query('INSERT INTO events SET ?', eventsData);
    return { id: result.insertId, ...eventsData };
  } catch (error) {
    throw error;
  }
};

// Remove an event by ID
const remove = async (eventId) => {
  try {
    await connection.query('DELETE FROM events WHERE id = ?', [eventId]);
  } catch (error) {
    throw error;
  }
};

// Update an event by ID
const update = async (eventId, eventsData) => {
  try {
    await connection.query('UPDATE events SET ? WHERE id = ?', [eventsData, eventId]);
    return { id: eventId, ...eventsData };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  remove,
  update,
};
