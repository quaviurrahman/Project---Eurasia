import mongoose, { Schema } from "mongoose"

const purchaseOrders = new mongoose.Schema({
  supplierID: { type: mongoose.Schema.Types.ObjectId, ref:'suppliers'},
  status: { type: String, required: true},
  recievedDate: { type: Date, required: false},
  totalOrderAmount: { type: Number, required: false},
  numberOfProducts: { type: Number, required: false},
  createdDate: { type: Date, default: Date.now },
});

export default mongoose.model("purchaseOrders", purchaseOrders)