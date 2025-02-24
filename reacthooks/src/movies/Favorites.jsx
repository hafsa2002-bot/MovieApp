import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import {Heart} from 'lucide-react'
import {Link} from 'react-router-dom'
// import MovieCard from '../MovieCard'

function Favorites() {
    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/favorites")
        .then(response => {
            setFavorites(response.data)
        })
        .catch(error => console.log("ERROR : ", error))
    }, [])
    
    
  return (
    <div className=' flex flex-wrap gap-10  px-7 mt-10'>
        {
            favorites ? favorites.map((v, index)=> (
                <div key={v._id} className='w-2xs rounded-3xl overflow-hidden border border-gray-400 relative'>
                    <Link to={`/movies/${v._id}`} >
                        <img 
                        src={`http://localhost:5000${v.moviePhoto}`}
                        alt = {v.movieName}
                        className='h-[420px] w-full cursor-pointer' />
                    </Link>
                    <div className='w-12 h-12 border-2 border-blue-600 absolute top-4 right-4 flex justify-center items-center rounded-full'>
                        <button className='cursor-pointer'>
                            <Heart size={30} color= "blue" className='' />
                        </button>
                    </div>
                    <p className='text-2xl text-center font-medium'>{v.movieName}</p>
                    <p className='font-light text-center text-gray-600'>{new Date(v.movieDate).toISOString().split('T')[0]}</p>
                </div>
            )
                // <MovieCard data={val} key={index} />
            ) : " nothing :( "
        }
    </div>
  )
}

export default Favorites
