import mongoose, { Schema } from "mongoose"


const productUnitType = new mongoose.Schema({
  productID: { type: mongoose.Schema.Types.ObjectId, ref:'products'},
  productUnitTypeName : { type: String, required: true }, //liter, kg, pack, piece, bag, box...
  productUnitInnerCount : { type: Number, required: true }, //number of items consisting a single unit
  productUnitNetWeight: { type: Number, required: false},
  productUnitGrossWeight: { type: Number, required: false},
  createdDate: { type: Date  },
});

export default mongoose.model("productUnitType", productUnitType)