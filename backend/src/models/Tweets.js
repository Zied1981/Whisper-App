import mongoose from "mongoose";
const tweetSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, ref: "User" },
    content: { type: String, required: true },
    likesfrom: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  },
  { collection: "tweets", timestamps: true }
);
export const Tweets = mongoose.model("Tweets", tweetSchema);
