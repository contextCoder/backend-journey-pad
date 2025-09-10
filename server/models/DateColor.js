const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DateColor = new Schema({
  date: {
    type: Date,
    required: true,
  },
  color: {
    type: String,
    default: 'null'
  },
});

const DateEvent = mongoose.model('dateColor', DateColor);

module.exports = DateEvent;
