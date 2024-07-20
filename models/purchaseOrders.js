import mongoose, { Mongoose, Schema } from "mongoose"

const purchaseOrders = new mongoose.Schema({
  supplierID: { type: mongoose.Schema.Types.ObjectId, ref:'suppliers'},
  status: { type: String, required: true},
  recievedDate: { type: Date, required: false},
  totalOrderAmount: { type: Number, required: false},
  numberOfProducts: { type: Number, required: false},
  createdDate: { type: Date, default: Date.now },
  products: { type: [{
    "productUnitTypeID": {type: mongoose.Schema.Types.ObjectId, ref:'productUnitType'},
    "quantity": {type: Number, required: false},
    "unitPrice": {type: Number, required: false},
    "totalPrice": {type: Number, required: false}
  }],required: false}
});

export default mongoose.model("purchaseOrders", purchaseOrders)