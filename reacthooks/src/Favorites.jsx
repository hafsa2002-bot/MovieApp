import React, {useState} from 'react'
import { useContextFunction } from './Context'
import FavoriteElement from './FavoriteElement'
import { Check, Heart } from 'lucide-react'

function Favorites() {
  const {favoritesMovies} = useContextFunction()
  const [successMessage, setSuccessMessage] = useState(null);
  return (
    <div className='lg:pt-24 pt-20 pb-10   lg:px-10 px-5 bg-[#0f0f0f] text-white'>
      {
        favoritesMovies && favoritesMovies.length > 0 ? (
          <>
            <div className="py-4 flex gap-2">
              <h1 className="text-3xl font-bold text-white">My Favorites</h1>
              <p className="text-sm text-gray-400">{favoritesMovies?.length}</p>
            </div>
            <div className='mt-4 flex flex-col gap-4' >
              {favoritesMovies?.map((movie, index) => (
                <FavoriteElement movie={movie} setSuccessMessage={setSuccessMessage} />
              ))}
            </div>
            {successMessage && (
              <div className='bg-stone-800 shadow text-stone-300 fixed z-50 top-24 right-5 border border-stone-300 rounded-lg flex justify-center items-center gap-2 p-3'>
                <div className='w-5 h-5 bg-green-700 rounded-full flex items-center justify-center'>
                  <Check className='text-white' size={17} />
                </div>
                <p>{successMessage}</p>
              </div>
            )}
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
