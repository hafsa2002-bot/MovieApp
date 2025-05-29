import React from 'react'
import {Star} from 'lucide-react'

function MovieCard(props) {
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
    <div>
      <img className='h-72 w-full' src ={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}   />
    </div>
  )
}

export default MovieCard
