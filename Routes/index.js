const express = require("express");
const controller = require("../Controllers/firstController");
const router = express.Router();

router.use("/", controller.firstController);

module.exports = router;
