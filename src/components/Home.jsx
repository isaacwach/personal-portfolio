import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll';
import ISAAC from '../assets/Isaac2.png'

const Home = ()=> {
    return (
        <div name='home' className="w-full h-screen bg-[#0a192f] sm:pt-[300px] pt-[300px]">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <img className="w-[350px] h-[350px] mx-0 rounded-full" src={ISAAC} alt='Isaac' />
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] border-t-8 border-pink-600 mt-5 pt-4">Isaac Ndirangu</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I am a Full Stack Developer</h2>
                <p className="text-[#8892b0] text-xl">I am competent in Python and Javascript languages. Besides, I have mastered backend development using Django, and frontend using react and angular.</p>
                <div>
                    <button className="text-white group border-2 px-6 py-3 mt-16 flex items-center hover:bg-pink-600 hover:border-orange-400"> <Link to="work">View Work </Link>
                    <span className="group-hover:rorate-90 duration-300">
                    <HiArrowNarrowRight className='ml-3'/> 
                    </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
