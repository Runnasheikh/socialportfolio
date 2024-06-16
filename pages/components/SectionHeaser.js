import React from 'react'
import { fadeIn } from '../../variants'
import { motion } from 'framer-motion'
const SectionHeaser = ({title,pretitle}) => {
  return (
    <header>
        <motion.h3 
         variants={fadeIn('up', 0.2)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true, amount: 0.3 }}
         className="pretitle text-center">
            {pretitle}

        </motion.h3>
        <motion.h2
        variants={fadeIn('up', 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className='h2 text-center'>{title}</motion.h2>
    </header>
  )
}

export default SectionHeaser
