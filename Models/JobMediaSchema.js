const { Schema, model } = require("mongoose");

const JobMediaSchema = new Schema(
    {
        jobId: {
            type: Schema.Types.ObjectId,
            ref: "Job",
            required: true,
        },
        filePath: {
            type: String,
            required: true,
        },
        fileType: {
            type: String,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

const JobMedia = model("JobMedia", JobMediaSchema);
module.exports = JobMedia;
