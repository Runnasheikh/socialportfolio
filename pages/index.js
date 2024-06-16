import Image from "next/image";
import { Inter,Alex_Brush,Montserrat } from "next/font/google";

import Hero from "./components/Hero";
import Player from "./components/Player";

import Albumslider from "./components/Albumslider";
import Youtube from "./components/Youtube";


const alexBrush = Alex_Brush({ 
  weight:['400'],
  subsets: ["latin"],
  variable:'--font-alexBrush'
 });
const montserrat = Montserrat({ 
  weight:['100','200', '400','500', '600','700','800'],
  subsets: ["latin"],
  variable:'--font-montserrat'
 });

export default function Home() {
  return (
    <main>
      <Hero/>
      <Player/>
      {/* <Events/> */}
      <Albumslider/>
      <Youtube/>
      <div className="h-[4000px]"></div>
    </main>
  );
}
