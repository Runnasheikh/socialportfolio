// models/PlaylistItem.js
import mongoose from 'mongoose';

const PlaylistItemSchema = new mongoose.Schema({
  snippet: {
    publishedAt: String,
    title: String,
    description: String,
    thumbnails: {
      medium: {
        url: String,
        width: Number,
        height: Number
      }
    },
    resourceId: {
      kind: String,
      videoId: String
    }
  }
});

const PlaylistItem = mongoose.models.PlaylistItem || mongoose.model('PlaylistItem', PlaylistItemSchema);

export default PlaylistItem;
