const crypto = require("crypto");

// Generate a 16-byte (128-bit) random vallue and convert it to a hexadecimal string
const secretKey = crypto.randomBytes(16).toString("hex");
console.log(secretKey);
