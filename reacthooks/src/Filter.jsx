import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import PageNotFound from './PageNotFound'
import SearchedElement from './SearchedElement'

function Filter() {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("query")
    const [searchedMovies, setSearchedMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [totalResults, setTotalResults] = useState(0);
    const API_KEY = "8def2fa47c86a07209cafb1c6eb4409b"

    useEffect(() => {
        if (query) {
            // Reset on new query
            setSearchedMovies([])
            setCurrentPage(1)
            fetchMovies(query, 1)
        }
    }, [query])

    const fetchMovies = (input, page) => {
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${input}&api_key=${API_KEY}&page=${page}`)
            .then(response => {
                setTotalResults(response.data.total_results);
                if (page === 1) {
                    setSearchedMovies(response.data.results)
                } else {
                    setSearchedMovies(prev => [...prev, ...response.data.results])
                }
                setTotalPages(response.data.total_pages)
            })
            .catch(error => console.log("Error: ", error))
    }

    const handleShowMore = () => {
        const nextPage = currentPage + 1
        fetchMovies(query, nextPage)
        setCurrentPage(nextPage)
    }

    return (
        <div className='lg:pt-28 pt-24 lg:px-16 px-6 pb-12 bg-[#0F0F0F] text-white'>
            {searchedMovies.length > 0 ? (
                <>
                    <h2 className='text-2xl text-stone-300 font-semibold'>Search results for: "{query}"</h2>
                    <h3 className='mb-7 mt-1 text-base text-stone-400'>{totalResults} titles</h3>
                    <div className='flex flex-col gap-5'>
                        {searchedMovies.map((movie, index) => (
                            <SearchedElement movie={movie} key={index} totalPages={totalPages} />
                        ))}
                    </div>
                    {currentPage < totalPages && (
                        <div className='mt-8 text-center'>
                            <button
                                onClick={handleShowMore}
                                className='px-6 py-2 cursor-pointer bg-yellow-400 text-black font-medium rounded hover:bg-yellow-600 transition'
                            >
                                Show More
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <PageNotFound />
            )}
        </div>
    )
}

export default Filter
