const Shift = require('../../models/shiftModel');

const { ctrlWrapper } = require('../../helpers');

const getAll = async (req, res) => {
  const result = await Shift.find();

  res.json(result);
};

const add = async (req, res) => {
  const result = await Shift.create(req.body);

  res.status(201).json(result);
};

module.exports = { getAll: ctrlWrapper(getAll), add: ctrlWrapper(add) };
