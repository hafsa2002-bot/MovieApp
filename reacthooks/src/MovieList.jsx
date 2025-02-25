import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'
import SpinnerLoader from './SpinnerLoader'

function MovieList() {
    const [backendData, setBackendData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/movies")
        .then(response => {
            console.log("this is the list of movies: ", response.data)
            setBackendData(response.data)
        })
        .catch(err => console.log("Error: ", err))
    }, [])
    return (
    <div className='mt-20 flex flex-wrap gap-10 px-4 justify-between'>
        
        {backendData.results 
            ? backendData.results.map((v, index) => <MovieCard data = {v} key={index} />)
            : <SpinnerLoader/>
        }
        
    </div>
  )
}

export default MovieList
