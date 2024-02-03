// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Register a new user
router.post('/register', userController.registerUser);

// Log in user
router.post('/login', userController.loginUser);

// Get user profile
router.get('/profile', userController.getUserProfile);

// Update user profile
router.put('/profile', userController.updateUserProfile);

// Delete user account
router.delete('/profile', userController.deleteUser);

module.exports = router;
