const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  labelName : { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('labels', postSchema);