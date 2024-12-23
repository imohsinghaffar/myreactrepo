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

// export default App
import React from 'react'
import Header from './components/Header'
import Footer from './components/footer'
import Main from './components/Main'
import MainSection from './components/MainSection'
const App = () => {
  return (
    <>
      <Header />
      <MainSection/>
      <Main />
      <Footer />
    </>
  )
}

export default App