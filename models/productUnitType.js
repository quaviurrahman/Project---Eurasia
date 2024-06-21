import mongoose, { Schema } from "mongoose"


const productUnitType = new mongoose.Schema({
  productUnitTypeName : { type: String, required: true }, //liter, kg, pack, piece, bag, box...
  createdDate: { type: Date, default: Date.now },
});

export default mongoose.model("productUnitType", productUnitType)