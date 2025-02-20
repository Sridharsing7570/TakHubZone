require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./Config/db");

const { swaggerDocs, swaggerUi } = require("./docs/swaggerDocs");
const app = express();
// const db = require("./Config/db");

connectDB();

app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
  })
);

app.use("/api", require("./Routes/index"));

app.get("/", (req, res) => {
  return res.send(`<h1>This is Taskhubzone developement environment</h1>`);
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
const PORT = 8001;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
