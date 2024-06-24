// pages/api/youtube.js
import dbConnect from '../../lib/dbConnect';
import PlaylistItem from '../../models/PlaylistItem';

export default async function handler(req, res) {
  try {
    await dbConnect();
    
    const data = await PlaylistItem.find({});

    const videos = data.map((item) => ({
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
