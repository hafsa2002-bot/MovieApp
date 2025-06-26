import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { X } from 'lucide-react';

function Trailer({id, setShowTrailer, setUrl}) {
    const [trailerUrl, setTrailerUrl] = useState()
    const api_key = "8def2fa47c86a07209cafb1c6eb4409b"

    const getMovieTrailer = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`)
            .then(response => {
                const videos = response.data.results;

                // Try to find the "Official Trailer" on YouTube
                const trailer = videos.find(
                    (video) =>
                        video.type === "Trailer" &&
                        video.site === "YouTube" &&
                        video.official
                );

                // Fallback: get any YouTube trailer if official not found
                const fallbackTrailer = videos.find(
                    (video) => video.type === "Trailer" && video.site === "YouTube"
                );

                const selectedTrailer = trailer || fallbackTrailer;

                if (selectedTrailer) {
                    const trailerUrl = `https://www.youtube.com/watch?v=${selectedTrailer.key}`;
                    console.log("Trailer URL: ", trailerUrl);
                    // Optionally store it in state
                    setTrailerUrl(trailerUrl);
                    setUrl(trailerUrl);
                } else {
                    console.log("No trailer found.");
                }
            })
            .catch(error => {
                console.log("Error fetching trailer: ", error);
            });
    };

    useEffect(() => {
        getMovieTrailer()
    }, [])
  return (
    <div className='w-screen h-screen top-4  right-0 fixed z-50 flex justify-center items-center ' style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
        {/* once you click you have to show the trailer */}
        <div className=' bg-black/90 border border-stone-800  lg:w-[960px] w-11/12  rounded-md  flex flex-col justify-center gap-4 overflow-hidden'>
            <div className='text-white lg:px-7 px-3 pb-2 pt-4 flex justify-between w-full '>
                <h1 className='text-xl font-semibold'>Play Trailer</h1>
                <div
                    onClick={() => setShowTrailer(false)}
                    className='text-stone-400 hover:text-white cursor-pointer hover:bg-stone-900 w-8 flex justify-center items-center rounded-full h-8 '
                >
                    <X/>
                </div>
            </div>

            {trailerUrl && (
                <div className='w-full aspect-video lg:w-[960px] lg:h-[415px]'>
                    <iframe
                        // width="960"
                        // height="415"
                        src={trailerUrl.replace("watch?v=", "embed/")}
                        title="YouTube trailer"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className='w-full h-full'
                    ></iframe>
                </div>
            )}
        </div>
    </div>
  )
}

export default Trailer
