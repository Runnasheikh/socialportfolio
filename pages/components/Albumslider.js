// "use client"
// import React from 'react'
// import Image from 'next/image'
// import 'swiper/css'
// import useSWR from 'swr'
// import {Swiper,SwiperSlide} from 'swiper/react'
// import 'swiper/css/effect-coverflow'
// import 'swiper/css/pagination'
// import {EffectCoverflow,FreeMode, Navigation,Thumbs} from 'swiper/modules'
// import { AudioPlayer } from 'react-audio-play'
// const fetchuser = (url)=>fetch(url).then((res)=>res.json())
// const Albumslider = () => {
//     const { data, error } = useSWR('http://localhost:3000/api/album', fetchuser)
//     console.log(data)
  
//   if (!data) return <div>loading</div>
//   return (
//     <div>
//       <Swiper>
//         {
//             data.map((album)=>{
//                 console.log(album)
//                 return(
//                     <SwiperSlide key={album.id} className='mb-10 '>
//                         <div className="w-[80%] mx-auto  rounded-[10px] flex flex-col
//                         xl:flex-row items-center p-6 xl:p-12 gap-x-12">

//                             <div className="hidden xl:flex w-[300px] h-[300px] xl:w-[500px]
//                             xl:h-[500px] relative cursor-pointer rounded-[10px] overflow-hidden">
//                                 <Image
//                                 src={album.image}
//                                 fill
//                                 priority
                                
//                                   alt="" className="object-contain"/>
//                             </div>
//                             <div>
//                                 <div className='flex-1 flex flex-col xl:px-12'>
//                                     {
//                                         album.tracks?.map((track,index) => {
                                            
//                                             return(
//                                                 <div key={index}>

//                                                     <div>{track.name}</div>
//                                                     <div>
//                                                         <AudioPlayer
//                                                         style={{
//                                                             background:"transparent",
//                                                             boxShadow:"none",
//                                                             width:"100%",
                                                           
//                                                         }}
//                                                         src={track.src}/>
                                                        
//                                                     </div>
//                                                 </div>
                                              
//                                             )
//                                         }
//             )}
//                                 </div>
//                             </div>
//                             </div>                       
//                     </SwiperSlide>
//                 )
//             })
//         }
//         </Swiper>  
//     </div>
//   )
// }

// export default Albumslider
