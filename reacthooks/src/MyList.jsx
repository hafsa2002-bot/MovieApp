import { ExternalLink, Image, Plus, Trash2, X } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useContextFunction } from './Context'

function MyList() {
  const {moviesList, setMoviesList} = useContextFunction()

  const deleteMovie = (x) => {
    const updatedList = moviesList.filter((ele) => ele.id !== x.id)
    localStorage.setItem('moviesList', JSON.stringify(updatedList))
    setMoviesList(updatedList)
  }
  return (
    <div className='bg-[#0f0f0f] lg:px-10 px-3 lg:pt-24 pt-20 text-white'>
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
                  <Link className='lg:w-32 w-34 h-52  '>
                  {
                    movie.photo 
                    ? <img className='w-full h-full' src ={movie.photo}  />
                    : <div className='w-full h-full bg-stone-800 text-stone-600 flex justify-center items-center'> <Image size={55} /> </div>
                  }
                  </Link>
                  <div className='lg:p-4 lg:w-10/12 w-9/12 pl-2.5 pr-3 py-2'>
                    <div className='flex justify-between'>
                      <Link className='text-xl font-semibold'>{movie.title} </Link>
                      <div className='flex lg:hidden items-center gap-3 mt-2 text-gray-400 '>
                          <div
                              onClick={() => deleteMovie(movie)}
                              className='flex items-center gap-2 p-2 hover:bg-[#333] bg-stone-950 rounded-full text-gray-300 hover:text-white text-sm cursor-pointer '>
                              <Trash2 size={21}/>
                              {/* Remove */}
                          </div>
                      </div>
                    </div>
                      <h3 className='text-sm md:text-base text-gray-300 flex lg:flex-row flex-col lg:items-center lg:gap-1.5 gap-0.5 lg:mt-1.5 mt-1'> 
                        <span> {movie?.date} </span>
                        {movie?.genres?.length > 0 && (
                          <>
                            {movie?.date && <div className="w-1 h-1 bg-white rounded-full p-0.5 lg:block hidden"></div>}
                            <p>
                              {movie.genres.map(genre => 
                                {
                                  if(typeof genre === "object" && genre.name) return genre.name
                                  return genre
                                }).join(', ') 
                              }
                            </p>
                            {/* <p>{movie.genres.map(genre => {genre.name && genre.name}).join(', ')}</p> */}
                          </>
                        )}
                        {movie?.duration && (
                          <>
                            {(movie?.date || movie?.genres?.length > 0) && (
                              <div className="w-1 h-1 bg-white rounded-full p-0.5 lg:block hidden"></div>
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
                      <div className='lg:flex hidden items-center gap-3 mt-2 text-gray-400 '>
                          <div
                              onClick={() => deleteMovie(movie)}
                              className='flex items-center gap-2 px-2.5 py-1 hover:bg-[#333] bg-stone-950 rounded-full text-gray-300 hover:text-white text-sm cursor-pointer '>
                              <X size={21}/>
                              Remove
                          </div>
                      </div>
                  </div>
                </div>
              ))}
            </div>
          ): (
            <div className='text-4xl h-[65vh] w-full text-stone-400 flex flex-col justify-center items-center pb-10'>
              <X size={70} />
              Your list is empty.
            </div>
          )
        }
      </div>
    </div>
  )
}

export default MyList
