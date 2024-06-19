const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  productID: { type: mongoose.Schema.Types.ObjectId, ref:'products'},
  productPriceTypeID: { type: mongoose.Schema.Types.ObjectId, ref:'productPriceTypes'},
  productPriceChangedFrom: { type: Number, required: true},
  productPriceChangedTo: { type: Number, required: true},
  createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('productPriceChangeLog', postSchema);