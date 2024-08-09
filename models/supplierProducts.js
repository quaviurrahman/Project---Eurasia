import mongoose, { Mongoose, Schema } from "mongoose"
import productPriceTypes from "./productPriceTypes";

const supplierProducts = new mongoose.Schema({
  supplierID: { type: mongoose.Schema.Types.ObjectId, ref:'suppliers'},
  supplierProductCode: { type: String, required:true},
  productID: {type: mongoose.Schema.Types.ObjectId, ref:'products'},
  productPriceTypeID: {type: mongoose.Schema.Types.ObjectId, ref: 'productPriceTypes'},
  productUnitTypeID: {type: mongoose.Schema.Types.ObjectId, ref:'productUnitType'},
  unitPrice: {type: Number, required: false},
  createdDate: { type: Date, default: Date.now },
});

export default mongoose.model("supplierproducts", supplierProducts)