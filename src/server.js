import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const { API_URL, PORT } = process.env;

//Routers
import { userRouter } from "./modules/user/user.route.js";
import authRouter from "./modules/auth/auth.route.js";

//Error Hanlder
import errorHandler from "./middlewares/errorHandler.js";

export const bootstrap = () => {
  const app = express();
  app
    .use(cors("*"))
    .use(json())
    .use(`${API_URL}users`, userRouter)
    .use(`${API_URL}auth`, authRouter)
    .use(errorHandler);
  return app;
};
