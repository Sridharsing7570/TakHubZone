const { Schema, model } = require("mongoose");

//ReviewSchema
const ReviewSchema = new Schema(
    {
        reviewerId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        reviewedUserId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true,
        },
        reviewText: {
            type: String,
        },
    },
    { timestamps: true }
);

const Review = model("Review", ReviewSchema);

module.exports = Review;
