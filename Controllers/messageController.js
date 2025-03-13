const User = require("../Models/UserSchema");
const logger = require("../Config/logger");
const Message = require("../Models/MessageSchema");

exports.handleSendmessage = async (req, res) => {
  try {
    const { senderId, receiverId, content } = req.body;

    if (!senderId || !receiverId || !content) {
      return res
        .status(400)
        .json({ message: "Please provided all required fields" });
    }

    // Check if the senderId and receiverId are the same
    if (senderId === receiverId) {
      return res
        .status(400)
        .json({ message: "You can't send a message to yourself" });
    }
    // Check if the senderId and receiverId are valid

    const [sender, receiver] = await Promise.all([
      User.findById(senderId),
      User.findById(receiverId),
    ]);

    if (!sender || !receiver) {
      return res
        .status(400)
        .json({ message: "Invalid senderId or receiverId" });
    }

    const newMessage = new Message({
      participants: senderId,
      sentBy: receiverId,
      content,
    });

    await newMessage.save();

    return res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    logger.error(`${error} during sending message`);
    return res.status(500).json({ message: "Please try again later" });
  }
};

exports.handleGetMessages = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;

    if (!senderId || !receiverId) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    // Check if the senderId and receiverId are the same
    if (senderId === receiverId) {
      return res
        .status(400)
        .json({ message: "You can't get messages from yourself" });
    }

    const message = await Message.find({
      participants: { $all: [senderId, receiverId] },
      deletedFor: { $ne: senderId },
    });

    return res.status(200).json({ message });
  } catch (error) {
    logger.error(`${error} during getting messages`);
    return res.status(500).json({ message: "Please try again later" });
  }
};

exports.handleReadmessage = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;

    if (!senderId || !receiverId) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    // Check if the senderId and receiverId are the same
    if (senderId === receiverId) {
      return res
        .status(400)
        .json({ message: "You can't read messages from yourself" });
    }

    const data = await Message.updateMany(
      {
        participants: { $all: [senderId, receiverId] },
        sentBy: receiverId,
      },
      { readStatus: true }
    );

    return res
      .status(200)
      .json({ message: "Messages read successfully", data });
  } catch (error) {
    logger.error(`${error} during reading messages`);
    return res.status(500).json({ message: "Please try again later" });
  }
};

exports.handleDeleteMessage = async (req, res) => {
  try {
    const { userId, chartPatnerid, deleteForboth } = req.body;

    if (!userId || !chartPatnerid) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    // Check if the senderId and receiverId are the same
    if (deleteForboth) {
      const data = await Message.deleteMany({
        participants: { $all: [userId, chartPatnerid] },
        sentBy: chartPatnerid,
      });

      return res
        .status(200)
        .json({ message: "Messages deleted successfully", data });
    }

    // Soft delete the message for one side only

    await Message.updateMany(
      {
        participants: { $all: [userId, chartPatnerid] },
      },
      { $addToSet: { deletedFor: userId } }
    );

    return res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    logger.error(`${error} during deleting messages`);
    return res.status(500).json({ message: "Please try again later" });
  }
};
