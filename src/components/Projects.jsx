

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
  const [firstCount, setFirstCount] = useState(0)
  const [secondCount, setSecondCount] = useState(0)
  const [clicked, setClicked] = useState(false)

 useEffect(() => {
   console.log(projects.map(project => project.Likes));
 }, [clicked])

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


  const firstIncrementer = (card) => {
    setClicked(!clicked)

    if(clicked){
      setFirstCount(firstCount + 1)
      card.Likes = firstCount

    } else {
      setFirstCount(0)
      card.Likes = firstCount
    }
  }

  const secondIncrementer = (card) => {
    setClicked(!clicked)
  
    if(clicked){
      setSecondCount(secondCount + 1)
      card.Likes = secondCount

    } else {
      setSecondCount(0)
      card.Likes = secondCount
    }

    
  }

  return (
    <motion.div className='flex flex-col gap-8' id='projects' animate={animation}>
      <h1 className='text-center text-5xl font-bold'>Projects</h1>
      <div className=''>
        <h2 className='text-5xl text-white font-bold bg-blue-500 w-fit'>Top Projects</h2>
      </div>
      <div className='flex flex-col gap-10'>
        <h2 className='text-5xl text-white font-bold bg-blue-500 w-fit'>APIs Projects</h2>
        <div className='flex flex-wrap gap-5 items-center justify-center'>
          {projects.filter(project => project.type == "APIs").map((projectCard, id) => (
            <div className='flex flex-col gap-4 justify-center items-center bg-gray-200 rounded-md pb-4 xl:w-96 xl:h-64 hover:scale-105 transition-all'>
              <img src={projectCard.imageUrl} alt="image" className='rounded-t-md h-full  '/>
              <div className='flex gap-10 items-center text-blue-500 text-xl px-3'>
                <p className='font-bold'>{projectCard.projectName}</p>
                <div className='flex gap-3 items-center justify-center'>
                  <LikeFilled onClick={() => firstIncrementer(projectCard)} />
                  <h3 className=''>{projectCard.Likes}</h3>
                </div>
                <button><GithubOutlined /></button> 
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-10'>
        <h2 className='text-5xl text-white font-bold bg-blue-500 w-fit' ref={ref}>HTML, CSS & VanillaJs Projects</h2>
        <div className='flex flex-wrap gap-5 items-center justify-center'>
          {projects.filter(project => project.type == "HTML, CSS & VanillaJS").map(projectCard => (
            <div className='flex flex-col gap-4 justify-center items-center bg-gray-200 rounded-md pb-4 xl:w-72 xl:h-52 hover:scale-105 transition-all'>
              <img src={projectCard.imageUrl} alt="image" className='rounded-t-md h-full'/>
              <div className='flex gap-10 items-center text-blue-500 text-sm px-3 cursor-pointer'>
                <p className='font-bold'>{projectCard.projectName}</p>
                <div className='flex gap-3 items-center'>
                  <LikeFilled onClick={() => secondIncrementer(projectCard)}/>
                  <h3>{projectCard.Likes} </h3>
                </div>
                <GithubOutlined  />
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