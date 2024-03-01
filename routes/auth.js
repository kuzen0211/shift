const express = require('express');
const router = express.Router();
const { registerValidator, loginValidator } = require('../utils/index');
const { validation, authenticate } = require('../middlewares');
const ctrl = require('../controllers/auth/auth');

// signup
router.post('/register', validation(registerValidator), ctrl.register);

// signin
router.post('/login', validation(loginValidator), ctrl.login);

//current
router.get('/current', authenticate, ctrl.getCurrent);

//logout
router.post('/logout', authenticate, ctrl.logout);

module.exports = router;
