
import { Inter,Alex_Brush,Montserrat } from "next/font/google";

import Hero from "./components/Hero";





import React from "react";

import Youtube from "./components/Youtube";

import PopularVideos from "./Popular";

import Contact from "./components/Contact";



export default function Home() {




  return (
    <main>
      <Hero/>
      <PopularVideos/>
      {/* <Latestvideo/> */}
     
   <Youtube/>
   
    
     <Contact/>
     {/* <Component/> */}
     {/* <AddPlaylistItemForm/> */}
    </main>
  );
}
