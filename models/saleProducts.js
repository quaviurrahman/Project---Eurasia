const mongoose = require('mongoose');
const saleOrders = require('./saleOrders');

const postSchema = new mongoose.Schema({
  saleOrderID: { type: mongoose.Schema.Types.ObjectId, ref: 'saleOrders'},
  addedItems: { type: [{
    productID: { type: mongoose.Schema.Types.ObjectId, ref: 'products'},
    unitQuantity: { type: Number, required: true},
    paymentTerm: { type: String, required: true}, // OnAccount, OffAccount
    netProductPrice: { type: Number, required: false},
  }], required: true},
  createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('salesCart', postSchema);