const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Get cart for user
router.get('/:userId', cartController.getCart);

// Add item to cart
router.post('/:userId/add', cartController.addItem);

// Update item quantity
router.put('/:userId/update', cartController.updateItem);

// Remove item from cart
router.delete('/:userId/remove', cartController.removeItem);

module.exports = router;
