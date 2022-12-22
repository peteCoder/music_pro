import React from 'react'
import Button from '../components/Button';

import ArtistImage from '../assets/Music12.jpg'
import anotherArtistImage from '../assets/musician.jpg'
import fansArtistImage from '../assets/music812.jpg'
import guitarArtistImage from '../assets/musician2.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Hero = () => {
  return (
    <div className='p-0 m-0 bg-black' id='home'>
      <div
        className='w-full overflow-hidden'
      >

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          // spaceBetween={50}
          slidesPerView={1}
          navigation
        // pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className='relative'>
              <img
                className='w-full h-full object-cover'
                src={ArtistImage}
                alt="image"
              />
              <div className='absolute top-0 left-0 right-0 bottom-0 z-50 flex flex-col justify-center md:items-end items-center space-y-5  p-12'>
                <h2 className='special-text uppercase font-extrabold text-3xl sm:text-5xl lg:text-8xl'>US Tour Dates</h2>
                <h3 className='uppercase font-extrabold text-white text-xs sm:text-sm md:text-lg lg:text-xl'>Get Tickets for the US shows, On Sale Now!</h3>
                <Button href="#" buttonText="get tickets now" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative'>
              <img
                className='w-full h-full object-cover'
                src={guitarArtistImage}
                alt="image"
              />
              <div className='absolute top-0 left-0 right-0 bottom-0 z-50 flex flex-col justify-center md:items-end items-center space-y-5  p-12'>
                <h2 className='special-text uppercase font-extrabold text-3xl sm:text-5xl lg:text-8xl'>US Tour Dates</h2>
                <h3 className='uppercase font-extrabold text-white text-xs sm:text-sm md:text-lg lg:text-xl'>Get Tickets for the US shows, On Sale Now!</h3>
                <Button href="#" buttonText="get tickets now" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  )
}

export default Hero