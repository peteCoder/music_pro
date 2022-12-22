import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({extraStyles, href, buttonText}) => {
  return (
    <div className='mt-3'>
      <NavLink
        to={href}
        className={`border-white border px-9 py-3 md:px-10 md:py-4 inline-block capitalize
          text-white font-normal text-xs sm:text-sm md:text-lg bg-transparent hover:bg-white hover:text-black transition-colors ease-in-out ${extraStyles}`}
      >
        {buttonText}
      </NavLink>
    </div>
  )
}

export default Button