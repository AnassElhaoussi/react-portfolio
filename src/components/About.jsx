
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useViewContext } from '../context/ViewContext'


const About = () => {
  
  const [ref, animation] = useViewContext()

  return (
    <motion.div id='about' className='' animate={animation}>
      <div className='flex flex-col gap-5'>
        <h1 className='text-5xl font-bold text-white w-fit bg-blue-500' ref={ref}>Who Am I ?</h1>
        <p className='leading-7'>I'm Anass ELHAOUSSI, I live in Morocco and I'm in my first year of high school <br />
           I've always loved science since I was a little kid, especially computer science <br />
          I was always looking for something that could make the change, and I finally discovered that coding was exactly what I needed!</p>
      </div>
    </motion.div>
  )
}

export default About