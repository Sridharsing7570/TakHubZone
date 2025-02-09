const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/UserSchema");
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
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server error", error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, userType: user.userType },
      secretKey,
      { expiresIn: "1d" }
    );

    res
      .status(200)
      .json({ message: "Successfully login", token: token, user: user });
  } catch (error) {
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
    console.error("Error during get user profile");
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
    console.error("error during update user", error);
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

    return res.status(201).json({ message: "user deleted successfully" });
  } catch (error) {
    console.error("error usring deleted user", error);
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
    console.error("error during fetch user", error);
    return res
      .status(500)
      .json({ message: "Internal Server error", error: error });
  }
};
