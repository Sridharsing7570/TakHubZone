const { Router } = require("express");
const router = Router();
const notificationController = require("../Controllers/notificationController");

router.post("/create", notificationController.createNotification);
router.get("/get/:userId", notificationController.getNotifications);
router.put("/update/:id", notificationController.updateNotification);
router.delete("/clear/:id", notificationController.clearNotifications);

module.exports = router;
