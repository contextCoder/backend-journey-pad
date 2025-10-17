
const DateColor = require('../models/DateColor');

async function endpoint(req, res) {
  const date = parseInt(req.body.date);
  const month = req.body.month;
  const year = req.body.year;
  const color = req.body.color;


  const newData = {
  date: date,
  month: month+1,
  year: year,
  color: color
};
  const result = await DateColor.findOneAndUpdate(
  { date: newData.date, month: newData.month, year: newData.year }, // match
  { $set: newData },      // update if exists
  { upsert: true, new: true } // insert if not exists, return new doc
);

console.log('resut', result)
  

  res.status(200).json({message: 'working'})
}

module.exports = {
  endpoint
}