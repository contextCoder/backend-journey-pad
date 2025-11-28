const APIEndpoint = require('../constants/safeEndpoints').safeEndpoints;

const express = require('express');
const router = express.Router();

const updateDate = require('../handler/updateDateEvents.js');
const getAllDates = require('../handler/getAllDates');
const dateColorsHandler = require('../handler/dateColorsHandler');
const saveDateColorHandler = require('../handler/saveDateColorHandler');
const getDateEndpoint = require('../handler/getDate.js')
const deleteDateUpdates = require('../handler/deleteDateUpdates.js');

// Example route for user-related operations
router.get(APIEndpoint.HEALTH, (req, res) => {
  res.send('HEALTH endpoint');
});

router.get(APIEndpoint.GETALLDATECOLORS, dateColorsHandler.endpoint);
router.get(APIEndpoint.GETALLDATES, getAllDates.getAllDates);
router.get(APIEndpoint.GETDATE, getDateEndpoint.endpoint);

router.post(APIEndpoint.DATECOLOR, saveDateColorHandler.endpoint);
router.post(APIEndpoint.UPDATEDATE, updateDate.endpoint );

router.post(APIEndpoint.MIGRATE, deleteDateUpdates.endpoint );

module.exports = router;