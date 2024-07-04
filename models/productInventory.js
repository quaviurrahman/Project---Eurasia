import mongoose, { Schema } from "mongoose"

const productInventory = new mongoose.Schema({
  productID: { type: mongoose.Schema.Types.ObjectId, ref: 'products' },
  soh : { type: Number, required: true },
  createdDate: { type: Date, default: Date.now },
});

export default mongoose.model("productInventory", productInventory)