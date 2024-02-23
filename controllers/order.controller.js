// Module imports
const Order = require("../models/order.model");

// Controllers creation
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("users", "name")
      .populate("products", "name");
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

const filterForData = async (req, res) => {
  try {
    const date = new Date(req.params.date);
    const orders = await Order.find({
      date: { $gte: date },
    })
      .populate("users", "name")
      .populate("products", "name");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const filterForProduct = async (req, res) => {
  try {
    const id = req.params.productId;
    const orders = await Order.find({
      products: id,
    })
      .populate("users", "name")
      .populate("products", "name");
    res.status(200).json(orders);
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
  filterForData,
  filterForProduct,
};
