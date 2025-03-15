const { Logger } = require("winston");
const Notification = require("../Models/NotificationSchema");
const logger = require("../Config/logger");

// Create notifications
exports.createNotification = async (req, res) => {
  const { userId, type, message } = req.body;
  try {
    const notification = new Notification({ userId, type, message });
    await notification.save();

    return res.status(201).json({
      success: true,
      message: "Notification created successfully",
      notification,
    });
  } catch (error) {
    logger.error(`${error} got during create notifications`);
    return res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
};
