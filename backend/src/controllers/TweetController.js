import { TweetService } from "../services/serviceIndex.js";

async function postCreateTweetCtrl(req, res) {
  try {
    const authenticatedUserId = req.authenticatedUserId;
    const tweetInfo = req.body;
    const result = await TweetService.addtweet(authenticatedUserId, tweetInfo);
    res.json({ result });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "could not post a new tweet" });
  }
}

async function patchUpdateTweetCtrl(req, res) {
  try {
    const authenticatedUserId = req.authenticatedUserId;
    const updateTweetInfo = req.body;
    const tweetId = req.params.tweetId;
    const result = await TweetService.editTweet(
      authenticatedUserId,
      tweetId,
      updateTweetInfo
    );
    res.json({ result });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error, message: error.message || "Could not update tweet." });
  }
}

async function getAllUserTweetsCtrl(req, res) {
  try {
    // Abrufen aller Benutzer-IDs
    const userIds = await TweetService.getAllUserIds();

    // Abrufen aller Tweets dieser Benutzer
    const tweets = await TweetService.showAllUserTweets(userIds);

    res.json({ tweets });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: err.message || "Cannot show tweets by users" });
  }
}

async function getAllFollowingTweetsCtrl(req, res) {
  try {
    const authenticatedUserId = req.authenticatedUserId;
    const result = await TweetService.showFollowingTweets(authenticatedUserId);
    res.json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: err.message || "no tweets found" });
  }
}

async function deleteTweetCtrl(req, res) {
  try {
    const authenticatedUserId = req.authenticatedUserId;
    const tweetId = req.params.tweetId;
    const result = await TweetService.deleteTweet(authenticatedUserId, tweetId);
    res.json({ result });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "cannot delete tweet" });
  }
}

export const TweetController = {
  postCreateTweetCtrl,
  patchUpdateTweetCtrl,
  getAllUserTweetsCtrl,
  getAllFollowingTweetsCtrl,
  deleteTweetCtrl,
};
