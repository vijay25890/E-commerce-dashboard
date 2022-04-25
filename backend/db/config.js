const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://vijay:vijay@product.dh4ki.mongodb.net/Users?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connect db");
  })
  .catch(() => {
    console.log("fail");
  });
