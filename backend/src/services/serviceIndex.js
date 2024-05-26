import { registerUser } from "./userService/registerUser.js";
import { showAllUsers } from "./userService/showAllUsers.js";
import { loginUser } from "./userService/loginUser.js";
import { refreshAccessToken } from "./userService/refreshAccessToken.js";
import { addtweet } from "./tweetService/addTweet.js";
import { editTweet } from "./tweetService/editTweet.js";

import { showFollowingTweets } from "./tweetService/showFollowingTweets.js";
import { deleteTweet } from "./tweetService/deleteTweet.js";
import { getAllUserIds, showAllUserTweets } from "./tweetService/showAlltweets.js";
import { showOneUser } from "./userService/showOneUser.js";

export const UserService = {
  showAllUsers,
  registerUser,
  loginUser,
  refreshAccessToken,
  showOneUser,
};

export const TweetService = {
  addtweet,
  editTweet,
  showAllUserTweets,
  getAllUserIds,
  showFollowingTweets,
  deleteTweet,
};
