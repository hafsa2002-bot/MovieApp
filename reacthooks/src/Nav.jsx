import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Heart, CirclePlus, List} from 'lucide-react'

function Nav() {
    const [query, setQuery] = useState("")
  return (
    <div>
        <nav className='bg-blue-950 text-white py-3 px-5 flex justify-between items-center fixed top-0 w-full z-50'>
            <Link to='/'  className='font-bold text-4xl'>Movie App</Link>
            <form action="/filter"  className='w-xl bg-white h-10 rounded-3xl border  flex justify-between overflow-hidden'>
                <input
                    type='search' 
                    name="query"
                    value = {query}
                    onChange={(e) => setQuery(e.target.value)}
                    id="search" 
                    placeholder="Serach a movie"  
                    className=' outline-0 text-black bg-white w-10/12 placeholder-gray-600 px-3'/>
                <button className='bg-blue-950 w-24 h-full rounded-3xl font-semibold '>
                    Search
                </button>
            </form>
            <div className='flex gap-10'>
                {/* your_list */}
                <Link to="/movies/your_list"> <List  size={30} /> </Link> 
                {/* <Link to="/addMovie" className=''> <CirclePlus  size={30} /> </Link>
                <Link to="/favorites"><Heart size={30}/></Link> */}
            </div>
        </nav>
    </div>
  )
}

export default Nav
