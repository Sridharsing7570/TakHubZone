const { Logger } = require("winston");
const Notification = require("../Models/NotificationSchema");
const logger = require("../Config/logger");

// Create notifications
exports.createNotification = async (req, res) => {
  const { userId, type, message } = req.body;
  try {
    const notification = new Notification({ userId: userId, type, message });
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

// Read notifications
exports.getNotifications = async (req, res) => {
  const { userId } = req.params;
  try {
    const notifications = await Notification.find({ userId: userId }).sort({
      createdAt: -1,
    });

    return res.status(200).json({ success: true, notifications });
  } catch (error) {
    logger.error(`${error} during get notifications`);
    return res.status(500).json({
      success: false,
      message: `Internal server error. Please try again later`,
      error,
    });
  }
};

exports.updateNotification = async (req, res) => {
  const { id } = req.params;
  const { isRead } = req.body;
  try {
    const notification = await Notification.findByIdAndUpdate(
      id,
      { isRead },
      { new: true }
    );

    if (!notification) {
      return res
        .status(404)
        .json({ success: false, message: "Notification not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Notification update successfully" });
  } catch (error) {
    logger.error(`${error} to update notifications`);
    return res
      .status(500)
      .json({ success: false, message: "Error updating notiification", error });
  }
};

// Clear old notifications or delete notifications
exports.clearNotifications = async (req, res) => {
  const { id } = req.params;
  try {
    const notification = await Notification.findByIdAndDelete(id);

    if (!notification) {
      return res.status(404).json({ message: "Notication not found" });
    }
    return res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    logger.error(`${error} during clear notifications`);
    return res.status(500).json({
      message: "Internal server error. Please try again later.",
      error,
    });
  }
};
