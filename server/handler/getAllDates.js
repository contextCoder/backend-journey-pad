const DateColor = require('../models/DateColor');

async function getAllDates(req, res) {
  try {
    console.log('req----',req.query);
    const {month, year } = req.query;

    const startDate = new Date(year, month - 1, 1); 
    const endDate = new Date(year, month, 1);

    const details = await DateColor.find({date: {$gte: startDate, $lt: endDate}});
    console.log("==details===",details);
    res.status(200).json(details);
  } catch (err) {
    console.log('Error :', err.message);
    res.status(500).json(err.message);
  }
}

module.exports = {
  getAllDates
}