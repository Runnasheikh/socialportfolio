import React, { useState, useEffect } from "react";
import Image from "next/image";
import { timeAgo } from "@/utils/timeAgo";


const Latestvideo = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(`/api/newvid`);
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

  return (
    <div className="container">
      <h1 className='title'>Latest Videos</h1>
      {error && <p className="error">{error}</p>}
      <div className='grid'>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      <style jsx>{`
        .container {
          padding: 20px;
        }
        .title {
          text-align: center;
          color: black;
          margin-bottom: 20px;
        }
        .error {
          color: red;
          text-align: center;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          }
        }
      `}</style>
    </div>
  );
};

const VideoCard = ({ video }) => {
  return (
    <div className="card">
      <Image src={video.thumbnail} alt={video.title} width={320} height={180} />
      <div className="card-content">
        <h2>{video.title}</h2>
        <p>{timeAgo(video.publishedAt)}</p>
      </div>
      <style jsx>{`
        .card {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .card img {
          width: 100%;
          height: auto;
        }
        .card-content {
          padding: 15px;
        }
        .card-content h2 {
          font-size: 1.2em;
          margin: 0 0 10px;
          color: #333;
        }
        .card-content p {
          margin: 0;
          color: #777;
        }
      `}</style>
    </div>
  );
};

export default Latestvideo;
