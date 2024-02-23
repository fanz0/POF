// Modules import
const express = require("express");
const routerUsers = require("./routes/usersRoute");
const routerProducts = require("./routes/productsRoute");
const routerOrders = require("./routes/ordersRoute");
const mongoose = require("mongoose");

// Initialize Express
const app = express();

// Use
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/users", routerUsers);
app.use("/api/products", routerProducts);
app.use("/api/orders", routerOrders);

/* Database connect.
Rememeber to insert the connection string of your mongoDB database */
mongoose
  .connect("connection string")
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000);
    console.log("Server started on localhost:3000");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
