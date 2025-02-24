import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function YourMovies() {
  return (
    <div>
      <div className='mt-20 flex justify-center gap-14 mx-auto' >
        <Link to='/movies/your_list' className='border border-blue-950 text-blue-950 font-semibold text-lg rounded-full px-4 py-1'>Movies</Link>
        <Link to='/movies/addMovie' className='border border-blue-950 text-blue-950 font-semibold text-lg rounded-full px-4 py-1' >Add Movie</Link>
        <Link to='/movies/favorites' className='border border-blue-950 text-blue-950 font-semibold text-lg rounded-full px-4 py-1' >Favorites</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default YourMovies
