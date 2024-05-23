import { Tweets } from "../../models/Tweets.js";

export async function editTweet(authenticatedUserId, tweetId, updateInfo) {
  const tweet = await Tweets.findById(tweetId);
  if (!tweet) throw new Error("can not find tweet");

  const userIdString = tweet.userId.toString();
  if (authenticatedUserId !== userIdString) throw new Error("you are not authorized to edit this tweet");

  if (updateInfo.content.length < 1) throw new Error("please enter content");

  const updatedTweet = await Tweets.findByIdandUpdate(
    tweetId,
    {
      $set: updateInfo,
    },
    { new: true }
  );
  return { updatedTweet };
}
