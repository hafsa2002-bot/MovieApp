import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Heart } from 'lucide-react'
import {Link} from 'react-router-dom'
// import Nav from './Nav'

function YourMovieList() {
    const white = 'border-white'
    const blue = 'border-blue-700'
    const [list, setList] = useState([])
    // const backendUrl = 'https://nodejs-production-5727.up.railway.app';
    const backendUrl = 'https://movieapp-production-5727.up.railway.app';
    useEffect(() => { 
        axios.get(`${backendUrl}/list`)
        .then(response => {
            console.log("this is the list of movies from database: ", response.data)
            setList(response.data)
        })
        .catch(error => console.error("Error fetching movies: ", error))
    }, [])
    const addToFavorite = async (movieId, currentFavoriteStatus) => {
        try{
            const response = await axios.put(`${backendUrl}/movies/favorite/${movieId}`, {
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
    <div>
        {/* <Nav/> */}
        <h1 className='mt-20 ml-5 text-3xl mb-5 text-center font-semibold'>Movie list</h1>
        <div className=' flex flex-wrap gap-10  px-7'>
            {list?.map(v => (
                <div key={v._id} className='w-2xs rounded-3xl overflow-hidden border border-gray-400 relative'>
                    <Link to={`/movies/${v._id}`} >
                        <img 
                        src={`${backendUrl}${v.moviePhoto}`}
                        alt = {v.movieName}
                        className='h-[420px] w-full cursor-pointer' />
                    </Link>
                    <div className={`w-12 h-12  bg-gray-300  absolute top-4 right-4 flex justify-center items-center rounded-full   `}>
                        <button onClick={()=>  addToFavorite(v._id, v.isFavorite)} className='cursor-pointer'>
                            <Heart fill={v.isFavorite ? "#c50d0d" : "#c7c6c6"} size={32} strokeWidth={v.isFavorite ? 0 : 1.2} className='' />
                        </button>
                    </div>
                    <p className='text-2xl text-center font-medium'>{v.movieName}</p>
                    <p className='font-light text-center text-gray-600'>{new Date(v.movieDate).toISOString().split('T')[0]}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default YourMovieList
