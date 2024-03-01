const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/shift/shift');
const { isValidId, authenticate } = require('../middlewares');

//getAll
router.get('/', authenticate, ctrl.getAll);

//add
router.post('/', authenticate, ctrl.add);

//getById
router.get('/:id', authenticate, isValidId, ctrl.getById);

//updateById
router.put('/:id', authenticate, isValidId, ctrl.updateById);

//deleteById
router.delete('/:id', authenticate, isValidId, ctrl.deleteById);

module.exports = router;
