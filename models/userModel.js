const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  role: {
    type: String,
    required: true,
    default: 'user',
  },
  avatarURL: String,
  token: {
    type: String,
    default: null,
  },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
