import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {ImageUp, Link, Clapperboard} from 'lucide-react'
// import Nav from './Nav';

function AddMovie() {
    const [movieName, setMovieName] = useState("");
    const [movieDate, setMovieDate] = useState("");
    const [moviePhoto, setMoviePhoto] = useState(null);
    const [trailer, setTrailer] = useState("")
    const backendUrl = 'https://nodejs-production-b438.up.railway.app';

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
            const response = await fetch(`${backendUrl}/addMovie`, {
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
    <div className="mb-10 h-[430px] border border-blue-950 text-blue-950 w-10/12 m-auto mt-8 bg-[url('https://i.pinimg.com/736x/dc/9e/49/dc9e49b0f1eedf7a1907283d989d9c40.jpg')] bg-cover bg-center flex justify-start relative">
    {/* <div className="absolute inset-0 bg-black mix-blend-multiply"></div> */}
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <form onSubmit={handleSubmit} method='post' className='relative shadow-2xl w-1/2 flex flex-col pr-20 pl-10 bg-white  py-3  text-lg  gap-6'>
            <h1 className='text-3xl font-semibold'>Add a new Movie</h1>
            <div className='flex border-b items-center'>
                <Clapperboard/>
                <input 
                    className=' px-2 py-1 outline-none' 
                    type='text' 
                    id='movieName' 
                    name='movieName' 
                    placeholder='Movie Name'
                    value={movieName} 
                    onChange={(e) => setMovieName(e.target.value)} />
            </div>
            <div>
                <label className='font-semibold'>Release date: </label>
                <input 
                    className='border-b w-8/12  px-2 ml-8 '  
                    type='date' 
                    id='movieDate' 
                    name='movieDate'
                    value={movieDate} 
                    onChange={(e) => setMovieDate(e.target.value)} />
            </div>
            <div className='flex flex-col'>
                <label for="moviePhoto" className='border rounded-lg  px-2 py-1 bg-gray-300 flex items-center gap-4 text-center cursor-pointer'>Choose a photo  <ImageUp/></label>
                <input  
                    className="hidden"  
                    type='file' 
                    name='moviePhoto' 
                    id='moviePhoto' 
                    accept='image/*'
                    onChange={handleFileChange} />
            </div>
            <div className='flex border-b items-center'>
                <Link size={20} />
                <input 
                    className=' px-2 py-1 outline-0' 
                    type='text' 
                    name='trailer'
                    placeholder='Movie Trailer' 
                    value={trailer} 
                    onChange={(e) => setTrailer(e.target.value)}  />
            </div>
            <button className='hover:bg-blue-900 hover:text-white border px-3 py-2 rounded-lg bg-white text-blue-950 text-xl font-semibold mt-6'>Add Movie </button>
        </form>
    </div>
        
    </>
  )
}

export default AddMovie
