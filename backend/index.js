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

app.post("/login", async (req, res) => {
  const user1 = await User.findOne(req.body).select("-password");
  if (req.body.password && req.body.email) {
    if (user1) {
      res.send(user1);
    } else {
      res.send({ Result: "No user found" });
    }
  } else {
    res.send({ Result: "No user found" });
  }
});

app.listen(5000);
