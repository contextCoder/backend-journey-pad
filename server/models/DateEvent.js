const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dateEventSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  id: {
    type: String
  },
  description: {
    type: String,
    default: '',
  },
  time: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: 'No Title',
  },
});

const DateEvent = mongoose.model('DateEvent', dateEventSchema);

module.exports = DateEvent;
