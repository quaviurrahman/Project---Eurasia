import mongoose, { Schema } from "mongoose"

const changeLogs = new mongoose.Schema({
  ID: { type: mongoose.Schema.Types.ObjectId, ref:'products'},
  IDtype: { type: String, required: true},
  prevValue: { type: mongoose.Schema.Types.Mixed, required: true },
  newValue: { type: mongoose.Schema.Types.Mixed, required: true  },
  eventLogDesc: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
});

export default mongoose.model("changeLogs", changeLogs)