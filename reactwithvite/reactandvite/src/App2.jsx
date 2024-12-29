import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'

const App2 = () => {
  return (
    <>
    <Header/>
    <div className='text-3xl px-8 font-mono top-1/2 left-1/2 w-auto h-auto'>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       </Routes>
    </div>
    </>
  )
}

export default App2
