import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../MovieCard'
import SpinnerLoader from '../SpinnerLoader'

function PopularMovies() {
    const [popularMovies, setPopularMovies] = useState([])
    const api_key = "8def2fa47c86a07209cafb1c6eb4409b"

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`)
        .then(response => {
            console.log("this is the list of movies: ", response.data.results)
            setPopularMovies(response.data.results)
        })
        .catch(err =>console.log("Error when fetching all movies: ", err))
    }, [])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`)
            .then(response => console.log("list of genres: ", response.data))
            .catch(error => console.log("Error: ", error))
    }, [])
    /*
        {id: 28, name: 'Action'}
        {id: 12, name: 'Adventure'}
        {id: 16, name: 'Animation'}
        {id: 35, name: 'Comedy'}
        {id: 80, name: 'Crime'}
        {id: 99, name: 'Documentary'}
        {id: 18, name: 'Drama'}
        {id: 10751, name: 'Family'}
        {id: 14, name: 'Fantasy'}
        {id: 36, name: 'History'}
        {id: 27, name: 'Horror'}
        {id: 10402, name: 'Music'}
        {id: 9648, name: 'Mystery'}
        {id: 10749, name: 'Romance'}
        {id: 878, name: 'Science Fiction'}
        {id: 10770, name: 'TV Movie'}
        {id: 53, name: 'Thriller'}
        {id: 10752, name: 'War'}
        {id: 37, name: 'Western'}
     */
    /*
    const fetchPopularMovies = (Id) => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${Id}&sort_by=popularity.desc&language=en-US`)
        .then(response => setPopularMovies(response.data.results))
        .catch(error => console.log("Error when fetching popular movies: ", error))
    }

    useEffect(() => {
        fetchPopularMovies(genreID)
    }, [])
    */
  return (
    <div >
        {
            popularMovies ? (
                <div  className=' grid grid-cols-6 gap-10 justify-between   mt-9 '>
                    {popularMovies.map((movie, index) => (
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

export default PopularMovies
