import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SpinnerLoader from './SpinnerLoader'
import MovieCard from './MovieCard'

function MovieList() {
    const [backendData, setBackendData] = useState([])
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

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`)
        .then(response => {
            console.log("this is the list of movies: ", response.data)
            setBackendData(response.data)
        })
        .catch(err => setError(err.message))
    }, [])
    if(error) 
        return <h2 className='text-3xl font-semibold mt-70 bg-white text-center py-30'>Error:{error}</h2>
    return (
    <div className='mt-[490px] relative pt-4 bottom-32 bg-blend-multiply  pb-40 flex flex-wrap gap-10 px-4 justify-between    '>
        {backendData.results 
            ? backendData.results.map((v, index) => <MovieCard data = {v} key={index} />)
            : <SpinnerLoader/>
        }
        
    </div>
  )
}

export default MovieList
