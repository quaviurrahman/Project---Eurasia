const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  customerName : { type: String, required: true },
  customerMobile : { type: String, required: true},
  customerDOB : { type: Date, required: false},
  customerGender : {type: String, required: false},
  customerAddress : { type: String, required: false},
  //topicId: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
  createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('customers', postSchema);