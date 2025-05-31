import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SpinnerLoader from './SpinnerLoader'
import MovieCard from './MovieCard'


function MoviesWithFilter() {
    const [backendData, setBackendData] = useState([])
     const api_key = "8def2fa47c86a07209cafb1c6eb4409b"
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`)
        .then(response => {
            console.log("this is the list of movies: ", response.data)
            setBackendData(response.data)
        })
        .catch(err => setError(err.message))
    }, [])
  return (
    <div>
        {/* <div className=' flex flex-wrap gap-10 justify-between    '>
            {backendData.results 
                ? backendData.results.map((v, index) => <MovieCard data = {v} key={index} />)
                : <SpinnerLoader/>
            }
            
        </div> */}
        <section className=''>
            <div className='flex gap-3' >
                <div className='rounded-full bg-white px-3 py-1 font-semibold'>All Popular</div>
                <div className='rounded-full bg-stone-700 text-white px-3 py-1 font-semibold' >Action</div>
                <div className='rounded-full bg-stone-700 text-white px-3 py-1 font-semibold'>Animation</div>
                <div className='rounded-full bg-stone-700 text-white px-3 py-1 font-semibold'>Adventure</div>
                <div className='rounded-full bg-stone-700 text-white px-3 py-1 font-semibold'>Horror</div>
                <div className='rounded-full bg-stone-700 text-white px-3 py-1 font-semibold'>Documentary</div>
                <div className='rounded-full bg-stone-700 text-white px-3 py-1 font-semibold'>Romance</div>
                <div className='rounded-full bg-stone-700 text-white px-3 py-1 font-semibold'>Kids</div>
                <div className='rounded-full bg-stone-700 text-white px-3 py-1 font-semibold'>Comedy</div>
            </div>
            <div className=' grid grid-cols-6 gap-10 justify-between   mt-9 '>
                {backendData.results 
                    ? backendData.results.map((v, index) => <MovieCard data = {v} key={index} />)
                    : <SpinnerLoader/>
                }
                
            </div>
        </section>
    </div>
  )
}

export default MoviesWithFilter
