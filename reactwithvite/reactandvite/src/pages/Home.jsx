import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import { Container } from '@mui/material'
import Box from '@mui/material/Box';
import Cards from '../components/Cards'   

const Home = () => {
    const roseData = [
    {
      "name": "Rose",
      "description": "Known for its beauty and fragrance, the rose symbolizes love and elegance. It comes in many colors, each with its own meaning. Roses are widely used in perfumes and decorations.",
      "discoveredDate": "1753",
      "discoveredBy": "Carl Linnaeus",
      "image": "https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg"
    },
    {
      "name": "Tulip",
      "description": "Tulips are vibrant spring flowers that bloom in various colors. They represent perfect love and elegance. Originating from Central Asia, tulips became a cultural phenomenon in the Netherlands.",
      "discoveredDate": "1594",
      "discoveredBy": "Carolus Clusius",
      "image": "https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg"
    },
    {
      "name": "Orchid",
      "description": "Orchids are exotic flowers known for their symmetry and vibrant colors. They symbolize beauty, love, and strength. Orchids grow in diverse habitats, from tropical jungles to deserts.",
      "discoveredDate": "1750s",
      "discoveredBy": "William Bartram",
      "image": "https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg"
    },
    {
      "name": "Sunflower",
      "description": "Sunflowers are bright, cheerful flowers that follow the sun's movement. They symbolize adoration, loyalty, and longevity. They are native to North America.",
      "discoveredDate": "16th century",
      "discoveredBy": "Native American Tribes",
      "image": "https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg"
    },
    {
      "name": "Lotus",
      "description": "The lotus is a sacred flower symbolizing purity and enlightenment. It grows in murky waters but emerges clean and beautiful, reflecting resilience and spiritual growth.",
      "discoveredDate": "5th century BC",
      "discoveredBy": "Ancient Indian Civilization",
      "image": "https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg"
    },
    {
      "name": "Marigold",
      "description": "Marigolds are bright orange or yellow flowers that symbolize passion and creativity. They are often used in festivals and ceremonies and are native to the Americas.",
      "discoveredDate": "16th century",
      "discoveredBy": "Aztecs",
      "image": "https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg"
    }
  ]
  return (
    <>
    <div className="flex items-center gap-3">
      <FontAwesomeIcon icon={faRightLong} className="ml-3 w-8" /> Home
    </div>
    <h1 className="px-3 text-center text-3xl font-bold text-gray-800">All Flowers</h1>
    <div className="flex items-center justify-start flex-wrap">
      {roseData.map((elem)=>{
        return (
          <Cards key={elem.name} image={elem.image} name={elem.name} desc={elem.description} dd={elem.discoveredDate} db={elem.discoveredBy}/>
        )
      })}
    </div>
    </>
  )
}

export default Home
