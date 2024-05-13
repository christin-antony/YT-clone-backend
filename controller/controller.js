import { youtubeSchema } from "../model/add.js";

export const ytdata = async (req, res) => {
  const { title, channel, views, time } = req.body;
  const thumbnailFile = req.files["thumbnail"][0].path;
  const videoFile = req.files["video"][0].path;
  const dpFile = req.files["dp"][0].path;

  try {
    const newyt = new youtubeSchema({
      thumbnail: thumbnailFile,
      video: videoFile,
      dp: dpFile,
      title,
      channel,
      views,
      time,
    });

    await newyt.save();
    res.status(201).json({ message: "New yt data saved successfully" });
  } catch (error) {
    console.error("Error saving the new yt details: ", error);
    res.status(500).json({ error: "Error saving data" });
  }
};

export const ytget = async (req, res) => {
  try {
    const yt = await youtubeSchema.find();
    res.json(yt);
  } catch (error) {
    console.error("Error retrieving yt data: ", error);
    res.status(500).json({ error: "Error retrieving data" });
  }
};
