const DateEvent = require('../models/DateEvent');

async function getAllDates(req, res) {
  console.log('req----',req.query);
  const {month, year } = req.query;
  const details = await DateEvent.find({month: month, year:year });
  console.log("==details===",details);
  res.status(200).json(details);
}

module.exports = {
  getAllDates
}