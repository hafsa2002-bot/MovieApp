import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react'

function PaginationButtons({currentPage, setCurrentPage, totalPages}) {
    const getVisiblePages = () => {
        const pagesToShow = 5;
        let start = Math.max(1, currentPage - 1);
        let end = Math.min(totalPages, start + pagesToShow - 1);

        // adjust start if we're near the end
        start = Math.max(1, end - pagesToShow + 1);

        const pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };
  return (
    <div className="flex  justify-center mt-4 space-x-3">
        <button
            onClick={() =>
                setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
            }
            className="lg:px-3 p-1 lg:py-1 cursor-pointer hover:text-stone-200 hover:border-stone-200 rounded-full bg-stone-900 text-stone-400 border border-stone-400 flex justify-center gap-2"
        >
            <ArrowLeft/> <span className='lg:flex hidden'>Prev</span>
        </button>

        {getVisiblePages().map((page) => (
            <button
                key={page}
                onClick={() => {
                    setCurrentPage(page)
                    window.scrollTo(0, 700)
                }}
                className={`px-3 py-1  cursor-pointer rounded-full  font-semibold ${
                    currentPage === page ? 'bg-white text-black border' : 'bg-stone-700 text-white hover:bg-stone-500'
                }`}
            >
                {page}
            </button>
        ))}

        <button
            onClick={() =>{
                setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
                window.scrollTo(0, 700)
            }}
            className="lg:px-3 p-1 lg:py-1  cursor-pointer rounded-full  flex justify-center gap-2 bg-stone-900 text-stone-400 hover:text-stone-200 hover:border-stone-200 border border-stone-400 "
        >
            <span className='lg:flex hidden'>Next</span> <ArrowRight/>
        </button>
    </div>
  )
}

export default PaginationButtons
