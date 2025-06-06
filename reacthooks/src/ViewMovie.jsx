import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Heart, Play} from 'lucide-react'
import SpinnerLoader from './SpinnerLoader'
import ProgressCircle from './ProgressCircle'

function ViewMovie() {
    const {id} = useParams()
    const [movieDetails, setMovieDetails] = useState()
    const [trailerUrl, setTrailerUrl] = useState()
    const [movieTime, setMovieTime] = useState("")
    const [showFavoriteDetails, setShowFavoriteDetails] = useState(false)
    const api_key = "8def2fa47c86a07209cafb1c6eb4409b"

    const getMovieDetailsById = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${api_key}`)
        .then(response => {
            setMovieDetails(response.data)
            console.log("movie info : ", response.data)
        })
        .catch(error => console.log("Error: ", error))
    }

    /*
    const getMovieTrailer = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`)
            .then(response => console.log("trailer: ", response))
            .catch(error => console.log("Error: ", error))
    }
    */
    const getMovieTrailer = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`)
            .then(response => {
                const videos = response.data.results;

                // Try to find the "Official Trailer" on YouTube
                const trailer = videos.find(
                    (video) =>
                        video.type === "Trailer" &&
                        video.site === "YouTube" &&
                        video.official
                );

                // Fallback: get any YouTube trailer if official not found
                const fallbackTrailer = videos.find(
                    (video) => video.type === "Trailer" && video.site === "YouTube"
                );

                const selectedTrailer = trailer || fallbackTrailer;

                if (selectedTrailer) {
                    const trailerUrl = `https://www.youtube.com/watch?v=${selectedTrailer.key}`;
                    console.log("Trailer URL: ", trailerUrl);
                    // Optionally store it in state
                    setTrailerUrl(trailerUrl);
                } else {
                    console.log("No trailer found.");
                }
            })
            .catch(error => {
                console.log("Error fetching trailer: ", error);
            });
    };

    const getMovieTimeInMinutes = (min) => {
        const h = parseInt(min / 60)
        // console.log("hours: ", h)
        const m = parseInt((min/60 - h) * 60)
        // console.log("minutes: ", m)
        setMovieTime(`${h}h ${m}m`)
    }


    useEffect(() => {
        getMovieDetailsById()
        getMovieTrailer()
        
    }, [])

    useEffect(() => {
        if (movieDetails?.runtime) {
            getMovieTimeInMinutes(movieDetails.runtime);
        }
    }, [movieDetails?.runtime]);
  return (

    <div className='mt-20'>
        {
            !movieDetails 
            ? (
                <SpinnerLoader/>
            ): (
                <>
                    <div className='relative h-[87vh] w-full   overflow-hidden '>
                        <img className='w-full h-screen shadow-2xl shadow-black object-cover absolute inset-0 -z-50 left-40' src ={`https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}`}  />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/92 to-black/30 -z-40"  />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent -z-40" />

                        <div className='absolute left-14 top-12 z-10 h-10/12  flex items-center  gap-12 ' >
                            <img className='h-full rounded-lg' src ={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}  />
                            <div className='text-white w-8/12 flex flex-col gap-3 '>
                                <div>
                                    <h1 className='text-4xl text-gray-300 font-thin'> <span className=' font-bold text-white'>{movieDetails?.original_title}</span> (2025) </h1>
                                    <h3 className='text-sm md:text-base text-gray-300 flex items-center gap-1.5 mt-1.5'> 
                                        06/06/2025 ({movieDetails?.origin_country}) 
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
                                        className='bg-gray-900 relative flex justify-center items-center w-10 h-10 rounded-full cursor-pointer'
                                    >
                                        <Heart fill='white' size="15"/>
                                        {
                                            showFavoriteDetails && (
                                                <div className='absolute top-11 bg-red-300 text-black '>hello</div>
                                            )
                                        }
                                    </div>
                                    <div className='group flex justify-center items-center gap-2 text-white hover:text-stone-400 cursor-pointer'>
                                        {/* <Play className='fill-white group-hover:fill-gray-400' size="18" /> */}
                                        <Play className="fill-white group-hover:fill-stone-400" size="18" />
                                        <p className='font-semibold'>Play Trailer</p>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <i className='text-gray-400 mt-1'>{movieDetails?.tagline}</i>
                                    <h3 className='text-lg font-semibold mt-1'>Overview</h3>
                                    <p className='text-base text-gray-300 mt-1'>{movieDetails?.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* once you click you have to show the trailer */}
                    <div>
                        {trailerUrl && (
                            <iframe
                                width="560"
                                height="315"
                                src={trailerUrl.replace("watch?v=", "embed/")}
                                title="YouTube trailer"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                </>
            )
        }
    </div>
  )
}

export default ViewMovie
