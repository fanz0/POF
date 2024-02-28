// Module imports
const Order = require("../models/order.model");

// Controllers creation
const getOrders = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    let orders = await Order.find({})
      .skip(skip)
      .limit(limit)
      .populate("users", "name")
      .populate("products", "name");
    // Filters
    if (req.query) {
      let date;
      const { productId } = req.query;

      if (req.query.date) {
        date = new Date(req.query.date);
      }

      if (productId && date) {
        orders = await Order.find({
          date: { $gte: date },
          products: productId,
        })
          .skip(skip)
          .limit(limit)
          .populate("users", "name")
          .populate("products", "name");
      } else if (date) {
        orders = await Order.find({
          date: { $gte: date },
        })
          .skip(skip)
          .limit(limit)
          .populate("users", "name")
          .populate("products", "name");
      } else if (productId) {
        orders = await Order.find({
          products: productId,
        })
          .skip(skip)
          .limit(limit)
          .populate("users", "name")
          .populate("products", "name");
      }
    }
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    let order = await Order.findByIdAndUpdate(id, req.body);
    if (!order) {
      res.status(404).json({ message: "order not found" });
    }
    order = await Order.findById(id);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);
    if (!order) {
      res.status(404).json({ message: "order not found" });
    }
    res.status(200).json({ message: "order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
