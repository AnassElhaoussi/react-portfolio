
import React, { useEffect } from 'react'
import image1 from '../images/mypicture.jpg'
import { motion } from 'framer-motion'



const Hero = () => {


  return (
    <div
    className='flex items-center h-screen'>
  
      <motion.div animate={{y: 0}} initial={{y: 20}} transition={{duration: 0.5, delay: 0.3}} className='flex gap-16 flex-wrap items-center'>
        <div className='sm:w-1/ md:w-1/2 lg:w-1/2 xl:w-1/3 relative '>
          <img src={image1} alt="image" className='rounded-full shadow-2xl' />
          <motion.p 
          animate={{rotate: [0, 90, 90, 0]}} 
          transition={{delay: 1.5, repeat: Infinity}} 
          className='absolute top-0 right-0 sm:text-2xl md:text-4xl lg:text-3xl xl:text-4xl'>👋</motion.p>
        </div>
        <div className='flex flex-col gap-2' >
          <h1 className='text-7xl font-bold'><span className='bg-blue-500 text-white '> Hello</span> there,</h1>
          <h1 className='text-3xl mt-5'>I'm <span className='text-blue-500 font-bold text-3xl drop-shadow-md'> Anass ELHAOUSSI</span></h1>
          <h1 className=''>A 15yo passionate web developer!</h1>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
