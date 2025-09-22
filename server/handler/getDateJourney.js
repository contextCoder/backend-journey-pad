
const DateEvent = require('../models/DateEvent'); 

async function endpoint(req, res) {
  console.log("=====req.params=====", req.query.date);
  let date = req.query.date; // Expecting date in 'YYYY-MM-DD' format
  if (!date) {
    return res.status(400).json({ message: 'Date parameter is required' });
  }
  date = new Date(date);

  await DateEvent.find({date: date })
    .then((data) => {
      console.log("=====data=====", data);
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error('Error fetching date journey:', err);
      res.status(500).json({ message: 'Error fetching date journey', error: err.message });
    });
}

module.exports = {
  endpoint
};