const express = require("express");
const profileContoller = require("../Controllers/profileContoller");
const router = express();

router.get("/profile/:userId", profileContoller.getProfile);

router.put("/profile/:id", profileContoller.updateProfile);

