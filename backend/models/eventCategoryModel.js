// models/eventCategoryModel.js
const db = require('../database-mysql');

// Create a new event category
exports.create = async (categoryData) => {
  const [result] = await db.query('INSERT INTO event_categories SET ?', categoryData);
  return { id: result.insertId, ...categoryData };
};

// Get all event categories
exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM event_categories');
  return rows;
};

// Get event category by ID
exports.getById = async (categoryId) => {
  const [rows] = await db.query('SELECT * FROM event_categories WHERE id = ?', [categoryId]);
  return rows[0];
};

// Update an event category
exports.update = async (categoryId, categoryData) => {
  await db.query('UPDATE event_categories SET ? WHERE id = ?', [categoryData, categoryId]);
  return { id: categoryId, ...categoryData };
};

// Delete an event category
exports.delete = async (categoryId) => {
  await db.query('DELETE FROM event_categories WHERE id = ?', [categoryId]);
};
