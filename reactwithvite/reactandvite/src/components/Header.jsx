import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <nav className='flex items-center justify-between text-center bg-black text-white  p-5 bg-fixed'>
        <h1 className='text-3xl text-emerald-300'>Blumens</h1>
            {/* <ul className='flex items-center gap-14 text-xl text-white'>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Contact</a></li>
            </ul> */}
          <div className='flex items-center gap-14 text-xl text-white'>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/contact'}>Contact</Link>
          </div>
    </nav>
    </>
  )
}

export default Header