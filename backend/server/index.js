const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Allow requests from your frontend origin
app.use(cors({ origin: 'http://localhost:3004', credentials: true }));

// Your existing routes
const eventRoutes = require('../routes/eventroute');
const eventCategoryRoutes = require('../routes/eventCategoryRoutes');
const successEvent = require('../routes/successEvent');
const router = require('../routes/eventDetails');
const userRoutes = require('../routes/userRoutes');

app.use('/api', eventRoutes);
app.use('/api', eventCategoryRoutes);
app.use('/api', router);
app.use('/api', successEvent);
app.use('/api', userRoutes); // Use user routes

// New route for sending welcome emails
app.post('/api/send-welcome-email', (req, res) => {
  // Implementation of sending welcome email
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
