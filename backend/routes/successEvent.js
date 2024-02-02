const express = require('express');
const router = express.Router();
const {getAllEvents} = require ('../controllers/sucessEventController')

router.get('/get', getAllEvents);

module.exports = router;