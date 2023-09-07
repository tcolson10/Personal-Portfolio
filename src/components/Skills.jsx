import React from 'react'
import JavaScript from '../assets/javascript.png';
import Python from '../assets/python.png';
import ReactImg from '../assets/react.png';
import Github from '../assets/github.png';
import CSS from '../assets/css.png';
import HTML from '../assets/html.png';


const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-black  text-gray-400'>

            {/* container */}

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 text-white border-[#0F9D58]'>Skills</p>
                    <p className='py-4 text-blue-400'>These are the technologies that I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto pt-2' src={HTML} alt='Html icon' />
                        <p className='my-4'>HTML</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto pt-2' src={CSS} alt='CSS icon' />
                        <p className='my-4'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto pt-2' src={JavaScript} alt='JavaScript icon' />
                        <p className='my-4'>JavaScript</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto pt-2' src={Python} alt='Python icon' />
                        <p className='my-4'>Python</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto pt-2' src={Github} alt='Github icon' />
                        <p className='my-4'>Github</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto pt-2' src={ReactImg} alt='React icon' />
                        <p className='my-4'>React</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills