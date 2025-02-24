import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
// import Nav from './Nav';

function AddMovie() {
    const [movieName, setMovieName] = useState("");
    const [movieDate, setMovieDate] = useState("");
    const [moviePhoto, setMoviePhoto] = useState(null);
    const [trailer, setTrailer] = useState("")
    const navigate = useNavigate()

    const handleFileChange = (event) => {
        setMoviePhoto(event.target.files[0])
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("movieName", movieName);
        formData.append("movieDate", movieDate);
        formData.append("moviePhoto", moviePhoto);
        formData.append("trailer", trailer)

        try{
            const response = await fetch("http://localhost:5000/addMovie", {
                method: "POST",
                body: formData,
            })
            if(!response.ok){
                throw new Error("failed to add movie")
            }
            const result = await response.json()
            console.log("Movie added: ", result)

            navigate("/movies/your_list")

        } catch(error) {
            console.log("ErROR : ", error)
        }
    }
  return (
    <>
        
        <h1 className='mt-20 text-2xl font-semibold mb-5 text-center'>Add a new movie to your list</h1>
        <form onSubmit={handleSubmit} method='post' className='border w-1/3 flex flex-col px-5 bg-blue-950 rounded-xl py-3 text-white text-lg m-auto gap-4'>
            <label>Movie Name: </label>
            <input 
                className='border   rounded-lg px-3 py-1 ' 
                type='text' 
                id='movieName' 
                name='movieName' 
                value={movieName} 
                onChange={(e) => setMovieName(e.target.value)} />
            <label>Release date: </label>
            <input 
                className='border rounded-lg px-3 py-1 '  
                type='date' 
                id='movieDate' 
                name='movieDate'
                value={movieDate} 
                onChange={(e) => setMovieDate(e.target.value)} />
            <label>Movie Photo:</label>
            <input  
                className="border rounded-lg px-3 py-1 "  
                type='file' 
                name='moviePhoto' 
                accept='image/*' 
                onChange={handleFileChange} />
            <label>Movie Trailer(Youtube Link): </label>
            <input 
                className='border rounded-lg px-3 py-1 ' 
                type='text' 
                name='trailer' 
                value={trailer} 
                onChange={(e) => setTrailer(e.target.value)}  />
            <button className='border px-3 py-2 rounded-lg bg-white text-blue-950 text-xl font-semibold mt-6'>Add Movie </button>
        </form>
    </>
  )
}

export default AddMovie
