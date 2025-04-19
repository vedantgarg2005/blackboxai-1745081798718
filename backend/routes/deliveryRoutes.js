const express = require('express');
const router = express.Router();
const deliveryController = require('../controllers/deliveryController');

// Get deliveries assigned to delivery person
router.get('/:deliveryPersonId', deliveryController.getDeliveries);

// Update delivery status
router.put('/:deliveryPersonId/orders/:orderId/status', deliveryController.updateDeliveryStatus);

module.exports = router;
