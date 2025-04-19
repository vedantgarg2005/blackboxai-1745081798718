const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User signup
router.post('/signup', userController.signup);

// User login
router.post('/login', userController.login);

// Get user profile
router.get('/profile/:id', userController.getProfile);

module.exports = router;
