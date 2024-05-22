import express from "express";
import { UserController } from "../controllers/UserController.js";
import { validateRefreshToken } from "../middlewares/doJWTAuth.js";

export const usersRouter = express
  .Router()
  .get("/", UserController.getAllUsersCtrl)
  .post("/register", UserController.postRegisterUserCtrl)
  .post("/login",  UserController.postLoginUserCtrl)
  .post("refresh-token", validateRefreshToken, UserController.postRefreshAccessTokenCtrl);


  