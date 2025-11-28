
const DateColor = require('../models/DateColor');

async function endpoint(req, res) {

  const result = await DateColor.find({})

  result.forEach(async (doc) => {
    // update color values in datbase
    console.log(doc.color)
    if (doc.color === 'GREEN') {
      doc.color = 'Good'
      await DateColor.findByIdAndUpdate(doc._id, { color: doc.color });
    }

    if (doc.color === 'RED') {
      doc.color = 'Bad'
      await DateColor.findByIdAndUpdate(doc._id, { color: doc.color });
    }
  });

  res.status(200).json({ message: 'Date updated', data: result });
}

module.exports = {
  endpoint
}