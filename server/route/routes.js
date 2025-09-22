const APIEndpoint = require('../constants/safeEndpoints').safeEndpoints;

const express = require('express');
const router = express.Router();

const getDateHandle = require('../handler/getDateJourney');
const saveDateEvents = require('../handler/saveActivities');
const getAllDates = require('../handler/getAllDates');
const dateColorsHandler = require('../handler/dateColorsHandler');
const saveDateColorHandler = require('../handler/saveDateColorHandler');
const deleteActivity = require('../handler/deleteActivity');

// Example route for user-related operations
router.get(APIEndpoint.HEALTH, (req, res) => {
  res.send('HEALTH endpoint');
});

router.get(APIEndpoint.GETDATEJOURNEY, getDateHandle.endpoint );
router.get(APIEndpoint.GETALLDATECOLORS, dateColorsHandler.endpoint);


router.post(APIEndpoint.DATECOLOR, saveDateColorHandler.endpoint);
router.post(APIEndpoint.SAVEACTIVITIES, saveDateEvents.saveDateEvents );

router.delete(APIEndpoint.DELETEACTIVITY, deleteActivity.deleteActivity);

module.exports = router;