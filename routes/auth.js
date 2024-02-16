const express = require('express');
const router = express.Router();
const { registerValidator } = require('../utils/index');
const { validation } = require('../middlewares/validation');
const ctrl = require('../controllers/auth/auth');

router.post('/register', validation(registerValidator), ctrl.register);

module.exports = router;
