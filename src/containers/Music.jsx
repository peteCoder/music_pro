import React from 'react'
import Header from '../components/Header'
import MusicItem from '../components/MusicItem'
import { music } from '../utilities/utils'

const Music = () => {
  return (
    <div className='' id='music'>
      <Header
        title="music"
        position="text-right"
      />

      <div className='p-10'>
        <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {music.map((item, index) => (
            <MusicItem music={item} key={index} />
          ))}
        </div>
      </div>


    </div>
  )
}

export default Music