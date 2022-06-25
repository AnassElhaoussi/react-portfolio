

import React, {useState} from 'react'
import { HomeOutlined, UserOutlined, CodeOutlined, ProjectOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import image1 from '../images/mypicture.jpg'

const SideBar = () => {

  return (
    <div
    className='z-999 fixed bottom-0 top-0 flex p-4 text-white text-2xl bg-blue-500 h-screen'>
      <motion.div className='flex flex-col justify-center gap-16 ' 
      animate={{y: 0}} 
      initial={{y: 20}} 
      transition={{duration: 0.5, delay: 0.3}}>

        <a href="#"><HomeOutlined /></a>
        <a href="#about"><UserOutlined /></a>
        <a href="#journey"><CodeOutlined /></a>
        <a href="#projects"><ProjectOutlined /></a>
        <a href="#contact"><MessageOutlined /></a>
        
      </motion.div>

    </div>
  )
}

export default SideBar