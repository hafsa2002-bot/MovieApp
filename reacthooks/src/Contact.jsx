import React from 'react'

function Contact() {
  return (
    <div className='bg-[#0F0F0F] h-screen flex justify-center items-center pt-22 px-25'>
        {/* <div className='relative w-96 h-96 bg-[#1a1a1a] '>
          // top right 
          <div className='absolute -top-5 -right-5  border-white rounded-tr-xl border-r-3 border-t-3 w-24 h-24'></div>
          // bottom right
          <div className='absolute -bottom-5 -right-5 border-white rounded-br-xl border-r-3 border-b-3  w-24 h-24'></div>
          // left bottom 
          <div className='absolute -left-5 -bottom-5 border-white rounded-bl-xl  border-l-3 border-b-3 w-24 h-24'></div>
          // top left 
          <div className='absolute -top-5 -left-5 border-white rounded-tl-xl  border-l-3 border-t-3 w-24 h-24'></div>
          <h2 className='text-white font-bold text-4xl text-center relative bottom-5'> Contact form</h2>
          <form className='flex flex-col items-center'>
            <div>
              <label></label>
              <input/>
            </div>
            <div>
              <label></label>
              <input/>
            </div>
            <div>
              <label></label>
              <input/>
            </div>
            <button></button>
              <input className="w-10/12 bg-black text-white p-2 rounded mb-3" placeholder="Name" />
                <input className="w-10/12 bg-black text-white p-2 rounded mb-3" placeholder="Email" />
                <textarea className="w-10/12 bg-black text-white p-2 rounded mb-3" placeholder="Message" />
                <button className="w-10/12 bg-amber-400 text-black py-2 rounded hover:bg-amber-500">Submit</button>
          </form>
        </div> */}
        <div className=" bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-orange-400 p-[4px] rounded-lg w-1/2 h-[78vh] ">
          <div className="bg-[#1a1a1a] h-full w-full rounded-lg p-8">
            <h2 className="text-white font-bold text-4xl text-center ">Contact Form</h2>
            <p className='text-stone-400 mt-1 font-semibold text-center mb-10'>Write us a message</p>
            <form>
              {/* <input className="w-full bg-black text-white p-2 rounded mb-3" placeholder="Name" />
              <input className="w-full bg-black text-white p-2 rounded mb-3" placeholder="Email" />
              <textarea className="w-full bg-black text-white p-2 rounded mb-3" placeholder="Message" />
              <button className="w-full bg-amber-400 text-black py-2 rounded hover:bg-amber-500">Submit</button> */}
              <div className='flex flex-col gap-2'>
                <label className='text-white font-semibold text-sm '>Full name <span className=' text-red-400'>*</span></label>
                <input className="w-full  text-white py-2  mb-3 border-b outline-none" placeholder="John Doe" />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-white font-semibold text-sm '>Email <span className=' text-red-400'>*</span></label>
                <input className="w-full  text-white py-2 mb-3 border-b outline-none" placeholder="johnDoe@mail.com" />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-white font-semibold text-sm '>Message <span className=' text-red-400'>*</span></label>
                <textarea className="w-full  text-white py-2 mb-3 border-b outline-none" placeholder="Type your message" />
              </div>
              <button className="w-full bg-amber-400 text-black py-3 mt-4 rounded hover:bg-amber-500">Submit</button>
            </form>
          </div>
        </div>

    </div>
  )
}

export default Contact
