// import React from 'react'
"use client"
import Header from '@/Components/Header'
// const page = () => {
//   return (
//     <>
//     <Header/>
//     </>
//   )
// }

// export default page
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
const page = () => {
  const[Images, setImages] = useState([]);
  useEffect(()=>{
    getImages()
  },[Images])
  const getImages = async ()=>{
    try{
      const response = await axios.get("https://picsum.photos/v2/list");
      let fetchImages = response.data;
      setImages(fetchImages);
      console.log(Images);
  }
  catch(error){
    console.error("There is something wrong");
  }
  }
  return (
    <>
    <div className='flex justify-center items-center'>
      <button onClick = {getImages} className=' px-5 py-3 text-white text-lg mt-3
       bg-slate-600 font-mono'>Update Image</button>
    </div>
    <div className='p-10'>
      {Images.map((elem, i)=>{
        return <img className= ' inline-block w-96 text-center mx-2 my-5' key={i} src={elem.download_url} alt='img'/>
      })}
    </div>
      </>
  )
}

export default page
