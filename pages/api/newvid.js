import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "data", "video.json");
    const file = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(file);

    if (!data.items || !Array.isArray(data.items)) {
      throw new Error("Invalid JSON structure: 'items' should be an array");
    }

    const videos = data.items.map((item) => {
      if (!item.snippet || !item.snippet.resourceId || !item.snippet.resourceId.videoId) {
        throw new Error("Invalid JSON structure: missing necessary fields in 'snippet'");
      }
      return {
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt,
        thumbnail: item.snippet.thumbnails.medium.url,
        url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
      };
    });

    res.status(200).json(videos);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}
