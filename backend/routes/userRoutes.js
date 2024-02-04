// userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const { authenticateJWT } = require('../controllers/userController'); // Import authenticateJWT

const router = express.Router();

// Register a new user
router.post('/register', userController.registerUser);

// Log in user
router.post('/login', userController.loginUser);

// Get user profile with JWT authentication
router.get('/profile', authenticateJWT, userController.getUserProfile);

// Update user profile with JWT authentication
router.put('/profile', authenticateJWT, userController.updateUserProfile);

// Delete user account with JWT authentication
router.delete('/profile', authenticateJWT, userController.deleteUser);

module.exports = router;
