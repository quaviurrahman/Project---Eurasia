const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  productLabelNameID : { type: mongoose.Schema.Types.ObjectId, ref: 'labels' },
  productLabelTypeID : { type: mongoose.Schema.Types.ObjectId, ref: 'labelTypes' },
  productID: { type: mongoose.Schema.Types.ObjectId, ref: 'products' },
  createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('productLabels', postSchema);