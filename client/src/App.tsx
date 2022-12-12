import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreatePost from './pages/CreateReview'
import ViewPost from './pages/ViewReview'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/viewpost' element={<ViewPost />}></Route>
        <Route path='/createpost' element={<CreatePost />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
