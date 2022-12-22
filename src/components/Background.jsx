import React from 'react'


const Background = ({ image }) => {
  return (
    <div className='w-full h-[55vh] bg-no-repeat bg-cover bg-center relative bg-fixed mt-40' style={{ backgroundImage: `url(${image})` }} >
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-red-900/80"></div>
    </div>
  )
}

export default Background