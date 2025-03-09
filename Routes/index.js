const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.send(`<h1>This is Taskhubzone developement environment</h1>`);
});

router.use("/api/user", require("./userRoutes"));
router.use("/api/profile", require("./ProfileRoutes"));
router.use("/api/job", require("../Routes/jobRoutes"));

module.exports = router;
