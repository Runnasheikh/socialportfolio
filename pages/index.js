
import { Inter,Alex_Brush,Montserrat } from "next/font/google";

import Hero from "./components/Hero";





import React from "react";

import Youtube from "./components/Youtube";

import PopularVideos from "./Popular";
import AddPlaylistItemForm from "./components/AddPlaylistItemForm";
import Contact from "./components/Contact";



export default function Home() {




  return (
    <main>
      <Hero/>
      <PopularVideos/>
      {/* <Latestvideo/> */}
     
   <Youtube/>
      {/* <Albumslider/> */}
    
     <Contact/>
     {/* <Component/> */}
     {/* <AddPlaylistItemForm/> */}
    </main>
  );
}
