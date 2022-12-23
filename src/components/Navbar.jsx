import React, { useState } from 'react'
import { links } from '../utilities/utils'
import { motion } from 'framer-motion'
import { NavLink, Link } from 'react-router-dom'
import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaInstagram, FaSpotify, FaMailBulk } from 'react-icons/fa'

const Navbar = () => {

  const [openNavBar, setOpenNavBar] = useState(false);


  return (
    <>
      {/* Desktop Nav */}
      <motion.div
        className='min-h-[2rem] w-full p-4 fixed z-[1000] bg-black'
      >
        <div className='flex justify-between items-center'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl mr-auto font-bold uppercase text-white'>Dz</h2>
          <div className='flex flex-col items-end space-y-3'>
            <ul className='hidden md:flex space-x-5 mx-auto'>
              {links.map((item) => (
                <li key={item.id}>
                  <motion.a
                    className='text-lg relative uppercase text-white
                    after:inline after:absolute after:-bottom-1 after:left-0 after:h-[2px] 
                    after:w-0 after:hover:w-full after:transition-all after:duration-300 after:bg-white'
                    href={`#${item.id}`}>
                    {item.title}
                  </motion.a>
                </li>
              ))}
            </ul>
            <ul className='md:flex flex-wrap space-x-2 hidden'>
              <Link to='' className='socials h-8 w-8'>
                <FaFacebookF className='social-icons' />
              </Link>
              <Link className='socials h-8 w-8'>
                <FaTwitter className='social-icons' />
              </Link>
              <Link className='socials h-8 w-8'>
                <FaInstagram className='social-icons' />
              </Link>
              <Link className='socials h-8 w-8'>
                <FaMailBulk className='social-icons' />
              </Link>
              <Link className='socials h-8 w-8'>
                <FaSpotify className='social-icons' />
              </Link>
            </ul>
          </div>

          <FaBars
            onClick={() => setOpenNavBar((prev) => !prev)}
            className='md:hidden block text-4xl cursor-pointer text-white p-1'
          />
        </div>
      </motion.div>

      {/* Mobile Nav */}
      <div className={`${openNavBar ? 'block' : 'hidden'} md:hidden fixed top-0 bottom-0 left-0 right-0 bg-black/70 z-[1500]`}></div>
      <motion.div
        animate={{ x: openNavBar ? 0 : -1000 }}
        initial={{ x: 0 }}
        transition={{ type: "spring", stiffness: 70, when: "beforeChildren" }}

        className='flex md:hidden border flex-col justify-between w-full sm:w-3/5 h-screen 
          fixed top-0 left-0 z-[2000] p-5 dark:bg-black bg-white'
      >
        <div className='flex items-center flex-row-reverse justify-between'>
          <div
            onClick={() => setOpenNavBar(false)}
            className='bg-black absolute top-0 right-0 w-[3rem] h-[3rem] flex justify-center items-center'>
            <FaTimes className='text-4xl cursor-pointer text-white p-1' />
          </div>

          <h2 className='text-3xl sm:text-4xl md:text-6xl mr-auto font-bold uppercase dark:text-white text-black'>Dz</h2>
        </div>

        <motion.div 
          className='flex flex-col justify-start items-start'>
          {links.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpenNavBar(false)}
              className='font-light text-2xl sm:text-4xl lg:text-4xl my-4 relative after:inline 
                after:absolute after:-bottom-2 after:left-0 after:h-[2px] 
                after:w-full after:bg-black  text-black'
            >{item.title}</motion.a>
          ))}
        </motion.div>

        <div className='flex flex-wrap w-full justify-center space-x-7'>
          <Link to='' className='socials'>
            <FaFacebookF className='social-icons text-black' />
          </Link>
          <Link to='' className='socials'>
            <FaTwitter className='social-icons text-black' />
          </Link>
          <Link to='' className='socials'>
            <FaInstagram className='social-icons text-black' />
          </Link>
          <Link to='' className='socials'>
            <FaMailBulk className='social-icons text-black' />
          </Link>
          <Link to='' className='socials'>
            <FaSpotify className='social-icons text-black' />
          </Link>
        </div>

      </motion.div>
    </>
  )
}

export default Navbar