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
    <div>
        <p className='text-4xl mt-32'>hello {id} </p>
        <div className='w-32 h-52 '>
            <img className='w-full h-full' src ={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}  />
        </div>
        <div className=' '>
            <img className='' src ={`https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}`}  />
        </div>
    </div>
  )
}

export default ViewMovie
