/** @format */

const User = require('../model/user');

exports.createUser = async (req, res) => {
  // console.log(req.body);
  const { username } = req.body;
  if (!username) return res.status(400).send('Name is required');
  let userExist = await User.findOne({ username }).exec();
  if (userExist) return res.status(400).send('Username is taken');

  //register
  const user = await new User({
    username,
  }).save();

  return res.json({ ok: true, user });
};
