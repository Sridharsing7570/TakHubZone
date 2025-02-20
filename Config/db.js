const mongoose = require("mongoose");

const MongoDbUrl = process.env.MONGO_URL; // Load from .env
const dbName = "taskhubzone"; // Define database name

async function connectDB() {
  try {
    await mongoose.connect(MongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName, // <-- This ensures data is stored in taskhubzone
    });
    console.log(`✅ Database (${dbName}) connected successfully`);
  } catch (error) {
    console.error("❌ Error connecting to database:", error);
    process.exit(1); // Exit if connection fails
  }
}

module.exports = connectDB;
