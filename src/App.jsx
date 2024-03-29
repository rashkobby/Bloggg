import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import CreateBlog from './Components/CreateBlog'
import Footer from './Components/Footer'
import BlogDetails from './Components/BlogDetails'
import UpdateBlog from './Components/UpdateBlog'
import { Routes, Route } from 'react-router-dom'
import NotFound from './Components/NotFound'

function App() {

  return (
      <div className="app">
        <div className="navbar">
          <Navbar/>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addnew" element={<CreateBlog />} />
            <Route path="/blog/:_id" element={<BlogDetails />}/>   
            <Route path="/update/:id" element={<UpdateBlog />} /> 
            <Route path="*" element={<NotFound/>}/>    
          </Routes>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
  )
}

export default App
