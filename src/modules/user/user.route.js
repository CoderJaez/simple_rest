import { Router } from "express";
import { controller } from "./user.controller.js";
const router = Router();
router
  .get("/", controller.Get)
  .get("/:id", controller.Get)
  .post("/", controller.Post)
  .put("/:id", controller.Put)
  .delete("/:id", controller.Delete);

export const userRouter = router;
