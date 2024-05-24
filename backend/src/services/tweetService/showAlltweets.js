import { User } from "../../models/User.js";
import { Tweets } from "../../models/Tweets.js";

export const getAllUserIds = async () => {
  const users = await User.find({}, "_id"); // Nur die IDs abrufen

  return users.map((user) => user._id);
};

export const showAllUserTweets = async (userIds) => {
  const allUserTweets = await Tweets.find({ userId: { $in: userIds } }).populate("userId");
  return allUserTweets;
};
