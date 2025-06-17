import React from 'react'

function AddNewMovie() {
  return (
    <div className='pt-24 bg-[#0f0f0f] px-10'>
        <p className='text-white text-3xl font-bold'>add new movie</p>
        <form className='text-white bg-stone-900 rounded-lg px-10 py-4 flex flex-col gap-2'>
          {/* title */}
          <div className='flex flex-col gap-1.5'>
            <label className='text-sm font-semibold'>Title</label>
            <input
              type="text" 
              name="" 
              id=""
              placeholder='Inception'
              className='bg-stone-600 rounded-lg py-1 px-2.5' 
            />
          </div>

          {/* release year / date picker */}
          <div className='flex flex-col gap-1.5'>
            <label htmlFor="">Release Year</label>
            <input 
              type="date" 
              name="" 
              id=""
              defaultValue='2010-07-16'
              className='' 
            />
          </div>

          {/* genres */}
          <div className='flex flex-col gap-1.5'>
            <label htmlFor="">Genre(s)</label>
            <select  multiple className='text-black'>
              <option>hello</option>
              <option>hi</option>
              <option>:)</option>
            </select>
          </div>

          {/* description */}
          <div className='flex flex-col gap-1.5'>
            <label htmlFor="">Description</label>
            <textarea
              placeholder='A skilled thief, who steals secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.'
              className=''
            >

            </textarea>
          </div>

          {/* duration */}
          <div className='flex flex-col gap-1.5'>
            <label htmlFor="">Duration</label>
            <input 
              type="time" 
              name="" 
              id=""
              className=''
              placeholder='01:20' 
            />
          </div>

          {/* photo or link */}
          <div className='flex flex-col gap-1.5'>
            <label htmlFor="">Poster URL / Image</label>
            <input 
              type="file" 
              name="" 
              id="" 
            />
          </div>

          {/* ptrailer url */}
          <div className='flex flex-col gap-1.5'>
            <label htmlFor="">Trailer URL</label>
            <input 
              type="url" 
              name="" 
              id="" 
              placeholder='https://www.youtube.com/watch?v=YoHD9XEInc0'
            />
          </div>
        </form>
    </div>
  )
}

export default AddNewMovie
