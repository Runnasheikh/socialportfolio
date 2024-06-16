import React, { useState, useEffect } from "react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const PLAYLIST_ID = process.env.NEXT_PUBLIC_PLAYLIST_ID;

export default function Youtube() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(`/api/youtube?playlistId=${PLAYLIST_ID}&apiKey=${API_KEY}`);
        if (!res.ok) {
          throw new Error(
            `Failed to fetch videos: ${res.status} ${res.statusText}`
          );
        }
        const data = await res.json();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setError("Failed to fetch videos. Please try again later.");
      }
    };

    fetchVideos();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-8 bg-primary">
      <h1 className="text-3xl font-semibold mb-4 text-center">YouTube Playlist Videos</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-primary text-white shadow-md rounded-lg p-4 w-full sm:w-[300px] md:w-[350px] lg:w-[400px] cursor-pointer hover:shadow-xl transition duration-300"
            onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`)}
          >
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id}`}
                allowFullScreen
                title={video.title}
                className="rounded-lg"
              ></iframe>
            </div>
            <h2 className="text-lg font-semibold">{video.title}</h2>
            <p className="text-sm text-gray-600 mb-2 truncate">{video.description}</p>
            <p className="text-sm text-gray-500">{new Date(video.publishedAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
