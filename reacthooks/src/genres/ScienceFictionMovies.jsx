import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from '../MovieCard'
import SpinnerLoader from '../SpinnerLoader'

function ScienceFictionMovies({genreID}) {
    const [movies, setMovies] = useState([])
    const api_key = "8def2fa47c86a07209cafb1c6eb4409b"

    const fetchMovies = (Id) => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${Id}&sort_by=popularity.desc&language=en-US`)
        .then(response => setMovies(response.data.results))
        .catch(error => console.log("Error when fetching popular movies: ", error))
    }

    useEffect(() => {
        fetchMovies(genreID)
    }, [])
  return (
    <div>
        {
            movies ? (
                <div  className=' grid grid-cols-6 gap-10 justify-between   mt-9 '>
                    {movies.map((movie, index) => (
                        // <div></div>
                        <MovieCard data = {movie} key={index} />
                    ))}
                </div>
            ):(
                <SpinnerLoader/>
            )
        }
    </div>
  )
}

export default ScienceFictionMovies
