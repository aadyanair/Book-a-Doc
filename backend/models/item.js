const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  speciality: String,
  location: String,
  doctors: String,
});

module.exports = mongoose.model("Item", itemSchema);
