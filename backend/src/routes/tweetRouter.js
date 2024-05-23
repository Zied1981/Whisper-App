import express from "express";
import { TweetController } from "../controllers/TweetController.js";
import { doJWTAuth } from "../middlewares/doJWTAuth.js";

export const TweetsRouter = express
  .Router()
  .post("/", doJWTAuth, TweetController.postCreateTweetCtrl)
  .patch("/:tweetId", doJWTAuth, TweetController.postCreateTweetCtrl);
