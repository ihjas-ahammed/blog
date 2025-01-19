import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './Home'
import AddBlog from './AddBlog'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <div style={{margin:"-10px"}}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBlog />} />
        </Routes>
      </div>
    </>
  )
}

export default App
