const DateEvent = require('../models/DateEvent');

async function saveDateEvents(req, res) {
  try {
    console.log("Request Body:", req.body);
    const newEvent = new DateEvent(req.body);
    await newEvent.save();

    const getDateJourney = await DateEvent.find({ date: req.body.date });
    console.log("All Events on this date:", getDateJourney);
    res.status(201).json(getDateJourney);
  } catch (error) {
    console.error('Error saving date event:', error);
    res.status(500).json({ message: 'Error saving date event', error });
  }
}

module.exports = {
  saveDateEvents
};