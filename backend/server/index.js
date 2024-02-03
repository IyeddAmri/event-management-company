// server.js (or your server file)

const express = require('express');
const bodyParser = require('body-parser');
const emailjs = require('emailjs-com');

const app = express();

app.use(bodyParser.json());

// Your existing routes
const eventRoutes = require('../routes/eventroute');
const eventCategoryRoutes = require('../routes/eventCategoryRoutes');
const successEvent = require('../routes/successEvent');
const routeEvent = require('../routes/eventDetails');
const userRoutes = require('../routes/userRoutes'); // Include user routes

app.use(express.json());

app.use(cors());

// Use your existing routes
app.use('/api', eventRoutes);
app.use('/api', eventCategoryRoutes);
app.use('/api', routeEvent);
app.use('/api', successEvent);
app.use('/api', userRoutes); // Use user routes

// New route for sending welcome emails
app.post('/api/send-welcome-email', (req, res) => {
  const { to_email, subject, message } = req.body;

  const templateParams = {
    to_email,
    subject,
    message,
  };

  emailjs.send(
    'your-emailjs-service-id',
    'your-emailjs-template-id',
    templateParams,
    'your-emailjs-user-id'
  )
    .then((response) => {
      console.log('Welcome email sent successfully:', response);
      res.status(200).json({ success: true, message: 'Welcome email sent successfully' });
    })
    .catch((error) => {
      console.error('Error sending welcome email:', error);
      res.status(500).json({ success: false, message: 'Failed to send welcome email' });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
