

import React, {useState} from 'react'
import { HomeOutlined, UserOutlined, CodeOutlined, ProjectOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import image1 from '../images/mypicture.jpg'

const SideBar = () => {

  return (
    <motion.div
    animate={{y: 0}}
    initial={{y: 20}}
    transition={{duration: 0.5, delay: 0.3}}

    className='fixed bottom-0 top-0 flex flex-col p-4 gap-16 justify-center text-white text-2xl bg-blue-500 h-screen'>
      <a href="#"><HomeOutlined /></a>
      <a href="#about"><UserOutlined /></a>
      <a href="#journey"><CodeOutlined /></a>
      <a href="#projects"><ProjectOutlined /></a>
      <a href="#contact"><MessageOutlined /></a>

    </motion.div>
  )
}

export default SideBar