const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  productName : { type: String, required: true },
  productLabelName : { type: String, required: true},
  productShortCode : { type: String, required: true},
  productImage : { type: Blob, required: false},
  productDescription : { type: String, required: false},
  productStatus : { type: String, required: true},
  productPacking : { type: String, required: true}, //single, pack
  productOuter : { type: Number, required: false},
  productNetWeight: { type: Number, required: false},
  productGrossWeight: { type: Number, required: false},
  productUnitTypeID : { type: mongoose.Schema.Types.ObjectId, ref: 'productUnitType' },
  productSupplierID : {type: mongoose.Schema.Types.ObjectId, ref: 'suppliers'},
  createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('products', postSchema);