const express = require("express");
const app = express();
const courseRouter = require("./routes/courses");
const mongoose = require("mongoose");
require("dotenv").config();

app.use("/api/v1/courses", courseRouter);

mongoose.connect(process.env.DB_CONNECTION_URL, () => {
  console.log("connected to db");
});
app.listen(process.env.PORT, () => {
  console.log("start 3000");
});
