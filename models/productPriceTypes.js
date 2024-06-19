const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  productPriceTypeName: { type: String, required: true},
  createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('productPriceTypes', postSchema);