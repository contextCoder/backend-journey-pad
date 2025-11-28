
const DateColor = require('../models/DateColor');

async function endpoint(req, res) {
  try {
    const year = parseInt(req.query.year);
    const month = parseInt(req.query.month);
    const date = parseInt(req.query.date);

    const details = await DateColor.find({ date: date, month: month + 1, year: year });
    res.status(200).json(details);
  } catch (err) {
    console.log('Error :', err.message);
    res.status(500).json(err.message);
  }
}

module.exports = {
  endpoint
}