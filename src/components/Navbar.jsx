import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-8 py-6 text-white'>
      <div className='flex flex-shrink-0 items-center'>
        <h1 className='text-2xl'>&lt; SS /&gt;</h1>
      </div>
      <div className='flex justify-center items-center gap-4 text-3xl'>
        <a href="https://www.linkedin.com/in/syed-sayan-8a1a5228a/" target='_blank' rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Sayan-467" target='_blank' rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/the.sayan.007?igsh=MWk1NnhzZTE5eWlqdQ==" target='_blank' rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
