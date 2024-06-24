import mongoose, { Schema } from "mongoose"

const changeLogs = new mongoose.Schema({
  ID: { type: mongoose.Schema.Types.ObjectId, ref:'products'},
  IDtype: { type: String, required: true},
  prevValue: { $type: ["double","int","array","string"] },
  newValue: { $type: ["double","int","array","string"] },
  eventLogDesc: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
});

export default mongoose.model("changeLogs", changeLogs)