import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import ArtistImage from '../assets/musician.jpg'
import ArtistAvatar from '../assets/musician2.jpg'

import { FaTwitter, FaTimes, FaInstagram, FaSpotify } from 'react-icons/fa'

const About = ({ value }) => {
  const [openAbout, setOpenAbout] = value

  useEffect(() => {
    const body = window.document.body

    if (openAbout) {
      body.classList.add("remove-scrollbar")
    } else {
      body.classList.remove("remove-scrollbar")
    }
  }, [openAbout])

  return (

    <motion.div
      initial={{ scale: 0 }}
      animate={{
        scale: openAbout ? 1 : 0,
        opacity: openAbout ? 1 : 0.7
      }}
      className={`fixed overflow-y-auto overflow-x-hidden w-full h-full bg-black/90 z-[9000] inset-0 pt-10 transition-opacity ${true ? "opacity-100" : "opacity-0"}`}>
      <FaTimes onClick={() => setOpenAbout(false)} className='text-red-800 cursor-pointer fixed top-3 right-8 text-3xl md:text-4xl' />
      <div className="">
        <Header
          title="about"
          position="text-center"
          extraStyles="my-[2rem]"
        />
      </div>
      <div className="">
        <div className="flex flex-col items-center space-y-12">
          <img className='max-w-[80%] sm:max-w-[70%] md:max-w-[50%] rounded-lg' src={ArtistImage} alt='' />

          <div className='w-full'>

            <div className='max-w-[95%] md:max-w-[88%] lg:max-w-[80%] mx-auto text-left mb-14'>
              <div className="text-4xl sm:text-6xl md:text-8xl mb-3">Dz</div>
              <div className='mb-24'>
                Lorem ipsum dolor sit amet consectetu adipisicing elit. Voluptatem nemo
                repellendus molestiae, laborum a hic impedit iure rem voluptatibus vitae
                recusandae laboriosam ea nostrum natus harum nobis doloribus unde
                deleniti deserunt fuga aperiam ab! Nemo repellendus praesentium eligendi
                repellat ullam?

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo
                repellendus molestiae, laborum a hic impedit iure rem voluptatibus vitae
                recusandae laboriosam ea nostrum natus harum nobis doloribus unde
                deleniti deserunt fuga aperiam ab! Nemo repellendus praesentium eligendi
                repellat ullam?

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo
                repellendus molestiae, laborum a hic impedit iure rem voluptatibus vitae
                recusandae laboriosam ea nostrum natus harum nobis doloribus unde
                deleniti deserunt fuga aperiam ab! Nemo repellendus praesentium eligendi
                repellat ullam?
              </div>

            </div>

          </div>
          <div className="bg-black h-24 w-full fixed bottom-0 left-0 right-0 z-10 flex flex-col justify-center p-5">
            <div className='flex items-center justify-between'>
              <span className='text-xl sm:text-3xl md:text-4xl'>DZ</span>
              <span className='text-xs sm:text-sm md:text-lg'>&copy; Dz copyright. All rights reserved. </span>
              <div className='flex items-center flex-row gap-3 sm:gap-4 md:gap-6'>
                <a href="#">
                  <FaSpotify className='text-sm sm:text-lg md:text-xl lg:text-2xl text-white hover:text-green-500' />
                </a>
                <a href="#">
                  <FaTwitter className='text-sm sm:text-lg md:text-xl lg:text-2xl text-white hover:text-blue-500' />
                </a>
                <a href="#">
                  <FaInstagram className='text-sm sm:text-lg md:text-xl lg:text-2xl text-white hover:text-pink-500' />
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </motion.div>
  )
}

export default About




