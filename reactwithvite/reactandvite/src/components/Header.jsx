import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <nav className='flex items-center gap-20 px-8 justify-between text-center bg-black text-white  p-5 bg-fixed'>
        <h1 className='text-3xl font-bold text-white'><Link to={'/'}>Flower</Link></h1>
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