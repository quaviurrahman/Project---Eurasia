import mongoose, { Schema } from "mongoose"

const productPriceTypes = new mongoose.Schema({
  productPriceTypeName: { type: String, required: true},
  createdDate: { type: Date, default: Date.now },
});

export default mongoose.model("productPriceTypes", productPriceTypes)