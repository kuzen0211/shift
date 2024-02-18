const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

const User = require('../../models/userModel');

const { ctrlWrapper, HttpError } = require('../../helpers/index');

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, 'Email already in use');
  }

  const createHashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: createHashPassword });

  res.status(201).json({
    email: newUser.email,
    name: newUser.name,
    password: newUser.password,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, 'Email or password invalid');
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw HttpError(401, 'Email or password invalid');
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '100h' });

  res.json({ token });
};

module.exports = { register: ctrlWrapper(register), login: ctrlWrapper(login) };
