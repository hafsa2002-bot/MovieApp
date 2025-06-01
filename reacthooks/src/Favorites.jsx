import React from 'react'
import { useContextFunction } from './Context'
import FavoriteElement from './FavoriteElement'

function Favorites() {
  const {favoritesMovies} = useContextFunction()
  return (
    <div className='pt-24 pb-10   px-10 bg-[#0f0f0f] text-white'>
      <div class="py-4 flex gap-2">
        <h1 class="text-3xl font-bold text-white">My Favorites</h1>
        <p class="text-sm text-gray-400">{favoritesMovies?.length}</p>
      </div>
      <div className='mt-4 flex flex-col gap-4' >
        {favoritesMovies?.map((movie, index) => (
          <FavoriteElement movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Favorites
