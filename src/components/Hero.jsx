
import React from 'react'
import image1 from '../images/mypicture.jpg'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
      <motion.div animate={{y: -20}} initial={{y: 20}} transition={{duration: 0.5}} className='flex ml-60 h-screen items-center gap-x-16 flex-wrap '>
        <motion.h1 animate={{rotate: [0, 90, 90, 0]}} transition={{delay: 2, repeat: Infinity}} className='absolute text-4xl rounded right-2/3 top-44'>👋</motion.h1>
          <img src={image1} alt="" className='rounded-full w-1/3 shadow-2xl sm:min-w-2/5' />
          <div className='flex flex-col gap-8'>
              <h1 className='text-7xl font-bold'> <span className='bg-black text-white mr-3'>Hello </span>there,</h1>
              <div>
                <h1 className='text-blue-500 text-3xl font-bold drop-shadow-md'><span className='text-black'>I'm </span> Anass ELHAOUSSI</h1>
                <h1 className=''>A 15yo aspiring <span className='text-blue-500'> web developer!</span> </h1>
              </div>
          </div>
      </motion.div>
  )
}

export default Hero
