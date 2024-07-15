const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  speciality: {
    type: String,
  },
  location: {
    type: String,
  },
  name: {
    type: String,
  },
});

module.exports = mongoose.model("Item", itemSchema);
