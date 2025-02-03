const { Schema, model } = require("mongoose");

const MessageSchema = new Schema(
    {
        senderId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        receiverId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        content: {
            type: String,
        },
        readStatus: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const Message = model("Message", MessageSchema);
module.exports = Message;
