const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/UserSchema");
const logger = require("../Config/logger");
const env = require("../Config/environment");
const { createProfile, deleteProfile } = require("./profileContoller");
const secretKey = process.env.JWTsecret;

// register user
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, phone, address, userType, profilePicture } =
      req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      userType,
      profilePicture,
      status: "active", // Default status
    });
    await newUser.save();

    let userWithoutPassword = newUser.toObject();
    delete userWithoutPassword.password;

    const token = jwt.sign(
      { userId: newUser._id, userType: newUser.userType },
      secretKey,
      { expiresIn: "1d" }
    );

    createProfile(newUser._id);

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: userWithoutPassword,
    });
  } catch (error) {
    logger.error(`${error} during register user`);
    return res
      .status(500)
      .json({ message: "Internal Server error", error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    let userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    const token = jwt.sign(
      { userId: user._id, userType: user.userType },
      secretKey,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Successfully login",
      token: token,
      user: userWithoutPassword,
    });
  } catch (error) {
    logger.error(`${error} during login`);
    res.status(500).json({ error: error, message: error.message });
  }
};

// Get User Profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User fetched", user });
  } catch (error) {
    logger.error(`${error} during get user profile`);
    res.status(500).json({ message: "Internal server error", error: error });
  }
};

// Update User Profile
exports.updateUserProfile = async (req, res) => {
  try {
    const updateData = { ...req.body };
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });

    return res
      .status(200)
      .json({ message: "User update successfully", user: updatedUser });
  } catch (error) {
    logger.error(`${error} during update user`);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete({ userId });

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    deleteProfile(userId);

    return res.status(201).json({ message: "user deleted successfully" });
  } catch (error) {
    logger.error(`${error} usring deleted user`);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) return res.status(404).json({ message: "There is no user" });

    return res.status(200).json({ message: "User found successfully" });
  } catch (error) {
    logger.error(`${error} during fetch user`);
    return res
      .status(500)
      .json({ message: "Internal Server error", error: error });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const resetToken = jwt.sign({ id: user._id }, secretKey, {
      expiresIn: "1h",
    });

    const resetLink = `${env.clientURL}/reset-password/${resetToken}`;
  } catch (error) {}
};
