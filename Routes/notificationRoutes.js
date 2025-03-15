const { Router } = require("express");
const router = Router();
const notificationController = require("../Controllers/notificationController");

router.post("/create", notificationController.createNotification);
router.get("/get", notificationController.getNotifications);
router.put("/update", notificationController.updateNotification);
router.delete("/clear", notificationController.clearNotifications);

module.exports = router;
