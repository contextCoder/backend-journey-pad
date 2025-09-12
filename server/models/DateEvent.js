const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dateEventSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  eventsDetails: {
    type: Object,
    default: {
      attendees: [],
      location: ''
    }
  },
  todo: {
    type: Array,
    default: []
  }
});

const DateEvent = mongoose.model('DateEvent', dateEventSchema);

module.exports = DateEvent;
