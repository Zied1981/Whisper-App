import { Tweets } from "../../models/Tweets.js";
export async function addtweet({ userId, content, likesfrom }) {
  const userIdString = userId.toString();
  if (!content) throw new error("please enter a content");
  const newTweet = await Tweets.create({
    userId: userIdString,
    content,
    likesfrom,
  });
  return { newTweet };
}
