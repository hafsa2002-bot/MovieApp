import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SpinnerLoader from './SpinnerLoader'
import MovieCard from './MovieCard'

function MovieList() {
    const [backendData, setBackendData] = useState([])
    const [trendingMovies, setTrendingMovies] = useState([])
    const [error, setError] =useState(null)
    const api_key = "8def2fa47c86a07209cafb1c6eb4409b"
    /*
    const backendUrl = 'https://movieapp-production-5727.up.railway.app';

    useEffect(() => {
        axios.get(`${backendUrl}/movies`)
        .then(response => {
            console.log("this is the list of movies: ", response.data)
            setBackendData(response.data)
        })
        .catch(err => setError(err.message))
    }, [])
    if(error) 
        return <h2 className='text-3xl font-semibold mt-70 bg-white text-center py-30'>Error:{error}</h2>
    */
    const getTrendingMoviesList = () => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`)
            .then(response => {
                console.log("TMDB trending data:", response.data);
                setTrendingMovies(response.data.results)
            })
            .catch(error => console.log("error: fetching trending movies", error))
    }

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`)
        .then(response => {
            console.log("this is the list of movies: ", response.data)
            setBackendData(response.data)
        })
        .catch(err => setError(err.message))
    }, [])

    useEffect(() => {
        getTrendingMoviesList()
    }, [])
    if(error) 
        return <h2 className='text-3xl font-semibold mt-70 bg-white text-center py-30'>Error:{error}</h2>
    return (
        <div className='mt-[640px] relative bottom-44 pt-4  bg-blend-multiply   pb-40  px-10'>
            {/* trending movies */}
            <section className='mb-12'>
                <h1 className='text-white text-2xl font-semibold mb-5'>Trending Movies</h1>
                <div  className='grid grid-cols-6'>
                    {
                        trendingMovies?.slice(0, 6).map((movie, index) => (
                            // <div>{movie}</div>
                            // <MovieCard data = {movie} key={index} />
                            <div className='rounded-xl overflow-hidden h-64 w-48'>
                                <img className='h-full w-full' src ={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}   />
                            </div>
                        ))
                    }
                </div>
            </section>
            <div className=' flex flex-wrap gap-10 justify-between    '>
                {backendData.results 
                    ? backendData.results.map((v, index) => <MovieCard data = {v} key={index} />)
                    : <SpinnerLoader/>
                }
                
            </div>
        </div>
  )
}

export default MovieList
