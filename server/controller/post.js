/** @format */
const Post = require('../model/post');

exports.createPost = async (req, res) => {
  //create new post
  console.log(req.body);
  if (req.body.post.length > 120)
    return res
      .status(400)
      .send('Post should not exceed more than 120 characters');
  const post = await new Post(req.body).save();

  return res.json({ ok: true, post });
};
