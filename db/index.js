const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/users")
  .then(() => console.log("Connected to  MongoDB"))
  .catch((err) => console.log("Error to connecting  with MongoDB", err));