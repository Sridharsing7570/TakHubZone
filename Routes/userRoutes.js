const express = require("express");
const router = express.Router();

const userController = require("../Controllers/userController");

router.post("/register", userController.registerUser);
router.post('/login',)
router.get('/profile/:id')
router.put('/profile/:id')
router.delete("/:id")
router.get("")

module.exports = router;
