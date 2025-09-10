
const app = require('./app');
const mongoose = require('./mongoConnection');
const config = require('config');

const port = config.get('app.port');
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});