// pages/api/posts.js
export default function handler(req, res) {
  const posts = [
    { "id": 1, "data": "2023-9-21", "discription": "join us in the noght of classical rocks", "title": "rock concert central park" },
    // ... other posts
  ];
  res.status(200).json(posts);
}
