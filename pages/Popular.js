import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { GalleryIcon } from "./icons/Gallery";
import { MusicIcon } from "./icons/Music";
import { VideoIcon } from "./icons/Videoicon";

import VideoCard from "./components/Latet";
import videos from "@/data/video";
import Player from "./components/Player";

export default function PopularVideos() {
  const [selectedTab, setSelectedTab] = useState("photos");
 

  const handleTabChange = (key) => {
    console.log("Tab changed to:", key);
    setSelectedTab(key);
  };

  
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto mt-8 text-white rounded-xl">
      <Tabs
        aria-label="Options"
        color="primary"
        variant="bordered"
        selectedKey={selectedTab}
        onSelectionChange={handleTabChange}
        className="w-full bg-blue-700 rounded-xl"
      >
        <Tab
          key="photos"
          title={
            <div className="flex items-center space-x-2">
              <GalleryIcon />
              <span>latest video</span>
            </div>
          }
          value="photos"
          className="px-4 py-2"
        />
        <Tab
          key="music"
          title={
            <div className="flex items-center space-x-2">
              <MusicIcon />
              <span>Music</span>
            </div>
          }
          value="music"
          className="px-4 py-2"
        />
        <Tab
          key="videos"
          title={
            <div className="flex items-center space-x-2">
              <VideoIcon />
              <span>popular video</span>
            </div>
          }
          value="videos"
          className="px-4 py-2"
        />
      </Tabs>

      {/* Content based on selected tab */}
      <div className="transition-opacity duration-500 ease-in-out w-full">
        {selectedTab === "photos" && (
          <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto mt-8 text-black rounded-xl opacity-100 transition-opacity duration-500">
            <h2 className="text-2xl font-bold mb-4">Photos</h2>
            <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto mt-8 text-black rounded-xl">
              Your Photos content goes here.
            </div>
          </div>
        )}
        {selectedTab === "music" && (
          <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto mt-8 text-black rounded-xl opacity-100 transition-opacity duration-500">
            <Player/>
          </div>
        )}
        {selectedTab === "videos" && (
        <div className="container">
        <h1 className='text-black text-center'>Latest Videos</h1>
        <div className='grid'>
          {videos.map((video) => (
            <div key={video.id} className="card">
              <img className="thumbnail" src={video.thumbnail} alt={video.title} />
              <div className="content">
                <h2 className="title">{video.title}</h2>
                <p className="description">{video.description}</p>
                <button className="watch-btn">Watch Now</button>
              </div>
            </div>
          ))}
        </div>
        <style jsx>{`
          .container {
            padding: 20px;
            max-width: 1200px; /* Adjust max-width as per your design */
            margin: 0 auto;
          }
          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
          }
          .card {
            display: flex;
            flex-direction: row;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s ease-in-out;
          }
          .thumbnail {
            width: 100%;
            height: 180px; /* Adjust thumbnail height as per your design */
            object-fit: cover;
          }
          .content {
            padding: 16px;
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          .title {
            font-size: 1.2rem;
            margin-bottom: 8px;
          }
          .description {
            color: #666;
            flex: 1;
          }
          .watch-btn {
            align-self: flex-end;
            background-color: #007bff;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          .watch-btn:hover {
            background-color: #0056b3;
          }
      
          @media (max-width: 768px) {
            .grid {
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Adjust for smaller screens */
            }
            .thumbnail {
              height: 150px; /* Reduce thumbnail height on smaller screens */
            }
          }
        `}</style>
      </div>
      
        )}
      </div>
    </div>
  );
}