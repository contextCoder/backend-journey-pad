const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DateColors = new Schema({
  date: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'null'
  },
});

const DateColor = mongoose.model('dateColor', DateColors);

module.exports = DateColor;
