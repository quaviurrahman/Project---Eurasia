import mongoose, { Schema } from "mongoose"

const productPrices = new mongoose.Schema({
  productID: { type: mongoose.Schema.Types.ObjectId, ref:'products'},
  productPriceType: { type: mongoose.Schema.Types.ObjectId, ref:'productPricesType'},
  productPrice: { type: Number, required: true},
  createdDate: { type: Date, default: Date.now },
});

export default mongoose.model("productPrices", productPrices)