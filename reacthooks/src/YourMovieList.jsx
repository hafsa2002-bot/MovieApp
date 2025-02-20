import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Nav from './Nav'

function YourMovieList() {
    const [list, setList] = useState([])
    useEffect(() => { 
        axios.get("http://localhost:5000/list")
        .then(response => {
            console.log("this is the list of movies from database: ", response.data)
            setList(response.data)
        })
        .catch(error => console.error("Error fetching movies: ", error))
    }, [])
  return (
    <div>
        <Nav/>
        <h1 className='mt-20 ml-5 text-3xl mb-5 text-center font-semibold'>Movie list</h1>
        <div className=' flex flex-wrap gap-10  px-7'>
            {list?.map(v => (
                <div key={v._id} className='w-2xs rounded-3xl overflow-hidden border border-gray-400'>
                    <a href={v.trailer} target='_blank'>
                        <img src={`http://localhost:5000${v.moviePhoto}`}
                        alt = {v.movieName}
                        className='h-[420px] w-full' />
                    </a>
                    <p className='text-2xl text-center font-medium'>{v.movieName}</p>
                    <p className='font-light text-center text-gray-600'>{new Date(v.movieDate).toISOString().split('T')[0]}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default YourMovieList
