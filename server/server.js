
const app = require('./app');
require('dotenv').config();
const mongoose = require('./mongoConnection');
const config = require('config');

const port = config.get('app.port');
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});