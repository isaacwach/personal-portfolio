import React from 'react'

const About = () =>{
    return (
        <div name="About" className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>Hello, I am Isaac, nice to meet you</p>
                    </div>
                    <div>
                        <p>I am a software engineer that has skills in both the back-end of web applications and the front-end. My previous career as a designer brought me close to my true passion: building web applications. I wasn’t satisfied with only being involved in the visual aspect, and wanted a deeper involvement in building out applications. In the next phase of my career, I not only want to use my design skills to make the application look beautiful, but I also want to work on the technically challenging facets of the application too. At my ideal company, I would work on a small team (5-8 people) that follows best practices like Test Driven Development and pair programming to help me learn and grow as a developer.</p>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default About