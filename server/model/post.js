/** @format */

const mongoose = require('mongoose');

var PostSchema = new mongoose.Schema(
  {
    post: {
      type: String,
      maxlength: 120,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    // comments: [{body:"string", by: mongoose.Schema.Types.ObjectId}],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
