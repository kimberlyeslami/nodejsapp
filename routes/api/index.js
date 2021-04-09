var express = require("express");

var router = express.Router();

// add in error and info

router.use("/users", require("./users"));


module.exports = router;