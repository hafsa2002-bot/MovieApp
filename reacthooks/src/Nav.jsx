import React, {useEffect, useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {Heart, CirclePlus, List, Search} from 'lucide-react'

function Nav() {
    const [query, setQuery] = useState("")
    const [scrolled, setScrolled] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
  return (
    <div>
        {/* <nav className='bg-blue-950 text-white py-3 px-5 flex justify-between items-center fixed top-0 w-full z-50'>
            <Link to='/'  className='font-bold text-4xl'>Movix</Link>
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
                <Link to="/movies/your_list"> <List  size={30} /> </Link> 
            </div>
        </nav> */}
        {/* bg-[#0F0F0F] */}
        <nav 
            
            // className={`px-5 pt-3 pb-2 font-semibold flex justify-between items-center fixed top-0 w-full z-50 transition-all duration-300 ${
            //     scrolled  ? 'bg-[#0F0F0F] shadow-md' : 'bg-transparent'
            // }`}
            className={`px-5 pt-3 pb-2 font-semibold flex justify-between items-center fixed top-0 w-full z-50 transition-all duration-300 ${
                (window.location.pathname === "/" && !scrolled)
                    ? "bg-transparent"
                    : "bg-[#0F0F0F] shadow-md"
            }`}
        >
            <div className='flex justify-center items-center gap-12'>
                {/* logo */}
                <div className='w-36 '>
                    <img src='/images/logo2.png' />
                </div>

                {/* pages */}
                <div className='uppercase flex gap-7'>
                    {/* <NavLink to="/" className={({isActive}) => isActive ? 'text-white' : 'text-stone-400' }>Home</NavLink>
                    <NavLink to="/my_list"  className={({isActive}) => isActive ? 'text-white' : 'text-stone-400' } >My List</NavLink>
                    <NavLink to="/favorites"  className={({isActive}) => isActive ? 'text-white' : 'text-stone-400' }>Favorites</NavLink>
                    <NavLink to="/contact"  className={({isActive}) => isActive ? 'text-white' : 'text-stone-400' } >Contact</NavLink> */}
                    <Link to="/" className="text-white">Home</Link>
                    <Link to="/my_list"  className="text-white" >My List</Link>
                    <Link to="/favorites"  className="text-white">Favorites</Link>
                    <Link to="/contact"  className="text-white" >Contact</Link>
                </div>
            </div>
            <div>
                <form action="/filter"  className=' h-10  flex justify-between overflow-hidden gap-2 '>
                    {/* <button className='h-full text-stone-200 font-semibold '>
                        <Search size={20}/>
                    </button>
                    <input
                        type='search' 
                        name="query"
                        value = {query}
                        onChange={(e) => setQuery(e.target.value)}
                        id="search" 
                        placeholder="Search For Movies..."  
                        autoComplete='off'
                        className='  outline-none text-gray-200 placeholder-stone-400 placeholder:text-base w-40 '
                    /> */}
                    <button className='h-full text-white font-semibold '>
                        <Search size={20}/>
                    </button>
                    <input
                        type='search' 
                        name="query"
                        value = {query}
                        onChange={(e) => setQuery(e.target.value)}
                        id="search" 
                        placeholder="Search For Movies..."  
                        autoComplete='off'
                        className='  outline-none text-white placeholder-white placeholder:text-base w-40 '
                    />
                </form>
            </div>
        </nav>
    </div>
  )
}

export default Nav
