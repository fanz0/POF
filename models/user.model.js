// Module imports
const mongoose = require("mongoose");

// Schema creation
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Inserisci il tuo nome"],
  },

  surname: {
    type: String,
    require: [true, "Inserisci il tuo cognome"],
  },

  email: {
    type: String,
    require: [true, "Inserisci la tua email"],
  },
});

// Module creation
const User = mongoose.model("User", UserSchema);

module.exports = User;
