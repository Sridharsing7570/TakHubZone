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
      senderId,
      receiverId,
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

    const messages = await Message.find({
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    });

    return res.status(200).json({ messages });
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

    const [sender, receiver] = await Promise.all([
      User.findById(senderId),
      User.findById(receiverId),
    ]);

    if (!sender || !receiver) {
      return res
        .status(400)
        .json({ message: "Invalid senderId or receiverId" });
    }

    const data = await Message.updateMany(
      { senderId: receiverId, receiverId: senderId },
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
