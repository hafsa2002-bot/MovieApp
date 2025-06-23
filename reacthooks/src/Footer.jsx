import { Clapperboard, Facebook, FacebookIcon, Instagram, LinkedinIcon, Twitter } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className=" text-white bg-stone-950  py-12 px-3 lg:px-28 flex lg:flex-col flex-col">
        <div className='flex justify-between'>
            <div className='flex  gap-2'>
                <Clapperboard size={40} />
                <img className='lg:w-26 w-18' src='/images/logo2.png' />
            </div>
            <div>
                <ul className='flex gap-4'>
                    <Link target="_blank"  to="https://www.instagram.com/hafssa_4748/?hl=fr" className='w-10 h-10 bg-stone-300 flex justify-center items-center rounded-full'> <Instagram color="black"/> </Link>
                    <Link className='w-10 h-10 bg-stone-300 flex justify-center items-center rounded-full'> <Twitter color="black" fill="black" strokeWidth={0}/> </Link>
                    <Link className='w-10 h-10 bg-stone-300 flex justify-center items-center rounded-full'> <Facebook color="black"  fill="black" strokeWidth={0}/> </Link>
                    <Link target="_blank" to="https://www.linkedin.com/in/barhoud-hafsa-1a8350328/" className='w-10 h-10 bg-stone-300 flex justify-center items-center rounded-full'> <LinkedinIcon color="black" fill="black" strokeWidth={0}/> </Link>
                </ul>
            </div>
        </div>
        <div className='flex lg:flex-row lg:flex-nowrap lg:justify-between flex-wrap lg:gap-8 gap-x-7 gap-y-4 lg:mt-7 mt-10 text-stone-300 h-full'>
            <div className='flex flex-col '>
                <h2 className='font-bold text-white mb-1 lg:text-xl uppercase'>Features</h2>
                <Link className='hover:underline pb-1'>Streaming</Link>
                <Link className='hover:underline pb-1'>TV Shows</Link>
                <Link className='hover:underline pb-1'>Recently Added</Link>
            </div>
            <div className='flex flex-col'>
                <h2 className='font-bold text-white  mb-1 lg:text-xl uppercase'>Company</h2>
                <Link className='hover:underline pb-1'>About US</Link>
                <Link className='hover:underline pb-1'>Our Team</Link>
            </div>
            <div className='flex flex-col'>
                <h2 className='font-bold text-white  mb-1 lg:text-xl uppercase'>Program</h2>
                <Link className='hover:underline pb-1'>VOD</Link>
                <Link className='hover:underline pb-1'>Articles</Link>
                <Link className='hover:underline pb-1'>New Realses</Link>
                <Link className='hover:underline pb-1'>Help</Link>
            </div>
            <div className='flex flex-col'>
                <h2 className='font-bold text-white  mb-1 lg:text-xl uppercase'>Legal</h2>
                <Link className='hover:underline pb-1'>Terms of Use</Link>
                <Link className='hover:underline pb-1'>Privacy Policy</Link>
                <Link className='hover:underline pb-1'>Legal Notices</Link>
            </div>
            <div className='flex flex-col '>
                <h2 className='font-bold text-white  mb-1 lg:text-xl uppercase'>Contact</h2>
                <Link onClick={() => window.scrollTo(0, 0)} className='hover:underline pb-1' to="/contact">Contact Us</Link>
            </div>
        </div>
        {/* <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
            <p className="text-sm">&copy; {new Date().getFullYear()} MovieApp. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
                <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                <a href="#" className="hover:text-gray-400">Terms of Service</a>
                <a href="#" className="hover:text-gray-400">Contact Us</a>
            </div>
            <div className="flex space-x-4 mt-2 md:mt-0">
                <a href="#" className="hover:text-gray-400">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="hover:text-gray-400">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-gray-400">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div> */}
    </footer>
  )
}

export default Footer
