import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const { API_URL, PORT } = process.env;

//Routers
import { userRouter } from "./modules/user/user.route.js";

export const bootstrap = () => {
  const app = express();
  app.use(cors("*")).use(json()).use(`${API_URL}users`, userRouter);
  return app;
};
