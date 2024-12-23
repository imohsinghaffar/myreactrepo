import React from 'react'

const Header = () => {
  return (
    <>
    <nav className='flex items-center justify-between bg-lime-900  p-5 px-10 bg-fixed'>
        <h1 className='text-3xl text-emerald-300'>Blumens</h1>
            <ul className='flex items-center gap-14 text-xl text-white'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
    </nav>
    </>
  )
}

export default Header