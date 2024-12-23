import React from 'react'

const Footer = () => {
  return (
    <div className='flex text-xl items-center w-full justify-center absolute bottom-auto bg-gray-800 text-white p-5 px-10 text-center'>
      &copy; {new Date().getFullYear()} All rights are reserved.
    </div>
  )
}

export default Footer
