import mongoose, { Schema } from "mongoose"
import productUnitType from "./productUnitType.js"
import productPriceType from "./productPriceTypes.js"

const purchaseOrders = new mongoose.Schema({
  supplierID: { type: mongoose.Schema.Types.ObjectId, ref:'suppliers'},
  supplierShortCode: { type: mongoose.Schema.Types.ObjectId, ref: 'productPricesType'},
  createdDate: { type: Date, default: Date.now },
});

export default mongoose.model("purchaseOrders", purchaseOrders)