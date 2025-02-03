const { Schema, model } = require("mongoose");

// PaymentSchema
const PaymentSchema = new Schema(
    {
        payerId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        payeeId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        jobId: {
            type: Schema.Types.ObjectId,
            ref: "Job",
        },
        amount: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            enum: ["pending", "completed", "failed"],
            default: "pending",
        },
        transactionDate: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

const Payment = model("Payment", PaymentSchema);
module.exports = Payment;
