// pages/api/addPlaylistItem.js

import dbConnect from "@/lib/dbConnect";
import PlaylistItem from "@/models/PlaylistItem";


export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await dbConnect();

      const newItem = new PlaylistItem(req.body);
      await newItem.save();

      res.status(200).json({ message: 'Item added successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error saving item', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
