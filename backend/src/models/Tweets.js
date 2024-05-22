import mongoose from "mongoose";
const tweetSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    content: { type: String, required: true },
  },
  { collection: "tweets", timestamps: true }
);
export const Tweets = mongoose.model("Tweets", tweetSchema);
