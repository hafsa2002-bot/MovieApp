import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login'
import AddMovie from './AddMovie'
import YourMovieList from './YourMovieList'
import Filter from './Filter'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/addMovie' element={<AddMovie/>} />
        <Route path='/your_list' element={<YourMovieList/>} />
        <Route path="/filter" element={<Filter/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
