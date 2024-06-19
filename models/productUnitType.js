const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  productUnitTypeName : { type: String, required: true }, //liter, kg, pack, piece, bag, box...
  createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('productUnitType', postSchema);