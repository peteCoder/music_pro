import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs';
import { FaSpotify } from 'react-icons/fa'
import { FcMusic } from 'react-icons/fc'

const MusicItem = ({ music }) => {
  return (
    <div className=' bg-black opacity-75 rounded-lg relative overflow-hidden'>
      <img className='rounded-xl w-full h-auto' src={music.image} alt="artist" />
      <div className='absolute top-0 h-full bottom-0 left-0 right-0 p-4 flex flex-col justify-between'>

        <div className='flex'>
          <p className='font-bold text-lg md:text-2xl mr-auto'>{music.title}</p>
          <div className="flex flex-row">
            <FcMusic className='text-xl md:text-3xl' />
            <p className='text-sm md:text-xl'>{music.artist}</p>
          </div>
        </div>
        <a href="#" className='space-y-2'>
          <div className='h-8 md:h-10 w-1/2 mx-auto bg-black hover:bg-white flex z-40 transition-all duration-300
        items-center justify-center rounded-sm cursor-pointer group'>
            <span className='mr-3 text-sm sm:text-lg md:text-xl text-white group-hover:text-green-800 font-extrabold'>Spotify</span>
            <FaSpotify className='text-green-600 text-sm sm:text-lg md:text-xl lg:text-3xl' />
          </div>
        </a>



      </div>


    </div>
  )
}

export default MusicItem