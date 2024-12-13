import React, { useContext } from 'react'
import Nav from './Nav'
import { MyContext } from '../Helper/Context'
const Header = () => {
   const user =  useContext(MyContext)
  return (
    <div className='bg-green-500 w-auto p-3 text-white text-center text-xl'>
        {user}
    </div>
  )
}

export default Header
