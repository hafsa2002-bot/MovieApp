import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Heart } from 'lucide-react'
import {Link} from 'react-router-dom'
// import Nav from './Nav'

function YourMovieList() {
    const white = 'border-white'
    const blue = 'border-blue-700'
    const [list, setList] = useState([])
    useEffect(() => { 
        axios.get("http://localhost:5000/list")
        .then(response => {
            console.log("this is the list of movies from database: ", response.data)
            setList(response.data)
        })
        .catch(error => console.error("Error fetching movies: ", error))
    }, [])
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
    <div>
        {/* <Nav/> */}
        <h1 className='mt-20 ml-5 text-3xl mb-5 text-center font-semibold'>Movie list</h1>
        <div className=' flex flex-wrap gap-10  px-7'>
            {list?.map(v => (
                <div key={v._id} className='w-2xs rounded-3xl overflow-hidden border border-gray-400 relative'>
                    <Link to={`/movies/${v._id}`} >
                        <img 
                        src={`http://localhost:5000${v.moviePhoto}`}
                        alt = {v.movieName}
                        className='h-[420px] w-full cursor-pointer' />
                    </Link>
                    <div className={`w-12 h-12 border-2  absolute top-4 right-4 flex justify-center items-center rounded-full hover:bg-blue-400  ${v.isFavorite ? blue : white} `}>
                        <button onClick={()=>  addToFavorite(v._id, v.isFavorite)} className='cursor-pointer'>
                            <Heart size={30} color={v.isFavorite ? "blue" : "white"} className='' />
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
