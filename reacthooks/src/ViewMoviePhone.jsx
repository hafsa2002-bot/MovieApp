import React from 'react'
import ProgressCircle from './ProgressCircle'
import { format } from 'date-fns'
import { Heart, List, Play } from 'lucide-react'

function ViewMoviePhone({movieDetails, movieTime, showFavoriteDetails, setShowFavoriteDetails, addToFavoritesFunction, favorite, showAddToListDetails, setShowAddToListDetails, setShowTrailer}) {
  return (
    <div>
        <div className='relative  h-[40vh] w-full overflow-hidden flex lg:hidden '>
            {
                movieDetails?.backdrop_path
                ?   <img className='w-full h-full shadow-2xl shadow-black object-cover absolute inset-0 -z-50 right-0' src ={`https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}`}  />
                :   <div className='bg-white'></div>   
            }
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent -z-40"  />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent -z-40" />

            <div className='absolute left-5 top-5 z-10 h-9/12 flex items-center  gap-12 ' >
                {
                    movieDetails?.poster_path
                    ?   <img className='h-full rounded-lg' src ={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}  />
                    :   <div className='bg-stone-400 text-stone-500 flex justify-center items-center h-full rounded-lg w-96'> <Image size={100} /> </div>
                }
            </div>
        </div>
        <div className='bg-[#0F0F0F]  pb-8'>
            <div className='py-2'>
                <h1 className=' text-center text-xl text-gray-300 font-thin'> <span className=' font-bold text-white text-2xl'>{movieDetails?.original_title}</span> ({movieDetails?.release_date && format(new Date(movieDetails.release_date), "yyyy")})</h1>
            </div>
            <div className='px-7 py-4 flex justify-between'>
                <div className='flex items-center gap-2.5 w-1/2'>
                    <ProgressCircle percent={Math.round(movieDetails?.vote_average * 10)} />
                    <p className='text-base font-semibold text-stone-400 '>User Score</p>
                </div>
                <div className='flex items-center gap-6 mt-1.5'>
                    <div
                        onMouseEnter={() => setShowFavoriteDetails(true)} 
                        onMouseLeave={() => setShowFavoriteDetails(false)}
                        onClick={() => addToFavoritesFunction(!favorite)}
                        className={`bg-stone-800 relative flex justify-center items-center w-12 h-12 rounded-full cursor-pointer`}
                    >
                        <Heart  className={`${favorite ? 'fill-red-600 stroke-red-600' : 'fill-white'}`}/>
                        {
                            showFavoriteDetails && (
                                <div className='absolute top-12 bg-stone-900 border-stone-400 border text-sm text-white w-32 rounded-md px-1 py-1 text-center '>Mark as favorite</div>
                            )
                        }
                    </div>
                    <div
                        onMouseEnter={() => setShowAddToListDetails(true)} 
                        onMouseLeave={() => setShowAddToListDetails(false)}
                        className={`bg-stone-800 relative flex justify-center items-center w-12 h-12 rounded-full cursor-pointer`}
                    >
                        <List color="white" />
                        {
                            showAddToListDetails && (
                                <div className='absolute top-12 bg-stone-900 border-stone-400 border text-white w-24 rounded-md px-1 py-1 text-center text-sm '>Add to list</div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className='bg-stone-900 py-3 flex flex-col justify-center items-center text-sm md:text-base text-white gap-1.5 mt-1.5'>
                <div className='  flex items-center gap-1.5'>
                    <span> {movieDetails?.release_date && format(new Date(movieDetails.release_date), "dd/MM/yyyy")} </span> ({movieDetails?.origin_country[0]}) 
                    <div className='w-1 h-1 bg-white rounded-full p-0.5'></div> 
                    {/* <div className='w-1 h-1 bg-white rounded-full p-0.5'></div>                                         {getMovieTimeInMinutes(movieDetails?.runtime)} */}
                    <p className=''>{movieTime}</p>
                    {/* trailer */}
                    <div 
                        onClick={() => setShowTrailer(true)}
                        className='group flex justify-center items-center gap-2 text-white hover:text-stone-400 cursor-pointer ml-3'
                    >
                        {/* <Play className='fill-white group-hover:fill-gray-400' size="18" /> */}
                        <Play className="fill-white group-hover:fill-stone-400" size="18" />
                        <p className='font-semibold'>Play Trailer</p>
                    </div>
                </div> 
                <div>
                    <p>{movieDetails?.genres.map(genre => genre.name).join(', ')}</p>
                </div>
            </div>
            <div className='mt-4 px-3'>
                <i className='text-gray-400 mt-1'>{movieDetails?.tagline}</i>
                <h3 className='text-lg text-white font-semibold mt-1'>Overview</h3>
                {
                    movieDetails?.overview
                    ? <p className='text-base text-gray-300 mt-1'>{movieDetails?.overview}</p>
                    : (
                        <>
                            <p className='mt-1.5'>We don't have an overview translated in English. </p>
                            <p className='mt-2'>We don't have any crew added to this movie. </p>
                        </>
                    )
                }
                
            </div>
        </div>
    </div>
  )
}

export default ViewMoviePhone
