const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    userType: {
      type: String,
      enum: ["Employer", "Worker", "Contractor"],
      required: true,
    },
    profilePicture: {
      type: String,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "blocked"],
      default: "active",
    },
  },
  { timestamps: true }
);

const User = model(userSchema);
module.exports = User;
