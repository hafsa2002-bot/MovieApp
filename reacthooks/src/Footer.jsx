import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 ">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
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
        </div>
    </footer>
  )
}

export default Footer
