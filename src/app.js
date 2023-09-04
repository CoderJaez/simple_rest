import { bootstrap } from "./server.js";
import dotenv from "dotenv";
import { db } from "./configs/db.js";
dotenv.config();

const { PORT } = process.env;

export const App = () => {
  bootstrap().listen(PORT, db(), () => {
    console.log("Server is running at port: ", PORT);
  });
};

//const app = require('.')
//module.export = app;
