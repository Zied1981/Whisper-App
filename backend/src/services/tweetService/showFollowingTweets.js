import { Tweets } from "../../models/Tweets.js";
import { User } from "../../models/User.js";

export const showFollowingTweets = async (authenticatedUserId) => {
  const user = await User.findById(authenticatedUserId);
  if (!user) throw new Error("user dont exist");

  const userTweets = await Tweets.find({ userId: authenticatedUserId });

  const userFollowingIdArray = user.following;

  const userFollowingIdString = userFollowingIdArray.map((item) =>
    item.toString()
  );

  const followingTweetsArray = await Tweets.find({
    userId: { $in: userFollowingIdString },
  });

  const unsortedUserFeedArray = [...userTweets, ...followingTweetsArray];
  if (unsortedUserFeedArray.length === 0)
    throw new Error("Nothing to show at the moment");

  const sortedUserFeedArray = unsortedUserFeedArray.sort((a, b) => b - a);
  return sortedUserFeedArray;
};
