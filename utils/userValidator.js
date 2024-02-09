const Joi = require('joi');
const userRolesEnum = require('../constants/userRolesEnum');

const PASSWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

exports.registerValidator = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid(...Object.values(userRolesEnum)),
});

exports.loginValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().regex(PASSWD_REGEX),
});

exports.emailValidator = Joi.object({
  email: Joi.string().email().required(),
});
