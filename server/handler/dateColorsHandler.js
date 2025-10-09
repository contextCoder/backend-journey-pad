
const DateColor = require('../models/DateColor');

async function endpoint(req, res) {
  const {month, year} = req.query;
  console.log("====req.query====",req.query);
  const startDate = new Date(year, month - 1, 1); 
  const endDate = new Date(year, month, 1);

      const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const dates = []

    const weekdayNames = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];

    const totalDays = lastDay.getDate();
    // Convert JS getDay() (0=Sunday) to Monday-first index (0=Monday ... 6=Sunday)
    const firstDayIndex = (firstDay.getDay() + 6) % 7;
    const numberOfWeeks = Math.ceil((firstDayIndex + totalDays) / 7);

    // Prepare structure: for each weekday, an array of week slots initialized to null
    const weekdays = weekdayNames.map(name => ({ name, days: Array(numberOfWeeks).fill(null) }));

    // Fill days into the correct weekday/week slot; put placeholders (null) for missing days
    for (let day = 1; day <= totalDays; day++) {
      const offset = firstDayIndex + (day - 1);
      const weekIndex = Math.floor(offset / 7);
      const weekdayIndex = offset % 7;

      weekdays[weekdayIndex].days[weekIndex] = {
      [day]: {
        events: [],
        color: null
      }
      };
    }

    // Transform to the requested array-of-objects shape: [{monday: [...]}, {tuesday: [...]}, ...]
    for (const w of weekdays) {
      dates.push({ [w.name]: w.days });
    }
    console.log(dates);

  // Query all dates within that month
  const colorDetails = await DateColor.find({
    date: { $gte: startDate, $lt: endDate }
  }).select("date color -_id");

  console.log("====colorDetails====",colorDetails)

  res.status(200).json(dates)
}

module.exports = {
  endpoint
}