import React from 'react'
import { Link } from 'react-router-dom'

const NeonButton = ({ children, onClick }) => {
    return (
        <div className="flex items-center justify-center">
            <button onClick={onClick} className='text-lg md:text-2xl hover:bg-pink-500 bg-transparent border text-center 
            border-pink-500 inline-block px-7 py-3 sm:px-14 sm:py-4 hover:shadow-2xl 
            hover:shadow-pink-800 rounded-sm transition-all ease-in-out duration-200'>{children}</button>
        </div>

    )
}

export default NeonButton;
