import React from 'react'

const Cards = (props) => {
  return (
    <> 
        {/* Card Code 
        <div className='flex flex-wrap justify-center'>
          <div className='bg-white inline-block border-solid border-2 w-48 text-center p-5 m-3 text-md shadow-zinc-950 rounded-lg shadow-lg'>
              <h1 className='mb-2 font-semibold'> UID: {props.userID}</h1>
              <h1 className='mb-2 font-semibold'>{props.user}</h1>
              <h1 className='mb-2 font-semibold'>{props.age} Years Old</h1>
              <h1 className='mb-2 font-semibold'><b>From:</b> {props.city}</h1>
              <h1 className='mb-2 font-semibold  overflow-auto cursor-pointer  text-blue-500'>{props.url}</h1>
              <button className='px-2 py-3 rounded-md bg-green-900 text-white'>Add Friend</button>
          </div>
        </div>
        */}

          {/* Image Card Code */}
          <div className='w-60 m-3 text-md shadow-zinc-950 shadow-lg'>
            <img src={props.img} alt="img not found"/>
            <h1 className='text-xl text-black font-serif font-semibold'>{props.author}</h1>
          </div>
        
    </>
  )
}

export default Cards
