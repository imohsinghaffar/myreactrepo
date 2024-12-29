import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faRightLong} className="ml-3 w-8" /> About
    </div>
  )
}

export default About
