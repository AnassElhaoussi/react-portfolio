

import React, { useEffect } from 'react'
import { animate, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { projects } from '../constants/projects'
import { LikeOutlined } from '@ant-design/icons'
import { GithubOutlined } from '@ant-design/icons'

const Projects = () => {

  const {ref, inView} = useInView()
  const animation = useAnimation()

  useEffect(() => {
    if(inView){
      animation.start({
        y: 0,
        transition: {
          duration: 0.5
        }

      })
    } else {
      animation.start({
        y: 20,
      })
    }
  }, [inView])
  

  return (
    <motion.div className='flex flex-col gap-8' id='projects' animate={animation}>
      <h1 className='text-center text-5xl font-bold'>Projects</h1>
      <div className=''>
        <h2 className='text-5xl text-white font-bold bg-blue-500 w-fit'>Top Projects</h2>
      </div>
      <div className='flex flex-col gap-10'>
        <h2 className='text-5xl text-white font-bold bg-blue-500 w-fit'>APIs Projects</h2>
        <div className='flex flex-wrap gap-5 items-center justify-center'>
          {projects.filter(project => project.type == "APIs").map(projectCard => (
            <div className='flex flex-col gap-4 justify-center items-center bg-gray-200 rounded-md pb-4 xl:w-96 hover:scale-105 transition-all'>
              <img src={projectCard.imageUrl} alt="image" className='rounded-t-md'/>
              <div className='flex gap-10 items-center text-blue-500 text-xl'>
                <p className='font-bold'>{projectCard.projectName}</p>
                <LikeOutlined  />
                <GithubOutlined />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-10'>
        <h2 className='text-5xl text-white font-bold bg-blue-500 w-fit' ref={ref}>HTML, CSS & VanillaJs Projects</h2>
        <div className='flex flex-wrap gap-5 items-center justify-center'>
          {projects.filter(project => project.type == "HTML, CSS & VanillaJS").map(projectCard => (
            <div className='flex flex-col gap-4 justify-center items-center bg-gray-200 rounded-md pb-4 xl:w-72 hover:scale-105 transition-all'>
              <img src={projectCard.imageUrl} alt="image" className='rounded-t-md'/>
              <div className='flex gap-10 items-center text-blue-500 text-sm px-3 cursor-pointer'>
                <p className='font-bold'>{projectCard.projectName}</p>
                <LikeOutlined  />
                <GithubOutlined />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=''>
        <h2 className='text-5xl text-white font-bold bg-blue-500 w-fit'>React Projects</h2>

      </div>
    </motion.div>
  )
}

export default Projects