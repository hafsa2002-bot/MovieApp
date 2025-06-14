import { ArrowRight, ImageOff, Search, X } from 'lucide-react'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {format} from 'date-fns'
import { Link } from 'react-router-dom'

function SearchMovieInput({scrolled}) {
    const [query, setQuery] = useState("")
    // const [scrolled, setScrolled] = useState(false)
    const [searchedMovies, setSearchedMovies] = useState([])
    const API_KEY = "8def2fa47c86a07209cafb1c6eb4409b"

    const fetchMovies = (input) => {
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${input}&api_key=${API_KEY}`)
        .then(response => {
            setSearchedMovies(response.data.results)
            console.log("Searched movies: ", response.data.results)
        })
        .catch(error => console.log("Error: ", error))
    }
    /*
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    */

    // useEffect(() => {
    //     fetchMovies()
    // }, [])
  return (
    <div className='relative '>
        <form action="/filter"  
            className={`
            h-10 px-3  flex justify-between overflow-hidden gap-2 
            ${(query != "" && searchedMovies.length > 0) ? "rounded-t-lg" : "rounded-lg"}
            ${(window.location.pathname === "/" && !scrolled)  ? "bg-transparent" : "bg-[#1a1a1a]"}
            ` }
        >
            <button className='h-full text-stone-300 font-semibold '>
                <Search size={20}/>
            </button>
            <input
                type='search' 
                name="query"
                value = {query}
                onChange={(e) => {
                    const newQuery = e.target.value
                    setQuery(newQuery)
                    if (newQuery.trim() !== "") {
                        fetchMovies(newQuery)
                    }
                }}
                id="search" 
                placeholder="Search For Movies..."  
                autoComplete='off'
                className='  outline-none text-white placeholder-stone-300 placeholder:text-base w-60 '
            />
        </form>
        {
            (query) && (
                <div className='bg-[#1a1a1a] w-full  rounded-b-lg text-white absolute'>
                    <div className='p-3  '>
                        {
                            searchedMovies.length > 0  
                            ? (
                                < div className='h-[80vh] overflow-y-scroll custom-scrollbar'>
                                    <h1 className='text-xl text-stone-400 mx-2 pb-1.5 border-b mb-4'>Movies & TV Shows</h1>
                                    {searchedMovies?.map((movie, index) => (
                                        <div  className='flex gap-3 p-2 ' key={index}>
                                            <Link 
                                                to={`/movie/${movie.id}`} 
                                                onClick={() => setQuery("")}
                                                className='w-13 h-18 rounded-md overflow-hidden'
                                            >
                                                {
                                                    movie.poster_path 
                                                    ? <img className='w-full' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                                                    : <div className='bg-stone-400 w-full h-full text-stone-600 flex justify-center items-center'> <ImageOff size={26} /> </div>
                                                }
                                            </Link>
                                            <div className='w-9/12 text-stone-200 pt-1'>
                                                <Link 
                                                    to={`/movie/${movie.id}`} 
                                                    className='text-lg'
                                                    onClick={() => setQuery("")}
                                                >
                                                    {movie.original_title}
                                                </Link>
                                                <div className='text-sm text-stone-500'>{movie?.release_date && format(new Date(movie.release_date), "d MMM yyyy")}</div>
                                            </div>
                                        </div>
                                    ))}
                                    <Link onClick={() => setQuery("")} to={`/filter?query=${query}`} className='text-stone-500 hover:text-stone-300 cursor-pointer flex justify-center items-center gap-1 text-sm border-t-[0.4px] border-stone-500 py-2'>View all results for {query} <ArrowRight size={17} /> </Link>
                                </div>
                            ):(
                                <div className=' py-3 text-stone-500 text-xl' >
                                    <p className='font-semibold text-sm text-stone-300'>Sorry! No results found.</p>
                                    <p className='text-base text-stone-400 mt-3'>There are no results for your search, please try again.</p>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default SearchMovieInput
