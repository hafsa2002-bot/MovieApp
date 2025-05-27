import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import MovieList from './MovieList'
// import Nav from './Nav'

function HomePage() {
   
  return (
    <>
    <div className=''>
      {/* <img src='http://digiflex.themezinho.net/wp-content/uploads/2020/12/page-header-bg.jpg'
        className=' h-[600px] w-full  fixed top-0 -z-50'
      /> */}
      {/* <div className='absolute -z-50 inset-0 bg-black opacity-40'></div>
      <div className='relative top-50 left-15'>
        <div className=' flex items-end gap-3.5'>
          <p className=' text-6xl font-bold  text-white'>Movies</p>
          <div className='rounded-full w-3 h-3 bg-red-600 mb-1'></div>
        </div>
        <p className='text-white text-xl mt-5 font-normal'>All new released Hollywood and world movies here to watch</p>
      </div> */}
      <img src='/images/bgImage.png' className=' h-screen w-full  absolute shadow-black shadow-2xl  bottom-40 -z-50 '/>
      {/* <div className='absolute -z-50 inset-0 bg-black opacity-20 mix-blend-multiply'></div> */}
      <div className='absolute -z-50 inset-0 bg-gradient-to-t from-[#0F0F0F]  to-transparent opacity-90 mix-blend-multiply'></div>

      {/* <div className='relative top-50 left-15'>
        <div className=' flex items-end gap-3.5'>
          <p className=' text-6xl font-bold  text-white'>Movies</p>
          <div className='rounded-full w-3 h-3 bg-red-600 mb-1'></div>
        </div>
        <p className='text-white text-xl mt-5 font-normal'>All new released Hollywood and world movies here to watch</p>
      </div> */}
      <div className='bg-[#0F0F0F] shadow-[#0F0F0F]  shadow-2xl '>
        <MovieList/>
      </div>
    </div>
    </>
  )
}

export default HomePage
