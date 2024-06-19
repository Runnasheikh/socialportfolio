
import { Inter,Alex_Brush,Montserrat } from "next/font/google";

import Hero from "./components/Hero";





import React from "react";

import Youtube from "./components/Youtube";

import PopularVideos from "./Popular";


export default function Home() {




  return (
    <main>
      <Hero/>
      <PopularVideos/>
      {/* <Latestvideo/> */}
     
   <Youtube/>
      {/* <Albumslider/> */}
    
     
    </main>
  );
}
