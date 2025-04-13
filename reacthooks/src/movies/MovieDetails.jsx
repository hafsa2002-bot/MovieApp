import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Play} from 'lucide-react'
import axios from 'axios'
import PageNotFound from '../PageNotFound'

function MovieDetails(props) {
    const {id} = useParams()
    const [movie, setMovie] = useState([])
    const [showTrailer, setShowTrailer] = useState(false)
    const backendUrl = 'https://nodejs-production-b438.up.railway.app';
    useEffect(() => {
        console.log("movie: ", movie)
        axios.get(`${backendUrl}/movies/${id}`)
        .then(response => {
            // console.log("this is the details of the movie", response.data)
            const movieData = response.data;
                if (movieData.trailer) {
                    const videoId = movieData.trailer.split("v=")[1]?.split("&")[0];
                    movieData.trailer = `https://www.youtube.com/embed/${videoId}`;
                }
                
                setMovie(movieData);
        })
        .catch(err => console.log("Error : ", err))
    }, [])
    const Trailer = () => {
        setShowTrailer(true)
    }
    if(movie.length === 0) return <PageNotFound/>
  return (
    <div className='m-10'>
        <div className='flex gap-20 items-center justify-center'>
            {
                (!showTrailer ) && <img src={`${backendUrl}${movie.moviePhoto}`} className='rounded-lg' />
            }
            
            <div className='flex flex-col gap-4'>
                <p className='my-2 text-5xl font-semibold' >{movie.movieName}</p>
                <p><strong>Release date: </strong>{movie.movieDate ? movie.movieDate.slice(0,10) : " "}</p>
                <div className='flex gap-6'>
                    <button 
                        onClick={Trailer} 
                        className='border px-10 py-2 mt-3 rounded-3xl bg-blue-950 text-white font-semibold flex gap-2 items-center'
                        >
                            <Play size={20} /> Watch Trailer
                    </button>
                </div>
            </div>   
                {showTrailer && movie.trailer && (
                    <div className="mt-5 ">
                        <iframe 
                            width="500" 
                            height="250" 
                            src={movie.trailer}
                            title="Movie Trailer"
                            frameBorder="0"
                            allowFullScreen
                            className='rounded-xl'
                        ></iframe>
                    </div>
                )}
            
        </div>
    </div>
  )
}

export default MovieDetails
