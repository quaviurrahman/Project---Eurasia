const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  productID: { type: mongoose.Schema.Types.ObjectId, ref:'products'},
  productPriceType: { type: mongoose.Schema.Types.ObjectId, ref:'productPricesType'},
  productprice: { type: Number, required: true},
  createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('productPrices', postSchema);