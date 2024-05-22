import mongoose from "mongoose";
const likesSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    tweetId: { type: String, required: true },
  },
  { collection: "likes", timestamps: true }
);
export const Likes = mongoose.model("Likes", likesSchema);
