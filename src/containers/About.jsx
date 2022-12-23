import React, { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import ArtistImage from '../assets/musician.jpg'


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
      className={`fixed overflow-y-auto w-full h-full bg-black/90 z-[9000] inset-0 pt-10 transition-opacity ${true ? "opacity-100" : "opacity-0"}`}>
      <FaTimes onClick={() => setOpenAbout(false)} className='text-red-800 cursor-pointer absolute top-3 left-3 text-3xl md:text-4xl' />
      <div className="">
        <Header
          title="about"
          position="text-center"
          extraStyles="my-[2rem]"
        />
      </div>
      <div className="flex flex-col items-center space-y-12">
        <img className='max-w-[50%]' src={ArtistImage} alt='' />

        <div className='w-full'>

          <div className='max-w-[95%] md:max-w-[88%] lg:max-w-[80%] mx-auto text-left mb-14'>
            <div className="text-4xl sm:text-6xl md:text-8xl mb-3">Davido</div>
            <div className='mb-6'>
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
        <div className="footer bg-black h-12 fixed bottom-0 left-0 right-0 p-5 flex items-center">
          <div className='text-2xl sm:text-4xl'>DZ</div>
        </div>
      </div>
    </motion.div>
  )
}

export default About




