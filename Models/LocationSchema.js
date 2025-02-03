const { Schema, model } = require("mongoose");

// LocationSchema
const LocationSchema = new Schema({
    latitude: { type: Number },
    longitude: { type: Number },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
});

module.exports = model("Location", LocationSchema);
