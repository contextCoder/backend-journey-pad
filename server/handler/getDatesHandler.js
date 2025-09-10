
const DateEvent = require('../models/DateEvent'); 

function endpoint(req, res) {
  const date = req.query.date; // Expecting date in 'YYYY-MM-DD' format
  if (!date) {
    return res.status(400).json({ message: 'Date query parameter is required' });
  }
  DateEvent.find({ date: new Date(date) }, (err, dateEvents) => {
    if (err) {
      return res.status(500).json({ message: 'Error retrieving date events', error: err });
    }
    console.log('Retrieved date events:', dateEvents);
    res.status(200).json(dateEvents);
  });
}

module.exports = {
  endpoint
};