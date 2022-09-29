import React from 'react'
import Reactjs from '../assets/react.png'
import Javascript from '../assets/javascript.png'
import Flask from '../assets/flask.png'
import Django from '../assets/django.png'
import Angular from '../assets/angular.png'
import Python from '../assets/python.png'
import Postgres from '../assets/postgres.png'
import HTML from '../assets/html.png'

const Skills = () => {
    return (
        <div name="skills" className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-[300px]">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
                    <p className="py-4">These are the technologies I can comfortably work with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                       <img className="w-20 mx-auto" src={Django} alt='Django logo' /> 
                       <p className="my-4">Django</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                       <img className="w-20 mx-auto" src={Reactjs} alt='Django logo' /> 
                       <p className="my-4">React</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                       <img className="w-20 mx-auto" src={Python} alt='Django logo' /> 
                       <p className="my-4">Python</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                       <img className="w-20 mx-auto" src={Javascript} alt='Django logo' /> 
                       <p className="my-4">Javascript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                       <img className="w-20 mx-auto" src={Angular} alt='Django logo' /> 
                       <p className="my-4">Angular</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                       <img className="w-20 mx-auto" src={Flask} alt='Django logo' /> 
                       <p className="my-4">Flask</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                       <img className="w-20 mx-auto" src={Postgres} alt='Django logo' /> 
                       <p className="my-4">Posthresql</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                       <img className="w-20 mx-auto" src={HTML} alt='Django logo' /> 
                       <p className="my-4">HTML</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
