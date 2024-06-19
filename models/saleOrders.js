const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true},
  customerID: { type: mongoose.Schema.Types.ObjectId, ref: 'customers'},
  totalOrderPrice: { type: Number, required: true},
  totalOrderCost: { type: Number, required: true},
  saleCartID: { type: mongoose.Schema.Types.ObjectId, ref: 'salesCart'},  
  createdDate: { type: Date, default: Date.now },
  orderClosedAt: { type: Date, required: false},
});

module.exports = mongoose.model('saleOrders', postSchema);