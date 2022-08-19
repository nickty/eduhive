/** @format */

const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    // followers: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //   },
    // ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        default: '',
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
