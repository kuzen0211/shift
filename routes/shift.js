const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/shift/shift');

//getAll
router.get('/', ctrl.getAll);

//add
router.post('/', ctrl.add);

module.exports = router;
