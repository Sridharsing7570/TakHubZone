const { Router } = require("express");
const router = Router();
const messageController = require("../Controllers/messageController");

router.post("/send", messageController.handleSendmessage);
router.get("/get", messageController.handleGetMessages);
router.delete("/delete", messageController.handleDeleteMessage);
router.put("/update", messageController.handleReadmessage);

module.exports = router;
