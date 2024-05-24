import { Tweets } from "../../models/Tweets.js";

export async function addtweet(authenticatedUserId, { content, likesfrom }) {
  if (!content) throw new error("please enter a content");

  const newTweet = await Tweets.create({
    userId: authenticatedUserId,
    content,
    likesfrom,
  });

  return newTweet;
}
