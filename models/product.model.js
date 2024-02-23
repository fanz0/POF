// Modules import
const mongoose = require("mongoose");

// Schema creation
const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Inserisci il nome del prodotto"],
  },
});

// Model creation
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
