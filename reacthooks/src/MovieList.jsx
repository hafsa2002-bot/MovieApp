import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SpinnerLoader from './SpinnerLoader'
import MovieCard from './MovieCard'
import { ArrowRight, ChevronRight, Heart } from 'lucide-react'
import MoviesWithFilter from './MoviesWithFilter'

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
        getTrendingMoviesList()
    }, [])
    if(error) 
        return <h2 className='text-3xl font-semibold mt-70 bg-white text-center py-30'>Error:{error}</h2>
    return (
        <div className=' relative bottom-44 pt-4  bg-blend-multiply   pb-40  px-10'>
            {/* trending movies */}
            <section className='mb-12'>
                <div className='flex items-center mb-5 justify-between'>
                    <h1 className='text-white text-2xl font-semibold '>Trending Movies</h1>
                    <div className='flex items-center gap-1.5 text-stone-300 pr-2 cursor-pointer font-semibold'> See more <ArrowRight size={21} /></div>
                </div>
                <div  className='grid grid-cols-6'>
                    {
                        trendingMovies?.slice(0, 6).map((movie, index) => (
                            // <div>{movie}</div>
                            // <MovieCard data = {movie} key={index} />
                            <div className=' relative rounded-xl overflow-hidden h-64 w-48'>
                                <img className='h-full w-full' src ={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}   />
                                {/* <div className='bg-gray-200 rounded-full flex justify-center items-center absolute p-1.5 top-2 right-2' >
                                    gray-200 => #e5e7eb 
                                    <Heart color="#1f2937"  />
                                </div> */}
                                <div className="group bg-gray-200 rounded-full flex justify-center items-center absolute p-1.5 top-2 right-2 cursor-pointer">
                                    <Heart
                                        className="stroke-gray-800 group-hover:fill-red-500 group-hover:stroke-red-500 transition duration-100"
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <MoviesWithFilter/>
        </div>
  )
}

export default MovieList
