const { Schema, model } = require("mongoose");

// Job Application/ Bid Schema
const ApplicationSchema = new Schema({
  jobId: {
    type: Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
  workerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  proposal: {
    type: {
      String,
    },
  },

  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});

const Application = model("Application", ApplicationSchema);

module.exports = Application;
