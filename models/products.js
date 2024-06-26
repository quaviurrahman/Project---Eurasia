import mongoose, { Schema } from "mongoose"

const product = new mongoose.Schema({
  productName : { type: String, required: true },
  productLabelName : { type: String, required: true},
  productShortCode : { type: String, required: true},
  productImage : { type: String, required: false},
  productDescription : { type: String, required: false},
  productStatus : { type: String, required: true},
  createdDate: { type: Date },
});

//module.exports = mongoose.model('products', postSchema);

export default mongoose.model("products", product)