import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "{PATH} is required"],
  },
  password: {
    type: String,
    required: [true, "{PATH} is required"],
  },
  name: {
    type: String,
    required: [true, "{PATH} is required"],
  },
});

export const User = mongoose.model("User", userSchema);
