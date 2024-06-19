const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  productID: { type: mongoose.Schema.Types.ObjectId, ref: 'products' },
  soh : { type: Number, required: true },
  createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('productInventory', postSchema);