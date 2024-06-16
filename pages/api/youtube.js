export default async function handler(req, res) {
    try {
      const { playlistId, apiKey } = req.query;
  
      if (!playlistId || !apiKey) {
        return res.status(400).json({ message: "Missing required parameters" });
      }
  
      const apiUrl = 'https://www.googleapis.com/youtube/v3/playlistItems';
      const queryParams = new URLSearchParams({
        part: "snippet,contentDetails",
        playlistId: playlistId,
        key: apiKey,
        maxResults: 50,
      });
  
      const response = await fetch(`${apiUrl}?${queryParams}`);
      if (!response.ok) {
        throw new Error(
            `An error occurred while fetching the playlist: ${response.status} ${response.statusText}`
        )
      }
  
      const data = await response.json();
  
      const videos = data.items.map((item) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt,
        thumbnail: item.snippet.thumbnails.default.url,
        url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
      }));
  
      res.status(200).json(videos);
    } catch (error) {
      res.status(500).json({ message: error.message });
  }
}