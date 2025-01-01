import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import React from 'react'
import '../App.css'

const Cart = ({addItemToCart, itemData}) => {

  return (
    <>
        <Link to={'/addtocart'}>
        <div className='fixed bottom-4 bg-neutral-800 text-white right-3 text-center w-20 h-20 m-2 p-2 rounded-full'>
        <h1 className='font-bold text-lg'>{addItemToCart}</h1>
        <FontAwesomeIcon icon={faCartArrowDown} className=' text-4xl text-white cursor-pointer' />
        </div>
        </Link>
    </>
  )
}

export default Cart
