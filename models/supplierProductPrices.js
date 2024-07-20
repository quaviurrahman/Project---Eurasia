import mongoose, { Mongoose, Schema } from "mongoose"
import productPriceTypes from "./productPriceTypes";

const supplierProductPrices = new mongoose.Schema({
  supplierID: { type: mongoose.Schema.Types.ObjectId, ref:'suppliers'},
  productUnitTypeID: {type: mongoose.Schema.Types.ObjectId, ref:'productUnitType'},
  productPriceTypeID: {type: mongoose.Schema.Types.ObjectId, ref: 'productPriceTypes'},
  createdDate: { type: Date, default: Date.now },
  unitPrice: { type: Number, required: false}
})
export default mongoose.model("supplierProductPrices", supplierProductPrices)