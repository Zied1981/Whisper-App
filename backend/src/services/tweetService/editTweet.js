import { Tweet } from "../../models/Tweets.js";

export async function editTweet(tweetId, updateInfo) {
  const tweet = await Tweet.findById(tweetId);
  if (!tweet) throw new Error("can not find tweet");
  if (updateInfo.content.length < 1) throw new Error("please enter content");

  const updatedTweet = await Tweet.findByIdandUpdate(
    tweetId,
    {
      $set: updateInfo,
    },
    { new: true }
  );
  return { updatedTweet };
}
