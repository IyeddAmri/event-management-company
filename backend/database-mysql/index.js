const mysql = require('mysql2');
const config = require('./config');

// Create MySQL connection pool
const pool = mysql.createPool(config);

// Export the pool for use in other modules
module.exports = pool.promise();
