// pages/api/updatePlaylistItem.js
import dbConnect from '../../lib/dbConnect';
import PlaylistItem from '../../models/PlaylistItem';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { videoId } = req.query;
    const updatedData = req.body;

    try {
      await dbConnect();

      const item = await PlaylistItem.findOneAndUpdate(
        { 'snippet.resourceId.videoId': videoId },
        updatedData,
        { new: true }
      );

      if (!item) {
        res.status(404).json({ message: 'Item not found' });
        return;
      }

      res.status(200).json({ message: 'Item updated successfully', item });
    } catch (error) {
      res.status(500).json({ message: 'Error updating item', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
