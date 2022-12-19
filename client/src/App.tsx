import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ViewPost from './pages/ViewPost'
import CreatePost from './pages/CreatePost'
import './App.css'

const App: React.FC = () => {
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
