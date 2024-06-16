// pages/api/albums.js
export default function handler(req, res) {
    const albums = [
      {
        "id": 1, "img": "album 1", "image": "/assets/albums/cover/cover-1.png",
        "tracks": [
          { "name": "night in the sky", "src": "assets/freedom.mp3" },
          { "name": "night in the sky", "src": "assets/freedom.mp3" },
          { "name": "night in t", "src": "assets/freedom.mp3" },
          { "name": "night the sky", "src": "assets/freedom.mp3" },
          { "name": "the sky", "src": "assets/freedom.mp3" }
        ]
      },
      {
        "id": 2, "img": "album 1", "image": "/assets/albums/cover/cover-2.png",
        "tracks": [
          { "name": "night in the sky", "src": "assets/freedom.mp3" },
          { "name": "night in the sky", "src": "assets/freedom.mp3" },
          { "name": "night in t", "src": "assets/freedom.mp3" },
          { "name": "night the sky", "src": "assets/freedom.mp3" },
          { "name": "the sky", "src": "assets/freedom.mp3" }
        ]
      },
      {
        "id": 3, "img": "album 1", "image": "/assets/albums/cover/cover-3.png",
        "tracks": [
          { "name": "night in the sky", "src": "assets/freedom.mp3" },
          { "name": "night in the sky", "src": "assets/freedom.mp3" },
          { "name": "night in t", "src": "assets/freedom.mp3" },
          { "name": "night the sky", "src": "assets/freedom.mp3" },
          { "name": "the sky", "src": "assets/freedom.mp3" }
        ]
      },
      {
        "id": 4, "img": "album 1", "image": "/assets/albums/cover/cover-4.png",
        "tracks": [
          { "name": "night in the sky", "src": "assets/freedom.mp3" },
          { "name": "night in the sky", "src": "assets/freedom.mp3" },
          { "name": "night in t", "src": "assets/freedom.mp3" },
          { "name": "night the sky", "src": "assets/freedom.mp3" },
          { "name": "the sky", "src": "assets/freedom.mp3" }
        ]
      },
      {
        "id": 5, "img": "album 1", "image": "/assets/albums/cover/cover-5.png",
        "tracks": [
          { "name": "night in the sky", "src": "assets/freedom.mp3" },
          { "name": "night in the sky", "src": "assets/freedom.mp3" },
          { "name": "night in t", "src": "assets/freedom.mp3" },
          { "name": "night the sky", "src": "assets/freedom.mp3" },
          { "name": "the sky", "src": "assets/freedom.mp3" }
        ]
      },
      {
        "id": 6, "img": "album 1", "image": "/assets/albums/cover/cover-6.png",
        "tracks": [
          { "name": "night in the sky", "src": "assets/freedom.mp3" },
          { "name": "night in the sky", "src": "assets/freedom.mp3" },
          { "name": "night in t", "src": "assets/freedom.mp3" },
          { "name": "night the sky", "src": "assets/freedom.mp3" },
          { "name": "the sky", "src": "assets/freedom.mp3" }
        ]
      },
      // ... other albums
    ];
    res.status(200).json(albums);
  }
  