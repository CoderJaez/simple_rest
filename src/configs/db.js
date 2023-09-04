import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const { DATABASE_NAME, USERNAME, PASSWORD, ENV } = process.env;

export const db = () => {
  const DEV_MONGO_URI = `mongodb://127.0.0.1/${DATABASE_NAME}`;
  const PROD_MONGO_URI = `mongodb://admin:admin@ec2-18-141-205-53.ap-southeast-1.compute.amazonaws.com/${DATABASE_NAME}`;

  const MONGO_URI = ENV === "production" ? PROD_MONGO_URI : DEV_MONGO_URI;
  const connection = mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("MongoDB connection is ready.");
    })
    .catch((err) => console.error("ERROR: ", err.message));
};
