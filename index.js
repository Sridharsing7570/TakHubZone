const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
  })
);

app.get("/", (req, res) => {
  return res.send(`<h1>This is Taskhubzone developement environment</h1>`);
});
const PORT = 8001;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
