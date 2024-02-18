const Joi = require('joi');
const userRolesEnum = require('../constants/userRolesEnum');

const PASSWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@$!%*?&])[A-Za-z\d\-_@$!%*?&]{8,}$/;

exports.registerValidator = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().regex(PASSWD_REGEX).required(),
  role: Joi.string().valid(...Object.values(userRolesEnum)),
});

exports.loginValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

exports.emailValidator = Joi.object({
  email: Joi.string().email().required(),
});
