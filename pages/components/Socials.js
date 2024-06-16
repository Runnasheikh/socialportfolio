import Link from 'next/link'
import React from 'react'
import {
    RiYoutubeFill,
    RiInstagramFill,

    RiSpotifyFill,
    RiTwitterFill
} from 'react-icons/ri'
const socials = [
    {
        icon: <RiYoutubeFill />,
        path: 'https://www.youtube.com/channel/UCY2_2222'
    },
    {
        icon: <RiInstagramFill />,
        path: 'https://www.instagram.com/atifsheikh9?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    {
        icon: <RiSpotifyFill />,
        path: 'https://www.spotify.com/'
    },
    {
        icon: <RiTwitterFill />,
        path: 'https://www.twitter.com/'
    }
]

const Socials = ({containerStyle,iconStyles}) => {
  return (
    <div className={`${containerStyle}`}>
      {
        socials.map((item,index)=>{
            return(
                <Link href={item.path} key={index}>
                    <div className={`${iconStyles}`}>

                    {item.icon}
                    </div>
                </Link>
            )
        })
      }
    </div>
  )
}

export default Socials
