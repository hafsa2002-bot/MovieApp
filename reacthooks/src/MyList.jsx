import { ExternalLink, Image, Plus } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useContextFunction } from './Context'

function MyList() {
  const {moviesList} = useContextFunction()
  return (
    <div className='bg-[#0f0f0f] px-10 pt-24 text-white'>
      <div className='flex justify-between items-center'>
        <div  className="py-4 flex gap-2">
          <h1 className="text-3xl font-bold text-white">My List</h1>
          <p className="text-sm ">{moviesList.length}</p>
        </div>
        <Link to="/add_movie" className='flex items-center  gap-1.5 text-black bg-yellow-400 py-1 px-2.5 rounded-lg font-semibold cursor-pointer hover:bg-yellow-500'>
          <Plus size={18} /> Add New Movie
        </Link>
      </div>
      <div className=''>
        {
          moviesList.length > 0 
          ? (
            <div className='flex flex-col gap-4 pb-10'>
              {moviesList.map((movie) => (
                <div className='bg-[#1a1a1a] shadow-lg rounded-xl overflow-hidden flex' >
                  <Link to={`/movie/${movie.id}`} className='w-32 h-52  '>
                  {
                    movie.photo 
                    ? <img className='w-full h-full' src ={movie.photo}  />
                    : <div className='w-full h-full bg-stone-800 text-stone-600 flex justify-center items-center'> <Image size={55} /> </div>
                  }
                  </Link>
                  <div className='p-4 w-10/12 '>
                      <Link to={`/movie/${movie.id}`} className='text-xl font-semibold'>{movie.title} </Link>
                      <h3 className='text-sm md:text-base text-gray-300 flex items-center gap-1.5 mt-1.5'> 
                        <span> {movie?.date} </span>
                        {movie?.genres?.length > 0 && (
                          <>
                            {movie?.date && <div className="w-1 h-1 bg-white rounded-full p-0.5"></div>}
                            <p>{movie.genres.map(genre => genre).join(', ')}</p>
                          </>
                        )}
                        {movie?.duration && (
                          <>
                            {(movie?.date || movie?.genres?.length > 0) && (
                              <div className="w-1 h-1 bg-white rounded-full p-0.5"></div>
                            )}
                            <p>{movie.duration}</p>
                          </>
                        )}
                      </h3>
                      {/* <p className='text-sm text-gray-400'> {movie.date} </p> */}
                      <p className='mt-2 text-base text-gray-300 flex gap-2 items-center'>
                        <Link target='_blank' to={`${movie.url}`}>{movie.url}</Link>
                        {movie.url && <Link target='_blank' to={`${movie.url}`}><ExternalLink size={17} /></Link> } 
                      </p>
                      <div className='flex items-center gap-3 mt-4 text-gray-400'>
                          {/* <div
                              onClick={(e) => {
                                  // showDeleteFromFavoritesMessage(movie.title)
                                  addToFavoritesFunction(!favorite)
                                  e.preventDefault()
                              }} 
                              className='flex items-center gap-2 px-2.5 py-1 hover:bg-[#333] bg-stone-950 rounded-full text-gray-300 hover:text-white text-sm cursor-pointer '>
                              <X size={21}/>
                              Remove
                          </div> */}
                      </div>
                  </div>
                </div>
              ))}
            </div>
          ): (
            <div className='text-4xl '>
              Nothing 
            </div>
          )
        }
      </div>
    </div>
  )
}

export default MyList
