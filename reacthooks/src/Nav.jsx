import React, {useEffect, useState} from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import {Heart, CirclePlus, List, Search} from 'lucide-react'
import SearchMovieInput from './SearchMovieInput'

function Nav() {
    const [scrolled, setScrolled] = useState(false)
    const navigate = useNavigate()
    
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
            className={`px-5 pt-3 pb-2 font-semibold flex justify-between items-center fixed top-0 w-full z-30 transition-all duration-300 ${
                (window.location.pathname === "/" && !scrolled)
                    ? "bg-transparent"
                    : "bg-[#0F0F0F] shadow-md"
            }`}
        >
            <div className='flex justify-center items-center gap-12'>
                {/* logo */}
                <div
                    onClick={() => {
                        navigate("/")
                        window.scrollTo(0, 0)
                    }}
                    className='w-36 cursor-pointer'
                >
                    <img src='/images/logo2.png' />
                </div>

                {/* pages */}
                <div className='uppercase flex gap-7'>
                    <Link to="/" className="text-white outline-none hover:border-white hover:border-b-2 hover:pb-1">
                        Home
                    </Link>
                    <NavLink 
                        to="/my_list"  
                        className={({isActive}) => isActive ? "text-white  border-b-2 pb-1 border-white" : "text-white hover:border-white hover:border-b-2 hover:pb-1"} 
                    >
                        My List
                    </NavLink>
                    {/* favorites */}
                    <NavLink 
                        to="/favorites"
                        onClick={() => {
                            // navigate("/favorites")
                            // window.location.reload()
                            window.scrollTo(0, 0)
                        }} 
                        className={({isActive}) => isActive ? "text-white   border-b-2 pb-1 border-white" : "text-white hover:border-white hover:border-b-2 hover:pb-1"}
                    >
                        Favorites
                    </NavLink>
                    {/* contact us */}
                    <NavLink 
                        to="/contact"
                        onClick={() => {
                            window.scrollTo(0, 0)
                        }}   
                        className={({isActive}) => `text-white pb-1  ${isActive ? 'border-b-2 border-white' : ' hover:border-b-2 hover::border-white'}`}
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
            <div>
                <SearchMovieInput scrolled={scrolled}/>
            </div>
        </nav>
    </div>
  )
}

export default Nav
