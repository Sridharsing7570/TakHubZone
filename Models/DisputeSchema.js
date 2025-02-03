const { Schema, model } = require("mongoose");

// DisputeSchema
const DisputeSchema = new Schema(
    {
        paymentId: {
            type: Schema.Types.ObjectId,
            ref: "Payment",
            required: true,
        },
        raisedBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        issueDescription: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["open", "resolved", "closed"],
            default: "open",
        },
    },
    { timestamps: true }
);

module.exports = model("Dispute", DisputeSchema);
