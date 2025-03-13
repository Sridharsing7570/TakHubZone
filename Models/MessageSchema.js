const { Schema, model } = require("mongoose");

const MessageSchema = new Schema(
  {
    participants: [
      { type: Schema.Types.ObjectId, ref: "User", required: true },
    ],
    sentBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
    readStatus: { type: Boolean, default: false },
    deletedFor: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Message = model("Message", MessageSchema);
module.exports = Message;
