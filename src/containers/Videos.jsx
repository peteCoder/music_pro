import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ReactPlayer from 'react-player'
import { videos as MyVideo } from '../utilities/utils'

import { FaTimes } from 'react-icons/fa'

const BASE_URL = "http://localhost:5173"


const Videos = () => {
    const [playing, setPlaying] = useState(false)
    const [myVideoId, setMyVideoId] = useState("")






    const playVideoAction = (e, video) => {
        setMyVideoId(video)
        setPlaying(true)
    }

    useEffect(() => {
        const body = window.document.body

        if (playing) {
            body.classList.add("remove-scrollbar")
        } else {
            body.classList.remove("remove-scrollbar")
        }
    }, [playing])

    return (
        <div>
            <Header
                title="videos"
                position="text-left"
            />

            {/* 'https://www.youtube.com/embed/' + id + '?showinfo=0&enablejsapi=1&origin=http://localhost:9000'; */}
            <div className="p-6">
                <div className="flex flex-col justify-center items-center w-full space-y-5">
                    {playing && (
                        <div className="fixed w-full h-full bg-black/90 z-[9000] inset-0 pt-10">

                            <div className="relative p-7 h-3/4 flex flex-col opacity-0 opacity-100">
                                <div className='h-5 w-full bg-black py-6 px-6 flex justify-between items-center'>
                                    <FaTimes
                                        onClick={() => setPlaying(false)}
                                        className='text-xl sm:text-2xl md:text-3xl cursor-pointer' />
                                    <div className="">Music</div>
                                </div>
                                <ReactPlayer
                                    url={`https://www.youtube.com/watch?v=${myVideoId}`}
                                    // url={'https://www.youtube.com/embed/' + myVideoId + '?showinfo=0&enablejsapi=1&origin=http://localhost:5173/'}
                                    playing
                                    style={{ postion: "absolute", top: "0", left: "0", bottom: "0" }}
                                    width="100%"
                                    height="100%"
                                    controls={true}
                                // loading="lazy"
                                />
                            </div>

                        </div>
                    )}

                    {
                        MyVideo.map((item, index) => (
                            <div key={item.id} className={`flex flex-col  items-center w-full gap-7 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                <img className='w-full md:w-1/2' src={item.image} alt={item.title} />
                                <div className="w-full md:w-1/2 text-center flex flex-col space-y-2">
                                    <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl">{item.title}</div>
                                    <div className="text-xl md:text-2xl lg:text-3xl">{item.artist}</div>
                                    <div className='p-6'>
                                        <button
                                            onClick={(e) => playVideoAction(e, item.youtube)}
                                            className='inline-block h-12 w-full text-lg xl:text-xl 
                                                text-white bg-transparent mt-4 border 
                                                hover:bg-white hover:text-black rounded-sm ease-in-out transition-all duration-300'
                                        >play video</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>

        </div>
    )
}

export default Videos