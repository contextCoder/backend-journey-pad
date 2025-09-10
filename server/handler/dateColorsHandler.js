
const DateColor = require('../models/DateColor');

async function endpoint(req, res) {
  const {month, year} = req.query;
  console.log("====req.query====",req.query);
   const startDate = new Date(year, month - 1, 1); 
    const endDate = new Date(year, month, 1); // next month start

    // Query all dates within that month
    const colorDetails = await DateColor.find({
      date: { $gte: startDate, $lt: endDate }
    }).select("date color -_id");

    console.log("====colorDetails====",colorDetails)

    res.status(200).json(colorDetails)
}

module.exports = {
  endpoint
}