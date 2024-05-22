import mongoose from "mongoose";
const kommentareSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    tweetId: { type: String, required: true },
    content: { type: String, required: true },
  },
  { collection: "kommentare", timestamps: true }
);
export const Kommentare = mongoose.model("Kommentare", kommentareSchema);
