import mongoose, { Schema } from "mongoose"
import productUnitType from "./productUnitType.js"
import productPriceType from "./productPriceTypes.js"

const productPrices = new mongoose.Schema({
  productID: { type: mongoose.Schema.Types.ObjectId, ref:'products'},
  productPriceTypeID: { type: mongoose.Schema.Types.ObjectId, ref: 'productPricesType'},
  productUnitTypeID: { type: mongoose.Schema.Types.ObjectId, ref:'productUnitType'},
  productPrice: { type: Number, required: true},
  createdDate: { type: Date, default: Date.now },
});

export default mongoose.model("productPrices", productPrices)