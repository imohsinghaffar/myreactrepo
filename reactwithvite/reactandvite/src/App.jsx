// import React, { useState } from 'react'
// import './index.css'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const App = () => {
//   // const [user, setuser] = useState("?")
//   // function changeUser()
//   // {
//   //   setuser("Mohsin");
//   // }

//   const [username, setUserName] = useState('')
                            // Two Way Binding with toastify notification
//         let notify = () => toast.success('Form Submitted Successfully!', {
//         position: "bottom-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         });

//   const submitHandler = (e)=>{
//     e.preventDefault()
//     setUserName('')

//   }
//   return (
//     <>
//       {/* <h1 className='text-center text-xl font-bold'>{user} is LoggedIn</h1>
//       <button className='px-8 py-4 text-xl bg-slate-900 mx-4 text-center text-white rounded-md'
//       onClick={changeUser}>Click</button> */}

//       <form onSubmit={(e)=>{
//         submitHandler(e)
//       }}>
//         <div className='text-center'>
//         <input
//         value={username}
//         onChange={(e)=>{
//           setUserName(e.target.value)
//         }
//       }
//         className='ml-5 mr-1 mt-10 px-5 py-3 rounded-md border-solid border-2 border-black '
//         type="text"
//         placeholder='Enter your Input'
//         />
//         <button
//         onClick={notify}
//         className='bg-green-600 px-5 py-3 text-lg rounded-md text-white'
//         >Submit</button>
//         </div>
//       </form>
//       <ToastContainer />
//     </>
//   )
  // }
import React, { useEffect } from "react";
import { useState } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
// import Main from "./components/Main";
// import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);

  // USERS DATA
  // let users = [
  //   {
  //     "name": "Alice Johnson",
  //     "age": 29,
  //     "address": "123 Main Street, New York, NY",
  //     "profession": "Software Engineer",
  //     "company": "TechCorp Inc."
  //   },
  //   {
  //     "name": "Brian Smith",
  //     "age": 35,
  //     "address": "456 Oak Avenue, San Francisco, CA",
  //     "profession": "Data Analyst",
  //     "company": "Data Solutions LLC"
  //   },
  //   {
  //     "name": "Catherine Lee",
  //     "age": 42,
  //     "address": "789 Pine Lane, Austin, TX",
  //     "profession": "Graphic Designer",
  //     "company": "DesignWorks Studio"
  //   },
  //   {
  //     "name": "David Martinez",
  //     "age": 31,
  //     "address": "101 Elm Drive, Seattle, WA",
  //     "profession": "Product Manager",
  //     "company": "InnovateTech"
  //   },
  //   {
  //     "name": "Emma Brown",
  //     "age": 26,
  //     "address": "202 Maple Street, Chicago, IL",
  //     "profession": "Marketing Specialist",
  //     "company": "CreativeBuzz Marketing"
  //   }
  // ]

  // let getData = async () => {
  //   let reponse = await axios.get("https://picsum.photos/v2/list");
  //   setData(reponse.data);  
  // };

  // useEffect(()=>{
  //   getData()
  // },[])
  // return (
  //   <>
  //     {data.map((elem, idx)=>{
  //       return <div  
  //         key={idx}> 
  //         <Cards img = {elem.download_url} author = {elem.author} />
  //       </div>  
  //     })}
  //   </>
  // );
  return (
    <>
      {/* <Header /> */}
      {/* <Main /> */}
    </>
  );
  };
 
export default App;
