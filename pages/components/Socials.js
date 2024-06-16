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
        path: 'https://www.facebook.com/scjhaofficial'
    },
    {
        icon: <RiInstagramFill />,
        path: 'https://www.instagram.com/soni_scjhaofficial/'
    },
    {
        icon: <RiSpotifyFill />,
        path: 'https://open.spotify.com/artist/2j2fBasWl9E4SRsvAWbT8d'
    },
    {
        icon: <RiTwitterFill />,
        path: 'https://x.com/scjhaofficial'
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
