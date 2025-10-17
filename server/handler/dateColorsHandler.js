
const DateColor = require('../models/DateColor');

async function endpoint(req, res) {

  const year = parseInt(req.query.year);
  const month = parseInt(req.query.month);
  const firstDay = new Date(year, month, 1);       // first day of month
  const lastDay  = new Date(year, month + 1, 0);
  const dates = []

// Sunday-first weekday names
const weekdayNames = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

const totalDays = lastDay.getDate();

// JS getDay(): 0=Sunday, 1=Monday, ..., 6=Saturday
const firstDayIndex = firstDay.getDay(); // no need to adjust for Sunday-first
const numberOfWeeks = Math.ceil((firstDayIndex + totalDays) / 7);

// Prepare structure: for each weekday, an array of week slots initialized to null
const weekdays = weekdayNames.map(name => ({ name, days: Array(numberOfWeeks).fill(null) }));

// Fill days into the correct weekday/week slot
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

// Transform to the requested array-of-objects shape: [{sunday: [...]}, {monday: [...]}, ...]
for (const w of weekdays) {
  dates.push({ [w.name]: w.days });
}

console.log(dates);


  // Query all dates within that month
  const colorDetails = await DateColor.find({ month: '9', year: '2025' })

  const colorMap = assignColorsToDates(dates, colorDetails)

  console.log("====colorMap====",colorMap)



  res.status(200).json(colorMap)
}

function assignColorsToDates(datesArray, colorDetails) {
  // Step 1: Create a lookup map from Mongo data
  const colorMap = {};
  colorDetails.forEach(item => {
    colorMap[item.date] = item.color; // e.g., colorMap['1'] = 'GREEN'
  });

  // Step 2: Map colors into the dates array
  const updatedDates = datesArray.map(dayObj => {
    const dayName = Object.keys(dayObj)[0];
    const dayData = dayObj[dayName];

    const updatedDayData = dayData.map(dateItem => {
      if (!dateItem) return null; // empty cell

      const dateKey = Object.keys(dateItem)[0];

      // Assign Mongo color if exists, otherwise keep existing
      const mongoColor = colorMap[dateKey] || dateItem[dateKey].color || null;

      return {
        [dateKey]: {
          ...dateItem[dateKey],
          color: mongoColor
        }
      };
    });

    return { [dayName]: updatedDayData };
  });

  return updatedDates;
}


module.exports = {
  endpoint
}