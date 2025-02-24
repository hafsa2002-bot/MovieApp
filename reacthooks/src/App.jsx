import React from 'react'
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login'
import AddMovie from './movies/AddMovie'
import YourMovieList from './movies/YourMovieList'
import Filter from './Filter'
import Nav from './Nav'
import YourMovies from './movies/YourMovies'
import Favorites from './movies/Favorites'
import Footer from './Footer'
import MovieDetails from './movies/MovieDetails'

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/movies' element={<YourMovies/>}>
          <Route path='your_list' element={<YourMovieList/>} />
          <Route path=':id' element={<MovieDetails/>} />
          <Route path='addMovie' element={<AddMovie/>} />
          <Route path='favorites' element={<Favorites/>} />
        </Route>
        <Route path="/filter" element={<Filter/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
