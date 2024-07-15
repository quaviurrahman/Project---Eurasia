import mongoose, { Mongoose, Schema } from "mongoose"
import productPriceTypes from "./productPriceTypes";

const supplierProductCode = new mongoose.Schema({
  supplierID: { type: mongoose.Schema.Types.ObjectId, ref:'suppliers'},
  productUnitTypeID: {type: mongoose.Schema.Types.ObjectId, ref:'productUnitType'}
  productPriceTypeID: {type: mongoose.Schema.Types.ObjectId, ref: 'productPriceTypes'}
  createdDate: { type: Date, default: Date.now },
  products: { type: [{
    "productUnitTypeID": {type: mongoose.Schema.Types.ObjectId, ref:'productUnitType'},
    "quantity": {type: Number, required: false},
    "unitPrice": {type: Number, required: false},
  }],required: false}
});

export default mongoose.model("supplierproductcode", supplierProductCode)