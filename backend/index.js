const express = require("express");
const User = require("./db/User");
const cors = require("cors");
require("./db/config");
require("./db/User");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  const user = new User(req.body);
  const result = await user.save();
  res.send(result);
});

app.listen(5000);
