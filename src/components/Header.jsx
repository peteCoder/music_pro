import React from 'react'

const Header = ({ title, position, extraStyles }) => {
  return (
    <div className={`flex flex-col my-[5rem] ${extraStyles}`}>
      <h2 className={`uppercase special-text w-full mt-4 text-6xl sm:text-7xl lg:text-8xl xl:text-9xl px-9 ${position}`}>{title}</h2>
    </div>
  )
}

export default Header