import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <>
      <nav className='bg-neutral-800 text-white w-full flex items-center p-6 justify-between'>
        <div>
            <h1 className='font-bold text-3xl italic font-Poppins'><Link to={'/'}>TECHENT</Link></h1>
        </div>
        <div className='flex items-center justify-around font-semibold gap-14 text-xl'>
            <Link to={'/'}>Home</Link>
            <Link to={'/products'}>Products</Link>
            <Link to={'/contact'}>Contact Us</Link>
            <Link to={'/aboutus'}>About Us</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
