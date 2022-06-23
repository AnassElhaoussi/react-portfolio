

import React, {useState} from 'react'
import { HomeOutlined, UserOutlined, CodeOutlined, ProjectOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import image1 from '../images/mypicture.jpg'

const SideBar = () => {

  return (
    <div className='fixed'>
        <div className='flex flex-col gap-20 bg-blue-500 p-4 w-20 h-screen'>

          <img src={image1} className='rounded-full' alt="" />
          <motion.div 
          animate={{y: 0}} 
          initial={{y: 20}} 
          transition={{duration: 0.5}} 
          className='flex flex-col items-center gap-10 text-3xl text-white cursor-pointer'>

            <a href="#"><HomeOutlined/></a>
            <a href="#about"><UserOutlined /> </a>
            <a href="#journey"><CodeOutlined /></a>
            <a href="#projects"><ProjectOutlined /></a>
            <a href="#contact"><MessageOutlined /></a>

          </motion.div>
      </div>
    </div>
  )
}

export default SideBar