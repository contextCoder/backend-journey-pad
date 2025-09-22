const mongoose = require("mongoose");
const config = require("config");
const database = config.get("database");
const url = process.env.DATABASE_URL
mongoose.connect(url)
.then(() => console.log("MongoDB connected successfully"))
.catch(err => {
  console.error("MongoDB connection error:", err);
  process.exit(1);
});

module.exports = mongoose;
