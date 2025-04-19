const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Get cart for user
exports.getCart = async (req, res) => {
  try {
    const userId = req.params.userId;
    let cart = await Cart.findOne({ user: userId }).populate('items.product');
    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
      await cart.save();
    }
    res.json(cart);
  } catch (error) {
    console.error('Get cart error:', error);
    res.status(500).json({ message: 'Server error fetching cart' });
  }
};

// Add item to cart
exports.addItem = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { productId, quantity } = req.body;

    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    const existingItemIndex = cart.items.findIndex(item => item.product.toString() === productId);
    if (existingItemIndex >= 0) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }

    cart.updatedAt = Date.now();
    await cart.save();

    res.json(cart);
  } catch (error) {
    console.error('Add item to cart error:', error);
    res.status(500).json({ message: 'Server error adding item to cart' });
  }
};

// Update item quantity
exports.updateItem = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { productId, quantity } = req.body;

    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const item = cart.items.find(item => item.product.toString() === productId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    item.quantity = quantity;
    cart.updatedAt = Date.now();
    await cart.save();

    res.json(cart);
  } catch (error) {
    console.error('Update cart item error:', error);
    res.status(500).json({ message: 'Server error updating cart item' });
  }
};

// Remove item from cart
exports.removeItem = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { productId } = req.body;

    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter(item => item.product.toString() !== productId);
    cart.updatedAt = Date.now();
    await cart.save();

    res.json(cart);
  } catch (error) {
    console.error('Remove cart item error:', error);
    res.status(500).json({ message: 'Server error removing cart item' });
  }
};
