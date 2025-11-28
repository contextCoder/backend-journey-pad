
const DateColor = require('../models/DateColor');

async function endpoint(req, res) {
  const body = req.body;

  const getDetails = await DateColor.findOne({ date: req.body.date });
  if (!getDetails) {
    try {
      const dateColorModel = new DateColor(body)
      await dateColorModel.save();
      res.status(200).json({ message: 'Date Saved successfully' });
      return;
    } catch (err) {
      console.log('Error saving Date', err.message)
    }
  }

  try {
    await DateColor.findOneAndUpdate(
      { date: req.body.date },
      { color: req.body.color },
      { new: true }
    )

    res.status(200).send({ message: 'Date Updated successfully' })
  } catch (err) {
    console.log('Error updating date', err.message);
  }
}

module.exports = {
  endpoint
}