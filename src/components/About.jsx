
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import image2 from '../images/secondpicture.png'
import { useAnimation } from 'framer-motion'


const About = () => {
  
  const {ref, inView} = useInView()
  const animation = useAnimation()

  useEffect(() => {
    if(inView){
      animation.start({
        y:0,
        transition: {
          duration: 0.5
        }
      })
    } else {
      animation.start({
        y: 30
      })
    }
  }, [inView])

  return (
    <motion.div id='about' className='flex flex-col gap-20'>
      <h1 className='text-center text-5xl font-bold'>About me</h1>
      <div className='flex items-center gap-10 flex-wrap lg:flex-nowrap'>
        <div className='flex flex-col gap-10'>
          <motion.div className='flex flex-col gap-5' animate={animation}>
            <h1 className='text-5xl font-bold text-blue-500 w-fit'>Who Am I ?</h1>
            <p ref={ref} className='leading-7'> <span className='text-xl font-bold text-gray-500'>I'm Anass ELHAOUSSI, I live in Morocco and I'm in my first year of high school </span><br />
              I've always loved science since I was a little kid, especially computer science <br />
              I was always looking for something that could make the change, and I finally discovered that programming was exactly what I needed!</p>
          </motion.div>
          <motion.div className='flex flex-col gap-5' animate={animation}>
            <h1 className='text-5xl font-bold text-blue-500 w-fit'>Goals & Future plans</h1>
            <p className='leading-7'> <span className='text-xl font-bold text-gray-500'>Helping people to learn programming has been an interesting ideo to me these days!</span><br />
            I hope to start my freelance career in web development and also create a community where people can learn programming!
              </p>
          </motion.div>
        </div>
        <div className='sm:w-1/3 md:w-1/2 flex flex-col items-center gap-2'>
          <img src={image2} alt="image2" className='rounded-full shadow-xl' />
          <p className='text-xl'>Morocco, <span className='text-gray-500'> Casablanca</span></p>
        </div>
      </div>
    </motion.div>
  )
}

export default About