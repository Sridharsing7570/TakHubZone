const mongoose = require("mongoose");

const MongoDbUrl = process.env.MONOGO_URL;

async function connectDB() {
    try {
        await mongoose
            .connect(MongoDbUrl)
            .then(() => console.log("dataBase connected successfully"));
    } catch (error) {
        console.error("Error connection with dataBase", error);
    }
}

module.exports = connectDB;
