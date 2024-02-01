const express = require('express');
const router = express.Router();
const eventsDetailsController = require('../controllers/eventDetails.js');

// Define the routes
router.get('/getAll', eventsDetailsController.getAllEvents);
router.get('/getOne/:id', eventsDetailsController.getOneEvent);
router.post('/add', eventsDetailsController.createEvent);
router.delete('/delete/:id', eventsDetailsController.deleteEvent);
router.put('/update/:id', eventsDetailsController.updateEvent);

module.exports = router;