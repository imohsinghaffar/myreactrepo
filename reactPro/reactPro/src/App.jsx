import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Products from './pages/Products'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import AddToCart from './pages/AddToCart'


function App() {
  
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/addtocart" element={<AddToCart />} />
    </Routes>
    </>
  )
}

export default App
