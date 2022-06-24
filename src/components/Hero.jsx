
import React from 'react'
import image1 from '../images/mypicture.jpg'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.div
    animate={{y: 0}}
    initial={{y: 20}}
    transition={{duration: 0.5, delay: 0.3}}
    className='flex items-center h-screen'>

      <div className='flex gap-16 flex-wrap items-center'>
        <div className='sm:w-1/3 relative '>
          <img src={image1} alt="image" className='rounded-full shadow-2xl' />
          <motion.p animate={{rotate: [0, 10, 10, -10, -10, 0]}} transition={{delay: 1.5}} className='absolute top-0 left-0 bg-gray-300 p-2 rounded-md text-xl font-bold text-white'>Hello <span>👋</span> </motion.p>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-7xl font-bold'><span className='bg-blue-500 text-white'> Hello</span> there,</h1>
          <h1 className='text-2xl mt-5'>I'm <span className='text-blue-500 font-bold text-3xl drop-shadow-md'> Anass ELHAOUSSI</span></h1>
          <h1>A 15yo passionate web developer!</h1>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero
