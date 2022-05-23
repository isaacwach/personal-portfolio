import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll';

const Home = ()=> {
    return (
        <div name='home' className="w-full h-screen bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Isaac Ndirangu</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I am a Full Stack Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I recently graduated from college with a degree in computer science with a focus in machine learning. I’m particularly interested in how machine learning can be used in the healthcare industry, which is why I’m looking for a job as a software engineer at a health tech company.</p>
                <div>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-orange-400"> <Link to="work">View Work </Link>
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
