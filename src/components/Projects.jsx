

import React, { useEffect, useState } from 'react'
import { animate, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { projects } from '../constants/projects'
import { GithubFilled, LikeFilled, LikeOutlined } from '@ant-design/icons'
import { GithubOutlined } from '@ant-design/icons'

const Projects = () => {

  const {ref, inView} = useInView()
  const animation = useAnimation()
  const projectsAnimation = useAnimation()
  const topProjectsArr = []

  topProjectsArr.push(projects[1], projects[7], projects[11], projects[13], projects[3])
   
  console.log(topProjectsArr);

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
        y: 30,
      })
    }
  }, [inView])




  return (
    <motion.div className='flex flex-col gap-20' id='projects' animate={animation}>
      <h1 className='text-center text-5xl font-bold'>Projects</h1>
      <div className='flex flex-col gap-10 '>
        <h2 className='text-5xl text-white font-bold bg-blue-500 w-fit' ref={ref}>Top Projects</h2>
        <motion.div className='flex gap-5 flex-wrap justify-center' animate={projectsAnimation} >
          {topProjectsArr.map(project => (
              <motion.div className='flex flex-col rounded items-center bg-blue-500 xl:w-1/6 lg:w-1/4 md:w-1/3 sm:w-1/3'>
                  <div className=''>
                    <img src={project.imageUrl} alt="" className='rounded-t'/>
                  </div>
                  <div className='flex gap-3 py-2 text-white text-xs'>
                    <p className=''>{project.projectName} </p>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>
                  </div>
              </motion.div>
          ))}
        </motion.div>
        
      </div>
      <div className='flex flex-col gap-10'>
        <h2 className='text-5xl text-white font-bold bg-blue-500 w-fit'>APIs Projects</h2>
        <div className='flex flex-wrap gap-5 items-center justify-center'>
          {projects.filter(project => project.type == "APIs").map((projectCard, id) => (
            <div className='flex flex-col gap-4 justify-center items-center bg-blue-500 rounded-md pb-4 xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-1/2  hover:scale-105 transition-all'>
              <img src={projectCard.imageUrl} alt="image" className='rounded-t-md h-full  '/>
              <div className='flex gap-10 items-center text-gray-100 text-xl px-3'>
                <p className='font-bold'>{projectCard.projectName}</p>
                <a href={projectCard.repo} target="_blank" rel="noopener noreferrer">
                  <GithubOutlined />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-10'>
        <h2 className='text-5xl text-white font-bold bg-blue-500 w-fit' >HTML, CSS & VanillaJs Projects</h2>
        <div className='flex flex-wrap gap-5 items-center justify-center'>
          {projects.filter(project => project.type == "HTML, CSS & VanillaJS").map(projectCard => (
            <div className='flex flex-col gap-4 justify-center items-center bg-blue-500 rounded-md pb-4 xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-1/ hover:scale-105 transition-all'>
              <img src={projectCard.imageUrl} alt="image" className='rounded-t-md h-48 w-96 object-cover'/>
              <div className='flex gap-10 items-center text-gray-100 text-sm px-3 cursor-pointer'>
                <p className='font-bold'>{projectCard.projectName}</p>
                <a href={projectCard.repo} target="_blank" rel="noopener noreferrer">
                  <GithubOutlined />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-10'>
        <h2 className='text-5xl text-white font-bold bg-blue-500 w-fit'>React Projects</h2>
        <div className='flex flex-wrap gap-5 items-center justify-center'>
          {projects.filter(project => project.type == "React Project").map(projectCard => (
            <div className='flex flex-col gap-4 justify-center items-center bg-blue-500 rounded-md pb-4 xl:w-1/4 lg:w-1/3 md:w-1/3 sm:w-1/2 hover:scale-105 transition-all '>
              <div className=''>
                <img src={projectCard.imageUrl == "N/A" ? "https://via.placeholder.com/400" : projectCard.imageUrl} alt="image" className='rounded h-52 w-96 object-cover'/>
              </div>
              <div className='flex gap-10 items-center text-gray-100 text-sm px-3 cursor-pointer'>
                <p className='font-bold'>{projectCard.projectName}</p>
                <a href={projectCard.repo} target="_blank" rel="noopener noreferrer">
                  <GithubOutlined />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects