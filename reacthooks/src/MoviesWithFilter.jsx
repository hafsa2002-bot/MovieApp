import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SpinnerLoader from './SpinnerLoader'
import MovieCard from './MovieCard'
import PopularMovies from './genres/PopularMovies'
import ActionMovies from './genres/ActionMovies'
import AnimationMovies from './genres/AnimationMovies'
import AdventureMovies from './genres/AdventureMovies'
import HorrorMovies from './genres/HorrorMovies'
import DocumentaryMovies from './genres/DocumentaryMovies'
import ComedyMovies from './genres/ComedyMovies'
import CrimeMovies from './genres/CrimeMovies'
import FamilyMovies from './genres/FamilyMovies'
import FantasyMovies from './genres/FantasyMovies'
import HistoryMovies from './genres/HistoryMovies'
import MysteryMovies from './genres/MysteryMovies'
import ScienceFictionMovies from './genres/ScienceFictionMovies'
import TVMovies from './genres/TVMovies'
import ThrillerMovies from './genres/ThrillerMovies'
import WarMovies from './genres/WarMovies'
import WesternMovies from './genres/WesternMovies'
import GenreOfMovies from './GenreOfMovies'


function MoviesWithFilter() {
    const [backendData, setBackendData] = useState([])
    const [filterOption, setFilterOption] = useState("popular")
    const api_key = "8def2fa47c86a07209cafb1c6eb4409b"

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`)
        .then(response => {
            console.log("this is the list of movies: ", response.data)
            setBackendData(response.data)
        })
        .catch(err => setError(err.message))
    }, [])

    /*
        {id: 28, name: 'Action'}
        {id: 12, name: 'Adventure'}
        {id: 16, name: 'Animation'}
        {id: 35, name: 'Comedy'}
        {id: 80, name: 'Crime'}
        {id: 99, name: 'Documentary'}
        {id: 18, name: 'Drama'}
        {id: 10751, name: 'Family'}
        {id: 14, name: 'Fantasy'}
        {id: 36, name: 'History'}
        {id: 27, name: 'Horror'}
        {id: 10402, name: 'Music'}
        {id: 9648, name: 'Mystery'}
        {id: 10749, name: 'Romance'}
        {id: 878, name: 'Science Fiction'}
        {id: 10770, name: 'TV Movie'}
        {id: 53, name: 'Thriller'}
        {id: 10752, name: 'War'}
        {id: 37, name: 'Western'}
     */
  return (
    <div>
        <section className=''>
            <div className='flex items-center gap-3 pb-4 customScrollBar w-full lg:text-base text-sm overflow-x-auto' >
                <div
                    onClick={() => setFilterOption("popular")} 
                    className={`cursor-pointer rounded-full  shrink-0 lg:px-3 px-2 py-1 font-semibold 
                        ${(filterOption === "popular") ? "bg-white" : "bg-stone-700 text-white"}`}
                >
                    All Popular
                </div>
                <div
                    onClick={() => setFilterOption("action")}  
                    className={`cursor-pointer rounded-full   shrink-0   lg:px-3 px-2  py-1 font-semibold 
                        ${(filterOption === "action") ? "bg-white" : "bg-stone-700 text-white"}`}
                >
                    Action
                </div>
                <div 
                    onClick={() => setFilterOption("adventure")} 
                    className={`cursor-pointer rounded-full  shrink-0 lg:px-3 px-2  py-1 font-semibold 
                        ${(filterOption === "adventure") ? "bg-white" : "bg-stone-700 text-white"}`}                
                >
                    Adventure
                </div>
                <div 
                    onClick={() => setFilterOption("animation")} 
                    className={`cursor-pointer rounded-full  shrink-0   lg:px-3 px-2  py-1 font-semibold 
                        ${(filterOption === "animation") ? "bg-white" : "bg-stone-700 text-white"}`}                
                >
                    Animation
                </div>
                <div 
                    onClick={() => setFilterOption("comedy")} 
                    className={`cursor-pointer rounded-full  shrink-0   lg:px-3 px-2  py-1 font-semibold 
                        ${(filterOption === "comedy") ? "bg-white" : "bg-stone-700 text-white"}`}
                >
                    Comedy
                </div>
                <div 
                    onClick={() => setFilterOption("crime")} 
                    className={`cursor-pointer rounded-full  shrink-0   lg:px-3 px-2  py-1 font-semibold 
                        ${(filterOption === "crime") ? "bg-white" : "bg-stone-700 text-white"}`}                
                >
                    Crime
                </div>
                <div 
                    onClick={() => setFilterOption("documentary")} 
                    className={`cursor-pointer rounded-full  shrink-0   lg:px-3 px-2  py-1 font-semibold 
                        ${(filterOption === "documentary") ? "bg-white" : "bg-stone-700 text-white"}`}
                >
                    Documentary
                </div>
                <div 
                    onClick={() => setFilterOption("family")} 
                    className={`cursor-pointer rounded-full  shrink-0   lg:px-3 px-2  py-1 font-semibold 
                        ${(filterOption === "family") ? "bg-white" : "bg-stone-700 text-white"}`}                
                >
                    Family
                </div>
                <div 
                    onClick={() => setFilterOption("fantasy")} 
                    className={`cursor-pointer rounded-full  shrink-0  lg:px-3 px-2  py-1 font-semibold 
                        ${(filterOption === "fantasy") ? "bg-white" : "bg-stone-700 text-white"}`}                
                >
                    Fantasy
                </div>
                <div 
                    onClick={() => setFilterOption("history")} 
                    className={`cursor-pointer rounded-full  shrink-0  lg:px-3 px-2  py-1 font-semibold 
                        ${(filterOption === "history") ? "bg-white" : "bg-stone-700 text-white"}`}                
                >
                    History
                </div>
                <div
                    onClick={() => setFilterOption("horror")}  
                    className={`cursor-pointer rounded-full   shrink-0  lg:px-3 px-2  py-1 font-semibold 
                        ${(filterOption === "horror") ? "bg-white" : "bg-stone-700 text-white"}`}
                >
                    Horror
                </div>
                <div 
                    onClick={() => setFilterOption("mystery")} 
                    className={`cursor-pointer rounded-full  shrink-0  lg:px-3 px-2  py-1 font-semibold 
                        ${(filterOption === "mystery") ? "bg-white" : "bg-stone-700 text-white"}`}
                >
                    Mystery
                </div>
                <div 
                    onClick={() => setFilterOption("scienceFiction")} 
                    className={`cursor-pointer rounded-full    shrink-0 whitespace-nowrap h-8  lg:px-3 px-2  py-1 font-semibold 
                        ${(filterOption === "scienceFiction") ? "bg-white" : "bg-stone-700 text-white"}`}
                >
                    Science Fiction
                </div>
                <div 
                    onClick={() => setFilterOption("tvMovie")} 
                    className={`cursor-pointer rounded-full  shrink-0  lg:px-3 px-2  py-1 font-semibold 
                        ${(filterOption === "tvMovie") ? "bg-white" : "bg-stone-700 text-white"}`}
                >
                    TV Movie
                </div>
                <div 
                    onClick={() => setFilterOption("thriller")} 
                    className={`cursor-pointer rounded-full  shrink-0 lg:px-3 px-2  py-1 font-semibold 
                        ${(filterOption === "thriller") ? "bg-white" : "bg-stone-700 text-white"}`}
                >
                    Thriller
                </div>
                <div 
                    onClick={() => setFilterOption("war")} 
                    className={`cursor-pointer rounded-full  shrink-0  lg:px-3 px-2  py-1 font-semibold 
                        ${(filterOption === "war") ? "bg-white" : "bg-stone-700 text-white"}`}
                >
                    War
                </div>
                <div 
                    onClick={() => setFilterOption("western")} 
                    className={`cursor-pointer rounded-full  shrink-0  lg:px-3 px-2  py-1.5 font-semibold 
                        ${(filterOption === "western") ? "bg-white" : "bg-stone-700 text-white"}`}
                >
                    Western
                </div>
            </div>
            <div>
                {
                    (filterOption === "popular")
                    ? <GenreOfMovies BASE_URL={"https://api.themoviedb.org/3/movie/popular"}  extraParams={{}} /> 
                    
                    : (filterOption === "action")
                    ?   <GenreOfMovies 
                            BASE_URL="https://api.themoviedb.org/3/discover/movie" 
                            extraParams={{
                                with_genres: 28,
                                sort_by: 'popularity.desc',
                                language: 'en-US',
                            }}
                        /> 

                    : (filterOption === "adventure")
                    ?   <GenreOfMovies 
                            BASE_URL="https://api.themoviedb.org/3/discover/movie" 
                            extraParams={{
                                with_genres: 12,
                                sort_by: 'popularity.desc',
                                language: 'en-US',
                            }}
                        /> 
                    // ? <AdventureMovies genreID={12} /> 
                    
                    : (filterOption === "animation") 
                    ?   <GenreOfMovies 
                            BASE_URL="https://api.themoviedb.org/3/discover/movie" 
                            extraParams={{
                                with_genres: 16,
                                sort_by: 'popularity.desc',
                                language: 'en-US',
                            }}
                        /> 
                    // ? <AnimationMovies genreID={16} /> 
                    
                    : (filterOption === "comedy") 
                    ?   <GenreOfMovies 
                            BASE_URL="https://api.themoviedb.org/3/discover/movie" 
                            extraParams={{
                                with_genres: 35,
                                sort_by: 'popularity.desc',
                                language: 'en-US',
                            }}
                        /> 
                    // ? <ComedyMovies genreID={35} /> 
                    
                    : (filterOption === "crime") 
                    ?   <GenreOfMovies 
                            BASE_URL="https://api.themoviedb.org/3/discover/movie" 
                            extraParams={{
                                with_genres: 80,
                                sort_by: 'popularity.desc',
                                language: 'en-US',
                            }}
                        /> 
                    // ? <CrimeMovies genreID={80} /> 
                    
                    : (filterOption === "documentary") 
                    ?   <GenreOfMovies 
                            BASE_URL="https://api.themoviedb.org/3/discover/movie" 
                            extraParams={{
                                with_genres: 99,
                                sort_by: 'popularity.desc',
                                language: 'en-US',
                            }}
                        /> 
                    // ? <DocumentaryMovies genreID={99} /> 
                    
                    : (filterOption === "family") 
                    ?   <GenreOfMovies 
                            BASE_URL="https://api.themoviedb.org/3/discover/movie" 
                            extraParams={{
                                with_genres: 10751,
                                sort_by: 'popularity.desc',
                                language: 'en-US',
                            }}
                        /> 
                    // ? <FamilyMovies genreID={10751} /> 
                    
                    : (filterOption === "fantasy") 
                    ?   <GenreOfMovies 
                            BASE_URL="https://api.themoviedb.org/3/discover/movie" 
                            extraParams={{
                                with_genres: 14,
                                sort_by: 'popularity.desc',
                                language: 'en-US',
                            }}
                        /> 
                    // ? <FantasyMovies genreID={14} /> 
                    
                    : (filterOption === "history")
                    ?   <GenreOfMovies 
                            BASE_URL="https://api.themoviedb.org/3/discover/movie" 
                            extraParams={{
                                with_genres: 36,
                                sort_by: 'popularity.desc',
                                language: 'en-US',
                            }}
                        /> 
                    // ? <HistoryMovies genreID={36} /> 
                    
                    : (filterOption === "horror") 
                    ?   <GenreOfMovies 
                            BASE_URL="https://api.themoviedb.org/3/discover/movie" 
                            extraParams={{
                                with_genres: 27,
                                sort_by: 'popularity.desc',
                                language: 'en-US',
                            }}
                        /> 
                    // ? <HorrorMovies genreID={27} /> 
                    
                    : (filterOption === "mystery") 
                    ?   <GenreOfMovies 
                            BASE_URL="https://api.themoviedb.org/3/discover/movie" 
                            extraParams={{
                                with_genres: 9648,
                                sort_by: 'popularity.desc',
                                language: 'en-US',
                            }}
                        /> 
                    // ? <MysteryMovies genreID={9648} /> 
                    
                    : (filterOption === "scienceFiction")
                    ?   <GenreOfMovies 
                            BASE_URL="https://api.themoviedb.org/3/discover/movie" 
                            extraParams={{
                                with_genres: 878,
                                sort_by: 'popularity.desc',
                                language: 'en-US',
                            }}
                        /> 
                    // ? <ScienceFictionMovies genreID={878} /> 
                    
                    : (filterOption === "tvMovie") 
                    ?   <GenreOfMovies 
                            BASE_URL="https://api.themoviedb.org/3/discover/movie" 
                            extraParams={{
                                with_genres: 10770,
                                sort_by: 'popularity.desc',
                                language: 'en-US',
                            }}
                        /> 
                    // ? <TVMovies genreID={10770} /> 
                    
                    : (filterOption === "thriller") 
                    ?   <GenreOfMovies 
                            BASE_URL="https://api.themoviedb.org/3/discover/movie" 
                            extraParams={{
                                with_genres: 53,
                                sort_by: 'popularity.desc',
                                language: 'en-US',
                            }}
                        /> 
                    // ? <ThrillerMovies genreID={53} /> 
                    
                    : (filterOption === "war") 
                    ?   <GenreOfMovies 
                            BASE_URL="https://api.themoviedb.org/3/discover/movie" 
                            extraParams={{
                                with_genres: 10752,
                                sort_by: 'popularity.desc',
                                language: 'en-US',
                            }}
                        /> 
                    // ? <WarMovies genreID={10752} /> 
                    
                    : (filterOption === "western") 
                    ?   <GenreOfMovies 
                            BASE_URL="https://api.themoviedb.org/3/discover/movie" 
                            extraParams={{
                                with_genres: 37,
                                sort_by: 'popularity.desc',
                                language: 'en-US',
                            }}
                        /> 
                    // ? <WesternMovies genreID={37} /> 
                    
                    : null
                }
                
                
            </div>
        </section>
    </div>
  )
}

export default MoviesWithFilter
