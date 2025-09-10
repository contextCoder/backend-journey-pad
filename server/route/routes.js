const APIEndpoint = require('../constants/safeEndpoints').safeEndpoints;

const express = require('express');
const router = express.Router();

const getDateHandle = require('../handler/getDatesHandler');
const saveDateEvents = require('../handler/saveDateEvents');
const getAllDates = require('../handler/getAllDates');
const dateColorsHandler = require('../handler/dateColorsHandler');
const saveDateColorHandler = require('../handler/saveDateColorHandler');

// Example route for user-related operations
router.get(APIEndpoint.HEALTH, (req, res) => {
  res.send('HEALTH endpoint');
});

router.get(APIEndpoint.GETDETAILS, getDateHandle.endpoint );
router.get(APIEndpoint.GETALLDATECOLORS, dateColorsHandler.endpoint);


router.post(APIEndpoint.DATECOLOR, saveDateColorHandler.endpoint);
router.post(APIEndpoint.SAVEDATE, saveDateEvents.saveDateEvents );

module.exports = router;