import React from 'react'
import logo from '../../assets/logo-no-bg.png'
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='flex justify-around items-center py-14'>
      <div className='flex flex-col justify-start items-start'>
        <div className='flex gap-2 text-xl items-center justify-center font-semibold'>
        <img src={logo} alt=""  className='h-10'/>
        WhimpsyAI
        </div>
        <p className='p-2 font-medium'>Copyright © 2025 - All rights reserved</p>
        
      </div>
      <div className='text-lg font-semibold'>
        About the Maker
        <br />
        <p className='font-normal '>SHIVANSHU PRAJAPATI</p>
        <div className='flex gap-2 text-2xl font-bold'>
            <a href="https://github.com/ShivanshuPrajapati212" target='_blank'><FaGithub/></a>
            <a href="https://shivanshup.vercel.app/" target='_blank'><CiGlobe/></a>
        </div>
        </div>
    </div>
  )
}

export default Footer
