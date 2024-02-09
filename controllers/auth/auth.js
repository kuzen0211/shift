const User = require('../../models/userModel');

const { HttpError, ctrlWrapper } = require('../../helpers/index');

const register = async (req, res) => {
  const newUser = await User.create(req.body);

  res.json({
    email: newUser.email,
    name: newUser.name,
  });
};

module.exports = register;
