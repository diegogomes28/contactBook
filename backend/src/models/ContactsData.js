const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  read: { type: Boolean, default: false },
  nome: { type: String },
  numero: { type: String },
  favorito: { type: Boolean },
});

module.exports = mongoose.model("contacts", ContactSchema);
