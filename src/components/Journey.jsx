
import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import { htmlIcon, cssIcon, javascriptIcon, sassIcon, tailwindIcon, framerMotionIcon, figmaIcon, reactIcon, githubIcon, firebaseIcon, apiIcon } from '../images'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'



const Journey = () => {

  const animation = useAnimation()
  const {ref, inView} = useInView()

  useEffect(() => {
    if(inView){
      animation.start({
        x: 0,
        transition: {
          duration: 0.5,
        }
      })
    } else {
      animation.start({
        x: 30
      })
    }
    
  }, [inView])

  return (
    <motion.div animate={animation}  id='journey' className='flex flex-col gap-10'>
      <h1 className='text-center font-bold text-5xl'>Web Dev Journey</h1>
      <p className='text-xl font-bold text-gray-500'>Like most people, I started with the basics and that was a bit boring for me, but things started to get more interesting as I got into real projects, from easy to some more advanced concepts.</p>
      <h1 className='text-5xl font-bold text-white bg-blue-500 w-fit'>My Tech Stack</h1>
      <div className='flex items-center justify-center gap-10 flex-wrap' ref={ref}>
        <img src={htmlIcon} alt="" />
        <img src={cssIcon} alt="" />
        <img src={javascriptIcon} alt="" />
        <img src={sassIcon} alt="" />
        <img src={tailwindIcon} alt="" className='w-16' />
        <img src={framerMotionIcon} className='w-16 ' alt="" />
        <img src={figmaIcon} alt="" />
        <img src={reactIcon} alt="" />
        <img src={githubIcon} alt="" />
        <img src={firebaseIcon} alt="" />
        <img src={apiIcon} alt="" />
      </div>
      
    </motion.div>
  )
}

export default Journey