const DateEvent = require('../models/DateEvent');

async function saveDateEvents(req, res) {
  try {
    console.log("Request Body:", req.body);
    const newEvent = new DateEvent(req.body);
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    console.error('Error saving date event:', error);
    res.status(500).json({ message: 'Error saving date event', error });
  }
}

module.exports = {
  saveDateEvents
};