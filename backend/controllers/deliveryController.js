const Order = require('../models/Order');

// Get deliveries assigned to delivery person
exports.getDeliveries = async (req, res) => {
  try {
    const deliveryPersonId = req.params.deliveryPersonId;
    const deliveries = await Order.find({ deliveryPerson: deliveryPersonId }).populate('items.product').populate('user');
    res.json(deliveries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching deliveries' });
  }
};

// Update delivery status
exports.updateDeliveryStatus = async (req, res) => {
  try {
    const { deliveryPersonId, orderId } = req.params;
    const { status } = req.body;

    const order = await Order.findOne({ _id: orderId, deliveryPerson: deliveryPersonId });
    if (!order) return res.status(404).json({ message: 'Order not found or not assigned to this delivery person' });

    order.status = status;
    await order.save();

    res.json(order);
  } catch (error) {
    res.status(400).json({ message: 'Error updating delivery status' });
  }
};
