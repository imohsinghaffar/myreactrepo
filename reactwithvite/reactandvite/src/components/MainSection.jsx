import React from 'react'

const MainSection = () => {
  return (
    <>
        <section className='flex p-16 bg-black items-center gap-5 justify-between min-h-screen bg-no-repeat bg-cover bg-opacity-10' style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg') ", backgroundSize: 'cover', backgroundPosition: 'center',opacity: '0.5'}}>
            <div className='w-1/2 text-white text-2xl font-bold'>
            <p>"Blumen" is the German word for flowers or blooms. Flowers are the colorful and 
                often fragrant parts of plants, playing a key role in nature by attracting 
                insects like bees and butterflies for pollination. They symbolize beauty, 
                love, and life, and are widely used for decorative or symbolic purposes, 
                such as celebrations, gardening, or as gifts.</p>
            </div>
            <div></div>
            
        </section>
    </>
  )
}

export default MainSection
