// Modules import
const mongoose = require("mongoose");

// Schema creation
const OrderSchema = mongoose.Schema(
  {
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,
      },
    ],
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        require: true,
      },
    ],
    date: {
      type: Date,
      require: true,
      default: Date.now,
    },
  },
  {
    strictPopulate: false,
  }
);

// Model creation
const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
