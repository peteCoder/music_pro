import React from 'react'
import { FaTwitter, FaInstagram, FaSpotify } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="bg-black h-24 w-full z-10 flex flex-col justify-center p-5" id='footer'>
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
    )
}

export default Footer