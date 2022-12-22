import React from 'react'
import {
    Hero,
    Contact,
    Music,
    Shows, 
    News,
    Videos
} from '../containers'
import Background from '../components/Background'

import BgImage from '../assets/musician2.jpg';



const Home = () => {
    return (
        <div className='bg-black text-white
            pt-[4.4rem] sm:pt-[4.6rem] md:pt-[5.1rem]'>
            <Hero />
            <Shows />
            <Background image={BgImage} />
            <Music />
            <Videos />
            <News />
            <Contact />
        </div>
    )
}

export default Home