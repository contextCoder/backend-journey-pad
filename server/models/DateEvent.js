const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dateEventSchema = new Schema({
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
  description: { 
    type: String,
    required: true
  },
  eventType: { 
    type: String,
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
  },
  color: {
    type: String,
    default: 'null'
  },
});

const DateEvent = mongoose.model('DateEvent', dateEventSchema);

module.exports = DateEvent;
