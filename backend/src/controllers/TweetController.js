import { TweetService } from "../services/serviceIndex.js";

async function postCreateTweetCtrl(req, res) {
  try {
    const authenticatedUserId = req.authenticatedUserId;
    const tweetInfo = req.body;
    const result = await TweetService.addtweet(authenticatedUserId, tweetInfo);
    res.json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: err.message || "could not post a new tweet" });
  }
}

async function patchUpdateTweetCtrl(req, res) {
  try {
    const authenticatedUserId = req.authenticatedUserId;
    const updateTweetInfo = req.body;
    const tweetId = req.params.tweetId;
    const result = await TweetService.editTweet(authenticatedUserId, tweetId, updateTweetInfo);
    res.json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error, message: error.message || "Could not update tweet." });
  }
}

export const TweetController = {
  postCreateTweetCtrl,
  patchUpdateTweetCtrl,
};
