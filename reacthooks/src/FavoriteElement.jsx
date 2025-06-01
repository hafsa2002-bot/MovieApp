import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Heart, X } from 'lucide-react';

function FavoriteElement({movie}) {
    const [movieInfo, setMovieInfo] = useState([]) 
    const api_key = "8def2fa47c86a07209cafb1c6eb4409b"

    function formatDate(dateStr) {
        return new Date(dateStr).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }
    /*
    const getMovieDetailsById = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${api_key}`)
        .then(response => console.log("movie info : ", response.data))
        .catch(error => console.log("Error: ", error))
    }
    useEffect(() => {
        getMovieDetailsById()
    }, [])
    */
  return (
    <div className='bg-[#1a1a1a] shadow-lg rounded-xl overflow-hidden flex' >
        <div className='w-32 h-52 '>
            <img className='w-full h-full' src ={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  />
        </div>
        <div className='p-4 w-10/12 '>
            <h2 className='text-xl font-semibold'>{movie.title} <span className='text-base text-gray-400 font-normal'> ( {movie.original_title} ) </span></h2>
            <p className='text-sm text-gray-400'> {formatDate(movie.release_date)} </p>
            <p className='mt-2 text-base text-gray-300'>{movie.overview}</p>
            <div className='flex items-center gap-3 mt-4 text-gray-400'>
                <div className='flex items-center gap-2 px-2.5 py-1 hover:bg-[#333] bg-stone-950 rounded-full text-gray-300 hover:text-white text-sm  cursor-pointer' >
                    <Heart className='w-5 h-5' />
                    Favorite
                </div>
                <div className='flex items-center gap-2 px-2.5 py-1 hover:bg-[#333] bg-stone-950 rounded-full text-gray-300 hover:text-white text-sm cursor-pointer '>
                    <X size={21}/>
                    Remove
                </div>
            </div>
        </div>
    </div>
  )
}

export default FavoriteElement
