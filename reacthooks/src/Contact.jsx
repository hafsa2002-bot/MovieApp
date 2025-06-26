import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { Check } from 'lucide-react'

function Contact() {
  const [message, setMessage] = useState(false)
  const navigate = useNavigate()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_fxfe5fd', 'template_wpiznyo', e.target, 'Lcg2d9RcX-okS49vi')
      .then((result) => {
          setMessage(true)
          setTimeout(() => setMessage(false), 2000)
          console.log('Email successfully sent:', result.text);
          setTimeout(() => navigate('/'), 2500) 
          window.scrollTo(0, 0)
      })
      .catch((error) => {
          console.error('Error sending email:', error.text);
          // alert("Failed to send message. Please try again.");
      });
  }
  return (
    <div className='bg-[#0F0F0F] h-screen flex justify-center items-center pt-22 px-25'>
        <div className=" bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-orange-400 p-[4px] rounded-lg w-1/2 h-[78vh] ">
          <div className="bg-[#1a1a1a] h-full w-full rounded-lg p-8">
            <h2 className="text-white font-bold text-4xl text-center ">Contact Form</h2>
            <p className='text-stone-400 mt-1 font-semibold text-center mb-10'>Write us a message</p>
            <form onSubmit={sendEmail}>
              <div className='flex flex-col gap-2'>
                <label className='text-white font-semibold text-sm '>Full name <span className=' text-red-400'>*</span></label>
                <input className="w-full  text-white py-2  mb-3 border-b outline-none" placeholder="John Doe"  name="name" />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-white font-semibold text-sm '>Email <span className=' text-red-400'>*</span></label>
                <input className="w-full  text-white py-2 mb-3 border-b outline-none" placeholder="johnDoe@mail.com" name='email' />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-white font-semibold text-sm '>Message <span className=' text-red-400'>*</span></label>
                <textarea className="w-full  text-white py-2 mb-3 border-b outline-none" placeholder="Type your message" name="message" id="message" />
              </div>
              <button className="w-full bg-amber-400 cursor-pointer text-black py-3 mt-4 rounded hover:bg-amber-500">Submit</button>
            </form>
          </div>
        </div>
        {message && (
          <div className='bg-stone-800 shadow text-stone-300 fixed z-50 top-24 right-5 border border-stone-300 rounded-lg flex justify-center items-center gap-2 p-3'>
            <div className='w-5 h-5 bg-green-700 rounded-full flex items-center justify-center'>
              <Check className='text-white' size={17} />
            </div>
            <p>Message sent successfully!</p>
          </div>
        )}

    </div>
  )
}

export default Contact
