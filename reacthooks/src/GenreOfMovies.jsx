import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'
import SpinnerLoader from './SpinnerLoader'
import PaginationButtons from './PaginationButtons'

function GenreOfMovies({BASE_URL, extraParams = {} }) {
    const [movies, setMovies] = useState([])
    const api_key = "8def2fa47c86a07209cafb1c6eb4409b"
    const [currentPage, setCurrentPage] = useState(1); // Page number
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
    const fetchMovies = async () => {
        try {
            const tmdbPage1 = currentPage * 2 - 1;
            const tmdbPage2 = currentPage * 2;

            const [res1, res2] = await Promise.all([
                axios.get(BASE_URL, {
                    params: {
                        api_key: api_key,
                        page: tmdbPage1,
                        ...extraParams,
                    },
                }),
                axios.get(BASE_URL, {
                    params: {
                        api_key: api_key,
                        page: tmdbPage2,
                        ...extraParams,
                    },
                }),
            ]);

            const combined = [...res1.data.results, ...res2.data.results];
            setMovies(combined);

            
            setTotalPages(Math.min(Math.floor(res1.data.total_pages / 2), 20)); 
        } catch (error) {
            console.error('Failed to fetch popular movies:', error);
        }
    };

    fetchMovies();
  }, [currentPage, BASE_URL, JSON.stringify(extraParams)]);
  return (
    <div>
        {
            movies ? (
                <>
                    <div  className=' grid grid-cols-6 gap-10 justify-between   mt-9 mb-14 '>
                        {movies.map((movie, index) => (
                            // <div></div>
                            <MovieCard data = {movie} key={index} />
                        ))}
                    </div>
                    <PaginationButtons currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
                </>
            ):(
                <SpinnerLoader/>
            )
        }
    </div>
  )
}

export default GenreOfMovies
