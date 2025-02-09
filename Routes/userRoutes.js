const express = require("express");
const router = express.Router();

const userController = require("../Controllers/userController");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/profile/:id", userController.getUserProfile);
router.put("/profile/:id", userController.updateUserProfile);
router.delete("/:id", userController.deleteUser);
router.get("/", userController.getAllUsers);

// routes google and facebook auth
router.use("/", require("./googleAuth"));

module.exports = router;
