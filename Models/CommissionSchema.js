const { Schema, model } = require("mongoose");

// CommissionSchema
const CommissionSchema = new Schema(
    {
        paymentId: {
            type: Schema.Types.ObjectId,
            ref: "Payment",
            required: true,
        },
        commissionPercentage: {
            type: Number,
            required: true,
        },
        commissionAmount: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = model("Commission", CommissionSchema);
