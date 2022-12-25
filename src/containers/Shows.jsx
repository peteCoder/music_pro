import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import ShowItem from '../components/ShowItem'
import { shows } from '../utilities/utils'
import { FaTimes } from 'react-icons/fa'

const Shows = () => {
  const [showDetail, setShowDetail] = useState({});
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  return (
    <div id="shows" className=''>
      <Header
        title="shows"
      />

      {/* For Show Detail */}
      <motion.div
        initial={{
          x: "-100%"
        }}
        animate={{
          x: isDetailOpen ? "0" : "100%"
        }}

        className="bg-black fixed top-0 bottom-0 left-0 right-0 z-[9000] w-full h-full">
        <FaTimes className='text-red-800 cursor-pointer fixed top-3 right-8 text-3xl md:text-4xl' onClick={() => setIsDetailOpen(false)} />
        <Header
          title={showDetail.title}
        />

        <div className="">
          
        </div>

      </motion.div>

      <div>
        {shows.map((show, index) => (
          <ShowItem
            onClick={(e) => {
              setIsDetailOpen(true)
              setShowDetail(show)
              console.log(showDetail.title)
            }}
            title={show.title}
            subTitle={show.subTitle}
            image={show.image}
            buttonText={show.buttonText}
            index={index}
            key={show.id}
          />
        ))}

      </div>

    </div>
  )
}

export default Shows