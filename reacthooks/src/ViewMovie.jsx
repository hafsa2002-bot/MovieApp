import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ViewMovie() {
    const {id} = useParams()
    const [movieDetails, setMovieDetails] = useState()
    const api_key = "8def2fa47c86a07209cafb1c6eb4409b"

    const getMovieDetailsById = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
        .then(response => {
            setMovieDetails(response.data)
            console.log("movie info : ", response.data)
        })
        .catch(error => console.log("Error: ", error))
    }

    useEffect(() => {
        getMovieDetailsById()
    }, [])

  return (
    <div className='mt-20'>
        <div className='relative h-[90vh] w-full py-8 px-10 '>
            <img className='w-full h-[90vh] object-cover absolute inset-0 -z-50' src ={`https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}`}  />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 -z-40"  />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/10 to-transparent -z-40" />

            <div className='absolute  left-14 top-12 z-10 h-10/12 flex border border-white' >
                <img className=' rounded-lg' src ={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}  />
                <div className='text-white'>
                    <div>
                        <h1> Ballerina (2025) </h1>
                        <h3> 06/06/2025 (US) <div className='w-1 h-1 bg-white rounded-full p-0.5'></div> Action, Thriller, Crime <div className='w-1 h-1 bg-white rounded-full p-0.5'></div> 2h 5m</h3>
                    </div>
                    <div>
                        <div className='' >70%</div>
                        <p>user score</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewMovie
