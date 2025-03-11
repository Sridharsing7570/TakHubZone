const express = require("express");
const profileContoller = require("../Controllers/profileContoller");
const router = express.Router();

router.put("/profile/:id", profileContoller.updateProfile);

module.exports = router;
