import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import {Heart} from 'lucide-react'
import {Link} from 'react-router-dom'
// import MovieCard from '../MovieCard'

function Favorites() {
    const [favorites, setFavorites] = useState([])
    const [list, setList] = useState([])
    const backendUrl = 'https://nodejs-production-b438.up.railway.app';
    useEffect(() => {
        axios.get(`${backendUrl}/favorites`)
        .then(response => {
            setFavorites(response.data)
        })
        .catch(error => console.log("ERROR : ", error))
    }, [favorites])
    const addToFavorite = async (movieId, currentFavoriteStatus) => {
        try{
            const response = await axios.put(`http://localhost:5000/movies/favorite/${movieId}`, {
                isFavorite: !currentFavoriteStatus
            })
            console.log("response :", response)
            setList(prevList =>
                prevList.map(movie =>
                    movie._id === movieId ? { ...movie, isFavorite: !currentFavoriteStatus } : movie
                )
            );
        }catch(err) {
            console.log("ERROR : ", err)
        }
    }
    
  return (
    <div className='mb-10 flex flex-wrap gap-10  px-7 mt-10'>
        {
            favorites ? favorites.map((v, index)=> (
                <div key={v._id} className='w-2xs rounded-3xl overflow-hidden border border-gray-400 relative'>
                    <Link to={`/movies/${v._id}`} >
                        <img 
                        src={`http://localhost:5000${v.moviePhoto}`}
                        alt = {v.movieName}
                        className='h-[420px] w-full cursor-pointer' />
                    </Link>
                    <div className='w-12 h-12 bg-gray-300  absolute top-4 right-4 flex justify-center items-center rounded-full'>
                        <button onClick={()=>  addToFavorite(v._id, v.isFavorite)}  className='cursor-pointer'>
                            <Heart  fill={v.isFavorite ? "#c50d0d" : "#c7c6c6"} size={32} strokeWidth={v.isFavorite ? 0 : 1.2} className='' />
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
