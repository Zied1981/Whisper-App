import { Tweets } from "../../models/Tweets.js";

export async function deleteTweet(authenticatedUserId, tweetId) {
  const tweet = await Tweets.findById(tweetId);

  if (!tweet) throw new Error("no tweet exist");

  const useridString = tweet.userId.toString();
  if (authenticatedUserId !== useridString)
    throw new Error("sorry, you dont have an authorization to delete");

  const deleatedTweet = await Tweets.findByIdAndDelete(tweetId);
  return { deleatedTweet };
}
