const mongoose = require("mongoose");
const config = require("config");
const database = config.get("database");

mongoose.connect(`${database.uri}/${database.name}`)
.then(() => console.log("MongoDB connected"))
.catch(err => {
  console.error("MongoDB connection error:", err);
  process.exit(1);
});

module.exports = mongoose;
