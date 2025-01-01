import React from 'react'
import Navbar from '../compnents/Navbar'
import '../App.css'

const AddToCart = (props) => {
  
  return (
    <>
    <Navbar/>
    <div className='card bg-gray-100'>
        <div>
        <div className=' mb-3 flex items-center justify-center'>
          <img className='h-52' src={props.image} alt="image not found" />
        </div>
        <div className='pl-2'>
        <h1><b>{console.log(props.name)
        }</b></h1>
        <p className='mb-1'>{props.brand}</p>
        <p className='mb-1'>{props.description}</p>
        <p className='mb-3'>$<span className='text-2xl font-bold'>{props.price}</span></p>
        </div>
        <div className='text-center flex items-center justify-center'>
        <button className='bg-blue-500 hover:bg-blue-800 rounded-sm text-white font-bold px-5 py-3 mt-3'>
          Proceed to Checkout
        </button>
        </div>
        </div> 
      </div>
    </>
  )
}

export default AddToCart
