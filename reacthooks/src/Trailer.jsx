import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Trailer({id}) {
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
    <div className='w-screen h-screen  top-0 right-0 fixed flex justify-center items-center z-50 ' style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        {/* once you click you have to show the trailer */}
        <div className=' bg-black/90 border border-white w-9/12  px-16 py-6 rounded-md shadow-md flex flex-col items-center gap-5'>
            {trailerUrl && (
                <iframe
                    width="560"
                    height="315"
                    src={trailerUrl.replace("watch?v=", "embed/")}
                    title="YouTube trailer"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    </div>
  )
}

export default Trailer
