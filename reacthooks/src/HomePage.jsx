import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import MovieList from './MovieList'
// import Nav from './Nav'

function HomePage() {
   
  return (
    <>
    {/* <Nav/> */}
    <MovieList />
    </>
  )
}

export default HomePage
