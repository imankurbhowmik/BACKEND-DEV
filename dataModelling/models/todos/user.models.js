import mongoose, { mongo } from "mongoose"

const userSchema = new mongoose.Schema(
  {
    userName : {
      type: String,
      required : true,
      unique : true, 
      lowerCase : true
    },
    email : {
      type: String, 
      required : true,
      unique : true, 
      lowerCase : true
    },
    password : {
      type : String,
      required : true
    }
  }, {timestamps : true}
)

export const User = mongoose.Model("User", userSchema)