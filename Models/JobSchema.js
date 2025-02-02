const { Schema, model } = require("mongoose");

const JobSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    location: {
      type: Schema.Types.ObjectId,
      ref: "Location",
    },
    paymentDetails: {
      type: String,
    },
    timeRequirements: {
      type: String,
    },
    status: {
      type: String,
      enum: ["open", "in-progress", "completed", "cancelled"],
      default: "open",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Job = model(JobSchema);
module.exports = Job;
