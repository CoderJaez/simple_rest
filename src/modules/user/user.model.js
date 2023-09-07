import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "../../utils/validator.js";
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "{PATH} is required"],
    validate: [
      {
        validator: function (value) {
          return validator.isExist(this, { email: value });
        },
        message: () => "{PATH} is already exist",
      },
      {
        validator: function (value) {
          return validator.isValidEmail(value);
        },
        message: () => "{PATH} is invalid",
      },
    ],
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
