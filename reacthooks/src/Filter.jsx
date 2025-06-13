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
    // const backendUrl = 'https://nodejs-production-5727.up.railway.app';
    // const backendUrl = 'https://movieapp-production-5727.up.railway.app';

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

    /*
    app.get("/search", async(req, res) => {
        try {
            const query = req.query.query.toLowerCase()
            if(!query){
                return res.status(400).json({error: "Qurey parameter is required"})
            }
            const response = await axios.get("https://api.themoviedb.org/3/search/movie",
                {
                    params:{
                        api_key: api_key,
                        query: query,
                },
            }
            )
            let movies = response.data.results;
            movies = movies.filter(movie => 
                movie.title.toLowerCase().includes(query)
            )
            res.json({results: movies})
            
        } catch (err) {
            console.log("ERROR fetching movies: ", err.message)
            res.status(500).json({err: "Internal Server Error"})
        }
    })
    */
  return (
    <div className='mt-10'>
        {/* <Nav/> */}
        <h2 className=' text-xl'>Results for: {query}</h2>
        <div className='mt-4 flex flex-wrap gap-10 justify-between'>
        
            {movies.length > 0 ? (
                movies.map((movie) => <MovieCard data = {movie} />)
            )
            :(
                <PageNotFound/>
            )}
        </div>
    </div>
  )
}

export default Filter

