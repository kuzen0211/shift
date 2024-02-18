const express = require('express');
const router = express.Router();
const { registerValidator, loginValidator } = require('../utils/index');
const { validation } = require('../middlewares/validation');
const ctrl = require('../controllers/auth/auth');

// signup
router.post('/register', validation(registerValidator), ctrl.register);

// signin
router.post('/login', validation(loginValidator), ctrl.login);

module.exports = router;
