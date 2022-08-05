import React from 'react'
import back from '../assets/back.jpeg'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                    <p className='py-6'>Some of my recent projects</p>
                </div>

                {/* container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    
                    {/* grid item */}
                    <div style={{backgroundImage:`url(${back})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className="opacity-8 group-hover:opacity-100">
                           <span className="text-2xl font-bold text-white tracking-wider">
                               Quotes-project
                           </span> 
                           <div className="pt-8 text-center">
                               <a href="https://isaacwach.github.io/quotes-project/">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live link</button>
                               </a>
                               <a href="https://github.com/isaacwach/quotes-project.git">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                               </a>
                           </div>
                        </div>
                    </div>

                    <div style={{backgroundImage:`url(${back})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className="opacity-8 group-hover:opacity-100">
                           <span className="text-2xl font-bold text-white tracking-wider">
                               Github search
                           </span> 
                           <div className="pt-8 text-center">
                               <a href="https://isaacwach.github.io/github-search-app/">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live link</button>
                               </a>
                               <a href="https://github.com/isaacwach/github-search-app.git">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                               </a>
                           </div>
                        </div>
                    </div>

                    <div style={{backgroundImage:`url(${back})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className="opacity-8 group-hover:opacity-100">
                           <span className="text-2xl font-bold text-white tracking-wider">
                               Insta-classic
                           </span> 
                           <div className="pt-8 text-center">
                               <a href="https://zac-insta-connect.herokuapp.com/">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live link</button>
                               </a>
                               <a href="https://github.com/isaacwach/insta-classic.git">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                               </a>
                           </div>
                        </div>
                    </div>

                    <div style={{backgroundImage:`url(${back})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className="opacity-8 group-hover:opacity-100">
                           <span className="text-2xl font-bold text-white tracking-wider">
                               Pizza project
                           </span> 
                           <div className="pt-8 text-center">
                               <a href="https://isaacwach.github.io/pizza-project/">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live link</button>
                               </a>
                               <a href="https://github.com/isaacwach/pizza-project.git">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                               </a>
                           </div>
                        </div>
                    </div>

                    <div style={{backgroundImage:`url(${back})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className="opacity-8 group-hover:opacity-100">
                           <span className="text-2xl font-bold text-white tracking-wider">
                               Delani-studio
                           </span> 
                           <div className="pt-8 text-center">
                               <a href="https://store-center.herokuapp.com/">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live link</button>
                               </a>
                               <a href="https://github.com/isaacwach/store-frontend.git">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                               </a>
                           </div>
                        </div>
                    </div>

                    <div style={{backgroundImage:`url(${back})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className="opacity-8 group-hover:opacity-100">
                           <span className="text-2xl font-bold text-white tracking-wider">
                               Digimex
                           </span> 
                           <div className="pt-8 text-center">
                               <a href="https://isaacwach.github.io/digimex/">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live link</button>
                               </a>
                               <a href="https://github.com/isaacwach/digimex.git">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                               </a>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
