import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import MovieList from './MovieList'
import { ArrowRight, ChevronRight, Play } from 'lucide-react'
// import Nav from './Nav'

function HomePage() {
   
  return (
    <>
    {/* <div className=''>
      <img src='/images/bgImage.png' className=' h-screen w-full  absolute shadow-black shadow-2xl  bottom-0 -z-50 '/>
      <div className='absolute -z-50 inset-0 bg-gradient-to-t from-[#0F0F0F]  to-transparent opacity-90 mix-blend-multiply'></div>
      <div className='absolute top-45 left-15   w-4/12 '>
        <div className=' flex items-end gap-3.5'>
          <p className=' text-6xl font-bold  text-white '>Abominable</p>
        </div>
        <p className='text-white  mt-5 font-normal'>Join Yi and Everest on a magical adventure across stunning landscapes to reunite him with his family — a heartwarming tale of friendship and wonder.</p>
        <div className='flex gap-5 mt-6'>
          <Link target="_blank" to="https://www.youtube.com/watch?v=XrgVtuDRBjM" className='bg-white flex justify-center items-center gap-2 rounded-full  py-2 px-2.5 font-semibold'>
            Watch Now <Play  size={19} fill="black" />
          </Link>
          <div className=' bg-stone-400 text-white flex justify-center items-center gap-2 rounded-full py-2 px-2.5 font-semibold'>
            Details <ChevronRight size={21}/>
          </div>
        </div>
      </div>
      
      <div className='bg-[#0F0F0F] shadow-[#0F0F0F]  shadow-2xl  '>
        <MovieList/>
      </div>
    </div> */}
      <div className="relative h-screen w-full">
        {/* Background image */}
        <img
          src="/images/bgImage.png"
          className="h-full w-full object-cover absolute inset-0 -z-50"
          alt="Banner"
        />

        {/* Gradient overlay on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent -z-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/10 to-transparent -z-40" />

        {/* Hero content */}
        <div className="absolute top-1/4 left-20 w-4/12 text-white z-10">
          <div className="flex items-end gap-3.5">
            <p className="text-6xl font-bold">Abominable</p>
          </div>
          <p className="mt-5 font-normal">
            Join Yi and Everest on a magical adventure across stunning landscapes to
            reunite him with his family — a heartwarming tale of friendship and wonder.
          </p>
          <div className="flex gap-5 mt-6">
            <Link
              target="_blank"
              to="https://www.youtube.com/watch?v=XrgVtuDRBjM"
              className="bg-white text-black flex items-center gap-2 rounded-full py-2 px-3 font-semibold"
            >
              Watch Now <Play size={19} fill="black" />
            </Link>
            <Link
              to={`/movie/431580`}
              className="bg-stone-400 text-white flex items-center gap-2 rounded-full py-2 px-3 font-semibold cursor-pointer">
              Details <ChevronRight size={21} />
            </Link>
          </div>
        </div>

      </div>
      <div className='bg-[#0F0F0F] shadow-[#0F0F0F]  shadow-2xl  '>
        <MovieList/>
      </div>
    </>
  )
}

export default HomePage
