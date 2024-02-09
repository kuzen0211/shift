const express = require('express');
const router = express.Router();
const { registerValidator } = require('../utils/index');
const { validation } = require('../middlewares/validation');
const register = require('../controllers/auth/auth');

router.post('/register', validation(registerValidator), register);

module.exports = router;
