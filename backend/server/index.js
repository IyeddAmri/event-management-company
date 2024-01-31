// server/index.js
const express = require('express');
const app = express();
const eventRoutes = require('../routes/eventroute');
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', eventRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
