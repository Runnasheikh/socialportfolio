// backend - /api/youtube.js
import { promises as fs } from "fs";

export default async function handler(req, res) {
  try {
    const file = await fs.readFile(
      process.cwd() + "/data/playlist.json",
      "utf8"
    );
    const data = JSON.parse(file);

    const videos = data.items.map((item) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
      thumbnail: item.snippet.thumbnails.medium.url,
      url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
    }));

    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
