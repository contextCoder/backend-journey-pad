const DateEvent = require('../models/DateEvent');

async function deleteActivity(req, res) {
  try {
    console.log("Request Body for Deletion:", req.body);
    let { id, date } = req.query;
    if (!id || !date) {
      return res.status(400).json({ message: 'ID and date are required' });
    }

    date = new Date(date);

    const deletedEvent = await DateEvent.findOneAndDelete({ id: id, date: date });
    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    await DateEvent.find({ date: date })
    .then((data) => {
      console.log("=====data=====", data);
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error('Error fetching date journey:', err);
      res.status(500).json({ message: 'Error fetching date journey', error: err.message });
    });

  } catch (err) {
    console.error('Error deleting event:', err);
    res.status(500).json({ message: 'Error deleting event', error: err.message });
  }
}

module.exports = {
  deleteActivity
};