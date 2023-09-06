import mongoose from "mongoose";
import bcrypt from "bcrypt";
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

userSchema.pre("save", async function (next) {
  if (!this.isModified()) return next();

  this.password = await bcrypt.hashSync(this.password, 12);
  return next();
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password).catch((e) => false);
};

export const User = mongoose.model("User", userSchema);
