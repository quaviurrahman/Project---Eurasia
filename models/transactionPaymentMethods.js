const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  transactionPaymentMethodName : { type: String, required: true }, //cash, card_manual,card, card_hnp (card holder not present)
  createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('transactionPaymentMethods', postSchema);