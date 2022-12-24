import React from 'react'
import Button from './Button'

const ShowItem = ({ title, subTitle, image, buttonText, index, onClick }) => {
    let isEven = index % 2 === 0;

    return (
        <>
            <div className={`flex  ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-5 items-center mt-8 p-2 md:p-0`}>
                <img src={image} className={`m-12 md:m-0 w-full md:w-[40%] rounded-xl ${isEven ? 'md:rounded-l-none' : 'md:rounded-r-none'} `} alt="" />
                <div className="p-7 text-center flex flex-col space-y-3 w-full md:w-[50%]">
                    <p className='font-extrabold text-4xl sm:text-6xl md:text-5xl w-full block uppercase'>{title}</p>
                    <p className='font-normal text-sm sm:text-xl md:text-2xl uppercase'>{subTitle}</p>
                    <Button
                        onClick={onClick}
                        buttonText={buttonText}
                        extraStyles='text-xs sm:text-sm md:text-lg w-[70%] mx-auto mt-12 h-[3rem] flex justify-center items-center shadow-2xl hover:shadow-white/95
                        text-white bg-transparent ease-in-out transition-all duration-300'
                    />
                </div>
            </div>
        </>

    )
}

export default ShowItem

