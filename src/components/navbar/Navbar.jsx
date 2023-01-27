import React from 'react'
import './navbar.css'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiGithub } from 'react-icons/si'
import { HiDownload } from 'react-icons/hi'


const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='logo'>
        <img src='../../../public/cherry-blossom.png' height='30%' />
      </div>

      <div className='redes-cont'>
        <a href='https://www.linkedin.com/in/florencia-fernandez-fullstack-developer/' target='_blank'>
          <FaLinkedinIn />
        </a>
        <a href='https://github.com/FlorenciaF1' target='_blank'>
          <SiGithub />
        </a>
        <a href='https://drive.google.com/drive/folders/1I60f9hr3DnijEpKePurQ3wtlFtZgR_8_' target='_blank'>
         <HiDownload />
        </a>
      </div>
    </div>
  )
}

export default Navbar