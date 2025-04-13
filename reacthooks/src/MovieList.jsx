import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SpinnerLoader from './SpinnerLoader'
import MovieCard from './MovieCard'

function MovieList() {
    const [backendData, setBackendData] = useState([])
    const [error, setError] =useState(null)
    const backendUrl = 'https://nodejs-production-b438.up.railway.app';
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
    return (
    <div className='mt-[360px] pt-20 pb-40 flex flex-wrap gap-10 px-4 justify-between bg-white '>
        
        {backendData.results 
            ? backendData.results.map((v, index) => <MovieCard data = {v} key={index} />)
            : <SpinnerLoader/>
        }
        
    </div>
  )
}

export default MovieList
