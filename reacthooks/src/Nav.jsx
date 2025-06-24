import React, {useEffect, useState} from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import {Heart, CirclePlus, List, Search, House, AlignJustify} from 'lucide-react'
import SearchMovieInput from './SearchMovieInput'

function Nav() {
    const [scrolled, setScrolled] = useState(false)
    const navigate = useNavigate()
    const [showSearch, setShowSearch] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
  return (
    <div>
        {/* bg-[#0F0F0F] */}
        {/* laptop version */}
        <nav 
            className={` lg:px-5 px-3 pt-3 pb-2 font-semibold lg:flex hidden justify-between items-center fixed top-0 w-full z-30 transition-all duration-300 ${
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
                    className='lg:w-36 w-24 cursor-pointer'
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
                        className={({isActive}) => `text-white pb-1  ${isActive ? 'border-b-2 border-white' : ' hover:border-b-2 hover:border-white'}`}
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
            <div>
                <SearchMovieInput scrolled={scrolled}/>
            </div>
        </nav>

        {/* phone version */}
        <nav
            className={` px-5 pt-3 pb-2 font-semibold flex justify-between items-center  lg:hidden fixed top-0 w-full z-30 transition-all duration-300 ${
                (window.location.pathname === "/" && !scrolled)
                    ? "bg-transparent"
                    : "bg-[#0F0F0F] shadow-md"
            }`}
        >
            <div>
                <AlignJustify color="white" />
            </div>
            <div
                onClick={() => {
                    navigate("/")
                    window.scrollTo(0, 0)
                }}
                className='lg:w-36 w-26 cursor-pointer'
            >
                <img src='/images/logo2.png' />
            </div>
            <div onClick={() => setShowSearch(!showSearch)} className='relative' >
                <Search color="white" />
            </div>
                {
                    showSearch && (
                        <div className='absolute top-0 py-4 right-0 bg-[#0F0F0F]  w-screen '>
                            <SearchMovieInput scrolled={scrolled} setShowSearch={setShowSearch}/>
                        </div>
                    )
                }
        </nav>



        {/* <nav 
            className={` lg:px-5 px-3 pt-3 pb-2 font-semibold lg:flex hidden justify-between items-center fixed top-0 w-full z-30 transition-all duration-300 ${
                (window.location.pathname === "/" && !scrolled)
                    ? "bg-transparent"
                    : "bg-[#0F0F0F] shadow-md"
            }`}
        >
            <div className='flex justify-center items-center gap-12'>
                <div
                    onClick={() => {
                        navigate("/")
                        window.scrollTo(0, 0)
                    }}
                    className='lg:w-36 w-24 cursor-pointer'
                >
                    <img src='/images/logo2.png' />
                </div>

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
                    <NavLink 
                        to="/favorites"
                        onClick={() => {
                            window.scrollTo(0, 0)
                        }} 
                        className={({isActive}) => isActive ? "text-white   border-b-2 pb-1 border-white" : "text-white hover:border-white hover:border-b-2 hover:pb-1"}
                    >
                        Favorites
                    </NavLink>
                    <NavLink 
                        to="/contact"
                        onClick={() => {
                            window.scrollTo(0, 0)
                        }}   
                        className={({isActive}) => `text-white pb-1  ${isActive ? 'border-b-2 border-white' : ' hover:border-b-2 hover:border-white'}`}
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
            <div className='border mr-72'>
                <SearchMovieInput scrolled={scrolled}/>
            </div>
        </nav> */}
    </div>
  )
}

export default Nav
