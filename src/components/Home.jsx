import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Navbar from './Navbar'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gray-900'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full'>
        <p className='text-[#4285F4] text-2xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-white'>Trevor Colson.</h1>
        <h2 className='text-4xl sm:text-4xl font-bold text-gray-500'>I'm a Full-Time Student and aspiring Software Engineer.</h2>
        {/* <p className='text-white py-4 max-w-[700px]'>I am currently a student at the University of Utah where I am majoring in Information Systems.
          Upon earning my degree, I hope to have a career in software development.</p> */}
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center justify-center hover:bg-[#DB4437] hover:border-[#DB4437]'><Link to="skills" smooth={true} duration={500} >
            View Skills
          </Link>

            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home