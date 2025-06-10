import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Check, Heart, X } from 'lucide-react';
import { useContextFunction } from './Context'
import { Link } from 'react-router-dom';

function FavoriteElement({movie}) {
    // const [movieInfo, setMovieInfo] = useState([]) 
    // const api_key = "8def2fa47c86a07209cafb1c6eb4409b"
    const [favorite, setFavorite] = useState(false)
    const {addToFavoritesMovies, setFavoritesMovies, favoritesMovies} = useContextFunction()
    const [showMessage, setShowMessage] = useState({showNotification: false, MovieName: ''})

    function formatDate(dateStr) {
        return new Date(dateStr).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }
    const addToFavoritesFunction = (x) => {
        if(x){
            // add to favorite
            setFavorite(true)
            addToFavoritesMovies(movie)
        }else{
          // remove it from favorites
            setFavorite(false)
            const updatedList = favoritesMovies.filter((fav) => fav.id !== movie.id)
            localStorage.setItem('favoritesMovies', JSON.stringify(updatedList))
            setFavoritesMovies(updatedList)
            // showDeleteFromFavoritesMessage(movie.title)
        }
    }

    useEffect(() => {
        const isFavorite = Array.isArray(favoritesMovies) && favoritesMovies.some((fav) => fav.id === movie.id)
        setFavorite(isFavorite)
    }, [favoritesMovies, movie.id])

    
    const showDeleteFromFavoritesMessage = (movieName) => {
        setShowMessage({showNotification: true, MovieName: movieName})
        setTimeout(() => setShowMessage({showNotification: false, MovieName: ''}), 5000)
    }
        
  return (
    <div className='bg-[#1a1a1a] shadow-lg rounded-xl overflow-hidden flex' >
        <Link to={`/movie/${movie.id}`} className='w-32 h-52  '>
            <img className='w-full h-full' src ={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  />
        </Link>
        <div className='p-4 w-10/12 '>
            <Link to={`/movie/${movie.id}`} className='text-xl font-semibold'>{movie.title} <span className='text-base text-gray-400 font-normal'> ( {movie.original_title} ) </span></Link>
            <p className='text-sm text-gray-400'> {formatDate(movie.release_date)} </p>
            <p className='mt-2 text-base text-gray-300'>{movie.overview}</p>
            <div className='flex items-center gap-3 mt-4 text-gray-400'>
                <div
                    onClick={(e) => {
                        addToFavoritesFunction(!favorite)
                        e.preventDefault()
                    }}  
                    className='flex items-center gap-2 px-2.5 py-1 hover:bg-[#333] bg-stone-950 rounded-full text-gray-300 hover:text-white text-sm  cursor-pointer' 
                >
                    <Heart 
                        className={`
                            w-5 h-5
                            ${favorite && 'fill-red-600 stroke-red-600'}
                        `}

                    />
                    Favorite
                </div>
                {/* <div
                    onClick={(e) => {
                        // showDeleteFromFavoritesMessage(movie.title)
                        addToFavoritesFunction(!favorite)
                        e.preventDefault()
                    }} 
                    className='flex items-center gap-2 px-2.5 py-1 hover:bg-[#333] bg-stone-950 rounded-full text-gray-300 hover:text-white text-sm cursor-pointer '>
                    <X size={21}/>
                    Remove
                </div> */}
            </div>
        </div>
        {/* {showMessage.showNotification && (
            <div className='bg-green-700  p-3 rounded-xl text-white fixed top-6 left-6 z-50'>
                <h2 className='font-bold flex gap-1.5 items-center'> 
                    <div className=' p-1 bg-white text-green-700 rounded-full flex justify-center items-center'><Check size={13} /> </div>
                    Success
                </h2>
                <p>{showMessage.MovieName} was removed from favorites</p>
            </div>
        )} */}
    </div>
  )
}

export default FavoriteElement
