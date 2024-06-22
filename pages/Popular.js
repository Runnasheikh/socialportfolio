import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { GalleryIcon } from "./icons/Gallery";
import { MusicIcon } from "./icons/Music";
import { VideoIcon } from "./icons/Videoicon";

import Player from "./components/Player";
import Latestvideo from "./components/Latestvideo";

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
        {/* <Tab
          key="videos"
          title={
            <div className="flex items-center space-x-2">
              <VideoIcon />
              <span>popular video</span>
            </div>
          }
          value="videos"
          className="px-4 py-2"
        /> */}
      </Tabs>

      {/* Content based on selected tab */}
      <div className="transition-opacity duration-500 ease-in-out w-full">
        {selectedTab === "photos" && (
          <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto mt-8 text-black rounded-xl opacity-100 transition-opacity duration-500">
            <h2 className="text-2xl font-bold mb-4">Photos</h2>
            <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto mt-8 text-black rounded-xl">
            <Latestvideo/>
            </div>
          </div>
        )}
        {selectedTab === "music" && (
          <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto mt-8 text-black rounded-xl opacity-100 transition-opacity duration-500">
            <Player/>
          </div>
        )}
        {/* {selectedTab === "videos" && (
<Latestvideo/>
      
        )} */}
      </div>
    </div>
  );
}