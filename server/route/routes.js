const APIEndpoint = require('../constants/safeEndpoints').safeEndpoints;

const express = require('express');
const router = express.Router();

const updateDate = require('../handler/updateDate.js');
const getAllDates = require('../handler/getAllDates');
const dateColorsHandler = require('../handler/dateColorsHandler');
const saveDateColorHandler = require('../handler/saveDateColorHandler');

// Example route for user-related operations
router.get(APIEndpoint.HEALTH, (req, res) => {
  res.send('HEALTH endpoint');
});

router.get(APIEndpoint.GETALLDATECOLORS, dateColorsHandler.endpoint);


router.post(APIEndpoint.DATECOLOR, saveDateColorHandler.endpoint);

router.post(APIEndpoint.UPDATEDATE, updateDate.endpoint );

module.exports = router;