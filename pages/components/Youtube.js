import React, { useState, useEffect } from "react";
import Image from "next/image";
import { timeAgo } from "@/utils/timeAgo";

export default function Youtube() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [videoId, setVideoId] = useState("e5yE-bc82IM");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(`/api/youtube`);
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
    <div className="container mx-auto p-4 flex flex-col lg:flex-row" id="youtube">
      <div className="flex flex-col lg:w-2/3 relative">
        <div className="aspect-w-16 aspect-h-9 mb-4 mr-6 relative h-0 pb-9/16">
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen
            title="YouTube Video"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
      <div className="lg:w-1/3 lg:h-[500px] overflow-y-auto custom-scroll">
        <h2 className="text-xl font-semibold mb-4">Recommended Videos</h2>
        <div className="space-y-4">
          {videos
            .slice()
            .reverse()
            .map((video, index) => (
              <div
                key={video.id}
                className="flex items-center bg-white p-2 rounded-lg shadow-lg hover:bg-gray-100 transition cursor-pointer"
                onClick={() => {
                  setVideoId(video.id);
                }}
              >
                <div className="w-1/3">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={160}
                    height={90}
                    className="rounded-lg"
                  />
                </div>
                <div className="w-2/3 pl-4">
                  <h3 className="text-sm font-semibold">{video.title}</h3>
                  <p className="text-xs text-gray-600 truncate">
                    {video.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    {timeAgo(video.publishedAt)}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
