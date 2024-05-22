import express from "express";
import { UserController } from "../controllers/userController.js";

export const usersRouter = express
  .Router()
  .get("/", UserController.getAllUsersCtrl)
  .post("/register", UserController.postRegisterUserCtrl);
