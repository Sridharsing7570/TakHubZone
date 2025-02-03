const { Schema, model } = require("mongoose");

// Category schema
const CategorySchema = new Schema(
    {
        name: { type: String, required: true },
        description: { Type: String },
    },
    { timestamps: true }
);

module.exports = model("Category", CategorySchema);
