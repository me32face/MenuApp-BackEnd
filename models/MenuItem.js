const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: String, required: true },
//   imageUrl: { type: String }
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
