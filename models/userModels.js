const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
    name :String,   //name of the user //email id of the user
    password:String    //password for authentication
    },
    {
      timestamps: true,
    }
  );
  
  const User = mongoose.model("users", userSchema);
  
  module.exports = User;