const User = require('../../models/userModel');

const { ctrlWrapper, HttpError } = require('../../helpers/index');

const register = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, 'Email already in use');
  }

  const newUser = await User.create(req.body);
  res.status(201).json({
    email: newUser.email,
    name: newUser.name,
    password: newUser.password,
  });
};

module.exports = { register: ctrlWrapper(register) };
