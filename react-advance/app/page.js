"use client"
// import axios from 'axios'
// import React, { useState } from 'react'

// const page = () => {
//  const [username, setUsername] = useState("");  
//   return (
//     <>
//     <form action="input_form" className='flex justify-center items-center mt-5'>
//       <label htmlFor="input_form" className='text-lg font-serif'>Input:</label>
//       <input className='p-2 border-solid border-2 border-indigo-500' 
//       type="text"
//       value={username}
//       onChange={(e)=>{
//         console.log(e.target.value);
//       }}
//        />
//     </form>
//     </>
//   )
// }

// export default page

// import React from 'react'

// const page = () => {
//   return (
//     <>
//     <h1 className='font-bold text-xl'>This is Home Page</h1>
//     <a href="/Contact">Contact</a>
//     </>
//   )
// }

// export default page

// import React, { useEffect, useState } from 'react'

// const page = () => {
//   const[userData, setUserData] = useState([])
//   const getUser = async ()=>{
//     const{ data } = await axios.get("https://jsonplaceholder.typicode.com/users");
//     setUserData(data)
//     // console.log(userData);
//   }
//   useEffect(()=>{
//     getUser()
//   },[userData])
  
//   return (
//     <>
//     <button onClick={getUser} className='bg-green-800 text-lg text-white font-bold px-4 py-3 mx-10 my-10'>Get Data</button>
//     <div className='mx-9 my-9 bg-blue-300 px-5 py-10'>
//       <ul>
//       {userData.map((e, i)=>{
//         return <li key={i} className='mx-10'>{e.username}----<a href={`/${e.id}`}>Visit new Page</a></li>
//       })}
//       </ul>
//     </div>
//     </>
//   )
// }

// export default page

// import Header from './Components/Header'
// import React, { useState } from 'react'

// const page = () => {
//   const[num, setNum] = useState(10)
//   return (
//     <div>
//       This is homepage.
//       <Header num={num}/>
//     </div>
//   )
// }

// export default page
// import React, { use, useContext } from 'react'
// import { MyContext } from './Helper/Context'
// import Header from './Components/Header'

// const page = () => {
//   const user = useContext(MyContext); 
//   return (
//     <div>
//       {user}
//       <Header />
//     </div>
//   )
// }

// export default page


// import React, { useState } from 'react'
// import "./globals.css";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const page = () => {
//   const notify = () => {
//     toast.success('Login Successfully!', {
//       position: "top-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//       });
    
//   }
//   return (
//     <>
//     <button onClick={notify}>Login</button>
//     <ToastContainer />
//     </>
//   )
// }

// export default page

import React from 'react'
import "./globals.css";

const page = () => {
  return (
    <>
    {/* <div className='main'>Main</div> */}
    <h2 className='text-white bg-gray-950 w-auto h-auto p-10 mx-5 my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Quos nemo eum quam delectus ad tempore numquam voluptate libero 
      autem magnam! Id ipsum ullam accusantium 
      ipsam asperiores recusandae voluptatum perferendis ea!</h2>
    </>
  )
}

export default page

