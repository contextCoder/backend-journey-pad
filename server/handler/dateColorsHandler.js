
const DateColor = require('../models/DateColor');

async function endpoint(req, res) {
  console.log("====req.query====",req.query);
  const year = parseInt(req.query.year);
  const month = parseInt(req.query.month);
  const firstDay = new Date(year, month, 1);       // first day of month
  const lastDay  = new Date(year, month + 1, 0);
  const dates = []

const weekdayNames = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

const totalDays = lastDay.getDate();

const firstDayIndex = firstDay.getDay(); // no need to adjust for Sunday-first
const numberOfWeeks = Math.ceil((firstDayIndex + totalDays) / 7);

const weekdays = weekdayNames.map(name => ({ name, days: Array(numberOfWeeks).fill(null) }));

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

for (const w of weekdays) {
  dates.push({ [w.name]: w.days });
}

console.log(dates);


  const colorDetails = await DateColor.find({ month: month+1, year: year });
  const colorMap = assignColorsToDates(dates, colorDetails)
  res.status(200).json(colorMap)
}

function assignColorsToDates(datesArray, colorDetails) {
  const colorMap = {};
  colorDetails.forEach(item => {
    colorMap[item.date] = item.color;
  });

  const updatedDates = datesArray.map(dayObj => {
    const dayName = Object.keys(dayObj)[0];
    const dayData = dayObj[dayName];

    const updatedDayData = dayData.map(dateItem => {
      if (!dateItem) return null;

      const dateKey = Object.keys(dateItem)[0];

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