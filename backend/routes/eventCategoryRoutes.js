const express = require('express');
const router = express.Router();
const eventCategoryController = require('../controllers/eventCategoryController');

// Define the routes
router.post('/event-categories', eventCategoryController.createEventCategory);
router.get('/event-categories', eventCategoryController.getAllEventCategories);
router.get('/event-categories/:id', eventCategoryController.getEventCategoryById);
router.put('/event-categories/:id', eventCategoryController.updateEventCategory);
router.delete('/event-categories/:id', eventCategoryController.deleteEventCategory);

module.exports = router;
