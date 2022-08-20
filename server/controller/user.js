/** @format */

const User = require('../model/user');

exports.createUser = async (req, res) => {
  console.log(req.body.data);
  const { username } = req.body;
  if (!username)
    return res.status(400).send({ ok: false, message: 'Name is required' });
  let userExist = await User.findOne({ username }).exec();
  if (userExist)
    return res.status(400).send({ ok: false, message: 'Username is taken' });

  //register
  const user = await new User({
    username,
  }).save();

  return res.json({ ok: true, user });
};
