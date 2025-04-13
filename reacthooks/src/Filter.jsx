import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'
import MovieCard from './MovieCard'
import PageNotFound from './PageNotFound'

function Filter() {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("query")
    const [movies, setMovies] = useState([])
    const backendUrl = 'https://nodejs-production-b438.up.railway.app';

    useEffect(() => {
        if(query){
            fetchMovies(query)
        }
    }, [query])
    const fetchMovies = async (query) => {
        try {
            const response = await axios.get(`${backendUrl}/search`, {
                params: {query},
            })
            setMovies(response.data.results)
        } catch(error) {
            console.log("Error fetching movies: ", error)
        }
    }
  return (
    <>
        <Nav/>
        <h2 className='mt-20 text-xl ml-4'>Results for: {query}</h2>
        <div className='mt-4 flex flex-wrap gap-10 px-4 justify-between'>
        
            {movies.length > 0 ? (
                movies.map((movie) => <MovieCard data = {movie} />)
            )
            :(
                <PageNotFound/>
            )}
        </div>
    </>
  )
}

export default Filter

