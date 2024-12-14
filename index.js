const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(
    cors({
        origin: "*",
        methods: "GET,POST,PUT,DELETE",
    })
);

const PORT = 8001;

app.listen(() => console.log(`Server running on http://localhost:${PORT}`));
