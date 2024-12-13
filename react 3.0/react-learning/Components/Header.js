import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
const Header = () => {
  return (
    <>
    <div className='h-16 bg-teal-500 flex text-white text-xl  text-center justify-between items-center px-5'>
      <Logo />
      <div className='flex gap-8'>
      <Link className='px-3 py-2 bg-black rounded-lg ' href='/Home'>Home</Link>
      <Link className='px-3 py-2 bg-black rounded-lg ' href='/Products'>Products</Link>
      <Link className='px-3 py-2 bg-black rounded-lg ' href='/Courses'>Courses</Link>
      </div>
    </div>
    </>
  )
}

export default Header
