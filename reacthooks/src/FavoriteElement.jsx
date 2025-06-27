import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Check, Heart, List, X } from 'lucide-react';
import { useContextFunction } from './Context'
import { Link } from 'react-router-dom';
import { format } from 'date-fns'

function FavoriteElement({movie, setSuccessMessage}) {
    // const [movieInfo, setMovieInfo] = useState([]) 
    const api_key = "8def2fa47c86a07209cafb1c6eb4409b"
    const [favorite, setFavorite] = useState(false)
    const {addToFavoritesMovies, setFavoritesMovies, favoritesMovies, addToYourMoviesList} = useContextFunction()
    const [showSuccessMessage, setShowSuccessMessage] = useState({showNotification: false, MovieName: ''})
    const [showAddToListDetails, setShowAddToListDetails] = useState(false)
    const [url, setUrl] = useState()
    const [movieTime, setMovieTime] = useState("")

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
        }
    }

    useEffect(() => {
        const isFavorite = Array.isArray(favoritesMovies) && favoritesMovies.some((fav) => fav.id === movie.id)
        setFavorite(isFavorite)
    }, [favoritesMovies, movie.id])

    useEffect(() => {
        if (!movie.id) return;

        axios
            .get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${api_key}`)
            .then(response => {
                const videos = response.data.results;

                const trailer = videos.find(
                    (video) =>
                    video.type === "Trailer" &&
                    video.site === "YouTube" &&
                    video.official
                );

                const fallbackTrailer = videos.find(
                    (video) => video.type === "Trailer" && video.site === "YouTube"
                );

                const selectedTrailer = trailer || fallbackTrailer;

                if (selectedTrailer) {
                    const trailerUrl = `https://www.youtube.com/watch?v=${selectedTrailer.key}`;
                    setUrl(trailerUrl);
                } else {
                    console.log("No trailer found.");
                }
            })
            .catch(error => {
                console.log("Error fetching trailer: ", error);
            });
    }, [movie.id]);

    const getMovieTimeInMinutes = (min) => {
        const h = parseInt(min / 60)
        // console.log("hours: ", h)
        const m = parseInt((min/60 - h) * 60)
        // console.log("minutes: ", m)
        setMovieTime(`${h}h ${m}m`)
    }

    useEffect(() => {
        if (movie?.runtime) {
            getMovieTimeInMinutes(movie.runtime);
        }
    }, [movie?.runtime]);

    
        
  return (
    <div className='bg-[#1a1a1a] shadow-lg rounded-xl overflow-hidden flex' >
        <Link to={`/movie/${movie.id}`} className='w-32 h-52  '>
            <img className='w-full h-full' src ={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  />
        </Link>
        <div className='p-4 w-10/12 '>
            <Link to={`/movie/${movie.id}`} className='text-xl font-semibold'>{movie.title} <span className='text-base text-gray-400 font-normal'> ( {movie.original_title} ) </span></Link>
            <p className='text-sm text-gray-400'> {formatDate(movie.release_date)} </p>
            <p className='mt-2 text-base text-gray-300 lg:line-clamp-none md:line-clamp-3 sm:line-clamp-2 line-clamp-1'>{movie.overview}</p>
            <div className='flex items-center lg:gap-3 gap-2 mt-4 text-gray-400'>
                <div
                    onClick={(e) => {
                        addToFavoritesFunction(!favorite)
                        e.preventDefault()
                    }}  
                    className='flex items-center gap-2 lg:px-2.5 px-1.5 py-1 hover:bg-[#333] bg-stone-950 rounded-full text-gray-300 hover:text-white text-sm  cursor-pointer' 
                >
                    <Heart 
                        className={`
                            w-5 h-5
                            ${favorite && 'fill-red-600 stroke-red-600'}
                        `}

                    />
                    Favorite
                </div>
                <div
                    onMouseEnter={() => setShowAddToListDetails(true)} 
                    onMouseLeave={() => setShowAddToListDetails(false)}
                    onClick={() => {
                        if(movie){
                            const movieObj = {
                                id: Date.now(),
                                title: movie.original_title || null,
                                date: movie.release_date
                                    ? format(new Date(movie.release_date), "dd/MM/yyyy")
                                    : null,
                                genres: movie.genres || [],
                                url,
                                duration: movieTime || null,
                                photo: movie.poster_path
                                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                    : null,
                            };
                            addToYourMoviesList(movieObj)
                            // setShowSuccessMessage(true)
                            // setTimeout(() => setShowSuccessMessage(false), 1500)
                            setSuccessMessage(`${movie.original_title} added to your list`);
                            setTimeout(() => setSuccessMessage(null), 1500);
                        }
                    }} 
                    className='relative flex items-center gap-2 px-2.5 py-1 hover:bg-[#333] bg-stone-950 rounded-full text-gray-300 hover:text-white text-sm  cursor-pointer' 
                >
                    <List  size="15" />
                    Add to list
                </div>
            </div>
        </div>
    </div>
  )
}

export default FavoriteElement
