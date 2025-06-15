import { Plus } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function MyList() {
  return (
    <div className='bg-[#0f0f0f] px-10 h-[80vh] pt-24 text-white'>
      <div className='flex justify-between items-center'>
        <div  className="py-4 flex gap-2">
          <h1 className="text-3xl font-bold text-white">My List</h1>
          <p className="text-sm text-red-400">2</p>
        </div>
        <Link to="/add_movie" className='flex items-center  gap-1.5 text-black bg-yellow-400 py-1 px-2.5 rounded-lg font-semibold cursor-pointer hover:bg-yellow-500'>
          <Plus size={18} /> Add New Movie
        </Link>
      </div>
    </div>
  )
}

export default MyList
