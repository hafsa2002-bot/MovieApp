import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'


function YourMovies() {
  const style = "border font-semibold text-lg rounded-full px-5 py-2";
  return (
    <div>
      <ul className='mb-10 mt-23 flex justify-center items-center gap-14 mx-auto' >
        <li >
          <NavLink to='/movies/your_list' className={({ isActive }) => isActive ? `${style} text-white bg-blue-950` : `${style} text-blue-950 border border-blue-950`}>Movies</NavLink>
        </li>
        <li>
          <NavLink to='/movies/addMovie'  className={({ isActive }) => isActive ? `${style} text-white bg-blue-950` : `${style} text-blue-950 border border-blue-950`} >Add Movie</NavLink>
        </li>
        <li >
          <NavLink to='/movies/favorites'  className={({ isActive }) => isActive ? `${style} text-white bg-blue-950` : `${style} text-blue-950 border border-blue-950`} >Favorites</NavLink>
        </li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default YourMovies
