import React from 'react'
import { useContextFunction } from './Context'
import FavoriteElement from './FavoriteElement'
import { Heart } from 'lucide-react'

function Favorites() {
  const {favoritesMovies} = useContextFunction()
  return (
    <div className='pt-24 pb-10   px-10 bg-[#0f0f0f] text-white'>
      {
        favoritesMovies && favoritesMovies.length > 0 ? (
          <>
            <div className="py-4 flex gap-2">
              <h1 className="text-3xl font-bold text-white">My Favorites</h1>
              <p className="text-sm text-gray-400">{favoritesMovies?.length}</p>
            </div>
            <div className='mt-4 flex flex-col gap-4' >
              {favoritesMovies?.map((movie, index) => (
                <FavoriteElement movie={movie} />
              ))}
            </div>
          </>
        ):(
          <div className='w-full h-[80vh] text-gray-400 flex flex-col justify-center items-center'>
            <Heart size={120}/>
            <div className=' mt-5 text-2xl font-semibold '>You haven't added any favorite movies.</div>
          </div>
        )
      }
    </div>
  )
}

export default Favorites
