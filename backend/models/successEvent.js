const db = require('../database-mysql');

exports.getAll = async () => {
    const [rows] = await db.query('SELECT * FROM successstories');
    return rows;
  };