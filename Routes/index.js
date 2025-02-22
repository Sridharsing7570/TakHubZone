const express = require("express");
const router = express.Router();

app.get("/", (req, res) => {
  return res.send(`<h1>This is Taskhubzone developement environment</h1>`);
});

router.use("/api/user", require("./userRoutes"));

module.exports = router;
