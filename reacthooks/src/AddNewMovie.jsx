import React, { useState } from 'react'
import { ImageUp, Popcorn } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import { useContextFunction } from './Context';

function AddNewMovie() {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [selectedGenres, setSelectedGenres] = useState([])
  const [url, setUrl] = useState("")
  const [duration, setDuration] = useState("")
  const [photo, setPhoto] = useState("")
  const {addToYourMoviesList, moviesList} = useContextFunction()
  const genres = [
    'Action', 'Comedy', 'Drama', 'Romance', 'Horror',
    'Thriller', 'Science-Fiction', 'Fantasy', 'Animation', 'Documentary'
  ];

  const handleChange = (e) => {
    const {value, checked} = e.target;
    setSelectedGenres((prev) => 
      checked ? [...prev, value] : prev.filter((g) => g !== value)
    )
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "movieImage"); // set in Cloudinary settings

    const res = await fetch("https://api.cloudinary.com/v1_1/djwmy6vvx/image/upload", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    setPhoto(data.secure_url); // ← now use this URL to show the image
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const movie = {
      id: moviesList.length + 1,
      title: title,
      date : date ? date : null,
      genres : selectedGenres.length > 0 ? selectedGenres : [],
      url : url ? url : null,
      duration : duration ? duration : null,
      photo : photo || null,
    }

    addToYourMoviesList(movie)
    navigate("/my_list")
  }

  return (
    <div className='pt-24  bg-[#0f0f0f] px-10 flex flex-col items-center '>
        <p className='text-white text-3xl font-bold  mb-7 flex justify-center gap-2 items-center'>Add New Movie <Popcorn size={30} /> </p>
        <form  onSubmit={handleSubmit} className='w-9/12  text-white bg-stone-900 rounded-lg px-10 py-10 flex flex-col gap-4 mb-20 '>
          <div className='flex justify-between items-center gap-4'>
            {/* title */}
            <div className='flex flex-col gap-1.5 w-1/2'>
              <label className='text-sm font-semibold'>Title <span className='text-red-500 '>*</span></label>
              <input
                type="text" 
                name="title" 
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoComplete='off'
                placeholder='Inception'
                className='bg-stone-700 rounded-lg py-2 px-2.5' 
                required
              />
            </div>

            {/* release year / date picker */}
            <div className='flex flex-col gap-1.5 w-1/2'>
              <label htmlFor=""  className='text-sm font-semibold'>Release Year</label>
              <input 
                type="date" 
                name="date" 
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className='bg-stone-700 rounded-lg py-2 px-2' 
              />
            </div>
          </div>

          {/* genres */}
          <div className='flex flex-col gap-2 my-1.5'>
            <label htmlFor=""  className='text-sm font-semibold'>Genre(s)</label>
            <div className="grid grid-cols-5 gap-2 text-sm">
              {
                genres.map((genre) => (
                  <label key={genre} className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      name="genres" 
                      value={genre}
                      checked={selectedGenres.includes(genre)}
                      onChange={handleChange} 
                    />
                    {genre}
                  </label>
                ))
              }
            </div>
          </div>

          <div className='flex justify-between items-end gap-4'>
            {/* ptrailer url */}
            <div className='flex flex-col gap-1.5 w-1/2 '>
              <label htmlFor=""  className='text-sm font-semibold'>Trailer URL</label>
              <input 
                type="url" 
                name="url" 
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className='bg-stone-700 rounded-lg py-2 px-2' 
                placeholder='https://www.youtube.com/watch?v=YoHD9XEInc0'
              />
            </div>
            {/* duration */}
            <div className='flex flex-col gap-1.5 w-1/2 '>
              <label htmlFor=""  className='text-sm font-semibold'>Duration</label>
              <input 
                type="time" 
                name="duration" 
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className='bg-stone-700 rounded-lg py-2 px-2'
                defaultValue='00:00' 
              />
            </div>
          </div>
          <div className='flex items-center gap-4 mt-3'>
            {/* photo or link */}
            <div className='flex flex-col gap-1.5  w-1/2'>
              <label 
                htmlFor="photo"
                className='bg-stone-700 cursor-pointer rounded-lg py-2.5 px-2 font-semibold text-sm'
              >
                {
                  photo
                  ? <span></span>
                  : <span className=' flex items-center gap-1.5'>Upload Image <ImageUp size={19} /></span>
                }
              </label>
              <input 
                type="file" 
                name="photo" 
                id="photo"
                // value={photo}
                onChange={handleImageUpload}
                className='hidden' 
              />
            </div>
            <div className='w-1/2'></div>
          </div>

          <div className='w-full flex justify-end items-center gap-2.5 mt-3'>
            <div onClick={() => navigate(-1)} className='font-semibold text-sm cursor-pointer hover:bg-stone-700 py-2 px-2.5 rounded-lg '>Cancel</div>
            <button className='flex items-center  gap-1.5 text-black bg-yellow-400 text-sm py-2 px-2.5 rounded-lg font-semibold cursor-pointer hover:bg-yellow-500'>Add Movie</button>
          </div>
        </form>
    </div>
  )
}

export default AddNewMovie
