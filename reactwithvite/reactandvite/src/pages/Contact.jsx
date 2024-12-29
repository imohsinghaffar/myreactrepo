import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import Button from '@mui/material/Button';

const Contact = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <FontAwesomeIcon icon={faRightLong} className="ml-3 w-8" /> Contact
      </div>
    </>
  )
}

export default Contact
