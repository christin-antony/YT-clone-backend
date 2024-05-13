import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    thumbnail: { type: String, required: true },
    video: { type: String, required: true },
    dp: { type: String, required: true },
    title: { type: String, required: true },
    channel: { type: String, required: true },
    views: { type: String, required: true },
    time: { type: String, required: true },
  },
  { timestamps: true }
);

export const youtubeSchema = mongoose.model("youtube", Schema);
