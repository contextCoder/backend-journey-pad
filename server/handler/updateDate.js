
const DateColor = require('../models/DateColor');

async function endpoint(req, res) {
  console.log("====req.body====",req.body);

  const {date, month, year, color} = req.body

  const newData = {
  date: date,
  month: month,
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