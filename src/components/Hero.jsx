
import React, { useEffect } from 'react'
import image1 from '../images/mypicture.jpg'
import { motion } from 'framer-motion'



const Hero = () => {


  return (
    <div
    className='flex items-center h-screen'>
  
      <div className='flex gap-16 flex-wrap items-center'>
        <motion.div className='sm:w-1/ md:w-1/2 lg:w-1/2 xl:w-1/3 relative ' animate={{x: 0}} initial={{x: -100}} transition={{duration: 0.5, delay: 0.3}}>
          <img src={image1} alt="image" className='rounded-full shadow-2xl' />
          <motion.p 
          animate={{rotate: [0, 10, 10, -10, -10, 0]}} 
          transition={{delay: 1.5}} 
          className='absolute top-0 left-0 bg-gray-300 p-2 rounded-md sm:text-xs md:text-base xl:text-2xl font-bold text-white'>Hello <span>👋</span> </motion.p>
        </motion.div>
        <motion.div className='flex flex-col gap-2' animate={{x: 0}} initial={{x: 100}} transition={{duration: 0.5, delay: 0.3}}>
          <h1 className='text-7xl font-bold'><span className='bg-blue-500 text-white '> Hello</span> there,</h1>
          <h1 className='text-3xl mt-5'>I'm <span className='text-blue-500 font-bold text-3xl drop-shadow-md'> Anass ELHAOUSSI</span></h1>
          <h1 className=''>A 15yo passionate web developer!</h1>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
