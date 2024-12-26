const express = require("express");
const controller = require("../Controllers/firstController");
const router = express.Router();

router.use("/auth", require("../Routes/googleAuth"));

module.exports = router;
