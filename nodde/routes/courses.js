const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();

//creating routes
//getall
router.get("/", (req, res) => {
  res.send("courses are science commerce HM");
});

//get one

module.exports = router;
