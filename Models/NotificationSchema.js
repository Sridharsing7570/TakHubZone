const { Schema, model } = require("mongoose");

const NotificationSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        type: {
            type: String,
        },
        message: {
            type: String,
        },
        isRead: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: false }
);

const Notification = model("Notification", NotificationSchema);
module.exports = Notification;
