// Module imports
const express = require("express");
const router = express.Router();
const {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  filterForData,
  filterForProduct,
} = require("../controllers/order.controller");

// Router paths
router.get("/", getOrders);

router.get("/:id", getOrder);

router.get("/date/:date", filterForData);

router.get("/product/:productId", filterForProduct);

router.post("/", createOrder);

router.put("/:id", updateOrder);

router.delete("/:id", deleteOrder);

module.exports = router;
