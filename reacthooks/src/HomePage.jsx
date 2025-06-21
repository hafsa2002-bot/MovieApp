import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import MovieList from './MovieList'
import { ArrowRight, ChevronRight, Play } from 'lucide-react'
// import Nav from './Nav'

function HomePage() {
   
  return (
    <>
      <div className="relative lg:h-screen h-[90vh] w-full">
        {/* Background image */}
        <img
          src="/images/bgImage.png"
          className="h-full w-full lg:object-cover object-fill absolute inset-0 -z-50"
          alt="Banner"
        />

        {/* Gradient overlay on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 lg:via-black/40 via-black/60 lg:to-transparent to-black/20 -z-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] lg:via-black/10 via-black/30 lg:to-transparent to-black/10 -z-40" />

        {/* Hero content */}
        <div className="absolute lg:top-1/4 top-1/4 lg:left-20 left-10 lg:w-4/12 w-10/12 text-white z-10">
          <div className="flex items-end gap-3.5">
            <p className="lg:text-6xl text-5xl font-bold">Abominable</p>
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
              className="bg-stone-700 text-white flex justify-center items-center gap-2 rounded-full py-2 px-3 font-semibold cursor-pointer">
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
