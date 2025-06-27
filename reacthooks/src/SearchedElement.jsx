import { Camera, Image } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom'

function SearchedElement({movie}) {
    function formatDate(dateStr) {
        return new Date(dateStr).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }
  return (
    <div className='bg-[#1a1a1a] shadow-lg rounded-xl overflow-hidden flex' >
        <Link onClick={() => window.scrollTo(0, 0)} to={`/movie/${movie.id}`} className='w-28 h-46  '>
        {
            movie.poster_path
            ? <img className='w-full h-full' src ={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  />
            : <div className='bg-stone-700 text-stone-500 w-full h-full flex justify-center items-center'> <Image size={50} /> </div>
        }
        </Link>
        <div className='p-4 w-10/12 '>
            <Link to={`/movie/${movie.id}`} className='text-xl font-semibold'>{movie.title} <span className='text-base text-gray-400 font-normal lg:block hidden'> ( {movie.original_title} ) </span></Link>
            <p className='text-sm text-gray-400'> {formatDate(movie.release_date)} </p>
            <p className='mt-2 text-base text-gray-300 h-13 lg:line-clamp-2 line-clamp-1 '>{movie.overview}</p>
        </div>
    </div>
  )
}

export default SearchedElement
