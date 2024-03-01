const Shift = require('../../models/shiftModel');

const { ctrlWrapper, HttpError } = require('../../helpers');

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Shift.find({ owner }, '-createdAt -updatedAt').populate(
    'owner',
    'name email'
  );
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Shift.findById(id);

  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

const add = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Shift.create({ ...req.body, owner });

  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const { id } = req.params;

  const result = await Shift.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

const deleteById = async (req, res) => {
  const { id } = req.params;

  const result = await Shift.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404);
  }

  res.json({ message: 'Delete success' });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  add: ctrlWrapper(add),
  getById: ctrlWrapper(getById),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
};
