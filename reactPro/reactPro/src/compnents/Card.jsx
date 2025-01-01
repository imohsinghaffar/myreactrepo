import React, { useState } from 'react'
import Cart from './Cart'
import AddToCart from '../pages/AddToCart' 
// import '../App.css'

const Card = () => {
  const [data, setData] = useState(0)
  const [removecart, setRemoveCart] = useState(data)
  const [cartData, setCartData] = useState([])
  //Counter to increase the number of items in the cart
  function addToCart(){
    setData(data+1)
  }

  function AddItemToCart(elem)
  {
    return(
      <AddToCart name = {elem.name} brand = {elem.brand} releasedYear = {elem.releasedYear} description = {elem.description} price = {elem.price} image = {elem.image} specification = {elem.specification}/>
    )
  }
// API data or JSON data to be displayed
   let apiData =  [
        {
          "name": "Galaxy S23",
          "brand": "Samsung",
          "releasedYear": 2023,
          "description": "Flagship smartphone with advanced camera features.",
          "price": 1000,
          "image":"https://cdn.vox-cdn.com/thumbor/kVOeSJ_bmRntz4rS7Li40KXyPgg=/0x0:577x385/2000x1333/filters:focal(367x174:368x175)/cdn.vox-cdn.com/uploads/chorus_asset/file/24368313/Samsung_Galaxy_S23_1673991602_0_0.jpg",
          "specification": {
            "processor": "Snapdragon 8 Gen 2",
            "RAM": "8GB",
            "storage": "256GB",
            "battery": "3900mAh"
          }
        },
        {
          "name": "iPhone 14 Pro",
          "brand": "Apple",
          "releasedYear": 2022,
          "description": "High-performance smartphone with ProMotion display.",
          "price":1200,
          "image":"https://cdn.pixabay.com/photo/2020/11/22/11/53/iphone-12-5766344_1280.jpg",
          "specification": {
            "processor": "A16 Bionic",
            "RAM": "6GB",
            "storage": "128GB",
            "battery": "3200mAh"
          }
        },
        {
          "name": "PlayStation 5",
          "brand": "Sony",
          "releasedYear": 2020,
          "description": "Next-gen gaming console with ray tracing support.",
          "price":300,
          "image":"https://images.pexels.com/photos/3593986/pexels-photo-3593986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "specification": {
            "processor": "AMD Ryzen Zen 2",
            "RAM": "16GB GDDR6",
            "storage": "825GB SSD",
            "graphics": "RDNA 2 GPU"
          }
        },
        {
          "name": "MacBook Pro 16-inch",
          "brand": "Apple",
          "releasedYear": 2021,
          "description": "High-performance laptop with M1 Pro chip.",
          "price":1200,
          "image":"https://cdn.arstechnica.net/wp-content/uploads/2023/11/IMG_1415.jpeg",
          "specification": {
            "processor": "Apple M1 Pro",
            "RAM": "16GB",
            "storage": "512GB SSD",
            "display": "16-inch Retina"
          }
        },
        {
          "name": "Echo Dot (5th Gen)",
          "brand": "Amazon",
          "releasedYear": 2022,
          "description": "Smart speaker with Alexa voice assistant.",
          "price":50,
          "image":"https://www.connect.de/bilder/118681842/landscapex1200-c0/amazon-echo-spot-vs-echo-dot-mit-uhr.jpg",
          "specification": {
            "connectivity": "Wi-Fi, Bluetooth",
            "microphones": "4",
            "dimensions": "3.9\" x 3.9\" x 3.5\"",
            "weight": "0.8 lbs"
          }
        },
        {
          "name": "Galaxy Watch 5",
          "brand": "Samsung",
          "releasedYear": 2022,
          "description": "Smartwatch with advanced health tracking.",
          "price":150,
          "image":"https://im.chip.de/ii/1/2/6/7/0/1/4/3/2/samsung_galaxy_watch_5_6-a294603660d2d2e0.JPG?im=AspectCrop%2Csize%3D%2816%2C9%29%2Cgravity%3DCenter%3BResize%3D%28936%2C526%29%2Caspect%3Dfit%3BBackgroundColor%2Ccolor%3Dffffff&hash=74fde0055a167dafdbc8a483b250315a297510ca87dabf5f13616546c72ab0f3",
          "specification": {
            "display": "1.4-inch AMOLED",
            "battery": "410mAh",
            "connectivity": "Bluetooth, LTE",
            "waterResistance": "5 ATM"
          }
        },
        {
          "name": "Kindle Paperwhite",
          "brand": "Amazon",
          "releasedYear": 2021,
          "description": "E-reader with adjustable warm light.",
          "price":100,
          "image":"https://assets.aboutamazon.com/dims4/default/d451818/2147483647/strip/true/crop/2000x1127+0+436/resize/1320x744!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Faf%2F9c%2Fbb0bfe7748fcae538c35768e21c1%2Fkindle-event-fc-de.png",
          "specification": {
            "display": "6.8-inch E Ink",
            "storage": "8GB",
            "batteryLife": "10 weeks",
            "waterproof": "IPX8"
          }
        },
        {
          "name": "Surface Laptop 5",
          "brand": "Microsoft",
          "releasedYear": 2023,
          "description": "Lightweight laptop with touchscreen display.",
          "price":700,
          "image":"https://surface-world.de/wp-content/uploads/2022/10/microsoft-surface-laptop-5-for-business-seitlich.jpg",
          "specification": {
            "processor": "Intel Core i7",
            "RAM": "16GB",
            "storage": "512GB SSD",
            "display": "13.5-inch PixelSense"
          }
        },
        {
          "name": "Xperia 1 V",
          "brand": "Sony",
          "releasedYear": 2023,
          "description": "Smartphone with 4K OLED display.",
          "price":250,
          "image":"https://www.connect.de/bilder/118675412/landscapex1200-c0/69_Sony-Xperia.jpg",
          "specification": {
            "processor": "Snapdragon 8 Gen 2",
            "RAM": "12GB",
            "storage": "256GB",
            "battery": "5000mAh"
          }
        },
        {
          "name": "Pocco M3",
          "brand": "Xiomi",
          "releasedYear": 2023,
          "description": "Smartphone with SnapDragon chip.",
          "price":130,
          "image":"https://www.connect.de/bilder/118667796/landscapex1200-c0/Xiaomi-Poco-M3.jpg",
          "specification": {
            "processor": "Snapdragon 8 Gen 2",
            "RAM": "12GB",
            "storage": "256GB",
            "battery": "5000mAh"
          }
        }
      ]
      
  return (
    <>
    <div className='flex flex-wrap items-center justify-center gap-3 mb-7'>
    {apiData.map((elem, key)=>{
        // console.log(elem.name);
        return( 
        <div key={key}  className='card bg-gray-100'>
        <div>
        <div className=' mb-3 flex items-center justify-center'>
          <img className='h-52' src={elem.image} alt="image not found" />
        </div>
        <div className='pl-2'>
        <h1><b>{elem.name}</b></h1>
        <p className='mb-1'>{elem.brand}</p>
        <p className='mb-1'>{elem.description}</p>
        <p className='mb-3'>$<span className='text-2xl font-bold'>{elem.price}</span></p>
        </div>
        <div className='text-center flex items-center justify-center'>
        <button onClick={()=>{
          addToCart() 
          AddItemToCart()
        }} className='bg-blue-500 hover:bg-blue-800 rounded-sm text-white font-bold px-5 py-3 mt-3'>
          Add to Cart
        </button>
        </div>
      </div> 
      </div>
      
    )
  })
}
</div>
  <Cart addItemToCart={data}/>
    </>
  )
}

export default Card
