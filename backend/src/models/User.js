import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    nickname: { type: String, required: true },

    email: { type: String, required: true },
    passwordHash: { type: String, required: true },
    passwordSalt: { type: String, required: true, trim: true },
    isEmailVerified: { type: Boolean, default: false },
    followers: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    following: [{ type: mongoose.Types.ObjectId, ref: "User" }],

    sixDigitCode: {
      type: String,
      required: true,
    },
  },
  { collection: "user", timestamps: true }
);

export const User = mongoose.model("User", userSchema);
