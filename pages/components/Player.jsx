import React from 'react'
import { AudioPlayer } from 'react-audio-play'
import Image from 'next/image'
const Player = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-tertiary/70 to-primary/10
    backdrop-blur-[15px] h-[112px] flex items-center relative z-40'>
      <div className="container mx-auto flex flex-col justify-between items-center  xl:flex-row">
    <div className='hidden w-[300px] xl:flex items-center
    gap-x-4'>
        <div className="relative w-16 h-16">
            <Image
            src={'/assets/player/avatar.png'}
            fill 
            priority
            alt=''
            />
        </div>
        {/* text */}
        <div className="w-full max-w-4xl">
            <div className='text-lg font-medium'>jha maam</div>
            <div className='text-sm font-light '>music</div>
        </div>
    </div>
    <div className='w-full max-w-4xl'>
        <AudioPlayer loop
        preload='none'
        color='#fff'
        volume={40}
        volumePlacement='top'
        src='/assets/freedom.mp3'
        style={
           {
            background:"transparent",
            boxShadow:"none",
            width:"100%"
           } 
        }/>
        
    </div>
      </div>
    </div>
    </>
  )
}

export default Player
