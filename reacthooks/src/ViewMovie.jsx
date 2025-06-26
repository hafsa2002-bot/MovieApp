import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Check, Heart, Image, List, Play} from 'lucide-react'
import SpinnerLoader from './SpinnerLoader'
import ProgressCircle from './ProgressCircle'
import { useContextFunction } from './Context'
import Trailer from './Trailer'
import { format } from 'date-fns'
import ViewMoviePhone from './ViewMoviePhone'

function ViewMovie() {
    const {id} = useParams()
    const [favorite, setFavorite] = useState(false)
    const {addToFavoritesMovies, setFavoritesMovies, favoritesMovies} = useContextFunction()
    const [movieDetails, setMovieDetails] = useState()
    const [movieTime, setMovieTime] = useState("")
    const [showFavoriteDetails, setShowFavoriteDetails] = useState(false)
    const [showTrailer, setShowTrailer] = useState(false)
    const [showAddToListDetails, setShowAddToListDetails] = useState(false)
    const api_key = "8def2fa47c86a07209cafb1c6eb4409b"
    const [url, setUrl] = useState()
    const {addToYourMoviesList, moviesList} = useContextFunction()
    const [showMessage, setShowMessage] = useState(false)

    useEffect(() => {
        if (!id) return;

        axios
            .get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`)
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
    }, [id]);

    const getMovieDetailsById = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${api_key}`)
        .then(response => {
            setMovieDetails(response.data)
            console.log("movie info : ", response.data)
        })
        .catch(error => console.log("Error: ", error))
    }

    const getMovieTimeInMinutes = (min) => {
        const h = parseInt(min / 60)
        // console.log("hours: ", h)
        const m = parseInt((min/60 - h) * 60)
        // console.log("minutes: ", m)
        setMovieTime(`${h}h ${m}m`)
    }

    useEffect(() => {
        getMovieDetailsById() 
    }, [id])

    useEffect(() => {
        if (movieDetails?.runtime) {
            getMovieTimeInMinutes(movieDetails.runtime);
        }
    }, [movieDetails?.runtime]);

    const addToFavoritesFunction = (x) => {
        if(x){
            // add to favorite
            setFavorite(true)
            addToFavoritesMovies(movieDetails)
        }else{
          // remove it from favorites
            setFavorite(false)
            const updatedList = favoritesMovies.filter((fav) => fav.id !== Number(id))
            localStorage.setItem('favoritesMovies', JSON.stringify(updatedList))
            setFavoritesMovies(updatedList)
            // showDeleteFromFavoritesMessage(movie.title)
        }
    }

    useEffect(() => {
            const isFavorite = Array.isArray(favoritesMovies) && favoritesMovies.some((fav) => fav.id === Number(id))
            setFavorite(isFavorite)
        }, [favoritesMovies, id])
  return (

    <div className='lg:mt-20 mt-16 '>
        {
            !movieDetails 
            ? (
                <SpinnerLoader/>
            ): (
                <>
                    {/* laptop version */}
                    <div className='relative h-[87vh] w-full overflow-hidden lg:flex hidden '>
                        {
                            movieDetails?.backdrop_path
                            ?   <img className='w-full h-screen shadow-2xl shadow-black object-cover absolute inset-0 -z-50 left-40' src ={`https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}`}  />
                            :   <div className='bg-white'></div>   
                        }
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/92 to-black/30 -z-40"  />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent -z-40" />

                        <div className='absolute left-14 top-12 z-10 h-10/12 flex items-center  gap-12 ' >
                        {
                            movieDetails?.poster_path
                            ?   <img className='h-full rounded-lg' src ={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}  />
                            :   <div className='bg-stone-400 text-stone-500 flex justify-center items-center h-full rounded-lg w-96'> <Image size={100} /> </div>
                        }
                            <div className='text-white w-8/12 flex flex-col gap-3 '>
                                <div>
                                    <h1 className='text-4xl text-gray-300 font-thin'> <span className=' font-bold text-white'>{movieDetails?.original_title}</span> ({movieDetails?.release_date && format(new Date(movieDetails.release_date), "yyyy")})</h1>
                                    <h3 className='text-sm md:text-base text-gray-300 flex items-center gap-1.5 mt-1.5'> 
                                        <span> {movieDetails?.release_date && format(new Date(movieDetails.release_date), "dd/MM/yyyy")} </span> ({movieDetails?.origin_country[0]}) 
                                        <div className='w-1 h-1 bg-white rounded-full p-0.5'></div> 
                                        <p>{movieDetails?.genres.map(genre => genre.name).join(', ')}</p>
                                        <div className='w-1 h-1 bg-white rounded-full p-0.5'></div>                                         {/* {getMovieTimeInMinutes(movieDetails?.runtime)} */}
                                        <p className=''>{movieTime}</p>
                                    </h3>
                                </div>
                                <div className='flex items-center gap-2.5'>
                                    <ProgressCircle percent={Math.round(movieDetails?.vote_average * 10)} />
                                    <p className='text-xl font-semibold '>User Score</p>
                                </div>
                                <div className='flex items-center gap-6 mt-1.5'>
                                    <div
                                        onMouseEnter={() => setShowFavoriteDetails(true)} 
                                        onMouseLeave={() => setShowFavoriteDetails(false)}
                                        onClick={() => addToFavoritesFunction(!favorite)}
                                        className={`bg-gray-900 relative flex justify-center items-center w-10 h-10 rounded-full cursor-pointer`}
                                    >
                                        <Heart size="15" className={`${favorite ? 'fill-red-600 stroke-red-600' : 'fill-white'}`}/>
                                        {
                                            showFavoriteDetails && (
                                                <div className='absolute top-12 bg-gray-900 text-sm text-white w-32 rounded-md px-1 py-1 text-center '>Mark as favorite</div>
                                            )
                                        }
                                    </div>
                                    <div
                                        onMouseEnter={() => setShowAddToListDetails(true)} 
                                        onMouseLeave={() => setShowAddToListDetails(false)}
                                        onClick={() => {
                                            if(movieDetails){
                                                const movie = {
                                                    id: Date.now(),
                                                    title: movieDetails.original_title || null,
                                                    date: movieDetails.release_date
                                                        ? format(new Date(movieDetails.release_date), "dd/MM/yyyy")
                                                        : null,
                                                    genres: movieDetails.genres || [],
                                                    url,
                                                    duration: movieTime || null,
                                                    photo: movieDetails.poster_path
                                                        ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                                                        : null,
                                                };
                                                addToYourMoviesList(movie)
                                                setShowMessage(true)
                                                setTimeout(() => setShowMessage(false), 1500)
                                            }
                                        }}
                                        className={`bg-gray-900 relative flex justify-center items-center w-10 h-10 rounded-full cursor-pointer`}
                                    >
                                        <List size="15" />
                                        {
                                            showAddToListDetails && (
                                                <div className='absolute top-12 bg-gray-900 text-white w-24 rounded-md px-1 py-1 text-center text-sm '>Add to list</div>
                                            )
                                        }
                                    </div>
                                    <div 
                                        onClick={() => setShowTrailer(true)}
                                        className='group flex justify-center items-center gap-2 text-white hover:text-stone-400 cursor-pointer'
                                    >
                                        {/* <Play className='fill-white group-hover:fill-gray-400' size="18" /> */}
                                        <Play className="fill-white group-hover:fill-stone-400" size="18" />
                                        <p className='font-semibold'>Play Trailer</p>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <i className='text-gray-400 mt-1'>{movieDetails?.tagline}</i>
                                    <h3 className='text-lg font-semibold mt-1'>Overview</h3>
                                    {
                                        movieDetails?.overview
                                        ? <p className='text-base text-gray-300 mt-1'>{movieDetails?.overview}</p>
                                        : (
                                            <>
                                                <p className='mt-1.5'>We don't have an overview translated in English. </p>
                                                <p className='mt-2'>We don't have any crew added to this movie. </p>
                                            </>
                                        )
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <ViewMoviePhone 
                        movieDetails={movieDetails}
                        movieTime={movieTime} 
                        showFavoriteDetails={showFavoriteDetails}
                        setShowFavoriteDetails={setShowFavoriteDetails}
                        addToFavoritesFunction={addToFavoritesFunction}
                        favorite={favorite}
                        showAddToListDetails={showAddToListDetails}
                        setShowAddToListDetails={setShowAddToListDetails}
                        setShowTrailer={setShowTrailer}
                    />

                    {showTrailer && <Trailer id={id} setShowTrailer={setShowTrailer} setUrl={setUrl} /> }
                    {
                        showMessage && 
                            <div className='bg-stone-800 shadow text-stone-300 fixed z-50 top-24 right-5 border border-stone-300 rounded-lg flex justify-center items-center gap-2 p-3'>
                                <div className='w-5 h-5 bg-green-700 rounded-full flex items-center justify-center'>
                                    <Check className='text-white' size={17}/>
                                </div>
                                <p>{movieDetails?.original_title} added to you list</p>
                            </div>
                    }
                </>
            )
        }
    </div>
  )
}

export default ViewMovie
