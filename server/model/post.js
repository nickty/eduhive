/** @format */

const mongoose = require('mongoose');

var PostSchema = new mongoose.Schema(
  {
    name: String,
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // comments: [{body:"string", by: mongoose.Schema.Types.ObjectId}],
  },
  { timestamps: true }
);

mongoose.model('Post', PostSchema);
