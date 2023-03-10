import React, { useState } from 'react'
import {
    Hero,
    Contact,
    Music,
    Shows,
    News,
    Videos,
    Footer
} from '../containers'
import Background from '../components/Background'

import BgImage from '../assets/musician2.jpg';
import NeonButton from '../components/NeonButton';
import About from '../containers/About';



const Home = () => {
    const [openAbout, setOpenAbout] = useState(false)


    return (
        <div className='bg-black text-white
            pt-[4.4rem] sm:pt-[4.6rem] md:pt-[5.1rem]'>
            <Hero />
            <NeonButton onClick={() => setOpenAbout(prev => !prev)}>About DZ</NeonButton>
            <About value={[openAbout, setOpenAbout]} />
            <Shows />
            <Background image={BgImage} />
            <Music />
            <Videos />
            <NeonButton onClick={() => setOpenAbout(prev => !prev)}>About DZ</NeonButton>
            {/* <News /> */}
            <Contact />
            <Footer />
        </div>
    )
}

export default Home