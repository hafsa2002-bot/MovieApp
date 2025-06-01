import React, {useState, useEffect} from 'react'
import {Star, Heart} from 'lucide-react'
import { useContextFunction } from './Context'

function MovieCard(props) {
  const [favorite, setFavorite] = useState(false)
  const {addToFavoritesMovies, setFavoritesMovies, favoritesMovies} = useContextFunction()

  const addToFavoritesFunction = (x) => {
        if(x){
            // add to favorite
            setFavorite(true)
            addToFavoritesMovies(props.data)
        }else{
          // remove it from favorites
          setFavorite(false)
          const updatedList = favoritesMovies.filter((fav) => fav.id !== props.data.id)
          localStorage.setItem('favoritesMovies', JSON.stringify(updatedList))
          setFavoritesMovies(updatedList)
        }
    }

    /*
    useEffect(() => {
      const isFavorite = favoritesMovies?.some((fav) => fav.id === props.data.id)
      setFavorite(isFavorite)
    }, [favoritesMovies, props.data.id])
    */
    useEffect(() => {
      const isFavorite = Array.isArray(favoritesMovies) && favoritesMovies.some((fav) => fav.id === props.data.id)
      setFavorite(isFavorite)
    }, [favoritesMovies, props.data.id])


  return (
    // <div className='w-2xs rounded-3xl text-white overflow-hidden border border-gray-400'>
    //     <img className='h-[420px] w-full' src ={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}   />
    //     <div  className='flex items-center mt-2 justify-between px-5 pb-2'>
    //         <div>
    //             <p className='text-2xl font-medium'> {props.data.original_title} </p>
    //             <p className='font-light text-gray-600'>{ props.data.release_date}</p>
    //         </div>
    //         <div className=' flex border border-white bg-blue-950 text-white h-10 rounded-full p-2'><span className='text-sm'>{props.data.vote_average.toFixed(2)}</span><Star size={10} /> </div>
    //     </div>
    // </div>

    // movie with no detail
    // <div>
    //   <img className=' h-66 w-48 rounded-xl' src ={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}   />
    // </div>

    <div className=' relative rounded-xl overflow-hidden h-64 w-48'>
      <img className='h-full w-full' src ={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}   />
      <div
          onClick={(e) => {
              addToFavoritesFunction(!favorite)
              e.preventDefault()
          }} 
          className="group bg-stone-800 rounded-full flex justify-center items-center absolute p-1.5 top-2 right-2 cursor-pointer"
      >
          <Heart
              size={22}
              // className="stroke-gray-800 group-hover:fill-red-500 group-hover:stroke-red-500 transition duration-100"
              className={`stroke-gray-300 transition duration-100 ${
                favorite ? 'fill-red-500 stroke-red-500' : 'group-hover:fill-red-500 group-hover:stroke-red-500'
              }`}
          />
      </div>
    </div>
  )
}

export default MovieCard
