const bcrypt = require("bcrypt");
const User = require("../Models/UserSchema");

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
