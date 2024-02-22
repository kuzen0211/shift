const { Schema, model } = require('mongoose');
const handleMongooseError = require('../helpers/handleMongooseError');

const shiftSchema = new Schema(
  {
    work: {
      type: String,
      required: true,
    },
    goal_one: {
      type: String,
      required: true,
    },
    goal_two: {
      type: String,
      required: true,
    },
    goal_three: {
      type: String,
      required: false,
    },
  },
  { versionKey: false }
);

shiftSchema.post('save', handleMongooseError);
const Shift = model('shift', shiftSchema);

module.exports = Shift;
