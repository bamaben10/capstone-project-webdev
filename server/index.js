require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const { getLogin, createLogin } = require("./controller");

app.use(express.json());
app.use(cors());

app.get("/api/info", getLogin);
app.posts("/api/info", createLogin);

app.listen(port, () => console.log(`SERVER IS RUNNING ON PORT: ${port}`));
