require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./Config/db");

const { swaggerDocs, swaggerUi } = require("./docs/swaggerDocs");
const environment = require("./Config/environment");
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

app.use("/", require("./Routes/index"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
const PORT = environment.port;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
