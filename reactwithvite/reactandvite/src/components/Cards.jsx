import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Cards = (props) => {

  return (
    <> 
      <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 m-4 flex-grow">
        <div className="px-6 py-4">
          <div className="font-bold text-center text-xl mb-2 text-gray-800 flex items-center">
            <FontAwesomeIcon icon={faCheck} className="mr-2 text-gray-800" />
            {props.name}
          </div>
          <img className='rounded-md' src={props.image} alt="img not found" />
          <p className="text-gray-700 text-base mb-4">{props.desc}</p>
          <p className="text-gray-600 text-sm">Discovered in: <span className="font-semibold">{props.dd}</span></p>
          <p className="text-gray-600 text-sm">Discovered by: <span className="font-semibold">{props.db}</span></p>
        </div>
      </div>
    </>
  )
}

export default Cards
