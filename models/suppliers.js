import mongoose, { Schema } from "mongoose"
import productUnitType from "./productUnitType.js"
import productPriceType from "./productPriceTypes.js"

const suppliers = new mongoose.Schema({
  supplierName: { type: String, required: true},
  supplierShortCode: { type: String, required: true},
  supplierAddress: { type: String, required: false},
  supplierEmail: {type: String, required: false},
  supplierContactDetails: {type: [{
    contactName: {type: String, required:true},
    contactMobileNo: { type: String, required: true}
  }],required: false},
  createdDate: { type: Date, default: Date.now },
});

export default mongoose.model("suppliers", suppliers)