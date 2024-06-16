import React from 'react'
import Image from 'next/image'
import { fadeIn } from '../../../variants'
import { motion } from 'framer-motion'

const Eventbox = ({ events }) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-violet-950 rounded-[10px] p-4 xl:p-12 relative"
    >
      <div className="flex flex-col xl:flex-row justify-between h-[620px] xl:h-full gap-x-4">
        <div className="hidden xl:flex w-[400px]">
          <Image
            src={'/assets/events/singer.png'}
            width={358}
            height={489}
            priority
            quality={100}
            alt=""
          />
        </div>
        <div className="flex-1 bg-purple-400/10 h-[500px] flex flex-col
         justify-between overflow-y-scroll scrollbar-thin
         scrollbar-thumb-accent-hover scrollbar-track-red-700/10 xl:pr-6">
          {events.map((event) => {
            return (
              <div
                key={event.id}
                className="flex flex-col xl:flex-row items-center justify-between
                 gap-y-4  xl:gap-y-0
                 text-center xl:text-left my-4 xl:my-0 border-b
                  border-white/10 pb-10 xl:py-3 last-of-type:border-none
                   first-of-type:pt-0"
              >
                <div className="flex flex-row items-center gap-x-4">
                  <div className="flex flex-col justify-center leading-tight w-[80px] mb-4 xl:mb-0">
                    <div className="text-[44px] font-black text-accent-hover">
                      {event.date.day}
                    </div>
                    <div className="text-[20px] font-bold">
                      {event.date.month}
                    </div>
                  </div>
                  <div className="w-64 flex flex-col gap-y-2">
                    <div className="text-lg leading-none font-bold">
                      {`${event.location.city}, ${event.location.country}`}
                    </div>
                    <div className="flex items-center gap-x-1 justify-center xl:justify-center">
                      <div className="text-accent text-lg"></div>
                      <div className="font-light">{event.location.address}</div>
                    </div>
                  </div>
                </div>
                <div className="w-[100px] text-[17px] text-center text-accent font-bold">
                  {event.priceRange}
                </div>
                <button className="btn btn-sm btn-accent">Get ticket</button>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Eventbox;
